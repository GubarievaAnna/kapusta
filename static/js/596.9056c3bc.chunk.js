"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[596],{48734:function(e,n,a){a.d(n,{y:function(){return S}});var t=a(29439),r=a(72791),s=a(59434),o=a(9085),c=a(24805),i=a(57689),l=a(42295),u={modal:"BalanceModal_modal__C0hkc",part:"BalanceModal_part__Mp8tJ",text:"BalanceModal_text__nR0Ka",secondText:"BalanceModal_secondText__a3wM0"},d=a(80184),m=function(){return(0,d.jsxs)("div",{className:u.modalWindow,children:[(0,d.jsxs)("div",{className:u.modal,children:[(0,d.jsx)("p",{className:u.text,children:"Hello! To get started, enter the current balance of your account!"}),(0,d.jsx)("p",{className:u.secondText,children:"You can't spend money until you have it :)"})]}),(0,d.jsx)("div",{className:u.part})]})},_=a(33168),x=a(4187),h=a(87261),p="Balance_balance__41oSS",b="Balance_title__2Bv5K",v="Balance_info__eIFcS",f="Balance_label__9QrSJ",j="Balance_labelTab__30hOm",g="Balance_labelMobile__f4IoX",C="Balance_input__5zeug",N="Balance_money__1igFa",T="Balance_button__UsoOP",y="Balance_buttonNone__2BvoG",Z="Balance_buttonActive__g5Mhi Balance_button__UsoOP",D=a(67473),F=a(23937),S=function(){var e=(0,s.v9)(D.s),n=(0,s.v9)(x.iP),a=(0,s.v9)(h.Jz),u=(0,s.v9)(h.yS),S=(0,s.I0)(),k=(0,_.$)().t,w=(0,i.TH)(),B=(0,r.useState)(0),M=(0,t.Z)(B,2),L=M[0],H=M[1],I=(0,c.useMediaQuery)({query:"(max-width: 1280px)"}),J=(0,c.useMediaQuery)({query:"(max-width: 767.9px)"}),P=new Audio(F);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{className:p,onSubmit:function(e){if(e.preventDefault(),P.play(),""!==L)return S((0,l.o)({newBalance:L}));o.Am.error(k("balance.inputInfo"),{autoClose:2e3,theme:"colored"})},children:[(0,d.jsxs)("h3",{className:b,children:[k("balance.balanceTitle"),":"]}),(0,d.jsxs)("div",{className:v,children:[(0,d.jsxs)("label",{className:"".concat(f," ").concat(J&&"/reports"===w.pathname&&g," ").concat(I&&"/reports"===w.pathname&&j),children:[(0,d.jsx)("input",{type:"text",className:C,value:0!==e?e.toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "):0===a.length&0===u.length?L:0,decimalscale:1,maxLength:9,onChange:function(e){var n=e.target.value;H(n)},disabled:!(0===e&&0===a.length&0===u.length)}),(0,d.jsx)("p",{className:N,children:k("balance.currency")}),0===L&&0===e&&n&&0===a.length&0===u.length?(0,d.jsx)(m,{}):!(0,d.jsx)(m,{})]}),(0,d.jsx)("button",{className:I&&"/reports"===w.pathname?y:0===e&&0===a.length&0===u.length?Z:T,type:"submit",disabled:!(0===e&&0===a.length&0===u.length),children:k("balance.confirm")})]})]})})}},57758:function(e,n,a){a.d(n,{Z:function(){return S}});var t=a(29439),r=a(1413),s=a(59434),o=a(72791),c=a(60043),i=a(59513),l=a.n(i),u=a(33168),d=(a(68639),"FormTransaction_form__Drpod"),m="FormTransaction_timeDiv__VkmNl",_="FormTransaction_calendarIcon__7sCrv",x="FormTransaction_date__exygo",h="FormTransaction_input__Jbj3O",p="FormTransaction_select__cUCSM",b="FormTransaction_calcInput__cByYk",v="FormTransaction_buttonList__r8Tzc",f="FormTransaction_buttonInput__Fqdxq",j="FormTransaction_buttonClear__hDUfF",g="FormTransaction_label__LxjKS",C=a(9085),N=a(24805),T=a(57689),y=a(53401),Z=a(80184),D={control:function(e){return(0,r.Z)((0,r.Z)({},e),{},{border:" 2px solid var(--border-light)",width:"169px",borderRadius:"0px",color:"#C7CCDC",backgroundColor:"var(--input-bg-color)"})},menuList:function(e){return(0,r.Z)((0,r.Z)({},e),{},{backgroundColor:"var(--input-bg-color)",border:" 2px solid var(--border-light)",borderRadius:"4px"})},placeholder:function(e){return(0,r.Z)((0,r.Z)({},e),{},{color:"#C7CCDC"})},singleValue:function(e){return(0,r.Z)((0,r.Z)({},e),{},{color:"#C7CCDC"})}},F={control:function(e){return(0,r.Z)((0,r.Z)({},e),{},{border:" none",width:"280px",borderRadius:"0px",color:"#C7CCDC",backgroundColor:"transparent"})},menuList:function(e){return(0,r.Z)((0,r.Z)({},e),{},{backgroundColor:"var(--input-bg-color)",border:" 2px solid var(--border-light)",borderRadius:"4px"})},placeholder:function(e){return(0,r.Z)((0,r.Z)({},e),{},{color:"#C7CCDC"})},singleValue:function(e){return(0,r.Z)((0,r.Z)({},e),{},{color:"#C7CCDC"})}},S=function(e){var n=e.operation,a=e.options,r=e.date,i=e.setDate,S=(0,o.useState)(""),k=(0,t.Z)(S,2),w=k[0],B=k[1],M=(0,o.useState)(null),L=(0,t.Z)(M,2),H=L[0],I=L[1],J=(0,o.useState)(""),P=(0,t.Z)(J,2),q=P[0],O=P[1],R=(0,s.I0)(),U=(0,T.s0)(),z=(0,u.$)().t,$=(0,N.useMediaQuery)({query:"(max-width: 767.9px)"});return(0,Z.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),null===H)return C.Am.error(z("transactions.categoryInfo"),{autoClose:2e3,theme:"colored"});var a={description:w,amount:Number(q),date:r.toISOString().slice(0,10),category:H.value};R(n(a)),$&&U("transactions")},className:d,children:[(0,Z.jsxs)("div",{className:m,children:[(0,Z.jsx)("svg",{className:_,width:"90",height:"31",children:(0,Z.jsx)("use",{href:"".concat(y.Z,"#icon-calendar")})}),(0,Z.jsx)(l(),{dateFormat:"dd.MM.yyyy",className:x,selected:r,onChange:function(e){return i(e)}})]}),(0,Z.jsx)("label",{className:g,children:(0,Z.jsx)("input",{className:h,type:"text",name:"description",placeholder:z("transactions.prodDescr"),required:!0,value:w,onChange:function(e){var n=e.target.value;B(n)}})}),(0,Z.jsx)(c.ZP,{className:p,styles:$?F:D,placeholder:z("transactions.prodCateg"),value:H,onChange:I,options:a}),(0,Z.jsx)("label",{children:(0,Z.jsx)("input",{className:b,type:"number",name:"number",min:"0",pattern:"^[1-9]\\d*$",required:!0,placeholder:"0,00",value:q,onChange:function(e){var n=e.target.value;O(n)}})}),(0,Z.jsxs)("div",{className:v,children:[(0,Z.jsx)("button",{type:"submit",className:f,children:z("transactions.input")}),(0,Z.jsx)("button",{type:"button",className:j,onClick:function(){i(new Date),B(""),I(null),O("")},children:z("transactions.clear")})]})]})}},78596:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var t=a(72791),r=a(57689),s=a(11087),o=a(33168),c=a(48734),i=a(53401),l="DataHeader_container__eDcTH",u="DataHeader_reportsLinkWrapper__JF-W9",d="DataHeader_reports__jQzVY",m="DataHeader_iconReports__62TRM",_=a(80184),x=function(){var e=(0,o.$)().t;return(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)(c.y,{}),(0,_.jsxs)(s.rU,{className:u,to:"/reports",children:[(0,_.jsx)("span",{className:d,children:e("general.reports")}),(0,_.jsx)("svg",{className:m,width:"24",height:"24",children:(0,_.jsx)("use",{href:"".concat(i.Z,"#icon-reports")})})]})]})},h="HomeNavigation_container__caUCV",p="HomeNavigation_link__qGIjl",b="HomeNavigation_activeLink__2oES1",v=a(59434),f=a(87261),j=a(67473);var g=function(){var e=(0,o.$)().t,n=(0,v.v9)(j.s),a=(0,v.v9)(f.Jz),t=(0,v.v9)(f.yS),c=(0,r.TH)();return(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)(s.rU,{to:"expenses",disabled:!(0===n&&0===a.length&0===t.length),className:"/transactions/expenses"===c.pathname?b:p,children:e("nav.expenses")}),(0,_.jsx)(s.rU,{to:"income",disabled:!(0===n&&0===a.length&0===t.length),className:"/transactions/income"===c.pathname?b:p,children:e("nav.income")})]})},C=a(24805),N=a(93433),T=a(1413),y=a(4187),Z=a(19835),D={expensesText:"mobileTransactionList_expensesText__CWicM",listmob:"mobileTransactionList_listmob__rgaMx",incomesText:"mobileTransactionList_incomesText__DRlwd",itemLi:"mobileTransactionList_itemLi__On2Tg",title:"mobileTransactionList_title__iJPok",infoText:"mobileTransactionList_infoText__+8Axm",date:"mobileTransactionList_date__sdG7h",smallinfoText:"mobileTransactionList_smallinfoText__gTcld",buttonDeletemob:"mobileTransactionList_buttonDeletemob__n1e-7"},F=function(){var e=(0,v.v9)(f.Jz),n=(0,v.v9)(f.yS),a=e.map((function(e){return(0,T.Z)((0,T.Z)({},e),{},{amount:Number("-".concat(e.amount))})})),r=[].concat((0,N.Z)(n),(0,N.Z)(a)),s=(0,v.I0)(),o=(0,v.v9)(y.iP);return(0,t.useEffect)((function(){o&&(s((0,Z.FJ)()),s((0,Z.fj)()))}),[r.length,o]),(0,_.jsx)("ul",{className:D.listmob,children:r.map((function(e){return(0,_.jsxs)("li",{className:D.itemLi,children:[(0,_.jsxs)("div",{className:D.infoText,children:[(0,_.jsx)("p",{className:D.title,children:e.description}),(0,_.jsxs)("div",{className:D.smallinfoText,children:[(0,_.jsx)("p",{className:D.date,children:e.date.split("-").reverse().join(".")}),(0,_.jsx)("p",{className:D.category,children:e.category})]})]}),(0,_.jsx)("p",{className:e.amount<0?D.expensesText:D.incomesText,children:e.amount}),(0,_.jsx)("button",{className:D.buttonDeletemob,onClick:function(){return s((0,Z.qL)(e._id))}})]},e._id)}))})},S=a(29439),k=a(59513),w=a.n(k),B="datePickerComp_timeDiv__XSt3C",M="datePickerComp_calendarIcon__9XRF-",L="datePickerComp_date__Tzw+3",H=function(){var e=(0,t.useState)(new Date),n=(0,S.Z)(e,2),a=n[0],r=n[1];return(0,_.jsxs)("div",{className:B,children:[(0,_.jsx)("svg",{className:M,width:"90",height:"31",children:(0,_.jsx)("use",{href:"".concat(i.Z,"#icon-calendar")})}),(0,_.jsx)(w(),{dateFormat:"dd.MM.yyyy",className:L,selected:a,onChange:function(e){return r(e)}})]})},I=a(57758),J=JSON.parse('[{"value":"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","label":"Transport"},{"value":"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","label":"Products"},{"value":"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435","label":"Health"},{"value":"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c","label":"Alcohol"},{"value":"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f","label":"Entertainment"},{"value":"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430","label":"Housing"},{"value":"\u0422\u0435\u0445\u043d\u0438\u043a\u0430","label":"Technique"},{"value":"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c","label":"Communal, communication"},{"value":"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438","label":"Sports, hobbies"},{"value":"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435","label":"Education"},{"value":"\u041f\u0440\u043e\u0447\u0435\u0435","label":"Other"}]'),P=JSON.parse('[{"value":"\u0417/\u041f","label":"Salary"},{"value":"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434","label":"Add. income"}]'),q="MobileFormTransaction_btnPrevPagemob__Z-xXB",O=function(){var e=(0,t.useState)(new Date),n=(0,S.Z)(e,2),a=n[0],s=n[1],o=(0,r.s0)(),c=(0,r.TH)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{className:q,onClick:function(e){return o("transaction")}}),"/transactions/expenses"===c.pathname&&(0,_.jsx)(I.Z,{operation:Z.mU,options:J,date:a,setDate:s}),"/transactions/income"===c.pathname&&(0,_.jsx)(I.Z,{operation:Z.$K,options:P,date:a,setDate:s})]})},R=function(){var e=(0,r.s0)(),n=(0,C.useMediaQuery)({query:"(max-width: 767.9px)"}),a=(0,r.TH)();return(0,t.useEffect)((function(){n||e("expenses")}),[n]),(0,_.jsx)(_.Fragment,{children:n?"/transactions/expenses"===a.pathname||"/transactions/income"===a.pathname?(0,_.jsx)(O,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(x,{}),(0,_.jsx)(g,{}),(0,_.jsx)(H,{}),(0,_.jsx)(F,{})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(x,{}),(0,_.jsx)(g,{}),(0,_.jsx)("div",{className:"container_transactions",children:(0,_.jsx)(t.Suspense,{children:(0,_.jsx)(r.j3,{})})})]})})}},67473:function(e,n,a){a.d(n,{s:function(){return t}});var t=function(e){return e.balance.balance}},87261:function(e,n,a){a.d(n,{Jz:function(){return r},hg:function(){return t},yS:function(){return s}});var t=function(e){return e.transactions.loading},r=function(e){return e.transactions.expenses},s=function(e){return e.transactions.incomes}},23937:function(e,n,a){e.exports=a.p+"static/media/coins-drop.e4b7233ee3a35134f15a.mp3"}}]);
//# sourceMappingURL=596.9056c3bc.chunk.js.map