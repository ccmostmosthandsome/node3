var http = require('http');
http.createServer(function(req,res){
    if(req.url == '/write'){//服务器写入cookie的时候
        //设置响应头中Set-Cookie,客户端可以读取到此响应头并将cookie保存在本地
        res.setHeader('Set-Cookie',['age=6','home=beijing']);
        res.end();
    }else if(req.url == '/read'){//服务器读取cookie的时候 // 前段设置cookie的 是通过document.cookie 就可以了 
        //浏览器会自动把我们cookie 放在cookies字段 
        var cookie = req.headers['cookie'];
        res.end(cookie);
    }else{
        res.end('404');
    }
}).listen(9090);
