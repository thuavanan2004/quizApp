import {NavLink, Outlet} from "react-router-dom";
import "./LayoutDefaul.scss";
import  {getCookie}  from "../helpers/cookie";
import {useSelector} from "react-redux";
import logo from "../assets/images/—Pngtree—quiz time bubble speech banner_9147207.png";

function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);
    console.log(isLogin);
    return (
        <>
            <div className="layout-default">
               <div className="container">
               <header className="layout-default__header">
                    <div className="layout-default__logo"> <img src={logo} alt="logo" /></div>
                    <div className=" layout-default__menu">
                        { token ? (
                                    <>
                                    <div ><NavLink className="item" to="/"> Home</NavLink></div>
                                    <div ><NavLink className="item"  to="/topic"> Topic</NavLink></div>
                                    <div ><NavLink className="item"  to="/answers"> Answers</NavLink></div>
                                    </>
                                ):(<></>) 
                        }
                    </div>
                    <div className="layout-default__account">
                        { token ? (
                            <>
                            <NavLink className="item"  to="/logout">Đăng xuất</NavLink>
                            </>
                            ) : (
                            <>
                            <NavLink className="item"  to="/login"> Đăng nhập</NavLink>
                            <NavLink className="item"  to="/register"> Đăng ký</NavLink>
                            </>
                        )}
                    </div>
                </header>
                    <main className="layout-default__main">
                        <Outlet/>
                    </main>
                    
               </div>
               <footer className="layout-default__footer">
                        Copyright @ 2024 by Devdynamo
                </footer>
            </div>
            
        </>
    )
}
export default LayoutDefault;