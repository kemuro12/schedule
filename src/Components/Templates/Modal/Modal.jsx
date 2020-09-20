import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import s from './Modal.module.css';

const Modal = (props) => {
    const [formData, setFormData] = useState({})

    const handleChange = ({target:{value, name}}) => {
        setFormData({
            ...formData,
            [name]: value  
        })
    }

    const preSubmit = (e) => {
        e.preventDefault();

        props.submit(formData)
    }

    return (
        <div className={s.modalScreen}>
            <div className={s.modal}>
                <div className={s.title}>
                    Форма авторизации
                </div>

                <div className={s.content}>
                    <form>
                        <div>
                            <span>Email</span>
                            <Input name="email" onChange={handleChange}/>
                        </div>
                        
                        <div>
                            <span>Пароль</span>
                            <Input type="password" name="pass" onChange={handleChange}/>
                        </div>
                        
                        <Button name="Войти" onClick={preSubmit} />
                        <Button name="Закрыть" error={1} onClick={props.onHandleClose} />

                        <p className={s.error}>{props.formError}</p>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default Modal;