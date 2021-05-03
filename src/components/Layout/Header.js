import React, { Fragment } from 'react';
import mealImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderButtonCart';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="A table full of delecious food!"/>
            </div>
        </Fragment>
    );
}

export default Header;