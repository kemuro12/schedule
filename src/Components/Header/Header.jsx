import React, { useState } from 'react';
import Button from '../Templates/Button/Button';
import Modal from '../Templates/Modal/Modal';
import s from './Header.module.css';

const Header = (props) => {
    const [modal, setModal] = useState(false);
    
    const submit = (formData) => {
        props.login(formData.email, formData.pass)
    }

    return (
        <header className={s.header}>

            {modal && !props.isAuth ? <Modal submit={ submit } onHandleClose={() => setModal(false)} formError={props.formError} /> : ""}

            <div className={s.logo}>
                Schedule <span>TSU</span>
            </div>

            <div className={s.navbar}>
                <div className={s.leftBlock}></div>
                <div className={s.rightBlock}>
                    {props.isAuth ? 
                        <span className={s.auth}>Авторизован как  {props.userRole}</span>
                    :
                        <Button name={"Войти"} onClick={ () => setModal(true) } />
                    }

                </div>
            </div>
        </header>
    )
}

export default Header;