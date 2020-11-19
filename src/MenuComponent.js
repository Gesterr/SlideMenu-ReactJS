import React, { Component } from 'react'
import MenuButton from './MenuButton';
import Menu from './Menu';

export default class MenuComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            visible:false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toogleMenu = this.toogleMenu.bind(this);
    }

    toogleMenu(){
        this.setState({
            visible:!this.state.visible /* При активации метода, ставится состояние которое НЕ равное состоянию в state */
        });
    }

    handleMouseDown(e){
        this.toogleMenu();

        console.log('its working');
        e.stopPropagation();/* Прекращает дальнейшую передачу текущего события. */
    }

    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible}/>
                <p>Найдёшь пункт, который здесь лишний?</p>
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>Sit</li>
                    <li>Bumblebees</li>
                    <li>Aenean</li>
                    <li>Consectetur</li>
                </ul>
            </div>
        )
    }
}
