import React, { useState } from 'react'
import OneTraining from './OneTraining';
import nanoid from 'nanoid';


export default function Trainings() {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'Ru'
    };

    const edit = '🖉'
    const delet = '✗'

    const [form, setForm] = useState({
        today: new Date().toLocaleString("ru", options),
        km: "10"
    })

    const [trainigs, setTrainings] = useState([])

    const handleSubmit = evt => {
        evt.preventDefault()
        const train = new OneTraining(nanoid(), form.today, form.km)
        //console.log(form)
        setTrainings(prevTrains => [...prevTrains, train])
        console.log(train)
        console.log(train.date)
        console.log(trainigs[trainigs.length - 1])
    }

    const handleChange = evt => {
        const {name, value} = evt.target
        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    const handleRemove = id => {
        setTrainings(prevTrains => prevTrains.filter( o => o.id !== id))
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="menu">
                <div className="block">
                    <h2>Дата (ДД.ММ.ГГ)</h2>
                    <div className="interiorBlock">
                        <input name="today" type="text" placeholder={form.today} onChange={handleChange}/>
                    </div>
                </div>
                <div className="block">
                    <h2>Пройдено км</h2>
                    <div className="interiorBlock">
                    <input name="km" type="text" placeholder={form.km} onChange={handleChange}/>
                    </div>
                </div>
                <div className="blockOk">
                    <button className="ok">
                        <h2>OK</h2>
                    </button>                  
                </div>
            </div>
            <div className="feature">
                <ul className="head">
                    <li>Дата (ДД.ММ.ГГ)</li>
                    <li>Пройдено км 🐾</li>
                    <li>Действия</li>
                </ul>
             
                <div className="contentBlock">
                    {trainigs.map(o => <ul className="content" key={o.id}>
                        <li>{o.date}</li>
                        <li>{o.distanc}</li>
                        <li><button>{edit}</button> 
                        <button onClick={() => handleRemove(o.id)}>{delet}</button> </li>
                    </ul>)}
                </div>
            </div>
            
        </form>
    )
    
}