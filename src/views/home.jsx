import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Variety from '../components/Variety';

const Main = () => {
    const [isDark, setIsDark] = useState(false);
    const handleLabelClick = () => {
        if (isDark) {
            localStorage.setItem('theme-color', 'light');
            document.querySelector('body').classList.add('light');
            document.querySelector('body').classList.remove('dark');
            setIsDark(false);
        } else {
            localStorage.setItem('theme-color', 'dark');
            document.querySelector('body').classList.add('dark');
            document.querySelector('body').classList.remove('-light');
            setIsDark(true);
        }
    };
    return (
        <>
            {/* Start Dark & Light Mode Swicher  */}
            <label
                className={`theme-switcher-label d-flex  ${
                    isDark ? 'active' : ''
                }`}
            >
                <input
                    type="checkbox"
                    onClick={handleLabelClick}
                    className="theme-switcher"
                />
                <div className="switch-handle">
                    <i className="light-text" title="Switch to Dark">
                        <FaMoon />
                    </i>
                    <i className="dark-text" title="Switch to Light">
                        <FaSun />
                    </i>
                </div>
            </label>
            {/* End Dark & Light Mode Swicher  */}
            <Tabs>
                <TabList>
                    {/* START LEFT MENU CONTENT */}
                    <div className="leftpart">
                        <div className="leftpart_inner">
                            <div className="logo">
                                <Link className="navbar-brand" to="/">
                                    <img
                                        src="assets/img/logo/dark.png"
                                        alt="brand"
                                    />
                                </Link>
                            </div>
                            {/* END LOGO */}

                            <div className="menu">
                                <ul>
                                    <Tab>
                                        <img
                                            className="svg"
                                            src="assets/img/svg/home-run.svg"
                                            alt="homerun"
                                        />
                                        <span className="menu_content">
                                            Home
                                        </span>
                                    </Tab>
                                    <Tab>
                                        <img
                                            className="svg"
                                            src="assets/img/svg/avatar.svg"
                                            alt="avatar"
                                        />
                                        <span className="menu_content">
                                            About
                                        </span>
                                    </Tab>
                                    <Tab>
                                        <img
                                            className="svg"
                                            src="assets/img/svg/briefcase.svg"
                                            alt="briefcase"
                                        />
                                        <span className="menu_content">
                                            Portfolio
                                        </span>
                                    </Tab>
                                    <Tab>
                                        <img
                                            className="svg"
                                            src="assets/img/svg/paper.svg"
                                            alt="paper"
                                        />
                                        <span className="menu_content">
                                            Variety
                                        </span>
                                    </Tab>
                                </ul>
                            </div>
                            {/* END MENU */}

                            <div className="copyright">
                                <p>
                                    &copy; {new Date().getFullYear()} <br />{' '}
                                    Bryant Paz
                                </p>
                            </div>
                            {/* END COPYRIGHT */}
                        </div>
                    </div>
                    {/* END LEFT MENU CONTENT */}
                </TabList>
                {/* END SIDEBAR TABLIST */}

                {/* START RIGHT PART CONTENT */}
                <div className="rightpart">
                    <div className="rightpart_in">
                        <div className="tokyo_tm_section">
                            <div className="container">
                                <TabPanel>
                                    <Home />
                                </TabPanel>
                                <TabPanel>
                                    <About />
                                </TabPanel>
                                <TabPanel>
                                    <Portfolio />
                                </TabPanel>
                                <TabPanel>
                                    <Variety />
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END RIGHT PART CONTENT */}
            </Tabs>
            {/* END TABS */}
        </>
    );
};

export default Main;