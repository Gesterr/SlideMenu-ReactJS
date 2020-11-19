import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
    render() {

        var visibility = "hide";
        
        if(this.props.menuVisibility){
            visibility = "show";
        } else{
            visibility="hide";
        }
        return (
            <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown}
                className={visibility}>{/* В элементе div мы вызываем метод обработки событий
                handleMouseDown, когда происходит событие onMouseDown.
                Затем присваивается элементу className значение переменной visibility*/}
                <h2><a href="#">Main</a></h2>
                <h2><a href="#">About</a></h2>
                <h2><a href="#">Contact</a></h2>
            </div>
        );
    }
}
