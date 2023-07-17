const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const _ =require("lodash");

const homeStartingContent="jfgbfhsjfd  skjf bsdfwhyi skdjvbhj uetweyiuurw9erwahr vmdvbfdn iutywrur w vksjdfsiofj";
const aboutContent="WOW About me greta to know yeah  zoiquhryuo;f m";
const contactContent="contact me at any timeeeeeeeee";

const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var array=[];
app.get("/",function(req,res){
    res.render("home",{StartingContent:homeStartingContent,array:array});
   //console.log(array);
});

  

app.get("/about",function(req,res){
    res.render("about",{StartingContent:aboutContent});
    res.redirect("/about");
});
app.get("/contact",function(req,res){
    res.render("contact",{StartingContent:contactContent});
    res.redirect("/contact");
});
app.get("/compose",function(req,res){
 res.render("compose");


});
app.post("/compose",function(req,res){
   let post={
  title:req.body.t1,
  content:req.body.text1
   


   };
    array.push(post)
  
     res.redirect("/");
     
 });
 app.get('/array/:topic',function(req,res){
    const top=_.lowerCase(req.params.topic);

    array.forEach(function(post){
        const title=_.lowerCase(post.title);
    if(top===title){
        const t1=post.title;
    const c1=post.content;
    res.render("post" ,{t1:t1,c1:c1});
    //res.redirect("/array/:topic");
    }
});

   
});


 













app.listen(3000,function(req,res){
    console.log("listening");
});