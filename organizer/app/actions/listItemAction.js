import { ajaxRequest } from "./ajaxActions";

export const handleListItem = (emailUser, callback) => {

    let process = "?process=LoadItem";
    data = {
        email: emailUser,
    }
    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data, process, responseArray);

};