import React, {Component} from 'react'
import {Button, ButtonGroup} from 'react-bootstrap'
import {btn, btnblock, btndefault, nextButton} from './style.css'
import className from 'classname'


export default class MultiSelect extends Component {

  handleClick(e) {
    this.props.onClick(e.target.value)
  }

  render() {
    let options = this.props.options;
    let buttonClass = className(btn, btnblock, btndefault);
    return (
      <ButtonGroup>
        {options.map(
          option => <Button className={buttonClass} key={option} onClick={this.handleClick.bind(this)} value={option}>{option}</Button>
        )}
      </ButtonGroup>
    )
  }

}
