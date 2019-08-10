import React from 'react';

/**
 * Компонент «шапка»: заголовки главного меню. По клику показывается NewsBlock.
 */

export default function NewsHeader({titles}) {
    return (
        <ul>
            {titles.map((el, id) => <li key={id} className='li'>{el}</li>)}
        </ul>
    )
}