import React from 'react'
import HeaderComponent from "./component/headerComponent";
import './component/style/mainStyle.sass'
import './component/style/media.sass'
// import bg from './assets/header-bg.png'
export default class App extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent links={['Home','About Us','Services','Careers','News','Documentation']}/>
            </div>
        )
    }
}