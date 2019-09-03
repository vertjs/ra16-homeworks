import React,{ useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import png from '../imgs/png.svg'
import happy from '../imgs/happy.svg'
import gif from '../imgs/Gifs.svg'
import navigation from '../imgs/navigation.svg'
import frend from '../imgs/frend.svg'
import exit from '../imgs/exit.svg'
import Smewarik from '../imgs/Smewarik.png'
import useJsonFetch from '../hooks/useJsonFetch'

export default function EditPost({match}) {
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, [])
        
    const [form, setForm] = useState({
        id: match.params.id,
        content: ''})

    useEffect(()=> {
        if(data.length > 0) {
            let d = data.find(i => i.id == match.params.id)
            setForm(prev => ({...prev, content: d.content}))
        }
    }, [data, match.params.id])

    const handleChange = (e) => {
        const {value} = e.target
        setForm(prev => ({...prev, content: value}))
    }

    const handleSubmit = (e) => {
        console.log(form)
        fetch(process.env.REACT_APP_DATA_URL, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    }


    return (
        <form>
            <h1>Редактировать публикацию</h1>
            <span className="article">
                    <img className="avatar" src={Smewarik} alt="avatar" width={25}/>
                    <textarea value={form.content} onChange={handleChange} />
                    <p></p>
            </span>
            <div className="block-comment">
                <div className="tops">
                    <ul className="list-btns">
                        <li>
                        <img src={png} alt="video" width={15} className="like"/>
                            Фото/видео
                        </li>
                        <li>
                            <img src={happy} alt="cinema" width={15} className="like"/>
                            Чувства/действия
                        </li>
                        <li>
                            <img src={gif} alt="ellipsis" width={15} className="like"/>
                            GIF
                        </li>
                        <li>
                            <img src={navigation} alt="ellipsis" width={15} className="like"/>
                            Отметить посещение
                        </li>
                        <li>
                            <img src={frend} alt="ellipsis" width={15} className="like"/>
                            Отметить друзей
                        </li>
                    </ul>
                    <button className="exit">
                        <NavLink to='/' exact><img src={exit} alt="exit" width={15} className="like"/></NavLink>
                    </button>
                </div>

                <div className="create">
                <NavLink className="button-create" to='/' exact onClick={handleSubmit}>Сохранить</NavLink>
                </div>
            </div>
        </form>
    )
}
