# vuejiaoxue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


重要说明:现在的home母版页改成了homepage目录下的母版页,代码要精炼很多


一.安装sass
cnpm install -D sass-loader
//sass-loader依赖于node-sass
cnpm install -D node-sass


二.nginx配置(开启了gzip)
server {
        listen 6002;
        server_name 101ycy.com:6002 www.101ycy.com:6002;
        root /home/web/vuejiaoxue;
        index index.html index.htm;

        location /api {
                add_header 'Access-Control-Allow-Origin' '*';
                add_header 'Access-Control-Allow-Credentials' 'true';
                add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
                add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
                proxy_pass http://localhost:10001/;
        }
        location / {
                 try_files $uri $uri/ /index.html last;
                 index index.html;
                 gzip  on;
			  gzip_types text/plain application/x-javascript application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;

        }
    }
