import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';



export const NavBar = () =>{
    return(
<>
<ul>
    <li><NavLink className = "index-link" to="/" >index</NavLink></li>
    <li><NavLink  className = "home-link" to="/home" >home</NavLink></li>
</ul>

    </>
    )
}