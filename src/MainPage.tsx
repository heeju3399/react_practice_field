import React from "react";
import { NavLink } from "react-router-dom";

function text(value: string): JSX.Element {
    return <span style={{ fontSize: '30px', }}>{value}</span>
}

export default function MainPage() {
    const myStyle = { lineHeight: '500%' }
    return (
        <>
            <h2>Router-MainPage</h2>
            <ul >
                <li style={myStyle}><NavLink to="/heeju_main">{text('heeju react page')}</NavLink></li>
                <li style={myStyle}><NavLink to="/newproject">{text('신교적')}</NavLink></li>
                {/* <NavLink to="/**">**</NavLink> */}

            </ul>
        </>
    )
}