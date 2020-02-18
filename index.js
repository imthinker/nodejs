const express = require("express");
const bodyParser = require('body-parser');
const app = express();

//参数解析
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//定义静态文件
app.use('/static',express.static('./static'))
  
//接口路由
let {register,login} = require('./api/register');
app.post('/register',(req,res)=>register(req,res))
app.post('/login',(req,res)=>login(req,res))
//定义端口
app.listen(3000,()=>{
    console.log('服务器已启动：http://localhost:3000')
})