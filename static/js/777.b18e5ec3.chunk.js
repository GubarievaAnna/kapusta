"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[777],{13777:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(29439),a=e(72791),o=e(59434),s=e(19835),c=e(87261),i=e(90998),u=e(30536),l=e(39645),d=e(57758),m=e(39516),h="ExpensesComponent_transactions__GBp52",p=e(4187),x=e(33168),_=e(80184),f=function(){var n=(0,a.useState)(new Date),t=(0,r.Z)(n,2),e=t[0],f=t[1],g=(0,o.v9)(c.hg),j=(0,o.v9)(p.iP),b=(0,o.v9)(i._),C=(0,o.v9)(c.Jz),v=(0,o.I0)(),y=(0,(0,x.$)().t)("expensesCategArray",{returnObjects:!0});return(0,a.useEffect)((function(){j&&0===C.length&&v((0,s.fj)())}),[C.length,j]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d.Z,{operation:s.mU,options:y,date:e,setDate:f}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)(m.Z,{location:"expenses",transactionsArray:C.filter((function(n){return n.date===e.toISOString().slice(0,10)})),monthStats:b}),(0,_.jsx)(l.E,{monthStats:b})]}),g&&(0,_.jsx)(u.Z,{})]})}},57758:function(n,t,e){e.d(t,{Z:function(){return k}});var r=e(29439),a=e(1413),o=e(59434),s=e(72791),c=e(60043),i=e(59513),u=e.n(i),l=e(33168),d=(e(68639),"FormTransaction_form__Drpod"),m="FormTransaction_timeDiv__VkmNl",h="FormTransaction_calendarIcon__7sCrv",p="FormTransaction_date__exygo",x="FormTransaction_input__Jbj3O",_="FormTransaction_select__cUCSM",f="FormTransaction_calcInput__cByYk",g="FormTransaction_buttonList__r8Tzc",j="FormTransaction_buttonInput__Fqdxq",b="FormTransaction_buttonClear__hDUfF",C="FormTransaction_label__LxjKS",v=e(9085),y=e(24805),Z=e(57689),S=e(53401),N=e(80184),D={control:function(n){return(0,a.Z)((0,a.Z)({},n),{},{border:" 2px solid var(--border-light)",width:"169px",borderRadius:"0px",color:"#C7CCDC",backgroundColor:"var(--input-bg-color)"})},menuList:function(n){return(0,a.Z)((0,a.Z)({},n),{},{backgroundColor:"var(--input-bg-color)",border:" 2px solid var(--border-light)",borderRadius:"4px"})},placeholder:function(n){return(0,a.Z)((0,a.Z)({},n),{},{color:"#C7CCDC"})},singleValue:function(n){return(0,a.Z)((0,a.Z)({},n),{},{color:"#C7CCDC"})}},F={control:function(n){return(0,a.Z)((0,a.Z)({},n),{},{border:" none",width:"280px",borderRadius:"0px",color:"#C7CCDC",backgroundColor:"transparent"})},menuList:function(n){return(0,a.Z)((0,a.Z)({},n),{},{backgroundColor:"var(--input-bg-color)",border:" 2px solid var(--border-light)",borderRadius:"4px"})},placeholder:function(n){return(0,a.Z)((0,a.Z)({},n),{},{color:"#C7CCDC"})},singleValue:function(n){return(0,a.Z)((0,a.Z)({},n),{},{color:"#C7CCDC"})}},k=function(n){var t=n.operation,e=n.options,a=n.date,i=n.setDate,k=(0,s.useState)(""),T=(0,r.Z)(k,2),w=T[0],L=T[1],O=(0,s.useState)(null),I=(0,r.Z)(O,2),$=I[0],R=I[1],A=(0,s.useState)(""),q=(0,r.Z)(A,2),E=q[0],M=q[1],U=(0,o.I0)(),z=(0,Z.s0)(),J=(0,l.$)().t,P=(0,y.useMediaQuery)({query:"(max-width: 767.9px)"});return(0,N.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),null===$)return v.Am.error(J("transactions.categoryInfo"),{autoClose:2e3,theme:"colored"});var e={description:w,amount:Number(E),date:a.toISOString().slice(0,10),category:$.value};U(t(e)),P&&z("transactions")},className:d,children:[(0,N.jsxs)("div",{className:m,children:[(0,N.jsx)("svg",{className:h,width:"90",height:"31",children:(0,N.jsx)("use",{href:"".concat(S.Z,"#icon-calendar")})}),(0,N.jsx)(u(),{dateFormat:"dd.MM.yyyy",className:p,selected:a,onChange:function(n){return i(n)}})]}),(0,N.jsx)("label",{className:C,children:(0,N.jsx)("input",{className:x,type:"text",name:"description",placeholder:J("transactions.prodDescr"),required:!0,value:w,onChange:function(n){var t=n.target.value;L(t)}})}),(0,N.jsx)(c.ZP,{className:_,styles:P?F:D,placeholder:J("transactions.prodCateg"),value:$,onChange:R,options:e}),(0,N.jsx)("label",{children:(0,N.jsx)("input",{className:f,type:"number",name:"number",min:"0",pattern:"^[1-9]\\d*$",required:!0,placeholder:"0,00",value:E,onChange:function(n){var t=n.target.value;M(t)}})}),(0,N.jsxs)("div",{className:g,children:[(0,N.jsx)("button",{type:"submit",className:j,children:J("transactions.input")}),(0,N.jsx)("button",{type:"button",className:b,onClick:function(){i(new Date),L(""),R(null),M("")},children:J("transactions.clear")})]})]})}},39645:function(n,t,e){e.d(t,{E:function(){return l}});var r=e(72791),a="Summary_summary__0kpmh",o="Summary_title__dimK-",s="Summary_list__dKE4L",c="Summary_item__St+1w",i=e(33168),u=e(80184),l=function(n){var t=n.monthStats,e=(0,r.useRef)((new Date).getMonth()),l=Object.entries(t).filter((function(n,t){return t<=e.current})),d=(0,i.$)().t,m=d("months",{returnObjects:!0});return(0,u.jsx)("div",{className:a,children:l.length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:o,children:d("summary.summary")}),(0,u.jsx)("ul",{className:s,children:l.map((function(n){return(0,u.jsxs)("li",{className:c,children:[(0,u.jsx)("p",{children:m[n[0]]}),(0,u.jsx)("p",{children:"N/A"===n[1]?0:n[1].toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 ")})]},n[0])}))})]})})}},39516:function(n,t,e){e.d(t,{Z:function(){return m}});var r=e(93433),a=e(1413),o=(e(72791),e(59434)),s=e(33168),c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},i=e(19835),u={table:"TransactionList_table__cOyds",buttonDelete:"TransactionList_buttonDelete__ZC2ef",expenses:"TransactionList_expenses__J27sj",incomes:"TransactionList_incomes__1-wz6"},l=e(4187),d=e(80184),m=function(n){var t=n.transactionsArray,e=n.location,m=n.monthStats,h=(0,o.v9)(l.iP),p=(0,o.I0)(),x=(0,s.$)().t,_=x("expenseReport",{returnObjects:!0}),f=x("incomeReport",{returnObjects:!0}),g=Object.keys(m),j=t.length<7?function(n){var t=Array(7-n.length).fill({_id:"",description:"",amount:null,date:"",category:""}).map((function(n){return(0,a.Z)((0,a.Z)({},n),{},{_id:c()})}));return[].concat((0,r.Z)(n),(0,r.Z)(t))}(t):t;return(0,d.jsx)(d.Fragment,{children:h&&g.length>0&&(0,d.jsxs)("table",{className:u.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:x("transactions.date")}),(0,d.jsx)("th",{children:x("transactions.descr")}),(0,d.jsx)("th",{children:x("transactions.categ")}),(0,d.jsx)("th",{children:x("transactions.sum")}),(0,d.jsx)("th",{})]})}),(0,d.jsx)("tbody",{className:u.tableBody,children:j.map((function(n,t){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:n.date&&n.date.split("-").reverse().join(".")}),(0,d.jsx)("td",{children:n.description&&n.description}),(0,d.jsx)("td",{children:n.category&&"expenses"===e?_[n.category].title:f[n.category]}),(0,d.jsxs)("td",{style:"expenses"===e?{color:"red",fontWeight:"bold"}:{color:"green",fontWeight:"bold"},children:["expenses"===e&&n.amount&&"-","\xa0",n.amount&&"".concat(n.amount.toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 ")," ").concat(x("general.currencyName"))]}),(0,d.jsx)("td",{children:n.amount&&(0,d.jsx)("button",{className:u.buttonDelete,onClick:function(){return p((0,i.qL)(n._id))}})})]},n._id)}))})]})})}},90998:function(n,t,e){e.d(t,{P:function(){return a},_:function(){return r}});var r=function(n){return n.monthsStats.expenses},a=function(n){return n.monthsStats.incomes}},87261:function(n,t,e){e.d(t,{Jz:function(){return a},hg:function(){return r},yS:function(){return o}});var r=function(n){return n.transactions.loading},a=function(n){return n.transactions.expenses},o=function(n){return n.transactions.incomes}}}]);
//# sourceMappingURL=777.b18e5ec3.chunk.js.map