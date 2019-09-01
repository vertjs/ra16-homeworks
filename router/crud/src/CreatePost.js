import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import video from './video.svg'
import pencilregular from './pencilregular.svg'
import cinema from './cinema.svg'
import ellipsis from './ellipsis.svg'
import exit from './exit.svg'
import Smewarik from './Smewarik.png'

 function CreatePost({history, match}) {
    console.log(history)
    console.log(match.params.new)
    return (
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
            <textarea />
        </span>
        <div className="create">
        <button className="button-create">Опубликовать</button>
        </div>
    </div>
    )
}

export default withRouter(CreatePost)