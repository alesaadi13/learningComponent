import React from 'react'

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      isShowSubMenu: false
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
        <li>
                 <span>
                 menu
                 </span>
          <ul className="subMenu">
            <li>
              <a>
                sub menu1
              </a>
              <div className="subSubMenu">
                title1
              </div>
            </li>
            <li>
              <a>
                sub menu2
              </a>
              <div className="subSubMenu">
                title2
              </div>
            </li>
          </ul>
        </li>
        <li>
                 <span>
                 menu1
                 </span>
          <ul className="subMenu">
            <li>
              <a>
                sub menu3
              </a>
              <div className="subSubMenu">
                title3
              </div>
            </li>
            <li>
              <a>
                sub menu4
              </a>
              <div className="subSubMenu">
                title4
              </div>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}