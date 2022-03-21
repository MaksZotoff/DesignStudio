const express = require("express");
const fileUploads = require("express-fileupload");
const uuid = require("uuid").v4;
const db = require("../config/database");
const path = require("path")

const router = express.Router();

router.get("/all", (req, res) => {
    let designs = db.getData('/designs');
    res.send({
        success: true,
        design: designs,
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    let designs = db.getData('/designs');
    let design = designs.filter(element => element.id_user === id);
    if (design) {
        res.send({
            success: true,
            design: designs,
        })
    } else {
        res.status(404).send({
            success: false,
            code: "Ничего не найдено"
        })
    }
})

router.get("/file/:fileID", (req, res) => {
    const fileId = req.params.fileID;
    let files = db.getData("/files");
    const file = files[fileId];
    if (!file) {
        return res.sendStatus(404);
    }
    res.sendFile(file.filePath);
})


router.post("/add", (req, res) => {
    const { id_user, name, photoFileId } = req.body;

    if (!name || !photoFileId) {
        return res.send({ success: false })
    }
    let files = db.getData("/files");
    let design = db.getData("/designs");
   
    const status = "В обработке"
    
    if (!files[photoFileId]) {
        res.status(404).send({ success: false })
    }
    design.push({
        id: uuid(),
        id_user,
        name,
        status,
        photoFileId
    });

    db.push("/designs", design);
    res.send({ success: true })
})

router.post("/upload", fileUploads({ tempFileDir: true }), (req, res) => {
    if (!req.files.file) {
        return res.send({
            success: false,
            code: "Ошибка"
        });
    };

    const fileId = uuid();
    const filePath = path.join(
        __dirname,
        "..",
        "uploads",
        fileId
    );

    req.files.file.mv(filePath);
    const mimetype = req.files.file.mimetype;
    let files = db.getData("/files");
    files[fileId] = {
        mimetype,
        filePath
    };
    res.send({
        success: true,
        fileId
    });
})


router.post("/:id/delete", (req, res) => {
    const id = req.params.id;
    let designs = db.getData('/designs');
    designs = designs.filter((element) => element.id !== id);
    db.push("/designs", designs);
    res.send({ success: true })
})


module.exports = router;