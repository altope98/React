import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

const WishItem = ({ done, text, id, onDoneChange, }) => {
    const [age, setAge] = useState(0);

    useEffect(()=>{
        let interval;
        if(done){   
            setAge(0);
        }else{
            interval= setInterval(()=>{
                if(done){
                    clearInterval(interval);
                }else{
                setAge(a => a+1);
                }
            },1000)
        }
        return () => clearInterval(interval);
    }, [done]);
    return (
        <li className={classNames('wish-list__item', {
            'wish-list__item--done': done,
            'wish-list__item--warning': age > 5 && age <= 10,
            'wish-list__item--danger': age > 10,
        })}>
            <input id={id} type="checkbox" checked={done} onChange={e => onDoneChange(e.target.checked)} />
            <label htmlFor={id}>{text}</label>
        </li>
    );

};

WishItem.propTypes = {
    done: propTypes.bool,
    text: propTypes.string,
    id: propTypes.string,
};
WishItem.defaultProps = {
    done: false,
    text: '',
    id: '',
};

export default WishItem;