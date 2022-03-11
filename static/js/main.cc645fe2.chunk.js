(this["webpackJsonpbookings-app"]=this["webpackJsonpbookings-app"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"b":["Breakfast","Morning","Lunch","Afternoon","Evening"],"a":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}')},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(13),a=n.n(s),r=n(8),j=n(2),i=(n(20),n(4)),b=n(14),o=n(5),l=n(1),O=n(11),d=n(3);function u(e,t){switch(t.type){case"SET_GROUP":return Object(d.a)(Object(d.a)({},e),{},{group:t.payload,bookableIndex:0});case"SET_BOOKABLE":return Object(d.a)(Object(d.a)({},e),{},{bookableIndex:t.payload});case"NEXT_BOOKABLE":var n=e.bookables.filter((function(t){return t.group===e.group})).length;return Object(d.a)(Object(d.a)({},e),{},{bookableIndex:(e.bookableIndex+1)%n});case"TOGGLE_HAS_DETAILS":return Object(d.a)(Object(d.a)({},e),{},{hasDetails:!e.hasDetails});case"FETCH_BOOKABLES_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,error:!1,bookables:[]});case"FETCH_BOOKABLES_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,error:!1,bookables:t.payload});case"FETCH_BOOKABLES_FAIL":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}}function h(e){return fetch(e).then((function(e){if(!e.ok)throw Error("There was a problem fetching data");return e.json()}))}function x(e){return Object(c.jsx)("span",Object(d.a)(Object(d.a)({},e),{},{children:Object(c.jsx)(i.g,{className:"icon-loading"})}))}var p={group:"Rooms",bookableIndex:0,hasDetails:!0,bookables:[],isLoading:!0,error:!1};function m(){var e=Object(l.useReducer)(u,p),t=Object(o.a)(e,2),n=t[0],s=t[1],a=n.group,r=n.bookableIndex,j=n.hasDetails,d=n.bookables,m=n.isLoading,f=n.error,E=d.filter((function(e){return e.group===a})),g=E[r],y=Object(b.a)(new Set(d.map((function(e){return e.group}))));return Object(l.useEffect)((function(){s({type:"FETCH_BOOKABLES_REQUEST"}),h("http://my-json-server.typicode.com/AnnuCode/JSON/bookables").then((function(e){return s({type:"FETCH_BOOKABLES_SUCCESS",payload:e})})).catch((function(e){return s({type:"FETCH_BOOKABLES_FAIL",payload:e})}))}),[]),m?Object(c.jsxs)("p",{children:[" ",Object(c.jsx)(x,{})," Loading bookables... "]}):f?Object(c.jsxs)("p",{children:[" ",f.message," "]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("select",{value:a,onChange:function(e){return function(e){s({type:"SET_GROUP",payload:e.target.value})}(e)},children:y.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))}),Object(c.jsx)("ul",{className:"bookables items-list-nav",children:E.map((function(e,t){return Object(c.jsx)("li",{className:t===r?"selected":null,children:Object(c.jsx)("button",{className:"btn",onClick:function(){s({type:"SET_BOOKABLE",payload:t})},children:e.title})},e.id)}))}),Object(c.jsx)("p",{children:Object(c.jsxs)("button",{className:"btn",onClick:function(){s({type:"NEXT_BOOKABLE"})},autoFocus:!0,children:[Object(c.jsx)(i.a,{}),Object(c.jsx)("span",{children:"Next"})]})})]}),g&&Object(c.jsx)("div",{className:"bookable-details",children:Object(c.jsxs)("div",{className:"item",children:[Object(c.jsxs)("div",{className:"item-header",children:[Object(c.jsx)("h2",{children:g.title}),Object(c.jsx)("span",{className:"controls",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:j,onChange:function(){s({type:"TOGGLE_HAS_DETAILS"})}}),"Show details"]})})]}),Object(c.jsx)("p",{children:g.notes}),j&&Object(c.jsxs)("div",{className:"item-details",children:[Object(c.jsx)("h3",{children:"Availability"}),Object(c.jsxs)("div",{className:"bookable-availability",children:[Object(c.jsx)("ul",{children:g.days.sort().map((function(e){return Object(c.jsx)("li",{children:O.a[e]})}))}),Object(c.jsx)("ul",{children:g.sessions.sort().map((function(e){return Object(c.jsx)("li",{children:O.b[e]})}))})]})]})]})})]})}function f(){return Object(c.jsx)("main",{className:"bookables-page",children:Object(c.jsx)(m,{})})}function E(e,t){var n=new Date(e.getTime());return n.setDate(n.getDate()+t),n}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=E(e,t),c=n.getDay();return{date:n,start:E(n,-c),end:E(n,6-c)}}function y(e,t){switch(t.type){case"NEXT_WEEK":return g(e.date,7);case"PREV_WEEK":return g(e.date,-7);case"TODAY":return g(new Date);case"SET_DATE":return g(new Date(t.payload));default:throw new Error("Unknown action type: ".concat(t.type))}}function k(e){var t=e.date,n=Object(l.useReducer)(y,t,g),s=Object(o.a)(n,2),a=s[0],r=s[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"date-picker",children:[Object(c.jsxs)("button",{className:"btn",onClick:function(){return r({type:"PREV_WEEK"})},children:[Object(c.jsx)(i.d,{}),Object(c.jsx)("span",{children:" Prev "})]}),Object(c.jsxs)("button",{className:"btn",onClick:function(){return r({type:"TODAY"})},children:[Object(c.jsx)(i.c,{}),Object(c.jsx)("span",{children:" Today "})]}),Object(c.jsxs)("button",{className:"btn",onClick:function(){return r({type:"NEXT_WEEK"})},children:[Object(c.jsx)("span",{children:" Next "}),Object(c.jsx)(i.e,{})]})]}),Object(c.jsxs)("p",{children:[a.start.toDateString()," - ",a.end.toDateString()]})]})}function N(){return Object(c.jsxs)("main",{className:"bookings-page",children:[Object(c.jsx)("p",{children:"Bookings!"}),Object(c.jsx)(k,{date:new Date})]})}function S(){var e=Object(l.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(l.useState)(1),r=Object(o.a)(a,2),j=r[0],i=r[1],b=Object(l.useState)(!1),O=Object(o.a)(b,2),d=O[0],u=O[1],p=null===n||void 0===n?void 0:n[j],m=Object(l.useState)(!0),f=Object(o.a)(m,2),E=f[0],g=f[1],y=Object(l.useState)(null),k=Object(o.a)(y,2),N=k[0],S=k[1];return Object(l.useEffect)((function(){h("https://my-json-server.typicode.com/AnnuCode/JSON/users").then((function(e){s(e),g(!1)})).catch((function(e){S(e),g(!1)}))}),[]),N?Object(c.jsx)("p",{children:N.message}):E?Object(c.jsxs)("p",{children:[" ",Object(c.jsx)(x,{})," Loading Users... "]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("ul",{className:" users items-list-nav",children:n.map((function(e,t){return Object(c.jsx)("li",{className:t===j?"selected":null,children:Object(c.jsx)("button",{className:"btn",onClick:function(){return i(t)},children:e.name})},e.id)}))})}),p&&Object(c.jsxs)("div",{className:"item user",children:[Object(c.jsxs)("div",{className:"item-header",children:[Object(c.jsx)("h2",{children:p.name}),Object(c.jsx)("span",{className:"controls",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(){return u((function(e){return!e}))}}),"Show Details"]})})]}),d&&Object(c.jsxs)("div",{className:"user-details",children:[Object(c.jsx)("h3",{children:p.title}),Object(c.jsx)("p",{children:p.notes})]})]})]})}function v(){return Object(c.jsx)("main",{className:"users-page",children:Object(c.jsx)(S,{})})}function T(){var e=Object(l.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(l.useEffect)((function(){fetch("https://my-json-server.typicode.com/AnnuCode/JSON/users").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),null===n?Object(c.jsx)(x,{}):Object(c.jsx)("select",{className:"item-list-nav",children:n.map((function(e,t){return Object(c.jsx)("option",{children:e.name},e.id)}))})}function _(){return Object(c.jsx)(r.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsxs)(r.b,{to:"/bookings",className:"btn btn-header",children:[Object(c.jsx)(i.b,{}),Object(c.jsx)("span",{children:"Bookings"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(r.b,{to:"/bookables",className:"btn btn-header",children:[Object(c.jsx)(i.f,{}),Object(c.jsx)("span",{children:"Bookables"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(r.b,{to:"/users",className:"btn btn-header",children:[Object(c.jsx)(i.h,{}),Object(c.jsx)("span",{children:"Users"})]})})]})}),Object(c.jsx)(T,{})]}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/bookings",element:Object(c.jsx)(N,{})}),Object(c.jsx)(j.a,{path:"/bookables",element:Object(c.jsx)(f,{})}),Object(c.jsx)(j.a,{path:"/users",element:Object(c.jsx)(v,{})})]})]})})}a.a.render(Object(c.jsx)(_,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.cc645fe2.chunk.js.map