import './Heading.css'
import {Link} from 'react-router-dom'


function Heading(){
    return <header className="head">
        <div className="container">
            <div className="cont"> <Link to="/FitCrux-The-React-App">Home</Link> </div>
            <div className="cont"> <Link to="/about">About</Link> </div>
            <div className="cont"> <Link to="#"> Login</Link></div>
            <div className="cont"> <Link to="#">Help</Link> </div>
        </div>
    </header>
}

export default Heading;