import React from 'react'
import AccordionBody from './AccordionBody'

export default class Accordion extends React.Component {
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
                <AccordionBody/>
            </div>
        )
    }
}