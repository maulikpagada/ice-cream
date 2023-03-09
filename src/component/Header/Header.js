import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';

function Header(props) {

    const themeData = useContext(ThemeContext);

    console.log(themeData.theme);

    return (
        <div>
            <div>
                <div className={"container-fluid bg-primary py-3 d-none d-md-block " + (themeData.theme === 'light' ? 'light' : 'dark')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center">
                                    <a className="text-white pr-3" href>FAQs</a>
                                    <span className="text-white">|</span>
                                    <a className="text-white px-3" href>Help</a>
                                    <span className="text-white">|</span>
                                    <a className="text-white pl-3" href>Support</a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-lg-right">
                                <div className="d-inline-flex align-items-center">
                                    <a className="text-white px-3" href>
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="text-white px-3" href>
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="text-white px-3" href>
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a className="text-white px-3" href>
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a className="text-white pl-3" href>
                                        <i className="fab fa-youtube" />
                                    </a>
                                    <button onClick={() => themeData.toggle_theme(themeData.theme)} className="theme-button">Change Theme</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container-fluid position-relative nav-bar p-0 " + (themeData.theme === 'light' ? 'light' : 'dark')}>
                    <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav ml-auto py-0">
                                    <li><NavLink exact className="nav-item nav-link active" to={'/'}>Home</NavLink></li>
                                    <li><NavLink exact className="nav-item nav-link active" to={'about'}>About</NavLink></li>
                                    <li><NavLink exact className="nav-item nav-link active" to={'product'}>Product</NavLink></li>
                                </div>
                                <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                                </a>
                                <div className="navbar-nav mr-auto py-0">
                                    <li><NavLink exact className="nav-item nav-link active" to={'Services'}>Services</NavLink></li>
                                    <li><NavLink exact className="nav-item nav-link active" to={'Gallery'}>Gallery</NavLink></li>
                                    <li><NavLink exact className="nav-item nav-link active" to={'contact'}>Contact</NavLink></li>
                                    <NavLink exact className="nav-link scrollto" to={'/auth'}><span className="d-none d-md-inline">Login/ Signup</span></NavLink>
                                    <li><NavLink exact className="nav-item nav-link active" to={'fromval'}>Fromval</NavLink></li>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;