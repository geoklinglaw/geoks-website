"use client";
import React from "react";
import '../styles/header.css';
// import {pdfjs, Document, Page} from 'react-pdf'
// import Resume from '/images/Resume.pdf'


function Header({ onMenuClick }) {


    return (
        <header>
            <nav className="lg:px-6">
                <div className="flex justify-end mx-auto max-w-screen-xl lg:mt-4">
                    <div className="flex items-center w-full lg:flex lg:w-auto ">
                        <div className="flex flex-row">
                            <a className="headerText" data-text="&nbsp;&nbsp;ABOUT&nbsp;" onClick={() => onMenuClick('about')}>&nbsp;&nbsp;ABOUT&nbsp;</a>
                
                            <a className="headerText" data-text="&nbsp;&nbsp;EXPERIENCE&nbsp;" onClick={() => onMenuClick('experience')}>&nbsp;&nbsp;EXPERIENCE&nbsp;</a>
                    
                            <a className="headerText" data-text="&nbsp;&nbsp;PROJECTS&nbsp;" onClick={() => onMenuClick('projects')}>&nbsp;&nbsp;PROJECTS&nbsp;</a>
                    
                            <a href='/images/Resume.pdf' data-text="&nbsp;&nbsp;RESUME&nbsp;" className="headerText">&nbsp;&nbsp;RESUME&nbsp;</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
