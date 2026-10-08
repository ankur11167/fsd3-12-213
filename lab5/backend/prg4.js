import express from 'express';

const app = express();

app.get("/api/products",(req,res)=>{
    //let sortedProducts = products.map(({name, image , price, id})=>({
       // name,
      //  image, 
     //   price,
     //   id,


  //  }));
  let sortedProducts = products.map(({description , reviews, ...rest})=>
rest,
);

    res.status(200).json({count:sortedProducts.length, data:sortedProducts})

});



app.use((req, res) =>{
    res.status(404).send("<h1>Page not found");
});


app.listen(4000, () => console.log("prg4 is running at 4000"));