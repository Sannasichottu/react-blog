import './topbar.css'
import { Link } from 'react-router-dom';

export default function TopBar() {
    const user = false;
    return (

        <div className='top' >
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to='/' >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to='/' >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to='/' >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to='/write' >WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className='topImg' src="https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg" alt="" />
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fa-brands fa-searchengin"></i>
            </div>
        </div>
    )
}