
import eye from "../images/ojo.png";

function Header() {

    return (

        <header className = "header" >

            <div className = "headerContainer container">

                <div className = "logo">

                    <img className = "imageLogo" src={eye} alt="" />

                    <p className = "textLogo">
                        national
                        <span>psychics</span>
                    </p>

                </div>

                <p className="callUs">
                    Call:
                    <span>1.525.545.6854</span>
                </p>

            </div>

            <div className="LightGrayDivider" ></div>
                    
        </header>        

    )

}

export default Header
