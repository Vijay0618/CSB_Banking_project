import { Navigate } from "react-router-dom";


const ProtectedRoute =({children})=>{
 const loginuser=sessionStorage.getItem('LoginData')? true: false;
 return loginuser? children: <Navigate to={'/Uhome'}/>;
}

export default ProtectedRoute;