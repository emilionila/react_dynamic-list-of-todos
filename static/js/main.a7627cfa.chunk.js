(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),l=c(2),n=c(1),d=(c(10),c(11),c(5)),r=c.n(d),i=c(0),o=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(i.jsx)("td",{className:"is-vcentered",children:Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}):Object(i.jsx)("td",{className:"is-vcentered"}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:r()("far",{"fa-eye":c!==e,"fa-eye-slash":c===e})})})})})]},e.id)}))})]})},j=function(e){var t=e.searchQuery,c=e.setSearchQuery,s=e.selectedValue,a=e.setSelectedValue;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")},"aria-label":"Clear Search"})})]})]})},b=(c(13),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(n.useState)(),a=Object(l.a)(s,2),d=a[0],r=a[1];return Object(n.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then(r)}),[t.userId]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),d?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]}):Object(i.jsx)(b,{})]})},m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),d=Object(l.a)(a,2),r=d[0],m=d[1],O=Object(n.useState)(!0),x=Object(l.a)(O,2),f=x[0],N=x[1],p=Object(n.useState)(""),v=Object(l.a)(p,2),y=v[0],g=v[1],S=Object(n.useState)("all"),k=Object(l.a)(S,2),T=k[0],C=k[1],w=!f;Object(n.useEffect)((function(){N(!0),Promise.all([h("/todos")]).then((function(e){var t=Object(l.a)(e,1)[0];s(t)})).finally((function(){return N(!1)}))}),[]);var _=Object(n.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(y.toLowerCase()),c="all"===T||("completed"===T?e.completed:!e.completed);return t&&c}))}),[c,y,T]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(j,{searchQuery:y,setSearchQuery:g,selectedValue:T,setSelectedValue:C})}),Object(i.jsxs)("div",{className:"block",children:[f&&Object(i.jsx)(b,{}),w&&Object(i.jsx)(o,{todos:_,setSelectedTodo:m,selectedTodo:r})]})]})})}),r&&Object(i.jsx)(u,{selectedTodo:r,setSelectedTodo:m})]})};a.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a7627cfa.chunk.js.map