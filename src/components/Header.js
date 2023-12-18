"use client";
import React from "react";
import '../styles/header.css';


function Header({ onMenuClick }) {


    return (
        <header>
            <nav className="px-4 lg:px-6 py-2.5 mb-20">
                <div className="flex justify-end mx-auto max-w-screen-xl lg:mt-4">
                    <div className="hidden items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="navbar">
                            <li>
                                <a className="headerText" data-text="&nbsp;&nbsp;ABOUT&nbsp;" onClick={() => onMenuClick('about')}>&nbsp;&nbsp;ABOUT&nbsp;</a>
                            </li>
                            <li>
                                <a className="headerText" data-text="&nbsp;&nbsp;EXPERIENCE&nbsp;" onClick={() => onMenuClick('experience')}>&nbsp;&nbsp;EXPERIENCE&nbsp;</a>
                            </li>
                            <li>
                                <a className="headerText" data-text="&nbsp;&nbsp;PROJECTS&nbsp;" onClick={() => onMenuClick('projects')}>&nbsp;&nbsp;PROJECTS&nbsp;</a>
                            </li>
                            <li>
                                <a data-text="&nbsp;&nbsp;RESUME&nbsp;" className="headerText">&nbsp;&nbsp;RESUME&nbsp;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
