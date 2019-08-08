import React from 'react';
import {footBlocks} from '../data/footBlocks'
import nanoid from 'nanoid';


/**
 * Компонент «нижние блоки»: дополнительные разделы пользовательских новостей.
 */


export default function BlockFoot() {
    return (
        <div className='block'>{footBlocks.map(el => <div key={nanoid()} className='footBlocks'>
                <h2>{el.title}</h2>
                <p>{el.text}</p>
            </div>)}
        </div>
    )
}