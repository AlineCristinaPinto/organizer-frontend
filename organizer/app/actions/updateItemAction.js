import { ajaxRequest } from "./ajaxActions";


export const handleItemCreation = (data, callback) => {

    let process = "?process=UpdateItem";

    console.log(data);

    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data,process,responseArray);

};