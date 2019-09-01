import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import useJsonFetch from './hooks/useJsonFetch';
import Smewarik from './Smewarik.png'
import like from './like.svg'
import chat from './chat.svg'
import smile from './smile.svg'
import gif from './gif.svg'
import photo from './photo.svg'
import sticker from './sticker.svg'
import CreatePost from './CreatePost'

export default function HeadPage({history, url}) {
    const [data] = useJsonFetch(url, [])
  //  const [link, setLink] = useState(null);
    console.log(history)
    const handleChange = (event) => {
        if(event.target.scrollTop > 0){
            event.target.style.height = event.target.scrollHeight + "px";
        }
        if(event.target.value.length > 45) {
            event.target.setAttribute('cols', 84)
        } else {
            event.target.setAttribute('cols', 20)
        }
    }


    return (
        <Router>
        <div>
            <h1>Главная</h1>
            <span>{data.map(o => 
                <span key={o.id}>  
                    <div className="block">
                        <div className="create">
                            <NavLink exact to="/posts/:new" className="button-create">  
                                Создать пост
                            </NavLink>
                            <Route exact path="/posts/:new" component={CreatePost}/>
                          
                        </div>
                        <div className="content">
                            <div className="head-content">
                                <img className="avatar" src={Smewarik} alt="avatar" width={25}></img>
                            </div>
                            <div className="text-content">
                                <h4>Ежик Колючкин</h4>
                                <p>🙒 Основатель группы 4мин.</p>
                            </div>
                        </div>
                        <div className="article">
                            <p>{o.content}</p> {/* Сообщение с сервера */}
                        </div>
                        <div>
                            <div className="footer">
                                <button className="button-like" src={like}>
                                    <img src={like} alt="like" width={15} className="like"/>
                                    Нравится
                                </button>
                                <button className="button-commit">
                                    <img src={chat} alt="chat" width={15} className="chat"/>
                                    Комментировать
                                </button>
                            </div>
                        </div>
                        <div className="commit">
                            <img className="avatar" src={Smewarik} alt="avatar" width={25}></img>
                            <form method="post" name="commit">  
                                <div className="input">
                                    <textarea name="text" type="text" placeholder="Напишите комментарий" row="1" onChange={handleChange}/>
                                    <div className="img-reaction">
                                        <img src={smile} alt="smile" width={15}></img>
                                        <img src={photo} alt="addphoto" width={15}></img>
                                        <img src={gif} alt="gif" width={15}></img>
                                        <img src={sticker} alt="sticker" width={15}></img>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </span>)}
            </span>
        </div>
            </Router>
    )
}