import React, { useState } from 'react';
import HeadNews from './HeadNews';
import nanoid from 'nanoid';
import NewsModel from './NewsModel'

const data = ['New1', 'New2', 'New3', 'New4', 'New5', 'New6']

export default function HeadMenu({list}) {

    return (
        <ul>
            {list.map((item, id) => 
            <React.Fragment key={nanoid()}>
                <li key={id} className='li' onClick={() => {
                        console.log('test')
                        return <HeadNews listNews={data}/>
                    }
                }>{item}</li> {/* главные заголовки */}
               
            </React.Fragment>
            )}
        </ul>
    )
}