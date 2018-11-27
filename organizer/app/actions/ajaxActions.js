export const ajaxRequest = (data, process, callback) => {
<<<<<<< HEAD
    let url = "http://192.168.0.22:8080/organizer/servletcontroller" + process;
=======
    let url = "http://192.168.0.22:25413/organizer/servletcontroller" + process;
	
>>>>>>> 27dc7e9acac9dd1e2c7383e7d68ee328fccfd4a7
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