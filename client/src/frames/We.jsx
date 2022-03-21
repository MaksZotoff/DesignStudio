import React from 'react';

//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Fi from './images/Fi.png'
import Tw from './images/Tw.png'
import Th from './images/Th.png'
import WhyUI from './WhyUI';

import 'bootstrap/dist/css/bootstrap.css';

const We = () => {
  return (
    <div id='we' className='we'>
          <h1 className='text-center'>Почему выбирают нас?</h1>

          <div className="card-group">

            <WhyUI picture={Fi} title='Работа по договору и встречи в уютном офисе' text={`
                Мы всегда готовы встретить вас в
                нашем офисе и обсудить детали за
                чашечкой кофе
              `}
            />

            <WhyUI picture={Tw} title='Авторский надзор - БОНУС при заказе полного дизайн-проекта' text={`
                Осуществяем контроль на всех этапах работы. 
                Будьте уверены, что все будет выполнено идеально и в срок
              `}
            />

            <WhyUI picture={Th} title='Несколько вариантов дизайна' text={`
                Мы не предлагаем типовые решения, а подходим к каждому 
                проекту индивидуально, позволяя реализовать вашу задумку на 100%
              `}
            />

        </div>
    </div>
  );
};

export default We;