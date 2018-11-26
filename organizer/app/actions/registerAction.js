/* eslint-disable no-console */
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
        let responseArray = ajaxRequest(data,process);
    
        return responseArray;
    }else{
        return false;
    }
};