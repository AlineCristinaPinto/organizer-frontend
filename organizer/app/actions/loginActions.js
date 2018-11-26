/* eslint-disable no-console */
import { ajaxRequest } from "./ajaxActions";
import {AsyncStorage} from "react-native";
import { Actions } from "react-native-router-flux";

export const handleLogin = (data,callback) => {

    if(data.email ==="" 
    || data.password ===""){
        return false;
    }

    let process = "?process=UserLogin";
    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data,process,responseArray);
    
};

export const handleLogout = async () =>{
    try {
        await AsyncStorage.removeItem("user");
        Actions.login();
      } catch (error) {
        console.log("AsyncStorage error: " + error.message);
      }
};