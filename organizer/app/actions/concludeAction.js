import { ajaxRequest } from "./ajaxActions";

export const handleConclude = (emailUser, item, callback) => {
	let process;
	if(item.identifierStatus == "A"){
		process = "?process=ConcludeTarefa";
	}else if(item.identifierStatus == "C"){
		process = "?process=ChangeTarefaStatus";
	}
    console.log(emailUser);
    data= {
        email: emailUser,
		takeId: item.seqItem,
    }
    const responseArray = async (responseJSON) => {
        callback(responseJSON);
    };

    ajaxRequest(data, process, responseArray);

};