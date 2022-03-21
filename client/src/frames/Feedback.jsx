import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}

const Feedback = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div id='feedback' className='feedback'>
            
            <div className='section'>
              <div className='section-title'>
                <h1>Задайте свой вопрос</h1>
                <p>
                  Перед отправкой сообщения, убедитесь, что заполнены все поля формы.
                </p>
              </div>

              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Имя'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Электронная почта'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Сообщение'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                
                <button type='submit' className='btn  btn-lg' >
                  Отправить
                </button>
              </form>

          </div>

          <div className='col-md-3 contact-info'>
            <div className='contact-item'>
              <h3>Контакты</h3>
              <p>8 980 754 88 87</p>
              <p>info@dizayn-kvartiry.ru</p>
              
            </div>
            <div className='contact-item'>
              <p>
              По сотрудничеству обращайтесь по номеру: 8 920 908 70 87</p>
              <p>г. Владимир, ул. Дзержинского, 15</p>
              
            </div>
          </div>

      </div>
      </>
  );
};

export default Feedback;
