(this.webpackJsonpdolist=this.webpackJsonpdolist||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(7),i=n.n(c),l=(n(12),n(3)),d=n(2),o=n(0);var r=function(e){var t,n,s=Object(a.useState)(""),c=Object(d.a)(s,2),i=c[0],l=c[1],r=Object(a.useState)({index:null,state:null}),j=Object(d.a)(r,2),u=j[0],b=j[1],m=e.value;return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("div",{className:"headerItem",children:[Object(o.jsx)("h5",{children:m.name}),Object(o.jsxs)("h6",{children:[void 0===(null===(t=m.tasks)||void 0===t?void 0:t.length)?"0":null===(n=m.tasks)||void 0===n?void 0:n.length," tasks remaining "]})]}),Object(o.jsxs)("div",{className:"tasksItem",children:[m.tasks&&m.tasks.length>0?Object(o.jsx)("ul",{children:m.tasks.map((function(t,n){return Object(o.jsxs)("li",{className:t.done?"done":"",children:[u.index===n&&!0===u.state?Object(o.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)}}):t.name,u.index===n&&!0===u.state?Object(o.jsx)("button",{className:"edit",onClick:function(){b({index:n,state:!1}),""===i?e.editTask(n,"Unnamed"):e.editTask(n,i)},children:"Save"}):Object(o.jsx)("button",{className:"edit",onClick:function(){b({index:n,state:!0}),l(t.name)},children:"Edit"}),Object(o.jsx)("button",{className:"remove",onClick:function(){e.removeTask(n)},children:"Delete"}),Object(o.jsx)("button",{className:t.done?"disabled":"done",onClick:function(){e.doneTask(n)},disabled:t.done,children:"Done"})]},n)}))}):Object(o.jsx)("h4",{children:"No tasks for this list"}),Object(o.jsx)("input",{className:"newTaskInput",placeholder:"New Task",onKeyPress:function(t){return function(t){var n=t.target.value;13===t.charCode&&""!==n&&(e.newTask({name:n}),t.target.value="")}(t)}})]})]})};var j=function(){var e=Object(a.useState)([{id:0,name:"Gym",tasks:[{name:"Cardio",done:!1},{name:"Weights",done:!1}]},{id:1,name:"Coffee",tasks:[{name:"Porto Bella Coffee",done:!1}]},{id:2,name:"Work",tasks:[{name:"Morning meeting",done:!0},{name:"Tech Project",done:!1}]},{id:3,name:"Grocery",tasks:[{name:"Milk",done:!0},{name:"Potatoes",done:!1},{name:"Bread",done:!1}]},{id:4,name:"TV Shows"}]),t=Object(d.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(0),i=Object(d.a)(c,2),j=i[0],u=i[1],b=Object(a.useState)(n[0]),m=Object(d.a)(b,2),h=m[0],O=m[1],k=Object(a.useState)(""),v=Object(d.a)(k,2),x=v[0],f=v[1];return Object(o.jsxs)("div",{className:"list",children:[Object(o.jsx)("h2",{children:"What do I need to do today?"}),Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsxs)("div",{className:"leftSide",children:[Object(o.jsx)("h4",{children:"My list "}),Object(o.jsx)("ul",{children:n.map((function(e,t){return Object(o.jsxs)("div",{className:"flex-button",children:[Object(o.jsx)("li",{onClick:function(){u(e.id),O(e)},className:j===e.id?"active":"",children:e.name},t),Object(o.jsx)("button",{onClick:function(){return function(e){var t=n.filter((function(t,n){return n!==e}));s(t)}(t)},children:"Remove"})]})}))}),Object(o.jsx)("label",{children:"New list"}),Object(o.jsx)("input",{onKeyPress:function(e){!function(e){var t=e.target.value;13===e.charCode&&(""!==t&&(s([].concat(Object(l.a)(n),[{id:n.length,name:t,tasks:[]}])),f(""),e.target.value=""),""===t&&f("*Type a list name first!"))}(e)},placeholder:"Write list name..."}),Object(o.jsx)("label",{className:"error",children:x})]}),Object(o.jsx)("div",{className:"rightSide",children:Object(o.jsx)(r,{value:h,removeTask:function(e){var t=h.tasks.filter((function(t,n){return n!==e})),a=Object(l.a)(n);a[j].tasks=t,s(a)},doneTask:function(e){var t=h.tasks;t[e].done=!0;var a=Object(l.a)(n);a[j].tasks=t,s(a)},editTask:function(e,t){var a=h.tasks;a[e].name=t;var c=Object(l.a)(n);c[j].tasks=a,s(c)},newTask:function(e){var t=[];(t=void 0!==h.tasks?h.tasks:[]).push(e);var a=Object(l.a)(n);a[j].tasks=t,s(a)}})})]})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5b67b1e1.chunk.js.map