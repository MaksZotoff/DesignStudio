import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import Authentification from '../service/authentification';
import axios from "axios"

const DesignAdd=()=> {
    const [file, setPhoto] = useState(null)
    const [name, setName] = useState("")


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    const onServer = async () => {
        const user = await Authentification.getCurrentUser()
        const id_user = user.id_user;

        let formData = new FormData();
        formData.append("file", file)
                
        const result = await axios.post("http://localhost:8080/designs/upload", formData )        
        const photoFileId = result.data.fileId;

        await axios.post("http://localhost:8080/designs/add", {
            id_user,
            name,
            photoFileId
        }).then(() => {
            //window.location.reload()
            console.log('success')
        })
    }

    return (
        <>
        <div className="background">
        <div className="designadd">
        <h1>Отправить свой дизайн</h1>

        <div className="designform">
                <Form onSubmit={handleSubmit}>

                    <Form.Group >
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            aria-label="With textarea"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formFile" className="m-3">
                        <Form.Label>Планировка/Идея</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={e => setPhoto(e.target.files[0])}/>
                    </Form.Group>

                    <Button
                        className="m-3"
                        variant="outline-primary"
                        type="button"
                        onClick={() => onServer()}>
                        Добавить
                    </Button>
                </Form>
        </div>

        </div>
        </div>
        </>
    )
}
export default DesignAdd;