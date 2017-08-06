import React from 'react'
import PropTypes from 'prop-types';
import img from '../../assets/images/img.jpg'

export default class Img extends React.Component {

  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        width={this.props.width}
        height={this.props.height}
        ismap={this.props.isMap}
      />
    )
  }
}

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};