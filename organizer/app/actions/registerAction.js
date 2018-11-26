/* eslint-disable no-console */
import { ajaxRequest } from "./ajaxActions";


export const handleRegistration = (data,callback) => {

    if(data.email ==="" 
    || data.name === ""
    || data.password ===""
    || data.confirmPassword ===""){
        return false;
    }

    if(data.password === data.confirmPassword){
        let process = "?process=CreateUser";
        const responseArray = async (responseJSON) => {
            callback(responseJSON);
        };

        ajaxRequest(data,process,responseArray);
    }else{
        return false;
    }
};