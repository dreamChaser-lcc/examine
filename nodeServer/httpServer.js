const http = require('http');
function httpServerDemo(){
    const server = http.createServer((req,res)=>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html;cahrset=UTF-8')
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        res.end('中文\n')
    })
    server.listen(8025,()=>{
        console.log("run httpServerDemo")
    })
}
// httpServerDemo()

const url = require('url');
/**
 * JSONP跨域 //JSONP返回的字符能被html当成一个js代码去执行
 */
function JSONPDemo(){
    const server = http.createServer((req,res)=>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html;cahrset=UTF-8')
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        let urlStr = req.url;
        let urlObj = url.parse(urlStr,true);
        switch(urlObj.pathname){
            case '/jsonp/api':
                res.write(`${urlObj.query.q}('获取到信息了')`); //JSONP返回的字符能被html当成一个js代码去执行
            break
            default :
                res.write('请求路径不是/jsonp/api')
            break
        }
        res.end();
    })
    server.listen(8025,()=>{
        console.log("run JSONPDemo")
    })
}
// JSONPDemo()
/**
 * CORS跨域 需要服务器在响应头添加Origin配置
 */
function CORSDemo(){
    const server = http.createServer((req,res)=>{
        // res.statusCode = 200
        // res.setHeader(200)
        res.writeHead(200, {'Content-Type':'text/html;cahrset=UTF-8',"Access-Control-Allow-Origin":'*'});
        res.write('456')
        res.end();
    })
    server.listen(8025,()=>{
        console.log("run CORSDemo")
    })
}
// CORSDemo();
const {createProxyMiddleware} = require('http-proxy-middleware');
 function proxy1(){
    const server = http.createServer( async (req,res)=>{
        const proxy = createProxyMiddleware('/api',{
            target:'http://106.15.204.66:9000',
            changeOrigin:true,
            pathRewrite:{"^/api":""}
        })
       
       let abc = await proxy(req,res);
       console.log(abc)
    })
    server.listen(8025,()=>{
        console.log("run CORSDemo")
    })
}
// proxy1();
class allAttribute {
    constructor(name,port,http){
        this.port =port;
        this.name = name;
        this.http =http;
        if(this.name='JSONP'){
            let jsonp = this.getJSONP()
            let server = this.createServer(jsonp);
            this.run(server)
        }
    }
    run(server){
        server.listen(8025,()=>{
            console.log("run "+this.name)
        })
    }
    createServer(callback){
        return http.createServer(callback)
    }
    getJSONP(){
        return (req,res)=>{
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html;cahrset=UTF-8')
            res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
            let urlStr = req.url;
            let urlObj = url.parse(urlStr,true);
            switch(urlObj.pathname){
                case '/jsonp/api':
                    res.write(`${urlObj.query.q}('获取到信息了')`); //JSONP返回的字符能被html当成一个js代码去执行
                break
                default :
                    res.write('请求路径不是/jsonp/api')
                break
            }
            res.end();
        }
    }
    getProxy(){
        return async (req,res)=>{
            const proxy = createProxyMiddleware('/api',{
                target:'http://106.15.204.66:9000',
                changeOrigin:true,
                pathRewrite:{"^/api":""}
            })
           
           let abc = await proxy(req,res);
           console.log(abc)
        }
    }
    getCORS(){
        return (req,res)=>{
            // res.statusCode = 200
            // res.setHeader(200)
            res.writeHead(200, {'Content-Type':'text/html;cahrset=UTF-8',"Access-Control-Allow-Origin":'*'});
            res.write('456')
            res.end();
        }
    }
}