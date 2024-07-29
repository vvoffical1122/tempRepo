// const {readFile, writeFile} = require('fs')

// readFile('./test.txt','utf8', (err, res)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(res)
// })

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.write("learning HTTP SERVERS using node")
//     res.end()
// })

// server.listen(5000)

const _ = require('lodash')
const item = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(item)
console.log(_.flattenDeep(item))