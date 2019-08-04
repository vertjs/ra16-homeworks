import React, { useState }from 'react'


export default function Feedback(props) {
    const [form, setForm] = useState({
        userName: '',
        score: 'good',
        agreement: false
    })
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.type);
        console.dir(evt.target); // представление объекта
    }
    const handleChange = ({target}) => {
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value

        setForm({...form, [name]: value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">Ваше имя</label>
                <input id="userName" name="userName" value={form.userName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="score">Выберите уровень удовлетворённости</label>
                <select id="score" name="score" value={form.score} onChange={handleChange}>
                    <option value="good">Хорошо</option>
                    <option value="bad">Плохо</option>
                </select>
            </div>
            <div>
                <label htmlFor="agreement">
                    <input id="agreement" name="agreement" type="checkbox" onChange={handleChange} value={form.agreement}></input>
                        Согласен на передачу перс.данных
                </label>
            </div>
            <button type="submit">Отправить</button>
        </form>
    )}
    