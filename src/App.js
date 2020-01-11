import React from 'react'
import HeaderComponent from "./component/headerComponent";

export default class App extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent items={[{'#':'main'},{'#000':'second'}]}/>
                MaINT theme
            </div>
        )
    }
}