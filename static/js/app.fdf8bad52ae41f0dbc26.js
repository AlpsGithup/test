webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("mtWM"),i=n.n(o),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("button",{on:{click:this.getData}},[this._v("点击")]),this._v(" "),e("span",[this._v(this._s(this.txt))]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App",data:function(){return{txt:""}},methods:{getData:function(t){t||(t={}),this.$api.get("staging",t,function(t){this.txt=t.data})}}},r,!1,function(t){n("fc/z")},null,null).exports,p=n("/ocq");a.a.use(p.a);var u=new p.a({routes:[{path:"/"}]}),c="https://yo08s2qyh9.execute-api.us-west-2.amazonaws.com",l=n("GG98");function d(t,e,n,a,o){var i,r=l(t,e).type("text/plain");n&&(n=function(t){for(var e in t)null==t[e]&&delete t[e],"string"==typeof t[e]&&(console.log(typeof t[e]),t[e]=t[e].trim(),0==t[e].length&&delete t[e]);return t}(n),"POST"==t||"PUT"==t?("object"==(i=n,{}.toString.call(i).match(/\s([a-zA-Z]+)/)[1].toLowerCase())&&(n=Window.JSON.stringify(n)),r=r.send(n)):"GET"!=t&&"DELETE"!=t||(r=r.query(n))),r.end(function(t,e){t?alert("api error,HTTP CODE:"+e.status):1==e.body.success?a&&a(e.body):o?o(e.body):alert("error"+Window.JSON.stringify(e.body))})}var f={get:function(t,e,n,a){return console.log(c),d("GET",c+"/"+t,e,n,a)}};a.a.prototype.$api=f,a.a.prototype.$axios=i.a,i.a.defaults.baseURL="/api",i.a.defaults.headers.post["Content-Type"]="text/plain",a.a.config.productionTip=!1,new a.a({el:"#app",router:u,components:{App:s},template:"<App/>"})},"fc/z":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fdf8bad52ae41f0dbc26.js.map