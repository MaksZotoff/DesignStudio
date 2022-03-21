import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const WhyUI = (props) => {
    return(
        <div className="card text-center" >
            <img src={props.picture} className="card-img" alt="whywant" />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className='card-text'>{props.text}</p>

            </div>
        </div>
    );
}
export default WhyUI;