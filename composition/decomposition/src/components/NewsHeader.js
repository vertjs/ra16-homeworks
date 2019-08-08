import React from 'react';
import nanoid from 'nanoid';


/**
 * Компонент «шапка»: заголовки главного меню. По клику показывается NewsBlock.
 */

export default function NewsHeader({titles}) {
    return (
        <ul>
            {titles.map(el => <li key={nanoid()} className='li'>{el}</li>)}
        </ul>
    )
}