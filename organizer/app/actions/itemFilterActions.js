import { ajaxRequest } from "./ajaxActions";

export const handleFilter = (emailUser, tags, types, callback) => {
	let process = "?process=ItemFilter";
    
    data= {
        email: emailUser,
		tag: tags,
		type: types,
    }
    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data, process, responseArray);

};