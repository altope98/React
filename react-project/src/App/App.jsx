import React, {useState} from 'react';
import './App.css';

import WishInput from './WishInput/WishInput';
import WishList from './WishList';

const initialWishes = [
    { text: 'Travel to Italy', done: false },
    { text: 'Learn Italian', done: false },
    { text: 'Pay the debts', done: true },
];

const App = () => {
const [wishes, setWishes] = useState(initialWishes);
    return(
<div className="app">
    <h1>My Wishlist App</h1>
    <WishInput onNewWish={wish => setWishes([wish, ...wishes])}/>
    <WishList wishes={wishes} onWishesChange={setWishes}/>
    
    <button className="wish-clear" type="button" onClick={() => setWishes(wishes.filter(wish=>!wish.done))} >Eliminar completados</button>
</div>
);
    }
export default App;