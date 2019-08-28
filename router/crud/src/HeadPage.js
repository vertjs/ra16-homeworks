import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';
import Smewarik from './Smewarik.png'

export default function HeadPage({url}) {
    const [data] = useJsonFetch(url, [])
    console.log(data)

    return (
        <div>
            <h1>Главная</h1>
            <span>{data.map(o => <span key={o.id}>{o.content}</span>)}</span>
            <div className="block">
                <div className="create">
                    <button>Создать пост</button>
                </div>
                <div className="content">
                    <div className="head-content">
                        <img src={Smewarik} alt="avatar" width={25}></img>
                    </div>
                    <div className="text-content">
                        <h4>Ежик Колючкин</h4>
                        <p>🙒 Основатель группы 4мин.</p>
                    </div>
                </div>
                <div className="article">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, mollitia sed! Sequi iure rem qui vel quos repellendus fugit minus molestiae ipsa quia eius, inventore eveniet, laboriosam dolores perferendis quisquam.</p>
                </div>
                
                
            </div>
        </div>
    )
}