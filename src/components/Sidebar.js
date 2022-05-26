import { Link } from "react-router-dom";
import "./SideBar.scss"
function SideBar() {

    return (
        <div className="sidebar-div">

            <Link to="/"> <div className="icons-div">
                <i className="pi pi-home" style={{ 'fontSize': '2em' }}></i>
                <p style={{ "fontSize": "0.7em" }}>home</p>
            </div></Link>
            <Link to="/Profile"> <div className="icons-div">
                <i className="pi pi-user" style={{ 'fontSize': '2em' }}></i>
                <p style={{ "fontSize": "0.7em" }}>Profile</p>

            </div></Link>

            <Link to="/Jobs">  <div className="icons-div">
                <i className="pi pi-shopping-bag" style={{ 'fontSize': '2em' }}></i>
                <p style={{ "fontSize": "0.7em" }}>Jobs</p>
            </div>
            </Link>
            <Link to="Applied"><div className="icons-div">
                <i className="pi pi-save" style={{ 'fontSize': '2em' }}></i>
                <p style={{ "fontSize": "0.7em" }}>Applied</p>

            </div></Link>

        </div >

    )
}
export default SideBar;