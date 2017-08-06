import React from 'react'
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      isChecked: this.props.checked
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      isChecked: !this.state.isChecked
    })
  }

  handleClick() {
    alert("hello")
  }

  render() {
    console.log("Input.js render this.props.readonly", this.props.readonly)
    return (
      <input type={this.props.type}
             value={this.props.type === 'button || submit || checkbox' ? this.state.value : this.props.value}
             className={this.props.className}
             autoComplete={this.props.autoComplete}
             autoFocus={this.props.autoFocus}
             disabled={this.props.disabled}
             name={this.props.name}
             checked={this.state.isChecked}
             placeholder={this.props.placeholder}
             min={this.props.min}
             max={this.props.max}
             readOnly={this.props.readOnly}
             accessKey={this.props.accessKey}
             onChange={this.handleChange}
             onClick={this.props.click ? this.handleClick : ""}
      />
    )
  }
}

Input.propTypes = {
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.string,
  readonly: PropTypes.string
};