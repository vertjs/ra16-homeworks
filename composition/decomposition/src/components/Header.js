import React from 'react';
import HeadMenu from './HeadMenu';
import nanoid from 'nanoid';
import HeadLeftBlock from './HeadLeftBlock';
import '../App.css';

const data = ['Сейчас в СМИ', 'В Германии', 'Рекомендуем']

export default function Header() {
    return (
        <React.Fragment>
            <HeadMenu key={nanoid()} list={data} />
            
            <HeadLeftBlock key={nanoid()} />
        </React.Fragment>
    )
}