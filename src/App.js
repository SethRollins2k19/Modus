import React from 'react'
import HeaderComponent from "./component/headerComponent";
// import bg from './assets/header-bg.png'
export default class App extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent items={[{'#':'main'},{'#000':'second'}]}/>
                MaINT theme
                {/*<img src={bg} alt=""/>*/}
            </div>
        )
    }
}