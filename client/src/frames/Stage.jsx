import React from 'react';

//import 'bootstrap/dist/css/bootstrap.css';

import Fi from './images/stage1.PNG'
import Tw from './images/stage2.PNG'
import Th from './images/stage3.PNG'
import Fo from './images/stage4.PNG'

import WhyUI from './WhyUI';

const Stage = () => {
  return (
    <div id='stage' className='stage'>
          <h1 className='text-center'>Этапы работы</h1>

        <div className="card-group">

            <WhyUI picture={Fi} title='Этап 1. Обсуждение деталей' text={`
                - Договариваемся о личной встрече в студии или на объекте, чтобы определить общую концепцию и обсудить нюансы.
                - Заключаем договор.
                - Делаем ТЗ.
              `}
            />

            <WhyUI picture={Tw} title='Этап 2. Визуализация' text={`
                - Разрабатываем для вас макет готового дизайна.
              `}
            />

            <WhyUI picture={Th} title='Этап 3. Подготовка рабочей документации' text={`
                - Составляем подробные инструкции для строителей.
              `}
            />
            
            <WhyUI picture={Fo} title='Этап 4. Комплектация и авторский надзор' text={`
                - Рассчитываем смету и график затрат на все время реализации проекта.
                - Следим за ходом работы.
              `}
            />

        </div>
    </div>
  );
};

export default Stage;