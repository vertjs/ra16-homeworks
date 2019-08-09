import React from 'react';
import New from './New'

/**
 * Компонент «новостной блок»: список новостей текущего блока.
 */

export default function NewsBlock({blocks}) {
    console.log(blocks)
    return (
        blocks.map((e, id) => {
            return <New key={id} icon={e.icon} title={e.title} />;
        })   
    )
}