import React, { Component, useEffect, useState, useRef } from 'react';
import './style.scss'

const MenuLinks = (props) => {
    const inputEl = useRef(null);
    const [links, setLinks] = useState(
        [{
            text: 'Author',
            link: 'https://github.com/Lakston',
            icon: 'fa-pencil-square-o'
        }, {
            text: 'Github page',
            link: 'https://github.com/Lakston',
            icon: 'fa-github'
        }, {
            text: 'Twitter',
            link: 'https://twitter.com/Fab_is_coding',
            icon: 'fa-twitter'
        }]
    )
    let linksData = links.map((link, i) => <li key={i}><i aria-hidden="true" className={`fa ${link.icon}`}></i><a href={link.link} target="_blank">{link.text}</a></li>);
    return (
        <div className={props.menuStatus} id='menu'>
            <ul>
                {linksData}
            </ul>
        </div>
    )

}


const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.addEventListener('click', _handleDocumentClick, false);
        document.removeEventListener('click', _handleDocumentClick, false);
    }, [])

    const _handleDocumentClick = (e) => {
        if (isOpen === true) {
            setIsOpen(false)
        };
    }

    const menuToggle = (e) => {
        e.stopPropagation();
        console.log("hete")
        setIsOpen(false)
    }

    let menuStatus = isOpen ? 'isopen' : '';
    return (
        <div>
            <div className="menubar">
                <div className="hambclicker" onClick={(e) => menuToggle(e)}></div>
                <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span></div>
                <div className="title">
                    <span>'demo</span>
                </div>
            </div>
            <MenuLinks menuStatus={menuStatus} />
        </div>
    )
}


export default Menu