import React from 'react'

export default class Heading extends React.Component {
  constructor(props) {
    super(props)
    this.headingFunc = this.headingFunc.bind(this);
  }

  headingFunc() {
    switch (this.props.count) {
      case 1:
        return <h1 className={this.props.className}>{this.props.text}</h1>;
        break;

      case 2:
        return <h2 className={this.props.className}>{this.props.text}</h2>;
        break;

      case 3:
        return <h3 className={this.props.className}>{this.props.text}</h3>;
        break;

      case 4:
        return <h4 className={this.props.className}>{this.props.text}</h4>;
        break;

      case 5:
        return <h5 className={this.props.className}>{this.props.text}</h5>;
        break;

      case 6:
        return <h6 className={this.props.className}>{this.props.text}</h6>;
        break;
    }
  }

  render() {
    return (
      <div>
        {
          this.headingFunc()
        }

      </div>
    )
  }
}
