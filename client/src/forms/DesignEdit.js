import React, { useState, useEffect } from "react";
import axios from "axios";
import Authentification from '../service/authentification';
import { useNavigate } from "react-router-dom"
import { Card, Col, Row, Button } from "react-bootstrap";
import '../App.css';

const DesignEdit=()=> {
    const API_URL = "http://localhost:8080/designs";
    
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
            const user = await Authentification.getCurrentUser()
            if (!user) {
                navigate("/")
                window.location.reload()
            } else {
                const res = await axios.get(API_URL+`/${user.id_user}`);
                setData(res.data.design)
            }
        }
        fetchData()
    }, [navigate])


    const deleteDesign = async (id) => {
        return await axios.post(API_URL+`/${id}/delete`).then(() => {
            window.location.reload()
        })
    }
    
    return (
        <>
        <div className="background">
            <Row md={2}>
                {data && data.map((element) => {
                    return(
                        <Col key={element.id} className="designcardcolumn">
                            
                            <Card className="designcard">
                                <Card.Header>
                                    <Card.Img variant="top" src={API_URL+`/file/${element.photoFileId}`} />
                                </Card.Header>

                                <Card.Body>
                                    <Card.Text>
                                        {element.name}
                                    </Card.Text>
                                </Card.Body> 

                                <Card.Footer>
                                    <Button variant="outline-danger" onClick={() => deleteDesign(element.id)}>Удалить</Button>
                                </Card.Footer>     
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>


        </>
    );
}

export default DesignEdit;
