#HTTP Module ... 
>IT is built in Node.js module which allow developer to create web server and web client without installing any external package.
>one of the most important module in node.js originally designed for building scalable network and applications web servers.

1. create web servsrs
2. handle client request
3. built rest apis
4. non blocking I/O
5. foundation of Express.js
6. npm -> node package manager. 
node pr4.js 
 nodemon install ->  npm i nodemon -D.
 ## http status course 
 -200-> Ok
 - 201-> Created
 - 400 -> Bad request
- 401  ->   unauthorized
- 403  -> forbidden
 -404 ->not found 
 -500 ->Internal server error
 - server can sync to the client 
 1. html file -> prg1, prg2, prg3
 2. json data -> prg5
 3. plain file  -> prg4
 4. js   file
 5. any file to download
 7.etc

 ## type of information -> res.writehead(),  res.setHeader()
 1. text/html -> 
 2. text/json, application ->


get      no parameter will pass to the   server when we receive all items
post     we pass the value from body section in json format of api tester (echo api)
delete   to delete any products we pass parameter that is the id of the products
update.   we pas id from url and data to update from body
























## content type 


1.res.writeHead
2.res.setHeader
3.res.statuscode

## send html file to client 

1. html file

-read html file using createReadstream
-pipe it with res object 

2. html content 
send any html tags/content by using 
res.end(',any html tag')

## JSON
JSON always store data in key value pair in closed by {} array csn be stored by [] one pair of {} will represent one object and 
its property will be seperated by , 

{
    id:1;
    name:'Mobile',
    price:'25000',
    rating:'4.5',
    review:'200'
}

