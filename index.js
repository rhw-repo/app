// install a package.json with default options, example, with npm run 'npm init -y'from the command line 
//  install remote Express modules, example, with npm run 'npm install express' from the command line 

// creates an Express app which can be viewed in localport:8080 using a get request

const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {

    response.send(await readFile('./home.html', 'utf8'));

});

app.listen(process.env.PORT || 8080, () => console.log(`App available on http://localhost:8080`))

