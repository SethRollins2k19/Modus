import React from 'react'
import './style/btnStyle.sass'

export default function Btn (props) {
    const btn = props.type === 'link' ? <a className={'btn'} href={props.address}><p className={'btn__text'}>{props.title}</p></a> : <button className={'btn'} data-href={props.address}><div className={'btn__text'}>{props.title}</div></button>
    return btn
}
