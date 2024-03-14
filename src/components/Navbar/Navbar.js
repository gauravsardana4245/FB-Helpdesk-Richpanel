import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

const Navbar = ({user}) => {
    const [userData, setUserData] = useState({name: "user"});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogout = ()=> {
        setLoading(true);
        setTimeout(()=> {
            localStorage.removeItem('token');
            navigate('/login');
            setLoading(false);
        },2000)
    }   

    useEffect(()=> {
        if(user) {
            setUserData(user);
        }
    },[user])

    return (
        <div className='navBar'>
            <div>

            </div>
            <div className='userBox'>
                <div 
                style={{
                    display: "flex",
                    gap: "7px",
                    color: "white"
                }}>
            <i className="fa-solid fa-user"></i>
                <div className='loggedInUserName'> {userData.name}</div>
                </div>
            <div onClick={()=> handleLogout()} className='logoutBtn'>
                {!loading? "Logout":
                // <div>
                    <ColorRing
                        visible={true}
                        height="25"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['black', 'black', 'black', 'black', 'black']}
                    />
                // </div>
                }
            </div>
            </div>
        </div>
    )
};

export default Navbar;