const http=require('http')
const service =http.createServer((request,response) => {
    response.statusCode =200
    response.end('hello world')
})

service.listen(3300,()=>{
    console.log('服务器启动成功!http://localtion:3300')
})