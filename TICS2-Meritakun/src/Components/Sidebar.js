import "../App.css";
import React from 'react'
import {SidebarData} from "./SidebarData"

function sidebar() {
    return (
        <div className="Sidebar" style={{paddingRight: '10px'}}>
            <ul className="SidebarList">
                {SidebarData.map((val,key)=>{
                    return (
                    <li 
                    key={key}
                    className ="row"
                    id = {window.location.pathname === val.link ? "active" : ""}
                    onClick = {()=>{window.location.pathname=val.link}}> 
                        <div id="icon"> {val.icon} </div>
                        <div id="title"> {val.title} </div> 
                    </li>
                    );
                }
                )}
            </ul>
        </div>
    )
}

export default sidebar
