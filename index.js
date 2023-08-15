const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');


let PORT = 3000;
let server = express();

const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];
	
server.use(...middlewares);

server.get("/submit/:key", (req, res) => {
    console.dir(req.params.key);
    // fetch('https://api.github.com/users/github')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     const response = await fetch('https://httpbin.org/post', {method: 'POST', body: 'a=1'});
    //     const data = await response.json();
        
    //     console.log(data);
    res.send(200)
});

server.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>  
        <html>  
        <head>  
            <script>  
                function fun() {  

                    const name = document.querySelector("#key").value;
                    alert(name) 
                    fetch('/submit/' + name)
                    .then((response) => {});
                }  
            </script>  
        </head>  
        <body>  
            <label for="key">Key:</label>
            <input type="text" id="key" name="key">
            <br><br>
            <br><br> 
            <button onclick = "fun()">Submit</button>  
        </body>  
        </html> 
    `)
});

server.listen(PORT, function(){
	console.log("server listening on port: " + PORT);
});




// (async function() {
//     let response = await fetch('https://api.github.com/users/github');
//     let jsonResponse = await response.json();
//     console.dir(jsonResponse)

//     const postReponse = await fetch('https://httpbin.org/post', {method: 'POST', body: 'a=1'});
//     const data = await postReponse.json();

// console.log(data);

//   }());







