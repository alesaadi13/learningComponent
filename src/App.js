import React, {Component} from 'react';
import './App.css';
import NavMenu from './components/Menu/NavMenu'
import Input from './components/Input/Input'
import Img from './components/Image/Img'
import ImgTest from  './assets/images/img.jpg'
import Heading from './components/Heading/Heading'
import HeadingOne from './components/Heading/HeadingOne'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu/>
        <Input type="time" className="btnStyle" autoFocus="true"/>
        <br/>
        <br/>
        <Input type="number" className="btnStyle" min="1"/>
        <br/>
        <Input type="text" className="btnStyle" autoComplete="on" autoFocus="true"/>
        <br/>
        <br/>
        <Input type="button" className="" value="button" click="true" disabled="true"/>
        <br/>
        <br/>
        <Input type="submit" className="" value="submit" click="true" accessKey="o"/>
        <br/>
        <br/>
        <Input type="password" className="btnStyle"/>
        <br/>
        <Input type="checkbox" checked="false"/>
        <br/>
        <Input type="text" className="btnStyle" autoFocus="true" placeholder="my placeholder"/>
        <Input type="text" className="btnStyle" readOnly="readonly"/>

        <Img src={ImgTest} width="200" height="100"/>


        <Heading text="h1" className="heading-style" count={1}/>
        <Heading text="h2" className="heading-style" count={2}/>
        <Heading text="h3" className="heading-style" count={3}/>

        <HeadingOne text="hello h1"/>
      </div>
    );
  }
}

export default App;
