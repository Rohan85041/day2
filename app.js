//create a server
//s1-import the package
const express=require('express');
const app=express();
const port=5000
app.use(express.json());
let products=[{
    id:1,
    name:"iphone13",
    price:80000,
    category:"mobiles",
    qty:500
},{id:2,
    name:"one plus nord",
    price:20000,
    category:"mobiles",
    qty:1000}]

//api
app.get('/',function(req,res){
    res.send("server started")
})
//ecommerce products api
//fetch all products
app.get('/products',function(req,res){
    res.json({products});
})
//fetch single products
app.get('/product/:id',function(req,res){
    let productid=req.params.id
    res.status(404).json(products[productid-1])
})

app.post('/products',function(req,res){
    const {id,name,price,category,qty}=req.body;
  const newproduct={id,name,price,category,qty}
  products.push(newproduct);
  res.json({
    message:"new product is added",
    newproduct
  })

})



app.listen(port,function(){
    console.log(`the server is running on ${port}`)
})