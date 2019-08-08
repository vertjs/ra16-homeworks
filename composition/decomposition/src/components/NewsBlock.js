import React from 'react';
import nanoid from 'nanoid';

/**
 * Компонент «новостной блок»: список новостей текущего блока.
 */

export default function NewsBlock({blocks}) {
    return (
        blocks.map(e => <li key={nanoid()}>{e.icon} {e.title}</li>)
    )
}