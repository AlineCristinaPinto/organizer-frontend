import { ajaxRequest } from "./ajaxActions";


export const handleItemDeletation = (userEmail, data, callback) => {

    let process = "?process=DeleteItem";

    data = {
        email: userEmail,
        id: data.seqItem
    }

    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data, process,responseArray);

};