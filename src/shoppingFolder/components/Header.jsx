import React from 'react';

const Header = () => {
    return ( 
        <div className= 'headerSection'>
            <div className="left">
                <div className="title">
                    <h2>Shopping Mall</h2>
                </div>
            </div>
            <div className="center">
                <ul>
                    <li>women</li>
                    <li>men</li>
                    <li>children</li>
                    <li>beauty</li>
                </ul>
            </div>
            <div className="search">
                <input type="text" placeholder='Search....'/>
            </div>
            <div className="right"></div>
            <div className="signin">
                Signin / Signup
            </div>
            
            <div className="cart">
                Cart
            </div>
        </div>
     );
}
 
export default Header;