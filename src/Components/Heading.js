import './Heading.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';


function Heading() {

    var [curVal, setVal] = useState(true);

    function cl() {

        setVal(!curVal);

    }
    var str1 = "Login";
    var str2 = "Logout";
    return <header className="head">
        <div className="container">
            <div className="cont"> <Link to="/FitCrux-The-React-App">Home</Link> </div>
            <div className="cont"> <Link to="/about">About</Link> </div>
            <div className="cont" > <Link to="/login" onClick={cl}> {curVal ? str1 : str2}</Link></div>
            <div className="cont"> <Link to="#">Help</Link> </div>
        </div>
    </header>
}

export default Heading;