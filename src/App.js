import React from 'react'
import HeaderComponent from "./component/headerComponent";
// import bg from './assets/header-bg.png'
export default class App extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent links={['Home','About Us','Services','Careers','News','Documentation']}/>
                MaINT theme
                {/*<img src={bg} alt=""/>*/}
            </div>
        )
    }
}