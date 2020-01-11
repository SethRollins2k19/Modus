import React from 'react'
import MainContainerComponent from "../containers/mainContainer"
import './style/headerStyle.sass'

export default class HeaderComponent extends React.Component{
    render() {
        return (
            <header className={'header'}>
                <MainContainerComponent>
                   <header className="header__inner">
                       {this.props.items.map((item)=>{
                           
                       })}
                   </header>
                </MainContainerComponent>
            </header>
        );
    }
    initLinks (){

    }
}
