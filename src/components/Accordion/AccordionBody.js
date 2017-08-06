import React from 'react'

export default class AccordionBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

    }

    render() {
        return (
            <div>
                <div className="accordion">
                    <h4 onClick={this.handleClick}>عنوان</h4>
                    <div>متن</div>
                </div>
            </div>
        )
    }
}