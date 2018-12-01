/* eslint-disable no-console */
import { ajaxRequest } from "./ajaxActions";
import {AsyncStorage} from "react-native";
import { Actions } from "react-native-router-flux";


export const handleLogout = async () =>{
    try {
        await AsyncStorage.removeItem("user").then(Actions.login());
        
      } catch (error) {
        console.log("AsyncStorage error: " + error.message);
      }
};