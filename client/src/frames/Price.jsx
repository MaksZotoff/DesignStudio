import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';

const Price = () => {
  return (
    <>
    <div id="price" className='price'>
        <h1 className='text-center'>Услуги и цены</h1>
      <br/>
      <h3 className='text-center'>Стоимость наших услуг рассчитываются индивидуально, в зависимости от сложности проекта.</h3>
    
      <div className="card-group">


            <div className="card  text-center">
                <h5 className="card-title">Дизайн-проект</h5>
                <p className="card-text">Полный комплекс услуг по разработке проекта: от 3D-модели до эскизов встроенной техники.</p>
            </div>

            <div className="card text-center">
                <h5 className="card-title">Подробные планы помещения</h5>
                <p className="card-text">
                  Не только план обмеров, но и осветительной техники, расстановки мебели, вентиляции, разведки электричества и прочего.
                </p>
            </div>

            <div className="card text-center">
                <h5 className="card-title">Подбор материалов и расчет стоимости</h5>
                <p className="card-text">
                  Вам не придется искать и подбирать все самостоятельно, а грамотный расчет - не выйти за рамки бюджета.
                </p>
            </div>

            <div className="card text-center">
                <h5 className="card-title">Подготовка документации</h5>
                <p className="card-text">
                  Проект будет соответсвовать ГОСТу, СНИПам и прочим нормам проектирования.
                </p>
            </div>

        </div>

    </div>
    </>
  )
}

export default Price;