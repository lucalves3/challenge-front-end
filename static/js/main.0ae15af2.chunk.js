(this["webpackJsonpchallenge-front-end"]=this["webpackJsonpchallenge-front-end"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(20),r=n.n(c),o=(n(27),n(2)),i=(n(28),n(4)),l=n(5),u=n(7),j=n(6),h=n(9),b=n.n(h),p=n(14),d=n(8);function m(){return A.apply(this,arguments)}function A(){return(A=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=900");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(0),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).getFunction=e.getFunction.bind(Object(d.a)(e)),e.getAllPokes=e.getAllPokes.bind(Object(d.a)(e)),e.filterApiPoke=e.filterApiPoke.bind(Object(d.a)(e)),e.state={pokeApi:[],allPokes:[],nameAllPokes:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getFunction(),this.getAllPokes()}},{key:"getAllPokes",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.setState({allPokes:[t.results],nameAllPokes:[t.results.map((function(e){return e.name}))]});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFunction",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t,n,a,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],e.next=4,m();case 4:a=e.sent,s=0;case 6:if(!(s<20)){e.next=16;break}return t.push(a.results.map((function(e){return e.name}))[s]),e.next=10,O("".concat(t[s]));case 10:c=e.sent,n.push(c),this.setState({pokeApi:[n]});case 13:s+=1,e.next=6;break;case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"filterApiPoke",value:function(){var e=this.state.pokeApi.map((function(e){return e.map((function(e){return e.types.map((function(e){return e.type}))}))}));console.log(e.map((function(e){return e.name})));var t=e.filter((function(e){return"grass"===e.name}));console.log(t)}},{key:"componentWillUnmount",value:function(){this.getFunction()}},{key:"render",value:function(){var e=this.state.pokeApi;return Object(v.jsxs)("main",{className:"section-mainPokes",children:[Object(v.jsxs)("section",{children:[Object(v.jsx)("button",{className:"button-vertodos",value:"Todos",children:"Todos"}),Object(v.jsx)("button",{className:"button-vertodos",value:"fire",onClick:this.filterApiPoke,children:"Fire"}),Object(v.jsx)("button",{className:"button-vertodos",value:"Eletric",children:"Eletric"}),Object(v.jsx)("button",{className:"button-vertodos",value:"Water",children:"Water"})]}),Object(v.jsx)("section",{className:"section-cards-api-pokemon",children:e.map((function(e){return e.map((function(e){return Object(v.jsxs)("section",{className:"section-cards-pokemon",children:[Object(v.jsxs)("div",{className:"div-poke-heart",children:[Object(v.jsx)("label",{children:Object(v.jsx)("input",{type:"checkbox"})}),Object(v.jsx)("img",{className:"pokemon-image",src:e.sprites.front_default,alt:e.name})]}),Object(v.jsxs)("p",{className:"name-pokemon",children:[" ",e.name," "]}),Object(v.jsxs)("p",{children:[" ID:",e.id]}),Object(v.jsx)("div",{className:"div-elet-fire",children:e.types.map((function(e){return Object(v.jsx)("p",{className:"tag-p-".concat(e.type.name),children:e.type.name},e.url)}))}),Object(v.jsx)("button",{className:"button-pokemons-details",children:"Ver detalhes"})]},e.name)}))}))})]})}}]),n}(s.a.Component),f=n(13),k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("header",{className:"section-header",children:[Object(v.jsx)("img",{className:"pokemon-logo-header",src:"data:image/png;base64,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",alt:"pokemon logo"}),Object(v.jsxs)("section",{className:"links-header-section",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h1",{className:"buttons-links-header-favoritos",children:Object(v.jsx)(f.b,{to:"/favorite",children:"Favoritos"})})}),Object(v.jsx)("div",{children:Object(v.jsx)("h1",{className:"buttons-links-header-procurar",children:Object(v.jsx)(f.b,{to:"/procurar",children:"Procurar"})})}),Object(v.jsx)("div",{children:Object(v.jsx)("h1",{className:"buttons-links-header-verTodos",children:Object(v.jsx)(f.b,{to:"/vertodos",children:"Ver todos"})})})]}),Object(v.jsx)(f.b,{to:"/challenge-front-end",children:Object(v.jsxs)("button",{className:"button-leave-header",children:[Object(v.jsx)("p",{className:"tag-p-leave",children:"Sair"}),Object(v.jsx)("img",{className:"leave-vector",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBjZLREcIgDIaTHL7rBh2BFh2gG9gJdANX0BHcwA10gy7QUkboCA4gRFB7V2nvaB7g4P+/JAdBKeVaAEiI4gXQG2P6+F4EMyPeEcD8CcwXv02BsARz03UlLAhKGXZKnXzb2WKAmTcronqAxFgsiuLoM2Qx5JjhB5XJCp82iJ4BmlTQWt9is1Jqz84dLHMZnjlZAZmlN1fDn4gU0Gh9Hp+/AKLc5nk9Fpjo2rbtI04g/AgY4VwVC9ZaAzPxBtOCRzvCnR4ZAAAAAElFTkSuQmCC",alt:"sair"})]})})]})}}]),n}(s.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("section",{className:"section-favorite",children:[Object(v.jsx)(k,{}),Object(v.jsx)(x,{})]})}}]),n}(s.a.Component),w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleEmailChange=e.handleEmailChange.bind(Object(d.a)(e)),e.handlePasswordChange=e.handlePasswordChange.bind(Object(d.a)(e)),e.handleButtonClick=e.handleButtonClick.bind(Object(d.a)(e)),e.checkLogin=e.checkLogin.bind(Object(d.a)(e)),e.state={emailArea:"",passwordArea:"",getEmail:"",getPassword:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.checkLogin()}},{key:"checkLogin",value:function(){this.setState({getEmail:localStorage.getItem("UserEmail"),getPassword:localStorage.getItem("UserPassword")})}},{key:"handleEmailChange",value:function(e){this.setState({emailArea:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({passwordArea:e.target.value})}},{key:"handleButtonClick",value:function(){var e=this.state.emailArea,t=this.state.passwordArea;""!==e&&""!==t&&(localStorage.setItem("UserEmail",e),localStorage.setItem("UserPassword",t),localStorage.setItem("Token",!0)),""===e&&""===t&&alert("Preencha os campos de Login e Password!")}},{key:"render",value:function(){var e=this.state,t=e.getEmail,n=e.getPassword,a=e.emailArea,s=e.passwordArea,c=a.length+s.length;return Object(v.jsxs)("section",{children:[Object(v.jsxs)("form",{children:[Object(v.jsx)("h1",{className:"h1-login-area",children:"Comece a coletar pok\xe9mons!"}),Object(v.jsx)("input",{className:"input-login-email",type:"text",required:!0,placeholder:"Digite seu Email...",onChange:this.handleEmailChange,value:""===t?this.handlePasswordChange:localStorage.getItem("UserEmail")}),Object(v.jsx)("input",{className:"input-login-password",type:"password",required:!0,placeholder:"Digite sua Senha...",onChange:this.handlePasswordChange,value:""===n?this.handlePasswordChange:localStorage.getItem("UserPassword")}),c<30?Object(v.jsx)("button",{disabled:!0,className:"button-login",type:"submit",required:!0,onClick:this.handleButtonClick,children:Object(v.jsx)("p",{className:"text-button",children:"Entrar"})}):Object(v.jsx)(f.b,{to:"/vertodos",children:Object(v.jsx)("button",{className:"button-login",type:"submit",required:!0,onClick:this.handleButtonClick,children:Object(v.jsx)("p",{className:"text-button",children:"Entrar"})})})]}),Object(v.jsxs)("button",{className:"button-change-theme",children:[Object(v.jsx)("img",{className:"vector-theme-moon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADpSURBVHgBnVPBFYIwDG0L3BlBN2ADy40HPbiBOoE6ihvoBJzgcYMNZAMZgbvUmgg8xWeAZ05Jfn7a9KecEaaUio1hEtzSmMclTdPzJ84pYhAEC8uyr+C6XWml9d3PsqzCSFBELIATT++MgUZOjg1HiS9QsGKYQbIVj161tyhS5jsHM+8E+8M4F5tRYhiGHgF5Yrwz3xOQOyXHjYBrQZOcnNFW2lJKtyiKuiUoCRKsOGcHeDuXYuEm8W611my2mSpJkqVomuaIwVyS1tpHT+BqtcEU2ZRY1+/q4FVBty2KCy7qhzPi7D9/xxO3h2L4wBuv6wAAAABJRU5ErkJggg==",alt:"mudar de tema"}),Object(v.jsx)("strong",{className:"theme-text",children:"Tema escuro"})]})]})}}]),n}(s.a.Component),y=n.p+"static/media/logopokemons-color.9db02249.png",P=n.p+"static/media/light-pokemons.eaeea135.png",N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("section",{className:"section-login",children:[Object(v.jsx)("img",{className:"image-logo-pokemon",src:y,alt:"Pokemon Logo"}),Object(v.jsx)(w,{}),Object(v.jsx)("img",{className:"screen-pokemons",src:P,alt:"pokemons"})]})}}]),n}(s.a.Component),B=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)("section",{className:"section-search",children:Object(v.jsx)(k,{})})}}]),n}(s.a.Component),I=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).getFunction=e.getFunction.bind(Object(d.a)(e)),e.getAllPokes=e.getAllPokes.bind(Object(d.a)(e)),e.filterApiPoke=e.filterApiPoke.bind(Object(d.a)(e)),e.onclickButtonFav=e.onclickButtonFav.bind(Object(d.a)(e)),e.state={pokeApi:[],allPokes:[],nameAllPokes:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getFunction(),this.getAllPokes()}},{key:"getAllPokes",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.setState({allPokes:[t.results],nameAllPokes:[t.results.map((function(e){return e.name}))]});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFunction",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t,n,a,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],e.next=4,m();case 4:a=e.sent,s=0;case 6:if(!(s<20)){e.next=16;break}return t.push(a.results.map((function(e){return e.name}))[s]),e.next=10,O("".concat(t[s]));case 10:c=e.sent,n.push(c),this.setState({pokeApi:[n]});case 13:s+=1,e.next=6;break;case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"filterApiPoke",value:function(){var e=this.state.pokeApi.map((function(e){return e.map((function(e){return e.types.map((function(e){return e.type}))}))}));console.log(e.map((function(e){return e.name})));var t=e.filter((function(e){return"grass"===e.name}));console.log(t)}},{key:"onclickButtonFav",value:function(e){e.target.value}},{key:"componentWillUnmount",value:function(){this.getFunction()}},{key:"render",value:function(){var e=this,t=this.state.pokeApi;return Object(v.jsxs)("main",{className:"section-mainPokes",children:[Object(v.jsxs)("section",{children:[Object(v.jsx)("button",{className:"button-vertodos",value:"Todos",children:"Todos"}),Object(v.jsx)("button",{className:"button-vertodos",value:"fire",onClick:this.filterApiPoke,children:"Fire"}),Object(v.jsx)("button",{className:"button-vertodos",value:"Eletric",children:"Eletric"}),Object(v.jsx)("button",{className:"button-vertodos",value:"Water",children:"Water"})]}),Object(v.jsx)("section",{className:"section-cards-api-pokemon",children:t.map((function(t){return t.map((function(t){return Object(v.jsxs)("section",{className:"section-cards-pokemon",children:[Object(v.jsxs)("div",{className:"div-poke-heart",children:[Object(v.jsx)("label",{children:Object(v.jsx)("input",{type:"checkbox",value:t.id,onClick:e.onclickButtonFav})}),Object(v.jsx)("img",{className:"pokemon-image",src:t.sprites.front_default,alt:t.name})]}),Object(v.jsxs)("p",{className:"name-pokemon",children:[" ",t.name," "]}),Object(v.jsxs)("p",{children:[" ID:",t.id]}),Object(v.jsx)("div",{className:"div-elet-fire",children:t.types.map((function(e){return Object(v.jsx)("p",{className:"tag-p-".concat(e.type.name),children:e.type.name},e.url)}))}),Object(v.jsx)("button",{className:"button-pokemons-details",children:"Ver detalhes"})]},t.name)}))}))})]})}}]),n}(s.a.Component),U=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("section",{className:"section-seeall",children:[Object(v.jsx)(k,{}),Object(v.jsx)(I,{})]})}}]),n}(s.a.Component);var E=function(){var e=localStorage.getItem("Token");return Object(v.jsx)("div",{children:Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{exact:!0,path:"/challenge-front-end",children:"true"===e?Object(v.jsx)(o.a,{to:"/vertodos"}):Object(v.jsx)(N,{})}),Object(v.jsx)(o.b,{path:"/vertodos",children:Object(v.jsx)(U,{})}),Object(v.jsx)(o.b,{path:"/favorite",children:Object(v.jsx)(C,{})}),Object(v.jsx)(o.b,{path:"/procurar",children:Object(v.jsx)(B,{})})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(v.jsx)(f.a,{children:Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(E,{})})}),document.getElementById("root")),F()}},[[39,1,2]]]);
//# sourceMappingURL=main.0ae15af2.chunk.js.map