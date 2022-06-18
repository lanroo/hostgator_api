import React from "react";
import Logo from "../../assets/hostgator-logo,svg";

import "./header.css";
export default function Header() {
    return (
        <div className="container-header">
        <div>
            <img alt="logo" src={Logo} />
        </div>
        <div></div>
    </div>
   );
}