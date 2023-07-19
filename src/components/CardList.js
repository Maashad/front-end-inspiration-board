import React from 'react';
import Card from './Card';

const CardList = (props) => {

    const CardLists = props.entries.map((post) => {
        return (
            <Card
            card_id={post.card_id}
            key={post.id}
            message={post.message}
            likes_count={post.likes_count}
            incrementCounter={props.incrementCounter}
            />
        );
    });
    
    return <div className='Cards_container'>{CardLists} </div>;
};

export default CardList;