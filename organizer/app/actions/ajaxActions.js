export const ajaxRequest = (data,process) => {
    let url = "http://192.168.0.22:8080/1/ServletTeste";
    fetch(url, {
        method: "POST",
        headers: {"Content-Type":"application/x-www-form-urlencoded",
                 "User-Type":"mobile-client"}, 
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};