(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=(a(41),a(3)),s=a(4),i=a(6),m=a(5),u=a(14),p=a(1),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={expandNavbar:!1},e.toggleMenu=function(){e.setState({expandNavbar:!e.state.expandNavbar})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.branding,t=this.state.expandNavbar?"show":"";return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-danger"},r.a.createElement(u.b,{className:"navbar-brand",style:{color:"white"},to:"/"},e),r.a.createElement("button",{className:"navbar-toggler",style:{backgroundColor:"white"},onClick:this.toggleMenu},r.a.createElement("span",{className:"fa fa-bars"})),r.a.createElement("div",{className:"collapse navbar-collapse "+t,id:"navbarSupportedContent"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(u.b,{className:"nav-item nav-link",style:{color:"white"},to:"/"},r.a.createElement("i",{className:"fas fa-home",style:{padding:"5px"}}),"Home"),r.a.createElement(u.b,{className:"nav-item nav-link",style:{color:"white"},to:"/add"},r.a.createElement("i",{className:"fas fa-plus",style:{padding:"5px"}}),"Add Contact"),r.a.createElement(u.b,{className:"nav-item nav-link",style:{color:"white"},to:"/about"},r.a.createElement("i",{className:"fas fa-question",style:{padding:"5px"}}),"About"))))}}]),a}(n.Component);d.defaultProps={branding:"My App"};var h=d,b=a(7),f=a.n(b),v=a(12),E=a(35),y=a(16),g=a(13),N=a.n(g),j=r.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return C(e,t)}))}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),x=j.Consumer,k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(v.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(x,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,s)}),r.a.createElement(u.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-user-edit",style:{cursor:"pointer",float:"right",marginRight:"1rem",color:"black"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{className:"card",style:{padding:"20px"}},r.a.createElement("h1",{className:"display-4",style:{fontSize:"3rem",padding:"5px"}},"Contacts List"),t.map((function(e){return r.a.createElement(k,{key:e.id,contact:e})}))))}))}}]),a}(n.Component),T=a(17),S=a(34),A=a.n(S),D=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a,style:{fontWeight:"bold"}},t),r.a.createElement("input",{type:o,name:a,className:A()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},"This is wrong"))};D.defaultProps={type:"text"};var P=D,I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{name:"",email:"",phone:""}},e.onSubmit=function(){var t=Object(v.a)(f.a.mark((function t(a,n){var r,c,o,l,s,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required."}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required."}}),t.abrupt("return");case 8:if(""!==l){t.next=11;break}return e.setState({errors:{phone:"Phone is required."}}),t.abrupt("return");case 11:return s={name:c,email:o,phone:l},t.next=14,N.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=t.sent,a({type:"ADD_CONTACT",payload:i.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onInputText=function(t){return e.setState(Object(T.a)({},t.target.name,t.target.value))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(x,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onInputText,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",placeholder:"Enter Email...",type:"email",value:n,onChange:e.onInputText,error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:c,onChange:e.onInputText,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block ",style:{backgroundColor:"#37a654",color:"white",fontWeight:"bold"}}))))}))}}]),a}(n.Component),M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{name:"",email:"",phone:""}},e.onSubmit=function(){var t=Object(v.a)(f.a.mark((function t(a,n){var r,c,o,l,s,i,m;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required."}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required."}}),t.abrupt("return");case 8:if(""!==l){t.next=11;break}return e.setState({errors:{phone:"Phone is required."}}),t.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=e.props.match.params.id,t.next=15,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=t.sent,a({type:"UPDATE_CONTACT",payload:m.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onInputText=function(t){return e.setState(Object(T.a)({},t.target.name,t.target.value))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(x,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onInputText,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",placeholder:"Enter Email...",type:"email",value:n,onChange:e.onInputText,error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:c,onChange:e.onInputText,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block ",style:{backgroundColor:"#37a654",color:"white",fontWeight:"bold"}}))))}))}}]),a}(n.Component),q=(a(65),function(e){return console.log(e.match.params.id),r.a.createElement("div",null,r.a.createElement("h3",{className:"display-4"},void 0!==e.match.params.id?"Params:":""," ",e.match.params.id),r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}),_=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("img",{className:"fas fa-exclamation-circle",src:"",alt:"",width:"",style:{marginTop:"auto",marginBottom:"auto",padding:"20px",fontSize:"150px"}}),r.a.createElement("div",{style:{marginTop:"auto",marginBottom:"auto"}},r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page doesn't exist")))},L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:"",title:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(t){return e.setState({id:t.id,title:t.title})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.title),r.a.createElement("p",null,this.state.id))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/contactmanager/",component:w}),r.a.createElement(p.a,{exact:!0,path:"/contactmanager/contact/add",component:I}),r.a.createElement(p.a,{exact:!0,path:"/contactmanager/contact/edit/:id",component:M}),r.a.createElement(p.a,{exact:!0,path:"/contactmanager/about/:id",component:q}),r.a.createElement(p.a,{exact:!0,path:"/contactmanager/about",component:q}),r.a.createElement(p.a,{exact:!0,path:"/contactmanager/test",component:L}),r.a.createElement(p.a,{component:_}))))))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.bd4f4709.chunk.js.map