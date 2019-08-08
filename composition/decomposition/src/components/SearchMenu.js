import React from 'react';
import nanoid from 'nanoid';

/**
 * Компонент «меню поиска»: отфильтровать разделы поиска.
 */

export default function SearchMenu({filtres}) {
    return (
        <ul>
            {filtres.map(el => <li className='li' key={nanoid()}>{el}</li>)}
        </ul>     
    )
}