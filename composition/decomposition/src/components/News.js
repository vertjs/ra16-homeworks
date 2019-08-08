import React from 'react';
import NewsHeader from './NewsHeader';
import nanoid from 'nanoid';
import {blocks} from '../data/blocks';
import {titles} from '../data/titles'
import NewsBlock from './NewsBlock';


/**
 * Компонент «новости»: разделы новостных категорий и список новостей.
 */

export default function News() {
    return (
        <React.Fragment>
            <NewsHeader key={nanoid()} titles={titles} />
            <NewsBlock key={nanoid()} blocks={blocks} />
        </React.Fragment>
    )
}