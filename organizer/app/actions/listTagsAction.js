import { ajaxRequest } from "./ajaxActions";

export const handleListTags = (emailUser, callback) => {

    let process = "?process=LoadTagsToCreateItem";
    
    data = {
        email: emailUser,
    }
    
    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data, process, responseArray);

};