(this["webpackJsonpsailor-moon-react-app"]=this["webpackJsonpsailor-moon-react-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Sailor Moon","image":"./imgs/sailor-moon.jpg"},{"id":2,"name":"Sailor Mercury","image":"./imgs/mercury.jpg"},{"id":3,"name":"Sailor Mars","image":"./imgs/mars.jpg"},{"id":4,"name":"Sailor Jupiter","image":"./imgs/jupiter.jpg"},{"id":5,"name":"Sailor Venus","image":"./imgs/venus.jpg"},{"id":6,"name":"Sailor Saturn","image":"./imgs/saturn.jpg"},{"id":7,"name":"Sailor Uranus","image":"./imgs/uranus.jpg"},{"id":8,"name":"Sailor Neptune","image":"./imgs/neptune.jpg"},{"id":9,"name":"Sailor Pluto","image":"./imgs/pluto.jpg"},{"id":10,"name":"Mini-Moon","image":"./imgs/mini-moon.jpg"}]')},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(2),o=a.n(s),r=a(3),c=a(4),m=a(7),u=a(5),l=a(8);a(14);var g=function(e){return i.a.createElement("img",{onClick:function(){return e.imageClick(e.id,e.name,e.clicked)},className:"rounded imageBorder",src:e.image,alt:e.name,key:e.id})};var d=function(e){return i.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};a(15);var p=function(e){return i.a.createElement("h1",{className:"title"},e.children)};var f=function(e){return i.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":""," text-center")},e))};var S=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return i.a.createElement("div",Object.assign({className:t},e))},h=a(6),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={scouts:h,message:"Click a Sailor Scout to Begin!",score:0,topScore:0},a.shuffleImages=function(){console.log(a.state.scouts),a.setState({scouts:a.state.scouts.sort((function(){return Math.random()-.5}))})},a.imageClick=function(e,t,n){var i=a.state.scouts;i.forEach((function(t){t.id===e&&t.clicked?(i.forEach((function(e){e.clicked=!1})),a.setState({message:"Sorry - You Lose.",score:0})):t.id!==e||t.clicked||(t.clicked=!0,a.setState({message:"Yay - Adding 1 to Your Score.",score:a.state.score+1,topScore:a.state.score+1>a.state.topScore?a.state.score+1:a.state.topScore}))})),a.state.score+1===i.length&&(alert("you won!"),a.setState({message:"Play again!",score:0,topScore:0})),a.shuffleImages()},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.shuffleImages()}},{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(p,null,"The Sailor Scouts - ",this.state.message," Your score is ",this.state.score," || Top Score: ",this.state.topScore),i.a.createElement(f,null,this.state.scouts.map((function(t){return i.a.createElement(S,{size:"sm"},i.a.createElement(g,{id:t.id,key:t.id,name:t.name,image:t.image,shuffle:e.shuffleImages,imageClick:e.imageClick}))}))))}}]),t}(n.Component);a(16);o.a.render(i.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.21954b60.chunk.js.map