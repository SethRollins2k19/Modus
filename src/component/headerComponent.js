import React from 'react'
import MainContainerComponent from "../containers/mainContainer"
import './style/headerStyle.sass'
import Logo from "./logoComponent";
import Btn from "./btnComponent";
export default class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }
    render() {
        return (
            <header className={'header'}>
                <MainContainerComponent>
                   <header className="header__inner">
                        <Logo/>
                        <NavComponent linksArr={this.props.links}/>
                        <div className={'btnBlock'}>
                            <Btn title={'login'}/>
                            <Btn title={'register'}/>
                        </div>
                       <HamburgerMenu/>
                   </header>
                </MainContainerComponent>
            </header>
        );
    }
}

function NavComponent(props) {
    const links = props.linksArr.map((link,keys)=><LinkComponent key={keys} linkTitle={link}/>)
    return (
        <nav className={'nav'}>
            {links}
        </nav>
    )
}

function LinkComponent(props){
    return (
        <a href={"#"} className={'nav__link'}>{props.linkTitle}</a>
    )
}
function HamburgerMenu (props) {
    return (
        <div className={'hamburgerMenu'}>
            <div className={'hamburgerMenu__inner'}>

            </div>
        </div>
    )
}