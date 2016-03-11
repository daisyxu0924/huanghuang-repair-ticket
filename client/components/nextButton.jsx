import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {nextButton} from './style.css'
import className from 'classname'

export default class NextButton extends Component {
  handleClick(e) {
    // let action = this.props.actions.submitTicket;
    // action(e.target.value);
  }
  render() {
    let url=this.props.url;
    return(
      <div>
        <Link className={nextButton} to={url} onClick={this.handleClick.bind(this)}>
          Next
        </Link>
      </div>
    )


  }
}
