# Express



## Steps
1-> create project folder
2-> create folder (frontend, backend) in root (lab5)
3. open terminal and reach to backend by cd... 
4. cd lab5 
5. cd backend
6.  type npm init -y
7. install nodemon 'npm i nodemon -D
8. install express npm i express 
9. update backend/ package.json
   - CHANGE type 'type': "module"
   - CHNAGE script 


   script :{
    "start" : "node app.js"
    "dev" : nodemon prg1.js
   }
   ````
10. add `lab5/backend/node_modules` to .gitignore
11. create `prg1.js` in backend
12. write the script below to stsrt express server

````
import express from 'express';
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello express");
});

// this line must be last line 
app.listen(4444, () => console.log("prg1 is running at 4444"));