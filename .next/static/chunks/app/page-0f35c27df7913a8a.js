(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{296:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(5155),r=a(2115),n=a(8334),o=a.n(n),p=a(6874),i=a.n(p),l=a(5695);function c(){let[e,t]=(0,r.useState)({username:"",password:""}),[a,n]=(0,r.useState)(""),p=(0,l.useRouter)(),c=a=>{t({...e,[a.target.name]:a.target.value})},u=async t=>{t.preventDefault(),n("");try{let t=await fetch("".concat("https://form-mongodb-nextjs-expressjs-production.up.railway.app","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.text();try{let e=JSON.parse(a);if(!t.ok)throw Error(e.error||"Ошибка входа");n("✅ Вход успешен!"),setTimeout(()=>p.push("/dashboard"),1e3)}catch(e){throw Error("Логин или пароль неверный")}}catch(e){n(e.message)}};return(0,s.jsx)("div",{className:o().container,children:(0,s.jsxs)("div",{className:o().formWrapper,children:[(0,s.jsx)("h2",{className:o().title,children:"Вход"}),a&&(0,s.jsx)("p",{className:o().message,children:a}),(0,s.jsxs)("form",{onSubmit:u,children:[(0,s.jsx)("input",{className:o().input,type:"text",name:"username",placeholder:"Логин",onChange:c,required:!0}),(0,s.jsx)("input",{className:o().input,type:"password",name:"password",placeholder:"Пароль",onChange:c,required:!0}),(0,s.jsx)("button",{className:o().button,type:"submit",children:"Войти"})]}),(0,s.jsxs)("p",{className:o().toggle,children:["Нет аккаунта? ",(0,s.jsx)(i(),{href:"/register",children:"Зарегистрироваться"})]})]})})}},4881:(e,t,a)=>{Promise.resolve().then(a.bind(a,296))},8334:e=>{e.exports={container:"page_container__aoG4z",formWrapper:"page_formWrapper__g4WBb",title:"page_title__3jonF",input:"page_input___cVLA",button:"page_button__vnlhW",message:"page_message__abnJo",toggle:"page_toggle__ni725"}}},e=>{var t=t=>e(e.s=t);e.O(0,[397,244,441,684,358],()=>t(4881)),_N_E=e.O()}]);