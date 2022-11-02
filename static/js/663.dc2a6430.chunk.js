"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[663],{57758:function(n,t,e){e.d(t,{Z:function(){return k}});var r=e(29439),o=e(1413),a=e(59434),s=e(72791),c=e(60043),i=e(59513),u=e.n(i),l=e(33168),d=(e(68639),"FormTransaction_form__Drpod"),m="FormTransaction_timeDiv__VkmNl",h="FormTransaction_calendarIcon__7sCrv",p="FormTransaction_date__exygo",_="FormTransaction_input__Jbj3O",x="FormTransaction_select__cUCSM",f="FormTransaction_calcInput__cByYk",g="FormTransaction_buttonList__r8Tzc",b="FormTransaction_buttonInput__Fqdxq",j="FormTransaction_buttonClear__hDUfF",C="FormTransaction_label__LxjKS",v=e(9085),y=e(24805),Z=e(57689),S=e(53401),N=e(80184),F={control:function(n){return(0,o.Z)((0,o.Z)({},n),{},{border:" 2px solid var(--border-light)",width:"169px",borderRadius:"0px",color:"#C7CCDC",backgroundColor:"var(--input-bg-color)"})},menuList:function(n){return(0,o.Z)((0,o.Z)({},n),{},{backgroundColor:"var(--input-bg-color)",border:" 2px solid var(--border-light)",borderRadius:"4px"})},placeholder:function(n){return(0,o.Z)((0,o.Z)({},n),{},{color:"#C7CCDC"})},singleValue:function(n){return(0,o.Z)((0,o.Z)({},n),{},{color:"#C7CCDC"})}},D={control:function(n){return(0,o.Z)((0,o.Z)({},n),{},{border:" none",width:"280px",borderRadius:"0px",color:"#C7CCDC",backgroundColor:"transparent"})},menuList:function(n){return(0,o.Z)((0,o.Z)({},n),{},{backgroundColor:"var(--input-bg-color)",border:" 2px solid var(--border-light)",borderRadius:"4px"})},placeholder:function(n){return(0,o.Z)((0,o.Z)({},n),{},{color:"#C7CCDC"})},singleValue:function(n){return(0,o.Z)((0,o.Z)({},n),{},{color:"#C7CCDC"})}},k=function(n){var t=n.operation,e=n.options,o=n.date,i=n.setDate,k=(0,s.useState)(""),T=(0,r.Z)(k,2),w=T[0],I=T[1],L=(0,s.useState)(null),O=(0,r.Z)(L,2),$=O[0],R=O[1],A=(0,s.useState)(""),q=(0,r.Z)(A,2),M=q[0],E=q[1],J=(0,a.I0)(),P=(0,Z.s0)(),K=(0,l.$)().t,U=(0,y.useMediaQuery)({query:"(max-width: 767.9px)"});return(0,N.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),null===$)return v.Am.error(K("transactions.categoryInfo"),{autoClose:2e3,theme:"colored"});var e={description:w,amount:Number(M),date:o.toISOString().slice(0,10),category:$.value};J(t(e)),U&&P("transactions")},className:d,children:[(0,N.jsxs)("div",{className:m,children:[(0,N.jsx)("svg",{className:h,width:"90",height:"31",children:(0,N.jsx)("use",{href:"".concat(S.Z,"#icon-calendar")})}),(0,N.jsx)(u(),{dateFormat:"dd.MM.yyyy",className:p,selected:o,onChange:function(n){return i(n)}})]}),(0,N.jsx)("label",{className:C,children:(0,N.jsx)("input",{className:_,type:"text",name:"description",placeholder:K("transactions.prodDescr"),required:!0,value:w,onChange:function(n){var t=n.target.value;I(t)}})}),(0,N.jsx)(c.ZP,{className:x,styles:U?D:F,placeholder:K("transactions.prodCateg"),value:$,onChange:R,options:e}),(0,N.jsx)("label",{children:(0,N.jsx)("input",{className:f,type:"number",name:"number",min:"0",pattern:"^[1-9]\\d*$",required:!0,placeholder:"0,00",value:M,onChange:function(n){var t=n.target.value;E(t)}})}),(0,N.jsxs)("div",{className:g,children:[(0,N.jsx)("button",{type:"submit",className:b,children:K("transactions.input")}),(0,N.jsx)("button",{type:"button",className:j,onClick:function(){i(new Date),I(""),R(null),E("")},children:K("transactions.clear")})]})]})}},93663:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(29439),o=e(72791),a=e(59434),s=e(87261),c=e(30536),i=e(57758),u=e(39645),l=e(39516),d=e(19835),m=e(90998),h="IncomeComponent_transactions__E5MJg",p=e(4187),_=e(33168),x=e(80184),f=function(){var n=(0,o.useState)(new Date),t=(0,r.Z)(n,2),e=t[0],f=t[1],g=(0,a.v9)(s.hg),b=(0,a.v9)(p.iP),j=(0,a.v9)(s.yS),C=(0,a.v9)(m.P),v=(0,a.I0)(),y=(0,(0,_.$)().t)("incomeCategArray",{returnObjects:!0});return(0,o.useEffect)((function(){b&&0===j.length&&v((0,d.FJ)())}),[j.length,b]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.Z,{operation:d.$K,options:y,date:e,setDate:f}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)(l.Z,{location:"incomes",transactionsArray:j.filter((function(n){return n.date===e.toISOString().slice(0,10)})),monthStats:C}),(0,x.jsx)(u.E,{monthStats:C})]}),g&&(0,x.jsx)(c.Z,{})]})}},39645:function(n,t,e){e.d(t,{E:function(){return l}});var r=e(72791),o="Summary_summary__0kpmh",a="Summary_title__dimK-",s="Summary_list__dKE4L",c="Summary_item__St+1w",i=e(33168),u=e(80184),l=function(n){var t=n.monthStats,e=(0,r.useRef)((new Date).getMonth()),l=Object.entries(t).filter((function(n,t){return t<=e.current})),d=(0,i.$)().t,m=d("months",{returnObjects:!0});return(0,u.jsx)("div",{className:o,children:l.length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:a,children:d("summary.summary")}),(0,u.jsx)("ul",{className:s,children:l.map((function(n){return(0,u.jsxs)("li",{className:c,children:[(0,u.jsx)("p",{children:m[n[0]]}),(0,u.jsx)("p",{children:"N/A"===n[1]?0:n[1].toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 ")})]},n[0])}))})]})})}},39516:function(n,t,e){e.d(t,{Z:function(){return m}});var r=e(93433),o=e(1413),a=(e(72791),e(59434)),s=e(33168),c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},i=e(19835),u={table:"TransactionList_table__cOyds",buttonDelete:"TransactionList_buttonDelete__ZC2ef",expenses:"TransactionList_expenses__J27sj",incomes:"TransactionList_incomes__1-wz6"},l=e(4187),d=e(80184),m=function(n){var t=n.transactionsArray,e=n.location,m=n.monthStats,h=(0,a.v9)(l.iP),p=(0,a.I0)(),_=(0,s.$)().t,x=_("expenseReport",{returnObjects:!0}),f=_("incomeReport",{returnObjects:!0}),g=Object.keys(m),b=t.length<7?function(n){var t=Array(7-n.length).fill({_id:"",description:"",amount:null,date:"",category:""}).map((function(n){return(0,o.Z)((0,o.Z)({},n),{},{_id:c()})}));return[].concat((0,r.Z)(n),(0,r.Z)(t))}(t):t;return(0,d.jsx)(d.Fragment,{children:h&&g.length>0&&(0,d.jsxs)("table",{className:u.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:_("transactions.date")}),(0,d.jsx)("th",{children:_("transactions.descr")}),(0,d.jsx)("th",{children:_("transactions.categ")}),(0,d.jsx)("th",{children:_("transactions.sum")}),(0,d.jsx)("th",{})]})}),(0,d.jsx)("tbody",{className:u.tableBody,children:b.map((function(n,t){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:n.date&&n.date.split("-").reverse().join(".")}),(0,d.jsx)("td",{children:n.description&&n.description}),(0,d.jsx)("td",{children:n.category&&"expenses"===e?x[n.category].title:f[n.category]}),(0,d.jsxs)("td",{style:"expenses"===e?{color:"red",fontWeight:"bold"}:{color:"green",fontWeight:"bold"},children:["expenses"===e&&n.amount&&"-","\xa0",n.amount&&"".concat(n.amount.toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 ")," ").concat(_("general.currencyName"))]}),(0,d.jsx)("td",{children:n.amount&&(0,d.jsx)("button",{className:u.buttonDelete,onClick:function(){return p((0,i.qL)(n._id))}})})]},n._id)}))})]})})}},90998:function(n,t,e){e.d(t,{P:function(){return o},_:function(){return r}});var r=function(n){return n.monthsStats.expenses},o=function(n){return n.monthsStats.incomes}},87261:function(n,t,e){e.d(t,{Jz:function(){return o},hg:function(){return r},yS:function(){return a}});var r=function(n){return n.transactions.loading},o=function(n){return n.transactions.expenses},a=function(n){return n.transactions.incomes}}}]);
//# sourceMappingURL=663.dc2a6430.chunk.js.map