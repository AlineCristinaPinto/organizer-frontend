import { ajaxRequest } from "./ajaxActions";


export const handleRegistration = (data) => {

    if(data.email ==="" 
    || data.name === ""
    || data.password ===""
    || data.confirmPassword ===""){
        return false;
    }

    if(data.password === data.confirmPassword){
        let process = "?process=CreateUser";
        let response = ajaxRequest(data);
        return response;
    }else{
        return false;
    }
};