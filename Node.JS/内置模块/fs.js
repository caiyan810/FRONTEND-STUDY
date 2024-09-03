// const fs=require('fs')
// fs.readFile('F:\frontend-study\Node.JS\内置模块\test.txt',
//     'utf-8',
//     (err,date)=>{
//         console.log('文件内容是:',date)
//     }
// )

// try {
//     let content ='新的文件内容'
//     fs.writeFileSync(
//        'F:\frontend-study\Node.JS\内置模块\test.txt',
//        content
//     )
// }catch (err){
//     console.error(err)
// }

try {
    let status =fs.statSync(
        'F:\frontend-study\Node.JS\内置模块\test.txt'
    )
    console.log(status.isFile)
    console.log(status.isDirectory())
    console.log(status.size)
}catch(err){
    console.log(err)
}