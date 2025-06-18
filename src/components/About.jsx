import React, { useState } from 'react';
import Modal from 'react-modal';
import Brand from './Brand';

Modal.setAppElement('#root');

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    function getMyCurrentAge() {
        const birthYear = 1998;
        const birthMonth = 5;
        const birthDay = 28;

        const today = new Date();
        const birthDate = new Date(birthYear, birthMonth, birthDay);

        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 && dayDifference < 0)
        ) {
            age--;
        }

        return age;
    }

    return (
        <>
            <div className="tokyo_tm_about">
                <div className="about_image ">
                    <img src="assets/img/portfolio/about.jpg" alt="About" />
                </div>
                <div className="description">
                    <h3 className="name">Bryant Paz</h3>
                    <div className="description_inner">
                        <div className="left">
                            <p>
                                Driven by a background in computer science, I
                                build quality software using C, Lua, Golang,
                                JavaScript, and SH/Bash. I am passionate about
                                Linux and proficient in harnessing the power of
                                the CLI. Known for attention to detail and
                                effective problem-solving, I excel at debugging
                                complex issues. Strong communication and
                                teamwork skills enable me to contribute
                                effectively to bringing projects from idea to
                                reality.
                            </p>
                            <div className="tokyo_tm_button">
                                <button
                                    onClick={toggleModal}
                                    className="ib-button"
                                >
                                    Read More
                                </button>
                                <button
                                    className="ib-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(
                                            'assets/pdf/resume_english.pdf',
                                            '_blank'
                                        );
                                    }}
                                    type="button"
                                >
                                    Download resume
                                </button>
                            </div>
                            {/* END TOKYO BUTTON */}
                        </div>
                        {/* END LEFT */}
                        <div className="right">
                            <ul>
                                <li>
                                    <p>
                                        <span>Birthday:</span>28.06.1998
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Age:</span>
                                        {getMyCurrentAge()}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Email:</span>

                                        <a href="mailto:bryantpaz7@outlook.com">
                                            bryantpaz7@outlook.com
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Study:</span>Universidad
                                        Tecnológica Metropolitana
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Freelance:</span>Not available
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Number:</span>+52 5664544682
                                    </p>
                                </li>
                            </ul>
                            {/* END UL */}
                        </div>
                        {/* END RIGHT */}
                    </div>
                    {/* END DESCRIPTION INNER */}
                </div>
            </div>

            {/* START ABOUT POPUP BOX */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="tokyo_tm_modalbox_about">
                    <button className="close-modal" onClick={toggleModal}>
                        <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END POPUP CLOSE BUTTON */}
                    <div className="box-inner">
                        <div className="my_box">
                            <div className="left">
                                <div className="about_title">
                                    <h3>Software Engineer Skills</h3>
                                </div>
                                {/* END ABOUT TITLE */}

                                <div className="tokyo_progress">
                                    {/* JavaScript */}
                                    <div
                                        className="progress_inner"
                                        data-value="80"
                                    >
                                        <span>
                                            <span className="label">
                                                JavaScript
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 80 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Linux */}
                                    <div
                                        className="progress_inner"
                                        data-value="80"
                                    >
                                        <span>
                                            <span className="label">Linux</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 80 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Golang */}
                                    <div
                                        className="progress_inner"
                                        data-value="50"
                                    >
                                        <span>
                                            <span className="label">
                                                Go
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 50 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Lua */}
                                    <div
                                        className="progress_inner"
                                        data-value="70"
                                    >
                                        <span>
                                            <span className="label">Lua</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 70 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* C */}
                                    <div
                                        className="progress_inner"
                                        data-value="20"
                                    >
                                        <span>
                                            <span className="label">C</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 20 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Bash */}
                                    <div
                                        className="progress_inner"
                                        data-value="70"
                                    >
                                        <span>
                                            <span className="label">
                                                Bash
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 70 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END PROGRESS */}
                            </div>
                            {/* END LEFT */}

                            <div className="right">
                                <div className="about_title">
                                    <h3>Language Skills</h3>
                                </div>
                                {/* Spanish */}
                                {/* English */}
                                <div className="tokyo_progress">
                                    <div
                                        className="progress_inner"
                                        data-value="100"
                                    >
                                        <span>
                                            <span className="label">
                                                Spanish
                                            </span>
                                            <span className="number">100%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 100 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="progress_inner"
                                        data-value="75"
                                    >
                                        <span>
                                            <span className="label">
                                                English
                                            </span>
                                            <span className="number">75%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 75 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Japanese */}
                                    <div
                                        className="progress_inner"
                                        data-value="5"
                                    >
                                        <span>
                                            <span className="label">
                                                Japanese (current learning)
                                            </span>
                                            <span className="number">10%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 10 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="progress_inner"
                                        data-value="10"
                                    >
                                        <span>
                                            <span className="label">
                                                Portuguese (future)
                                            </span>
                                            <span className="number">0%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: 0 + '%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* EDN TOKYO PROGRESS */}
                            </div>
                            {/* END RIGHT */}
                        </div>
                        {/* END MYBOX */}

                        <div className="counter">
                            <div className="about_title">
                                <h3>Curious Facts</h3>
                            </div>
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <h3>32+</h3>
                                        <span>Projects Completed</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <h3>110+</h3>
                                        <span>Words per minute</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <h3>10000+</h3>
                                        <span>Linux hours</span>
                                    </div>
                                </li>
                            </ul>
                            {/* END COUNTER CONTENT */}
                        </div>
                        <div className="partners">
                            <div className="about_title">
                                <h3>Others skills</h3>
                            </div>
                            <Brand />
                        </div>
                    </div>
                </div>
            </Modal>
            {/* END ABOUT POPUP BOX */}
        </>
    );
};

export default About;