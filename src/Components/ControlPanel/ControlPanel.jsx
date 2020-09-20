import React, { useEffect, useState } from 'react';
import s from './ControlPanel.module.css'
import Button from '../Templates/Button/Button';
import Select from '../Templates/Select/Select';

const ControlPanel = (props) => {
    let block = props.selectedBlock
    useEffect(() => {
        setFormData({
            ...props.selectedBlock 
        })
    },[props.selectedBlock])

    const [formData, setFormData] = useState(null)
    
    const onHandleChange = ({target:{value, name}}) => {
        setFormData({
            ...formData,
            [name]: value  
        })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteSchedule(props.keySchedule, props.selectedY, props.selectedX)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addSchedule(props.keySchedule, formData, props.selectedY, props.selectedX)
    }
    
    return (
        <div className={s.main}>
            <span className={s.name}>Режим редактирования</span>
            <form className={s.form}>
                <Select options={props.list.names} inst={block.name} onChange={onHandleChange} name="name" />
                <Select options={props.list.rooms} inst={block.room} onChange={onHandleChange} name="room" />
                <Select options={props.list.teachers} inst={block.teacher} onChange={onHandleChange} name="teacher" />
                <Select options={props.list.types} inst={block.type} onChange={onHandleChange} name="type" />

                <Button name="Сохранить" onClick={onSubmit}/>
                <Button name="Удалить" error={1} onClick={handleDelete} />
            </form>
        </div>
    )
}

export default ControlPanel;