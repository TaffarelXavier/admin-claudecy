(this["webpackJsonpteste-react-app"]=this["webpackJsonpteste-react-app"]||[]).push([[0],{31:function(e,a,t){e.exports=t(42)},36:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=(t(36),t(12)),m=(t(37),t(30)),s=t(23),u=t(24),i=t(17),d=t(16),E=function(){return r.a.createElement(i.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(i.a.Brand,{href:"#home"},"Admin - Neg\xe3o do Cinda"),r.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"}),r.a.createElement(d.a,null,r.a.createElement(d.a.Link,{href:"#deets"},"More deets"),r.a.createElement(d.a.Link,{eventKey:2,href:"#memes"},"Dank memes"))))},h=t(25),p=t(28);var f=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{show:t,variant:"success"},r.a.createElement(h.a.Heading,null,r.a.createElement("h1",null,"Cadastros realizados")),r.a.createElement("p",null,"Abaixo, todos os cadastros realizados por meio do site https://negaodocinda.com.br"),r.a.createElement("hr",null)),!t&&r.a.createElement(p.a,{onClick:function(){return l(!0)}},"Show Alert"))},v=t(29),b=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){c(e.data)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"NOME"),r.a.createElement("th",null,"EMAIL"),r.a.createElement("th",null,"WHATSAPP"))),r.a.createElement("tbody",null,l.map((function(e,a){e.id;var t=e.username,n=e.email,l=e.whatsapp;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,l))})))))};var g=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("https://api.negaodocinda.com.br/users").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),r.a.createElement(m.a,null,r.a.createElement(E,null),r.a.createElement(s.a,{style:{marginTop:70}},r.a.createElement(u.a,{xs:12,md:12,lg:12,sm:12},r.a.createElement(f,null))),r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(b,{data:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.8296a0db.chunk.js.map