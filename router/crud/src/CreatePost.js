import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'
import video from './video.svg'
import pencilregular from './pencilregular.svg'
import cinema from './cinema.svg'
import ellipsis from './ellipsis.svg'
import exit from './exit.svg'
import Smewarik from './Smewarik.png'
import nanoid from 'nanoid'

export default function CreatePost() {
    const [form, setForm] = useState({
        id: '',
        content: ''})

    const handleChange = (e) => {
        const {value} = e.target
        setForm(prev => ({...prev, id: nanoid(), content: value}))
    }
    const handleSubmit = (e) => {
        //setForm(prev => ({...prev, id: nanoid()}))
        console.log(form)
        
        fetch(process.env.REACT_APP_DATA_URL, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(form)
        })
    }

    return (
        <form>
            <div className="block-comment">
                <div className="tops">
                    <ul className="list-btns">
                        <li>
                            <img src={pencilregular} alt="pencilregular" width={15} className="like"/>
                            Публикация
                        </li>
                        <li>
                        <img src={video} alt="video" width={15} className="like"/>
                            Фото/видео
                        </li>
                        <li>
                            <img src={cinema} alt="cinema" width={15} className="like"/>
                            Прямой эфир
                        </li>
                        <li>
                            <img src={ellipsis} alt="ellipsis" width={15} className="like"/>
                            Ещё
                        </li>
                    </ul>
                    <button className="exit">
                        <img src={exit} alt="exit" width={15} className="like"/>
                    </button>
                </div>
                <span className="article">
                    <img className="avatar" src={Smewarik} alt="avatar" width={25}/>
                    <textarea value={form.content} onChange={handleChange} />
                </span>
                <div className="create">
                <NavLink className="button-create" to='/' exact onClick={handleSubmit}>Опубликовать</NavLink>
                </div>
            </div>
        </form>
    )
}