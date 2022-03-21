import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
const About = () => {
  return (
    <>
    <div className='about'>
      <div className="card-group">
          <div className="col" id='leftcol'>
            <h2>О нас</h2>
            <p>
                Наша студия дизайна работает уже 10 лет, 
                и за это время получила множество положительных отзывов и наград, 
                включая звание "Лидер рынка".
            </p>
            <br />
            <p>
                В нашей команде работают настоящие профессионалы с высшим архитектурным образованием.
            </p>

          </div>
          <div className="col" id='rightcol'>
            
          </div>
        </div>
      
    </div>
    </>
  );
};

export default About;