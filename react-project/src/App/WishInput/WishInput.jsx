import React, {useState} from 'react';
import propTypes from 'prop-types';


const WishInput = ({onNewWish}) =>{
    const [newWishText, setNewWishText] = useState('');
    return (
<fieldset className="wish-input">
        <legend className="wish-input__label">New wish</legend>
        <input onKeyUp={e=>{
            if(e.key === 'Enter' && newWishText.length){
                onNewWish({done:false, text:newWishText});
                setNewWishText('');
            }
        }} value={newWishText} onChange={e => setNewWishText(e.target.value)}  className="wish-input__field" placeholder="Enter your wish here"/>
    </fieldset>

);
}

WishInput.propTypes={
    onNewWish: propTypes.func,
};
WishInput.defaultProps={
    onNewWish: ()=>{},
};

export default WishInput;