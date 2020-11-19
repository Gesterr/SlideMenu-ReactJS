import React, { Component } from 'react'
import './MenuButton.css';

export default class MenuButton extends Component {
    render() {
        return (
                <button id="roundButton"
                    onMouseDown={this.props.handleMouseDown}></button>
                    /* Тут связывается событие onMouseDown с именем свойства, на которое
                    ссылаемся, как handleMouseDown */
        )
    }
}
