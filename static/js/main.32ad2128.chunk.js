(this["webpackJsonpchallenge-front-end"]=this["webpackJsonpchallenge-front-end"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(18),i=a.n(c),o=(a(25),a(2)),r=(a(26),a(11)),l=a(12),h=a(14),m=a(13),d=a(8),j=a(9),u=a(1),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).handleEmailChange=e.handleEmailChange.bind(Object(d.a)(e)),e.handlePasswordChange=e.handlePasswordChange.bind(Object(d.a)(e)),e.handleButtonClick=e.handleButtonClick.bind(Object(d.a)(e)),e.state={emailArea:"",passwordArea:""},e}return Object(l.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({emailArea:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({passwordArea:e.target.value})}},{key:"handleButtonClick",value:function(){var e=this.state.emailArea,t=this.state.passwordArea;localStorage.setItem("UserEmail",e),localStorage.setItem("UserPassword",t)}},{key:"render",value:function(){return Object(u.jsxs)("section",{children:[Object(u.jsxs)("form",{children:[Object(u.jsx)("h1",{className:"h1-login-area",children:"Comece a coletar pok\xe9mons!"}),Object(u.jsx)("input",{className:"input-login-email",type:"text",required:"required",placeholder:"Digite seu Email...",onChange:this.handleEmailChange}),Object(u.jsx)("input",{className:"input-login-password",type:"password",placeholder:"Digite sua Senha...",onChange:this.handlePasswordChange}),Object(u.jsx)(j.b,{to:"/pokemon-area",children:Object(u.jsx)("button",{className:"button-login",type:"submit",onClick:this.handleButtonClick,children:Object(u.jsx)("p",{className:"text-button",children:"Entrar"})})})]}),Object(u.jsxs)("button",{className:"button-change-theme",children:[Object(u.jsx)("img",{className:"vector-theme-moon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADpSURBVHgBnVPBFYIwDG0L3BlBN2ADy40HPbiBOoE6ihvoBJzgcYMNZAMZgbvUmgg8xWeAZ05Jfn7a9KecEaaUio1hEtzSmMclTdPzJ84pYhAEC8uyr+C6XWml9d3PsqzCSFBELIATT++MgUZOjg1HiS9QsGKYQbIVj161tyhS5jsHM+8E+8M4F5tRYhiGHgF5Yrwz3xOQOyXHjYBrQZOcnNFW2lJKtyiKuiUoCRKsOGcHeDuXYuEm8W611my2mSpJkqVomuaIwVyS1tpHT+BqtcEU2ZRY1+/q4FVBty2KCy7qhzPi7D9/xxO3h2L4wBuv6wAAAABJRU5ErkJggg==",alt:"mudar de tema"}),Object(u.jsx)("strong",{className:"theme-text",children:"Tema escuro"})]})]})}}]),a}(s.a.Component),A=a.p+"static/media/image-pokemon-color.9db02249.png",b=a.p+"static/media/login-screen-pokemons.eaeea135.png",p=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("section",{className:"section-login",children:[Object(u.jsx)("img",{className:"image-logo-pokemon",src:A,alt:"Pokemon Logo"}),Object(u.jsx)(g,{}),Object(u.jsx)("img",{className:"screen-pokemons",src:b,alt:"pokemons"})]})}}]),a}(s.a.Component);var O=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.c,{children:Object(u.jsx)(o.a,{exact:!0,path:"/challenge-front-end",children:Object(u.jsx)(p,{})})})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(j.a,{children:Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.32ad2128.chunk.js.map