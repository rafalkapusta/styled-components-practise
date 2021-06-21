(this["webpackJsonpgrid-template"]=this["webpackJsonpgrid-template"]||[]).push([[0],{45:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,d,l,b,u,j,f,p,m,x=t(0),h=t.n(x),O=t(10),g=t.n(O),v=t(13),y=t(2),w=t(3),k=w.b.div(r||(r=Object(y.a)(["\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 150px 2fr 0.75fr;\n  grid-template-rows: 90px 1fr 90px;\n"]))),C=w.b.div(a||(a=Object(y.a)(["\n  grid-row: ",";\n  grid-column: ",";\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n"])),(function(e){return e.row}),(function(e){return e.column}),(function(e){return e.background})),E=Object(w.b)(C)(c||(c=Object(y.a)(["\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n  border: none;\n  place-self: center;\n"]))),N=t(1),S=function(){return Object(N.jsx)(E,{row:"1",column:"1",background:"grey",children:"Logo"})},U=w.b.label(i||(i=Object(y.a)(["\n  font-weight: bold;\n  font-size: 12px;\n  color: grey;\n"]))),R=w.b.input(o||(o=Object(y.a)(["\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid black;\n  box-sizing: border-box;\n  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);\n  border-radius: 25px;\n\n  &:focus {\n    outline: none;\n    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);\n  }\n\n  &:disabled {\n    background-image: linear-gradient(\n      45deg,\n      #000000 25%,\n      #ffffff 25%,\n      #ffffff 50%,\n      #000000 50%,\n      #000000 75%,\n      #ffffff 75%,\n      #ffffff 100%\n    );\n    background-size: 28.28px 28.28px;\n    cursor: not-allowed;\n  }\n"]))),A=w.b.div(s||(s=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  "," {\n    margin: 10px 0;\n  }\n"])),U),L=function(e){var n=e.type,t=void 0===n?"text":n,r=e.name,a=e.id,c=e.label,i=e.value,o=e.error,s=e.onChange,d=e.disabled;return Object(N.jsxs)(A,{children:[Object(N.jsx)(U,{htmlFor:a,children:c}),Object(N.jsx)(R,{type:t,name:r,id:a,value:i,onChange:s,disabled:d}),o&&Object(N.jsx)("small",{style:{color:"red"},children:o})]})},T=w.b.div(d||(d=Object(y.a)(["\n  background: white;\n  width: 100%;\n  max-width: 500px;\n  max-height: 500px;\n  padding: 40px 50px;\n  border-radius: 25px;\n  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n"]))),_=t(4),D=function(){var e=Object(_.g)(),n=Object(x.useContext)(oe),t=n.state,r=n.setState;return Object(N.jsx)(C,{row:"1",column:"2",background:"none",children:Object(N.jsx)(T,{children:Object(N.jsx)(L,{name:"search",id:"search",label:"Search user",value:t.search,onChange:function(e){return function(e){var n=e.target.value;r({type:"SEARCH_USER",payload:n})}(e)},disabled:"/add-user"===e.pathname})})})},F=t(12),I=Object(w.b)(F.b).attrs({activeClassName:"active-link"})(l||(l=Object(y.a)(["\n  color: grey;\n  margin: 25px;\n  font-weight: bold;\n  text-decoration: none;\n  position: relative;\n\n  &.active-link {\n    &::after {\n      opacity: 1;\n    }\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n\n    opacity: 0;\n    transition: opacity 0.4s ease-in-out;\n\n    width: 8px;\n    height: 8px;\n    border-radius: 100%;\n    border: none;\n    background: grey;\n    top: 50%;\n    right: -20px;\n    transform: translateY(-50%);\n  }\n"]))),P=Object(w.b)(C)(b||(b=Object(y.a)(["\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),z=function(){return Object(N.jsxs)(P,{row:"2",column:"1",background:"",children:[Object(N.jsx)(I,{exact:!0,to:"/",children:"Users List"}),Object(N.jsx)(I,{to:"/add-user",children:"Add user"})]})},H=w.b.button(u||(u=Object(y.a)(["\n  background: green;\n  border: none;\n  border-radius: 25px;\n  margin: 10px 0;\n  padding: 8px 16px;\n  float: right;\n\n  &:hover {\n    cursor: pointer;\n    background: darkGreen;\n  }\n"]))),Y=function(e){var n=e.children,t=document.body,r=document.createElement("div");return Object(x.useEffect)((function(){return t.appendChild(r),function(){t.removeChild(r)}}),[t,r]),Object(O.createPortal)(n,r)},B=w.b.div(j||(j=Object(y.a)(["\n  width: 150px;\n  height: 150px;\n  background: white;\n  position: absolute;\n  left: ",";\n  top: ",";\n  text-align: center;\n  border-radius: 25px;\n"])),(function(e){var n=e.left;return"".concat(n,"px")}),(function(e){var n=e.top;return"".concat(n,"px")})),G=function(){var e=Object(x.useState)(!1),n=Object(v.a)(e,2),t=n[0],r=n[1],a=Object(x.useState)({}),c=Object(v.a)(a,2),i=c[0],o=c[1];return Object(N.jsxs)(C,{row:"1/3",column:"3",background:"red",children:[Object(N.jsx)(H,{onClick:function(e){var n=e.target.getBoundingClientRect();o({left:n.x-35,top:n.y-150}),r(!t)},children:"Click me"}),t&&Object(N.jsx)(Y,{children:Object(N.jsx)(B,{left:i.left,top:i.top,children:"Tooltip"})})]})},J=function(){return Object(N.jsx)(C,{row:"3",column:"1/4",background:"grey",children:"Footer"})},V=function(e){var n=e.children;return Object(N.jsxs)(k,{children:[Object(N.jsx)(S,{}),Object(N.jsx)(D,{}),Object(N.jsx)(z,{}),n,Object(N.jsx)(G,{}),Object(N.jsx)(J,{})]})},M=Object(w.a)(f||(f=Object(y.a)(["\nhtml {\n  box-sizing: border-box;\n  overflow-x: hidden;\n  width: 100vw;\n}\n\n*, *::after, *::before {\nbox-sizing: inherit;\n}\n\nbody {\nmargin: 0;\npadding: 0;\n}\n  \n.card-enter {\n  backface-visibility: hidden;\n  position: absolute;\n  transform: rotateY(180deg);\n}\n\n.card-enter.card-enter-active {\n  transform: rotateY(0deg);\n  transition: transform 500ms ease-in;\n}\n\n.card-exit {\n  backface-visibility: hidden;\n  position: absolute;\n  transform: rotateY(180deg);\n}\n\n.card-exit.card-exit-active {\n  transform: rotateY(0deg);\n  transition: transform 500ms ease-in;\n}\n"]))),W=Object(x.forwardRef)((function(e,n){var t=e.setState,r=e.state,a=Object(_.f)();Object(x.useEffect)((function(){t({type:"CLEAR_SEARCH"})}),[]);var c=function(e){var n=e.target,r=n.value,a=n.name;t({type:"INPUT_CHANGE",payload:{name:a,value:r}})};return Object(N.jsxs)(T,{as:"form",onSubmit:function(e){return function(e){e.preventDefault();var n=function(e){var n={},t=!0;for(var r in e)e[r]||"id"===r?t&=!0:(n[r]="to pole jest wymagane",t&=!1);return[t,n]}(r.newUser),c=Object(v.a)(n,2),i=c[0],o=c[1];t({type:"ADD_USER",payload:{errors:o,isValid:i}}),i&&a.push("/")}(e)},ref:n,children:[Object(N.jsx)(L,{name:"name",id:"name",label:"Name",value:r.newUser.name,error:r.formErrors.name,onChange:function(e){return c(e)}}),Object(N.jsx)(L,{name:"lastName",id:"lastName",label:"Last Name",value:r.newUser.lastName,error:r.formErrors.lastName,onChange:function(e){return c(e)}}),Object(N.jsx)(L,{name:"email",id:"email",label:"E-mail",value:r.newUser.email,error:r.formErrors.email,onChange:function(e){return c(e)}}),Object(N.jsx)(H,{children:"Add User"})]})})),q=w.b.div(p||(p=Object(y.a)(["\n  width: 100%;\n  height: 20px;\n  background: silver;\n  text-align: center;\n  background-image: linear-gradient(\n    45deg,\n    hsl(171, 100%, 41%) 25%,\n    #f6f0cf 25%,\n    #f6f0cf 50%,\n    hsl(171, 100%, 41%) 50%,\n    hsl(171, 100%, 41%) 75%,\n    #f6f0cf 75%,\n    #f6f0cf 100%\n  );\n  background-size: 56.57px 56.57px;\n  animation: progress-bar-stripes 2s linear infinite;\n\n  @keyframes progress-bar-stripes {\n    from {\n      background-position: 56.57px 0;\n    }\n    to {\n      background-position: 0 0;\n    }\n  }\n"]))),K=Object(x.forwardRef)((function(e,n){var t=e.state,r=e.setState,a=e.onClick;return t.loading?Object(N.jsx)(q,{children:"Loading..."}):Object(N.jsx)(T,{ref:n,children:t.users.length?t.users.map((function(e){var n=e.name,t=e.lastName,c=e.email,i=e.id;return Object(N.jsxs)(T,{onClick:function(){return a(i)},children:[Object(N.jsx)("button",{style:{float:"right"},onClick:function(){return function(e){r({type:"DELETE_USER",payload:{id:e}})}(i)},children:"x"}),Object(N.jsxs)("p",{children:["name: ",n]}),Object(N.jsxs)("p",{children:["last name: ",t]}),Object(N.jsxs)("p",{children:["e-mail: ",c]})]},i)})):Object(N.jsx)("p",{children:"Brak u\u017cytkownik\xf3w do wy\u015bwietlenia"})})})),Q=t(32),X=t(22),Z=t(6),$=function(e,n){switch(n.type){case"INIT":return Object(Z.a)(Object(Z.a)({},e),{},{loading:!1});case"INPUT_CHANGE":return delete e.formErrors[n.payload.name],Object(Z.a)(Object(Z.a)({},e),{},{newUser:Object(Z.a)(Object(Z.a)({},e.newUser),{},Object(X.a)({},n.payload.name,n.payload.value))});case"ADD_USER":var t=e.newUser.id+1,r=[e.newUser].concat(Object(Q.a)(e.users));return n.payload.isValid?Object(Z.a)(Object(Z.a)({},e),{},{users:r,newUser:{id:t,name:"",lastName:"",email:""},usersCopy:r,formErrors:n.payload.errors}):Object(Z.a)(Object(Z.a)({},e),{},{formErrors:n.payload.errors});case"DELETE_USER":var a=e.usersCopy.filter((function(e){return e.id!==n.payload.id}));return Object(Z.a)(Object(Z.a)({},e),{},{users:a,usersCopy:a,search:""});case"SEARCH_USER":return Object(Z.a)(Object(Z.a)({},e),{},{users:n.payload?e.usersCopy.filter((function(e){return e.name.startsWith(n.payload)})):e.usersCopy,search:n.payload});case"CLEAR_SEARCH":return Object(Z.a)(Object(Z.a)({},e),{},{users:e.usersCopy,search:""});default:return e}},ee={users:[{id:3,name:"aa",lastName:"aa",email:"aa"},{id:2,name:"bb",lastName:"bb",email:"bb"},{id:1,name:"cc",lastName:"cc",email:"cc"},{id:0,name:"bc",lastName:"bc",email:"bc"}],usersCopy:[{id:3,name:"aa",lastName:"aa",email:"aa"},{id:2,name:"bb",lastName:"bb",email:"bb"},{id:1,name:"cc",lastName:"cc",email:"cc"},{id:0,name:"bc",lastName:"bc",email:"bc"}],newUser:{id:4,name:"",lastName:"",email:""},formErrors:{},search:"",loading:!0},ne=t(48),te=t(47),re=document.body,ae=document.createElement("div");function ce(e){e.children;var n=e.user;return Object(x.useEffect)((function(){return re.appendChild(ae),function(){re.removeChild(ae)}}),[re,ae]),Object(O.createPortal)(Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{children:n}),Object(N.jsx)("button",{children:"Close"})]}),ae)}var ie=Object(w.b)(ne.a)(m||(m=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: beige;\n  position: relative;\n  perspective: 1000px;\n  border-radius: 12px;\n"]))),oe=h.a.createContext({state:{},setState:function(){}});var se=function(){var e=Object(x.useReducer)($,ee),n=Object(v.a)(e,2),t=n[0],r=n[1],a=Object(_.g)(),c=Object(x.useRef)(null);return Object(x.useEffect)((function(){setTimeout((function(){return r({type:"INIT"})}),2e3)}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(M,{}),Object(N.jsx)(oe.Provider,{value:{state:t,setState:r},children:Object(N.jsx)(V,{children:Object(N.jsx)(ie,{children:Object(N.jsx)(te.a,{classNames:"card",timeout:500,nodeRef:c,children:Object(N.jsxs)(_.c,{location:a,children:[Object(N.jsxs)(_.a,{exact:!0,path:"/",children:[Object(N.jsx)(K,{state:t,setState:r,ref:c,onClick:function(e){console.log(e)}}),Object(N.jsx)(ce,{user:!0})]}),Object(N.jsx)(_.a,{path:"/add-user",children:Object(N.jsx)(W,{setState:r,state:t,ref:c})})]})},a.key)})})})]})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};g.a.render(Object(N.jsx)(h.a.StrictMode,{children:Object(N.jsx)(F.a,{children:Object(N.jsx)(se,{})})}),document.getElementById("root")),de()}},[[45,1,2]]]);
//# sourceMappingURL=main.5f4f7aaf.chunk.js.map