import nikelogo from "../assets/nikelogo.png";

const Navigationbar=()=>{
    return(
        <nav className="navbar">
            <h1><b>Nike</b></h1>
            <ul>
                <li>New&Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
            </ul>
            <div className="btndivs">
            <button className="join-us">Join us</button>
            <button className="loginBtn">login</button>
            </div>
        </nav>
    )
}

export default Navigationbar;