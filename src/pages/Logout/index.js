import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookies();
    
    useEffect(() => {
        dispatch(checkLogin(false));
        navigate("/login");
    }, [dispatch, navigate]);


    return (
        <>
        </>
    )
}
export default Logout;