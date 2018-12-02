import { ajaxRequest } from "./ajaxActions";

export const handleListTag = (emailUser, callback) => {

    let process = "?process=LoadTag";
    data= {
        email: emailUser,
    }
    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data, process, responseArray);
};