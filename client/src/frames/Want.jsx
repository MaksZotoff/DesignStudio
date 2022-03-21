
import React from 'react';

//import 'bootstrap/dist/css/bootstrap.css';

import saving from './images/saving.PNG'
import expertise from './images/expertise.PNG'
import visibility from './images/visibility.PNG'
import WhyUI from './WhyUI';

const Want = () => {
  return (
    <div id='want' className='want'>
      <h1 className='text-center'>Зачем вам нужен дизайн-проект?</h1>
        <div className="card-group">

            <WhyUI picture={saving} title='Экономия до 30%' text={`
                Тщательно спланированный дизайн-проект - это от 20% до 30% экономии денег и времени. 
                Мы подскажем, где и как максимально выгодно купить все, что потребуется для воплощения проекта в жизнь
                - от отделочных материалов до мебели и техники.
              `}
            />

            <WhyUI picture={expertise} title='Экспертность' text={`
                Наши дизайнеры - это инженеры с архитектурным образованием, 
                которые успели поработать над десятками проектов. 
                Они всегда готовы вам подсказать наилучшее решение и понимают, 
                как важно соблюдение ГОСТов и прочих норм проектирования.
              `}
            />

            <WhyUI picture={visibility} title='Наглядность' text={`
                Создаем 3D-проект будущего интерьера.
                Благодаря этому вы сможете наглядно увидеть его со всех сторон, 
                определить его стилистику и наполнение.
              `}
            />

        </div>
    </div>
  );
};

export default Want;
