"use strict";(self.webpackChunkcar_rental_project=self.webpackChunkcar_rental_project||[]).push([[868],{2737:(n,e,i)=>{i.d(e,{Z:()=>un});var t=i(2791),r=i(7609);var o,s,l,a,c,d,h,A,x,p,g,f=i(4164),u=i(422),j=i(168),w=i(2978);const m=w.ZP.div(o||(o=(0,j.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n  background-color: rgba(18, 20, 23, 0.5);\n"]))),b=w.ZP.div(s||(s=(0,j.Z)(["\n  overflow: auto;\n  background-color: #fff;\n  border-radius: 24px;\n  position: relative;\n  max-width: 541px;\n  max-height: 85%;\n  padding: 40px;\n\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  -webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n  > h2 {\n    margin-top: 14px;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 133%;\n    color: #121417;\n    > span {\n      color: #3470ff;\n    }\n  }\n  > h3 {\n    margin-top: 24px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.43;\n    color: #121417;\n  }\n\n  > p {\n    width: 461px;\n    margin-top: 14px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 143%;\n    color: #121417;\n  }\n"]))),C=w.ZP.div(l||(l=(0,j.Z)(["\n  border-radius: 14px;\n  max-width: 461px;\n  height: 248px;\n  overflow: hidden;\n"]))),Z=w.ZP.img(a||(a=(0,j.Z)(["\n  object-fit: cover;\n"]))),E=w.ZP.button(c||(c=(0,j.Z)(["\n  width: 24px;\n  height: 24px;\n\n  border: none;\n  background: transparent;\n  position: absolute;\n  top: 16px;\n  right: 18px;\n"]))),P=w.ZP.svg(d||(d=(0,j.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: #121417;\n  transition: var(--transition);\n\n  &:hover,\n  &:focus {\n    stroke: #000;\n  }\n"]))),y=w.ZP.ul(h||(h=(0,j.Z)(["\n  margin-top: 8px;\n  display: flex;\n  gap: 12px;\n\n  > li {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 1.5;\n    color: rgba(18, 20, 23, 0.5);\n  }\n"]))),v=w.ZP.ul(A||(A=(0,j.Z)(["\n  margin-top: 4px;\n  display: flex;\n  gap: 12px;\n\n  > li {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 1.5;\n    color: rgba(18, 20, 23, 0.5);\n  }\n"]))),k=w.ZP.ul(x||(x=(0,j.Z)(["\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 12px;\n  width: 461px;\n\n  > li {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 1.5;\n    color: rgba(18, 20, 23, 0.5);\n  }\n"]))),M=w.ZP.ul(p||(p=(0,j.Z)(["\n  margin-top: 15px;\n  padding-left: 14px;\n  display: flex;\n  gap: 28px;\n\n  > li {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    color: #363535;\n\n    > span {\n      font-weight: 600;\n      color: #3470ff;\n    }\n  }\n"]))),z=w.ZP.a(g||(g=(0,j.Z)(["\n  display: inline-block;\n  margin-top: 24px;\n  border-radius: 12px;\n  padding: 12px 50px;\n  background-color: #3470ff;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 143%;\n  color: #fff;\n  transition: var(--transition);\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),Q=["Buick","Volvo","Subaru","Bentley","MINI","Lincoln","Nissan","Mitsubishi"],Y=n=>{const e=n.split(",");return e[e.length-2]},I=n=>{const e=n.split(",");return e[e.length-1]},D=(n,e)=>{const i=[...n,...e];return i.reduce(((n,e)=>e.length<n.length?e:n),i[0])};var B=i(184);const G=document.querySelector("#modal-root");const F=function(n){let{carData:e,closeModal:i}=n;(0,t.useEffect)((()=>{function n(n){let{code:e}=n;"Escape"===e&&i()}return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[i]);const o=(n=>{const e=n.split("\n");return[e[0].split(" ")[2],e[1],e[2]]})(e.rentalConditions);return(0,t.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"})),[]),(0,f.createPortal)((0,B.jsx)(m,{onClick:n=>{n.currentTarget===n.target&&i()},children:(0,B.jsxs)(b,{children:[(0,B.jsx)(E,{type:"button",onClick:()=>i(),children:(0,B.jsx)(P,{children:(0,B.jsx)("use",{href:"".concat(r.Z,"#icon-x")})})}),(0,B.jsx)(C,{children:(0,B.jsx)(Z,{src:e.img,alt:e.model})}),(0,B.jsxs)("h2",{children:[e.make,(0,B.jsxs)("span",{children:[" ",e.model]}),", ",e.year]}),(0,B.jsxs)(y,{children:[(0,B.jsx)("li",{children:Y(e.address)}),(0,B.jsx)("li",{children:I(e.address)}),(0,B.jsxs)("li",{children:["Id: ",e.id]}),(0,B.jsxs)("li",{children:["Year: ",e.year]}),(0,B.jsxs)("li",{children:["Type: ",e.type]})]}),(0,B.jsxs)(v,{children:[(0,B.jsxs)("li",{children:["Fuel Consumption: ",e.fuelConsumption]}),(0,B.jsxs)("li",{children:["Engine Size: ",e.engineSize]})]}),(0,B.jsx)("p",{children:e.description}),(0,B.jsx)("h3",{children:"Accessories and functionalities:"}),(0,B.jsxs)(k,{children:[e.accessories.map((n=>(0,B.jsx)("li",{children:n},(0,u.x0)()))),e.functionalities.map((n=>(0,B.jsx)("li",{children:n},(0,u.x0)())))]}),(0,B.jsx)("h3",{children:"Rental Conditions:"}),(0,B.jsxs)(M,{children:[(0,B.jsxs)("li",{children:["Minimum age :",(0,B.jsxs)("span",{children:[" ",o[0]]})]}),(0,B.jsx)("li",{children:o[1]}),(0,B.jsx)("li",{children:o[2]})]}),(0,B.jsxs)(M,{children:[(0,B.jsxs)("li",{children:["Mileage:",(0,B.jsx)("span",{children:e.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),(0,B.jsxs)("li",{children:["Price: ",(0,B.jsxs)("span",{children:[e.rentalPrice.toString().slice(1),"$"]})]})]}),(0,B.jsx)(z,{href:"tel:+380730000000",children:"Rental Car"})]})}),G)};var U,N,O,R,T,S,W,L,V,X,J,K,q=i(9835);const H=w.ZP.li(U||(U=(0,j.Z)(["\n  position: relative;\n"]))),_=w.ZP.div(N||(N=(0,j.Z)(["\n  border-radius: 14px;\n  overflow: hidden;\n  position: relative;\n"]))),$=w.ZP.img(O||(O=(0,j.Z)(["\n  max-width: 274px;\n  height: 268px;\n  object-fit: cover;\n"]))),nn=w.ZP.div(R||(R=(0,j.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n\n  background: linear-gradient(\n    180deg,\n    rgba(18, 20, 23, 0.5) 2.5%,\n    rgba(18, 20, 23, 0) 41.07%\n  );\n"]))),en=w.ZP.div(T||(T=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 14px;\n  padding-right: 9px;\n\n  > p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #121417;\n  }\n"]))),tn=w.ZP.h3(S||(S=(0,j.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #121417;\n\n  > span {\n    color: #3470ff;\n  }\n"]))),rn=w.ZP.ul(W||(W=(0,j.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 8px;\n  overflow: hidden;\n\n  > li {\n    font-size: 12px;\n    line-height: 1.5;\n    color: rgba(18, 20, 23, 0.5);\n    padding: 0 5px;\n\n    border-right: 1px solid rgba(18, 20, 23, 0.1);\n\n    &:first-child {\n      padding-left: 0;\n    }\n    &:last-child {\n      border-right: none;\n    }\n  }\n"]))),on=w.ZP.ul(L||(L=(0,j.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 4px;\n  overflow: hidden;\n\n  > li {\n    font-size: 12px;\n    line-height: 1.5;\n    color: rgba(18, 20, 23, 0.5);\n    padding: 0 5px;\n    border-right: 1px solid rgba(18, 20, 23, 0.1);\n\n    &:first-child {\n      padding-left: 0;\n    }\n    &:last-child {\n      border-right: none;\n    }\n  }\n"]))),sn=w.ZP.button(V||(V=(0,j.Z)(["\n  width: 24px;\n  height: 24px;\n\n  border: none;\n  background: transparent;\n  position: absolute;\n  top: 14px;\n  right: 16px;\n"]))),ln=w.ZP.svg(X||(X=(0,j.Z)(["\n  width: 18px;\n  height: 18px;\n  stroke: #fff;\n  fill: none;\n  transition: var(--transition);\n\n  &:hover,\n  &:focus {\n    fill: #fff;\n  }\n"]))),an=w.ZP.svg(J||(J=(0,j.Z)(["\n  width: 18px;\n  height: 18px;\n  fill: #3470ff;\n  stroke: #3470ff;\n  transition: var(--transition);\n\n  &:hover,\n  &:focus {\n    fill: #fff;\n    stroke: #fff;\n  }\n"]))),cn=w.ZP.button(K||(K=(0,j.Z)(["\n  border-radius: 12px;\n  border: none;\n  margin-top: 28px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  width: 100%;\n  height: 44px;\n  background-color: #3470ff;\n  font-family: inherit;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: #fff;\n  transition: var(--transition);\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"])));var dn=i(4420),hn=i(9875),An=i(7694),xn=i.n(An);const pn=function(n){let{car:e,index:i}=n;const[o,s]=(0,t.useState)(!1),[l,a]=(0,t.useState)({}),[c,d]=(0,t.useState)(!1),h=(0,dn.v9)(hn.vH),A=(0,dn.I0)();return(0,t.useEffect)((()=>{h.some((n=>n.id===e.id))?d(!0):d(!1)}),[e.id,h]),(0,B.jsxs)(H,{children:[(0,B.jsxs)(_,{children:[(0,B.jsx)($,{src:e.img?e.img:"data:image/jpeg;base64,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",alt:e.model}),(0,B.jsx)(nn,{})]}),(0,B.jsx)(sn,{type:"button","aria-label":"add or delete car from favorites",onClick:()=>{c?(A((0,q.r7)(e.id)),xn().Notify.success("Car was successful deleted!",{timeout:2e3})):(A((0,q.a3)(e)),xn().Notify.success("Car was successful added!",{timeout:2e3}))},children:c?(0,B.jsx)(an,{children:(0,B.jsx)("use",{href:"".concat(r.Z,"#icon-normal")})}):(0,B.jsx)(ln,{children:(0,B.jsx)("use",{href:"".concat(r.Z,"#icon-normal")})})}),(0,B.jsxs)("div",{children:[(0,B.jsxs)(en,{children:[(0,B.jsxs)(tn,{children:[e.make,i<=2&&(0,B.jsxs)("span",{children:[" ",e.model]}),",",(0,B.jsx)("span",{children:" "}),e.year]}),(0,B.jsx)("p",{children:e.rentalPrice})]}),(0,B.jsxs)(rn,{children:[(0,B.jsx)("li",{children:Y(e.address)}),(0,B.jsx)("li",{children:I(e.address)}),(0,B.jsx)("li",{children:e.rentalCompany}),(x=e.make,!!Q.includes(x)&&(0,B.jsx)("li",{children:"Premium"}))]}),(0,B.jsxs)(on,{children:[(0,B.jsx)("li",{children:e.type}),(0,B.jsx)("li",{children:e.make}),(0,B.jsx)("li",{children:e.id}),(0,B.jsx)("li",{children:D(e.accessories,e.functionalities)})]}),(0,B.jsx)(cn,{type:"button",onClick:()=>{s(!0),a(e)},children:"Learn more"})]}),o&&(0,B.jsx)(F,{carData:l,closeModal:()=>{s(!1),a({})}})]});var x};var gn;const fn=w.ZP.ul(gn||(gn=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 50px 29px;\n"])));const un=function(n){let{arrayToRender:e}=n;return(0,B.jsx)("div",{children:(0,B.jsx)(fn,{children:e.length>0&&e.map(((n,e)=>(0,B.jsx)(pn,{car:n,index:e},n.id)))})})}},7086:(n,e,i)=>{i.d(e,{Z:()=>c});i(2791);var t,r=i(2187),o=i(7609),s=i(168);const l=i(2978).ZP.svg(t||(t=(0,s.Z)(["\n  width: 40px;\n  height: 50px;\n  fill: #27408b;\n\n  @keyframes bounce {\n    0%,\n    20%,\n    60%,\n    100% {\n      transform: translateY(0);\n      transform: translateY(0);\n    }\n\n    40% {\n      transform: translateY(-20px);\n      transform: translateY(-20px);\n    }\n\n    80% {\n      transform: translateY(-10px);\n      transform: translateY(-10px);\n    }\n  }\n\n  &:hover {\n    animation: bounce 1s;\n  }\n"])));var a=i(184);const c=function(){return(0,a.jsx)(r.Z,{style:{bottom:"50px",right:"30px"},showUnder:160,children:(0,a.jsx)(l,{children:(0,a.jsx)("use",{href:"".concat(o.Z,"#icon-angles-up-solid")})})})}}}]);
//# sourceMappingURL=868.7ecf26b1.chunk.js.map