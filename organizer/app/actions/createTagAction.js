import { ajaxRequest } from "./ajaxActions";


export const handleTagCreation = (data, callback) => {

    let process = "?process=CreateTag";

    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data,process,responseArray);

};