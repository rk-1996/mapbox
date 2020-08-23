import React, { Component, useEffect, useState, useRef } from 'react';
import './style.scss'
import connect from "react-redux/lib/connect/connect";
import { withRouter } from "react-router-dom";
import { selectMenu } from "../../redux/actions";
import { Multiselect } from 'multiselect-react-dropdown';
import allCountries from './../../utils/AllCountries'

const MenuLinks = (props) => {
    console.log(props)
    const inputEl = useRef(null);

    const [styleChips, setStyleChips] = useState({
        chips: {
            background: "red",
        },
        multiselectContainer: {
            color: "red"
        },
    })
    const [menu, setMenu] = useState([
        {
            name: 'Loss in Employment Income'
        },
        {
            name: 'Expected Loss in Employment Income'
        },
        {
            name: 'Food Security'
        },
        {
            name: 'Delayed Medical Care'
        },
        {
            name: 'Housing Insecurity'
        },
        {
            name: 'K-12 Educational Changes'
        }
    ])
    const [options, setOptions] = useState([{ name: 'Calibration', id: 1 }, { name: 'Texas', id: 2 }, { name: 'Washington', id: 3 }])
    const [optionsMetro, setOptionsMetro] = useState([{ name: 'Metro 1', id: 1 }, { name: 'Metro 1', id: 2 }, { name: 'Metro 3', id: 3 }])
    const [selectedValue, setSelectedValue] = useState([])
    const [selectedMetro, setSelectedMetro] = useState([])
    const [selectedCountry, setSelectedCountry] = useState([])
    const [selectedSchool, setSelectedSchool] = useState([])
    const [optionCountry, setOptionCountry] = useState(allCountries)
    const [optionSchoolDiscricts, setOptionSchoolDiscricts] = useState([{ name: 'school 1', id: 1 }, { name: 'school 1', id: 2 }, { name: 'school 3', id: 3 }])

    const onSelect = (selectedList, selectedItem) => {
        // let data = this.state.selectedValue;
        // data = selectedList;
        // console.log(data)
    }

    const onRemove = (selectedList, removedItem) => {
        // let data = this.state.selectedValue;
        // data = selectedList;
        // console.log(data)
    }

    const onSelectMetro = (selectedList, selectedItem) => {
        // let data = this.state.selectedValue;
        // data = selectedList;
        // console.log(data)
    }

    const onRemoveMetro = (selectedList, removedItem) => {
        // let data = this.state.selectedValue;
        // data = selectedList;
        // console.log(data)
    }

    const onSelectCountry = (selectedList, selectedItem) => {
        // let data = this.state.selectedValue;
        // data = selectedList;
        // console.log(data)
    }

    const onRemoveCountry = (selectedList, removedItem) => {
        // let data = this.state.selectedValue;
        // data = selectedList;
        // console.log(data)
    }


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
                {
                    menu.map((data, i) => <li
                        onClick={() => props.props.selectMenu(data.name)}
                        style={{ backgroundColor: props.props.menu === data.name ? 'rgb(0, 122, 217)' : '' }}
                        className={`${props.props.menu === data.name ? 'text-white' : ''} f-14 cursor-pointer`} key={i}>
                        {
                            data.name
                        }
                    </li>)
                }
            </ul>
            <div className="mx-2 my-3 my-sm-4">
                <h3 className="text-left">Filter By:</h3>
                <Multiselect
                    placeholder="State"
                    options={options} // Options to display in the dropdown
                    selectedValues={selectedValue} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                />
                <div className="mt-2"></div>
                <Multiselect
                    placeholder="Metro Area"
                    options={optionsMetro}
                    selectedValues={selectedMetro}
                    onSelect={onSelectMetro}
                    onRemove={onRemoveMetro}
                    displayValue="name"
                />
                <div className="mt-2"></div>
                <Multiselect
                    displayValue="key"
                    style={styleChips}
                    placeholder="Countries"
                    options={optionCountry}
                    selectedValues={selectedCountry}
                    onSelect={onSelectCountry}
                    onRemove={onRemoveCountry}
                    displayValue="name"
                />
                <div className="mt-2"></div>
                <Multiselect
                    displayValue="key"
                    style={styleChips}
                    placeholder="School districts"
                    options={optionSchoolDiscricts}
                    selectedValues={selectedSchool}
                    onSelect={onSelectCountry}
                    onRemove={onRemoveCountry}
                    displayValue="name"
                />
            </div>
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
        setIsOpen(!isOpen)
    }

    let menuStatus = isOpen ? 'isopen' : '';
    return (
        <div className='menu-root-class'>
            <div className="menubar">
                <div className="hambclicker" onClick={(e) => menuToggle(e)}></div>
                <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span></div>
                <div className="title">
                    <span className='color-white'>{props.menu}</span>
                </div>
            </div>
            <MenuLinks props={props} menuStatus={menuStatus} />
        </div>
    )
}


const mapDispatchToProps = {
    selectMenu
};

const mapStateToProps = ({ MenuReducer }) => {
    const { menu } = MenuReducer;
    return { menu }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));