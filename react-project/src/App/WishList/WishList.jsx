import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import WishItem from '../WishItem/WishItem';


const WishList= ({ wishes, onWishesChange })=>(
    <ul className="wish-list">
        {wishes.map(({text, done}, i) => (
        <WishItem text={text} done={done} id={`wish${i}`} key={text} onDoneChange={(value)=>{
                const updatedWishes=[...wishes];
                updatedWishes[i].done = value;
                onWishesChange(updatedWishes);
        }}/>
        ))}
    </ul>
);


WishList.propTypes= {
    wishes: propTypes.arrayOf(propTypes.shape({
        done: propTypes.bool,
        text: propTypes.string,
    })),
    onWishesChange: propTypes.func,
};

WishList.defaultProps= {
    wishes: [],
    onWishesChange: () => {},
};
export default WishList;