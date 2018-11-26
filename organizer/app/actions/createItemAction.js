import { ajaxRequest } from "./ajaxActions";


export const handleItemCreation = (data, callback) => {

    let process = "?process=CreateItem";

    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data,process,responseArray);

};