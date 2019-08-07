import React from 'react';

export default function HeadNews(props) {
    const {listNews} = props
    console.log(listNews)
    return (
        <ul>
{/* {listNews.map((item, id) => 
                <li key={id}>{item}</li>)}*/}
            <li>New1</li>
        </ul>
    )
}