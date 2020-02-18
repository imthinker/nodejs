const connection = require('../sqlConfig')
const Response = require('../response')
//注册
function register (req,res){
    let {name,pwd} = req.body;
    let response = new Response(false,'',-1)
    if(name&&pwd){
        connection.query(`SELECT * FROM user WHERE name="${name}"`,(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                response = new Response(false,'用户名已存在',-1)
                res.send(response)
            }else{
                connection.query(`INSERT INTO user (name,pwd) VALUES ("${name}","${pwd}")`,(err1,result1)=>{
                  if(err1) throw err1;
                  if(result1.affectedRows == 1){
                    response = new Response(true,'注册成功',1)
                    res.send(response)
                  }else{
                    response = new Response(false,'注册失败',-1)
                    res.send(response)
                  }
                })
            }
        })
    }else{
        response = new Response(false,'请填写完整信息',-1)
        res.send(response)
    }
}
//登陆
function login (req,res){
  let {name,pwd} = req.body;
  let response = new Response(false,'',-1)
  if(name&&pwd){
      connection.query(`SELECT name,join_time,score FROM user WHERE name="${name}" AND pwd="${pwd}"`,(err,result)=>{
          if(err) throw err;
          if(result.length>0){
              response = new Response(true,'登陆成功',1,JSON.parse(JSON.stringify(result))[0])
              res.send(response)
          }else{
            response = new Response(false,'账号或密码错误',-1)
            res.send(response)
          }
      })
  }else{
      response = new Response(false,'请填写完整信息',-1)
      res.send(response)
  }
}
module.exports = {
  register,
  login,
};