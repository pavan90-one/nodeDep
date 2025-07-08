const express = require("express");
const Routes = require("./src/Routes/userRoute");
const app= express();
const bodyParser = require('body-parser')
const connectDB = require("./src/Config/database");
const  cors = require('cors');
app.use(bodyParser.json())
const corsOptions ={
   origin:'http://localhost:5173', 
   metthod:["Get","POST","PUT"],
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const productRoutes= require("./src/Routes/productsRoutes");
const salesRoutes = require("./src/Routes/Salesroutes");
const productsPrice = require("./src/Routes/productPriceRoutes");
const userSales= require("./src/Routes/Salesroutes");
app.use(userSales);
app.use(salesRoutes)
app.use(productsPrice)
app.use(productRoutes);
app.use(Routes);
//app.use(express.json());
const PORT =3000;
app.use(cors(corsOptions))
//app.use(express.urlencoded({ extended: true }))

connectDB().then(()=>{
console.log("the database connect is establed the successfully");
app.listen(PORT,()=>{
    console.log("server is runnning "+PORT);
});   
}).catch((err)=>{
    console.log("the database connect is falied ");
})
