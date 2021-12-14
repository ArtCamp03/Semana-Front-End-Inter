import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

imoprt SignIn from '../pages/SignIn';
import SignUp from '../pages/SingUp';
import Dashboard from '../pages/Dashboard';

export const Router = () => {
    return{
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn /} /> 
                <Route path="/singup" element={<SignUp /} /> 
                <Route path="/dashboard" element={<Dashboard /} /> 
            </Routes>
        </BrowserRouter>
    }
}

export default Router