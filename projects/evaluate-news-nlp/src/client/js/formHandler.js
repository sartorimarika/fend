function handleSubmit(event) {
    event.preventDefault();
  
    // get the user's submission
    //const format = document.querySelector("input[name=format]:checked").value;
    const input = document.getElementById("input-text").value;
    const data = { input };
  
    //Send to server and use response to updateUI
    ClientLibrary.postData("http://localhost:8081/submit", data).then((res) => {
      ClientLibrary.updateUI(res);
    });
  }
  
  export { handleSubmit };

/*function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

Client.checkForName(formText)
export { handleSubmit }
*/
