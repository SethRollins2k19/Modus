import React from 'react'
import './ContainersStyle.sass'

export default class MainContainerComponent extends React.Component{
    render() {
        return (
            <div className={'main-container'}>
                {this.props.children}
            </div>
        );
    }
}