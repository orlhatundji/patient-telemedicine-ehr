"use strict";(self.webpackChunkpatient_telemedicine_ehr=self.webpackChunkpatient_telemedicine_ehr||[]).push([[31],{436:(e,t,s)=>{s.d(t,{Ay:()=>c,Mv:()=>i,Td:()=>l});s(43);var a=s(359),n=s(87),r=(s(686),s(579));const l=e=>{let{step:t,setStep:s,options:n}=e;return(0,r.jsxs)("div",{className:(0,a.QP)("relative w-full min-h-[52px] grid h-full bg-white","h-11 translate-x-0 mt-8"),style:{gridTemplateColumns:"repeat(".concat(n.length,", minmax(0, 1fr))")},children:[(0,r.jsx)("div",{className:(0,a.QP)("absolute transition-transform duration-500 h-full border-b-2 border-tertiary-100"),style:{width:"".concat(100/n.length,"%"),transform:"translate(".concat(100*t,"%)")}}),n.map(((e,n)=>(0,r.jsx)("div",{onClick:()=>s(n),className:(0,a.QP)("h-full flex items-center gap-x-2 px-4 py-3","cursor-pointer transition-all duration-1000"),children:(0,r.jsx)("span",{className:(0,a.QP)("z-10",t===n?"":"text-grey-200","header2 text-base"),children:e})},e)))]})},i=e=>{let{step:t,setStep:s,options:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.tU,{activeTab:t,onTabClick:(e,t)=>{s(t)},mode:"scrollSelectedToCenterFromView",tabsContainerClassName:"",children:a.map(((e,s)=>(0,r.jsx)(n.oz,{className:"p-0",style:{color:t===s?"#FA5805":"#ACACAC",background:"transparent",borderRadius:"0",borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:t===s?"solid 2px #FA5805":"none",padding:".5rem .5REM",boxShadow:"none",fontWeight:"600"},children:e},e)))})})},c=e=>{let{step:t,setStep:s,options:n,centered:l}=e;return(0,r.jsxs)("div",{className:(0,a.QP)("relative w-full min-h-[52px] grid h-full bg-white","h-11 rounded10 translate-x-0 mt-8"),style:{gridTemplateColumns:"repeat(".concat(n.length,", minmax(0, 1fr))")},children:[(0,r.jsx)("div",{className:(0,a.QP)("absolute transition-transform duration-500 h-full bg-primary rounded10"),style:{width:"".concat(100/n.length,"%"),transform:"translate(".concat(100*t,"%)")}}),n.map(((e,n)=>(0,r.jsx)("div",{onClick:()=>s(n),className:(0,a.QP)("h-full flex items-center gap-x-2 px-4 py-3","cursor-pointer rounded10 transition-all duration-1000",t===n?"bg-primary/50":"bg-white"),children:(0,r.jsx)("span",{className:(0,a.QP)("z-10",t===n?"text-white":"","header2",l?" mx-auto":""),children:e})},e)))]})}},285:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var a=s(43),n=s(216),r=s(847),l=s(591),i=s(679),c=s(579);const o=e=>{let{rating:t,name:s,specialty:a,img_url:n,patientsCount:r}=e;return(0,c.jsxs)("div",{className:"flex gap-x-4 items-center",children:[(0,c.jsx)("img",{src:n,alt:"doctor",className:"max-w-[74px]"}),(0,c.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,c.jsx)("h2",{className:"header2 text-base",children:s}),(0,c.jsx)("p",{className:"description2 text-sms my-1",children:a}),r?(0,c.jsxs)("span",{className:"text-grey-200 text-xs",children:[r," patient","".concat(r>1?"s":"")]}):(0,c.jsx)(i.A,{rating:t})]})]})};var d,m=s(436);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)({}).hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},p.apply(null,arguments)}function x(e,t){let{title:s,titleId:n,...r}=e;return a.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),s?a.createElement("title",{id:n},s):null,d||(d=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V16C2 16.7956 2.31607 17.5587 2.87868 18.1213C3.44129 18.6839 4.20435 19 5 19H15C15.7956 19 16.5587 18.6839 17.1213 18.1213C17.6839 17.5587 18 16.7956 18 16V14.414L20.293 16.707C20.4329 16.8468 20.611 16.942 20.805 16.9806C20.9989 17.0192 21.2 16.9993 21.3827 16.9237C21.5654 16.848 21.7215 16.7199 21.8314 16.5555C21.9413 16.391 22 16.1978 22 16V8C22 7.80225 21.9413 7.60895 21.8314 7.44454C21.7215 7.28013 21.5654 7.15199 21.3827 7.07632C21.2 7.00065 20.9989 6.98085 20.805 7.01942C20.611 7.05798 20.4329 7.15319 20.293 7.293L18 9.586V8C18 7.20435 17.6839 6.44129 17.1213 5.87868C16.5587 5.31607 15.7956 5 15 5H5Z",fill:"#FFBE9D"})))}const h=a.forwardRef(x);s.p;var u=s(411),g=s(417);const j=()=>{const e=(0,n.Zp)(),[t,s]=a.useState(0);return(0,c.jsxs)("div",{className:"px-6 top-padding bottom-nav-padding bg-app-bg min-h-screen ",children:[(0,c.jsx)("h1",{className:"header1",children:"Appointments"}),(0,c.jsx)(m.Ay,{step:t,setStep:s,options:["Upcoming","Completed","Cancelled"]}),(0,c.jsxs)("div",{className:"mt-8 bg-white rounded10 p-4",children:[(0,c.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,c.jsx)(o,{rating:4,name:"Dr. Abaru Johnson",specialty:"Dentist",img_url:u,patientsCount:89}),(0,c.jsx)(h,{className:"cursor-pointer hover:scale-[1.2] transition-transform",onClick:()=>e("/patient-telemedicine-ehr/call-screen")})]}),(0,c.jsx)(l.A,{date:"2021-09-10",time:"8pm",lg:!0}),(0,c.jsxs)("div",{className:"grid grid-cols-2 mt-3 gap-x-2",children:[(0,c.jsx)(g.$,{title:"Reschedule",color:"primary",className:"px-6 py-4"}),(0,c.jsx)(g.$,{title:"Cancel",color:"secondary",className:" px-3 py-4"})]})]}),(0,c.jsxs)("div",{className:"mt-8 bg-white rounded10 p-4",children:[(0,c.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,c.jsx)(o,{rating:4,name:"Dr. Abaru Johnson",specialty:"Dentist",img_url:u,patientsCount:89}),(0,c.jsx)(h,{})]}),(0,c.jsx)(l.A,{date:"2021-09-10",time:"8pm",lg:!0}),(0,c.jsxs)("div",{className:"grid grid-cols-2 mt-3 gap-x-2",children:[(0,c.jsx)(g.$,{title:"Reschedule",color:"primary",className:"px-6 py-4"}),(0,c.jsx)(g.$,{title:"Cancel",color:"secondary",className:"px-3 py-4"})]})]}),(0,c.jsx)(r.A,{})]})}}}]);
//# sourceMappingURL=31.20ec2e7f.chunk.js.map