import React from 'react';
import HeadMenu from './HeadMenu';
import HeadNews from './HeadNews';
import HeadLeftBlock from './HeadLeftBlock';

//const data = ['Сейчас в СМИ', 'В Германии', 'Рекомендуем']

export default function Header(props) {
    return (
        <React.Fragment>
            <HeadMenu/>
            <HeadNews />
            <HeadLeftBlock />
        </React.Fragment>
    )
}