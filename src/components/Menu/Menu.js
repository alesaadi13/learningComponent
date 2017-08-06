import React from 'react'

var isHover;
export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            isShowSubMenu: false
        }
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleOnMouseEnter() {
        isHover = setTimeout(() => {
            this.setState({isShow: !this.state.isShow});
            console.log("Menu.js handleOnMouseEnter this.state.isShow:", this.state.isShow)
        }, 100);
    }

    handleOnMouseLeave() {
        clearTimeout(isHover);
        if (this.state.isShow === true) {
            this.setState({isShow: !this.state.isShow})
            console.log("Menu.js handleOnMouseLeave this.state.isShow:", this.state.isShow)
        }
    }

    handleMouseEnter() {
        isHover = setTimeout(() => {
            this.setState({isShowSubMenu: !this.state.isShowSubMenu});
            console.log("Menu.js handleOnMouseEnter this.state.isShow:", this.state.isShow)
        }, 100);
    }

    handleMouseLeave() {
        clearTimeout(isHover);
        if (this.state.isShowSubMenu === true) {
            this.setState({isShowSubMenu: !this.state.isShowSubMenu})
            console.log("Menu.js handleOnMouseLeave this.state.isShow:", this.state.isShow)
        }
    }

    render() {
        let data = [
            {
                "text": "Link 1",
                "url": "#"
            },
            {
                "text": "Link 2",
                "url": "#"
            },
            {
                "text": "Link 3",
                "url": "#",
                "submenu": [
                    {
                        "text": "Sublink 1",
                        "url": "#",
                        "submenu": [
                            {
                                "text": "SubSublink 1",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "text": "Sublink 2",
                        "url": "#",
                        "submenu": [
                            {
                                "text": "SubSublink 2",
                                "url": "#"
                            }
                        ]
                    }
                ]
            }
        ]
        console.log("Menu.js render this.state.isShow:", this.state.isShow)
        return (
            <ul className="menu">
                {/*  {
                 data.map((item, index) =>
                 <li key={index}>
                 {item.text}
                 </li>
                 )
                 }*/}
                <li onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                 <span>
                 menu
                 </span>
                    <ul className={!this.state.isShow ? "hide" : 'show'}>
                        <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <a>
                                sub menu
                            </a>
                            <div className={!this.state.isShowSubMenu ? "hide" : 'show'}>
                                title1
                            </div>
                        </li>
                        <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <a>
                                sub menu
                            </a>
                            <div className={!this.state.isShowSubMenu ? "hide" : 'show'}>
                                title2
                            </div>
                        </li>
                    </ul>
                </li>
                <li onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                 <span>
                 menu1
                 </span>
                    <ul className={!this.state.isShow ? "hide" : 'show'}>
                        <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <a>
                                sub menu1
                            </a>
                            <div className={!this.state.isShowSubMenu ? "hide" : 'show'}>
                                title1
                            </div>
                        </li>
                        <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <a>
                                sub menu1
                            </a>
                            <div className={!this.state.isShowSubMenu ? "hide" : 'show'}>
                                title2
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}