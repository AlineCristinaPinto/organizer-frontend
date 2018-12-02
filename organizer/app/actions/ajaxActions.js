export const ajaxRequest = (data, process, callback) => {
  
    let url = "http://192.168.0.22:8080/organizer/servletcontroller" + process;

    fetch(url, {
      method: "POST",
      headers: {Accept:"application/json",
                "Content-Type":"application/json",
                "User-Type":"mobile-client"}, 
      body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        callback(responseJson);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    );
}