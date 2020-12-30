(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var i=t(2),r=t(1),a=t.n(r),c=t(24),o=t.n(c),s=(t(34),t(16)),u=t(4),l=t(3),d=t(10),p=[{title:"About",link:"/about"},{title:"Homes",link:"/homes"},{title:"Rentals",link:"/rentals"}];function b(){var n=Object(u.a)(["\n    background: ",";\n    white-space: nowrap;\n    outline: none;\n    border: none;\n    min-width: 100px;\n    max-width: 200px;\n    cursor: pointer;\n    text-decoration: none;\n    transition: 0.3s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: ",";\n    color: ",";\n    font-size: ",";\n\n\n    &:hover{\n        transform: translateY(-2px);\n    }\n"]);return b=function(){return n},n}var f=Object(l.c)(d.b)(b(),(function(n){return n.primary?"#000d1a":"CD853F"}),(function(n){return n.big?"16px 14px":"14px 24px"}),(function(n){return n.primary?"#fff":"#000dla"}),(function(n){return n.big?"20px":"14px"})),j=t(15);function m(){var n=Object(u.a)(["\n    color: #fff;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n    text-decoration: none;\n"]);return m=function(){return n},n}var h=l.c.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-46btwv-0"})(["height:60px;display:flex;justify-content:space-between;padding:1rem 2rem;z-index:100;position:fixed;width:100%;background-color:black;"]),x=Object(l.b)(m()),g=Object(l.c)(d.b).withConfig({displayName:"Navbar__Logo",componentId:"sc-46btwv-1"})([""," font-style:italic;font-size:20px;"],x),v=Object(l.c)(j.a).withConfig({displayName:"Navbar__MenuBars",componentId:"sc-46btwv-2"})(["display:none;color:#fff;@media screen and (max-width:768px){display:block;background-size:contain;width:40px;height:40px;cursor:pointer;position:absolute;top:0;right:0;transform:translate(-50%,25%);}"]),O=l.c.div.withConfig({displayName:"Navbar__NavMenu",componentId:"sc-46btwv-3"})(["display:flex;align-items:center;margin-right:-48px;@media screen and (max-width:768px){display:none;}"]),w=Object(l.c)(d.b).withConfig({displayName:"Navbar__NavMenuLinks",componentId:"sc-46btwv-4"})(["",""],x),y=l.c.div.withConfig({displayName:"Navbar__NavBtn",componentId:"sc-46btwv-5"})(["display:flex;align-items:center;margin-right:24px;@media screen and (max-width:768px){display:none;}"]);var k=function(n){var e=n.toggle;return Object(i.jsxs)(h,{children:[Object(i.jsx)(g,{to:"/",children:"ELIXR"}),Object(i.jsx)(v,{onClick:e}),Object(i.jsx)(O,{children:p.map((function(n,e){return Object(i.jsx)(w,{to:n.link,children:n.title},e)}))}),Object(i.jsx)(y,{children:Object(i.jsx)(f,{to:"/contact",primary:"true",children:"Contact Us"})})]})},N=t(5);function z(){var n=Object(u.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Montserrat', sans-serif;\n    }\n\n    html, body {\n        overflow-x: hidden;\n    }\n"]);return z=function(){return n},n}var C=Object(l.a)(z());function I(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n"]);return I=function(){return n},n}function L(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n\n\n    &:hover{\n        color: #000d1a;\n    }\n"]);return L=function(){return n},n}function _(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 80px);\n    text-align: center;\n    margin-bottom: 4rem;\n\n\n    \n    @media screen and (max-weight: 480px) {\n        grid-template-rows: repeat(4, 60px);\n    }\n"]);return _=function(){return n},n}function H(){var n=Object(u.a)(["\n\n"]);return H=function(){return n},n}function V(){var n=Object(u.a)(["\n    color: #000d1a;\n"]);return V=function(){return n},n}function M(){var n=Object(u.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-size: 2rem;\n    cursor: pointer;\n    outline: none;\n"]);return M=function(){return n},n}function B(){var n=Object(u.a)(["\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    background: #cd853f;\n    display: grid;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-in-out;\n    opacity: ",";\n    top: ",";\n"]);return B=function(){return n},n}var D=l.c.div(B(),(function(n){return n.isOpen?"1":"0"}),(function(n){return n.isOpen?"0":"-100%"})),q=l.c.div(M()),A=Object(l.c)(j.b)(V()),T=l.c.div(H()),$=l.c.div(_()),E=Object(l.c)(d.b)(L()),R=l.c.div(I());var S=function(n){var e=n.isOpen,t=n.toggle;return Object(i.jsxs)(D,{isOpen:e,onClick:t,children:[Object(i.jsx)(q,{onClick:t,children:Object(i.jsx)(A,{})}),Object(i.jsxs)(T,{children:[Object(i.jsx)($,{children:p.map((function(n,e){return Object(i.jsx)(E,{to:n.link,children:n.title},e)}))}),Object(i.jsx)(R,{children:Object(i.jsx)(f,{primary:"true",round:"true",to:"/contact",children:"Contact Us"})})]})]})};function J(){var n=Object(u.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate( 50%, 50% );\n"]);return J=function(){return n},n}var P=l.c.div(J());var U=function(){return Object(i.jsx)(P,{children:Object(i.jsx)("h1",{children:"IDAN"})})},F=t(22),X=t(28),Y=t(21);function G(){var n=Object(u.a)(["\n    ","\n"]);return G=function(){return n},n}function K(){var n=Object(u.a)(["\n    ","\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n    width: 50px;\n    height: 50px;\n    color: #fff;\n    cursor: pointer;\n    background: #000d1a;\n    border-radius: 50px;\n    padding: 10px;\n    margin-right:1rem;\n    user-select: none;\n    transition: 0.3s;\n\n    &:hover{\n            background: #cd853f;\n            transform: scale(1.05);\n    }\n"]);return Q=function(){return n},n}function W(){var n=Object(u.a)(["\n    position: absolute;\n    bottom: 50px;\n    right: 50px;\n    display: flex;\n    z-index: 10;\n"]);return W=function(){return n},n}function Z(){var n=Object(u.a)(["\n    margin-left: 0.5rem;\n"]);return Z=function(){return n},n}function nn(){var n=Object(u.a)(['\n    position: absolute;\n    z-index: 10;\n    display: flex;\n    flex-direction: column;\n    max-width: 1600px;\n    width: calc("100% - 100px");\n    color: #fff;\n\n    h1{\n        font-size: clamp(1rem, 8vw, 2rem);\n        font-weight: 400;\n        text-transform: uppercase;\n        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);\n        text-align: left;\n        margin-bottom: 0.8rem;\n}\n    p{\n        margin-bottom: 1.2rem;\n        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);\n        font-size: 25px;\n        font-weight: 600;\n    }\n']);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    object-fit: cover;\n\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(['\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &::before{\n        content: "";\n        position: absolute;\n        z-index: 2;\n        width: 100%;\n        height: 100vh;\n        bottom: 0vh;\n        left: 0;\n        overflow: hidden;\n        opacity: 0.4;\n        background: linear-gradient(\n        0deg,\n        rgba(0,0,0, 0.2) 0%,\n        rgba(0,0,0, 0.2) 50%,\n        rgba(0,0,0, 0.6) 100%,\n        );\n    }\n']);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n"]);return an=function(){return n},n}function cn(){var n=Object(u.a)(["\n    height: 100vh;\n    max-height: 1100;\n    position: relative;\n    overflow: hidden;\n"]);return cn=function(){return n},n}var on=l.c.section(cn()),sn=l.c.div(an()),un=l.c.div(rn()),ln=l.c.div(tn()),dn=l.c.img(en()),pn=l.c.div(nn()),bn=Object(l.c)(X.a)(Z()),fn=l.c.div(W()),jn=Object(l.b)(Q()),mn=Object(l.c)(Y.a)(K(),jn),hn=Object(l.c)(Y.b)(G(),jn),xn=function(n){var e=n.slides,t=Object(r.useState)(0),a=Object(s.a)(t,2),c=a[0],o=a[1],u=e.length,l=Object(r.useRef)(null);return!Array.isArray(e)||e.length<=0?null:Object(i.jsx)(on,{children:Object(i.jsxs)(sn,{children:[e.map((function(n,e){return Object(i.jsx)(un,{children:e===c&&Object(i.jsxs)(ln,{children:[Object(i.jsx)(dn,{src:n.image,alt:n.alt}),Object(i.jsxs)(pn,{children:[Object(i.jsx)("h1",{children:n.title}),Object(i.jsx)("p",{children:n.price}),Object(i.jsxs)(f,{to:n.path,primary:"true",css:"max-width: 160px;",children:[n.label,Object(i.jsx)(bn,{})]})]})]})},e)})),Object(i.jsxs)(fn,{children:[Object(i.jsx)(mn,{onClick:function(){l.current&&clearTimeout(l.current),o(0===c?u-1:c-1)}}),Object(i.jsx)(hn,{onClick:function(){o(c===u-1?0:c+1)}})]})]})})};function gn(){var n=Object(u.a)(["\n  padding: 1rem 2rem;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;  \n\n\n  @media screen and (max-width: 768px){\n    color: ",";\n  }\n\n  img{\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n  }\n\n  @media screen and (max-width: 768px){\n      width: 90%;\n      height: 90%;\n  }\n"]);return gn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    line-height: 1.4;\n    padding: 1rem 2rem;\n    color: ",";\n\n    h1{\n        margin-bottom: 1rem;\n        font-size: clamp(1.5rem, 6vw, 2rem);\n    }\n\n    p{\n        margin-bottom: 2rem;\n    }\n"]);return vn=function(){return n},n}function On(){var n=Object(u.a)(["\n    padding: 3rem clac(100vw - 1300px) / 2;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 800px;\n\n\n    @media screen and (max-width: 768px){\n        grid-template-columns: 1fr;\n    }\n"]);return On=function(){return n},n}function wn(){var n=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    padding: 4rem 0rem;\n"]);return wn=function(){return n},n}var yn=l.c.section(wn()),kn=l.c.div(On()),Nn=l.c.div(vn(),(function(n){return n.reverse?"2":"1"})),zn=l.c.div(gn(),(function(n){return n.reverse?"1":"2"}),(function(n){return n.reverse?"2":"1"}));var Cn=function(n){var e=n.heading,t=n.paragrpahOne,r=n.paragrpahTwo,a=n.buttonLabel,c=n.reverse,o=n.image;return Object(i.jsx)(yn,{children:Object(i.jsxs)(kn,{children:[Object(i.jsxs)(Nn,{children:[Object(i.jsx)("h1",{children:e}),Object(i.jsx)("p",{children:t}),Object(i.jsx)("p",{children:r}),Object(i.jsx)(f,{to:"/homes",primary:"true",children:a})]}),Object(i.jsx)(zn,{reverse:c,children:Object(i.jsx)("img",{src:o,alt:"home"})})]})})},In=[{title:"Luxury Villa in Baili, Iadonesia",price:"$6,280,000",path:"/homes",label:"View Home",image:t.p+"static/media/house-1.0d98fc65.jpg",alt:"House"},{title:"Luxury Villa in Baili, Iadonesia",price:"$8,280,000",path:"/homes",label:"View Home",image:t.p+"static/media/house-2.3b5493e6.jpg",alt:"House"},{title:"Luxury Villa in Baili, Iadonesia",price:"$9,280,000",path:"/homes",label:"View Home",image:t.p+"static/media/house-3.a18708fb.jpg",alt:"House"},{title:"Luxury Villa in Baili, Iadonesia",price:"$1,280,000",path:"/homes",label:"View Home",image:t.p+"static/media/house-4.aeb24441.jpg",alt:"House"}],Ln=t.p+"static/media/interior-1.b84e3920.jpg",_n=t.p+"static/media/house-5.b84e3920.jpg",Hn={heading:"Explore our beautiful homes",paragrpahOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n         Nulla libero turpis, molestie in interdum nec, fringilla in ligula.\n         Maecenas mauris urna, luctus nec tristique vitae, consectetur vitae tellus. Duis diam dolor,\n         ",paragrpahTwo:"sollicitudin nec ultrices nec, aliquet quis enim. Nulla facilisi.\n         Nulla ultricies justo massa, non ultricies nunc ultricies id.\n         Donec purus lorem, ullamcorper vel turpis sed, vehicula sodales nibh. Proin sed turpis nibh.",buttonLabel:"View Homes",image:Ln,reverse:!1,delay:100},Vn={heading:"Modern Designs",paragrpahOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n         Nulla libero turpis, molestie in interdum nec, fringilla in ligula.\n         Maecenas mauris urna, luctus nec tristique vitae, consectetur vitae tellus. Duis diam dolor,\n         ",paragrpahTwo:"sollicitudin nec ultrices nec, aliquet quis enim. Nulla facilisi.\n         Nulla ultricies justo massa, non ultricies nunc ultricies id.\n         Donec purus lorem, ullamcorper vel turpis sed, vehicula sodales nibh. Proin sed turpis nibh.",buttonLabel:"View Homes",image:_n,reverse:!0,delay:300};var Mn=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(xn,{slides:In}),Object(i.jsx)(Cn,Object(F.a)({},Hn)),Object(i.jsx)(Cn,Object(F.a)({},Vn))]})};function Bn(){var n=Object(u.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate( 50%, 50% );\n    background-color: green;\n    padding: 30px;\n\n    h1{\n        color: yellow;\n    }\n"]);return Bn=function(){return n},n}var Dn=l.c.div(Bn());var qn=function(){return Object(i.jsx)(Dn,{children:Object(i.jsx)("h1",{children:"kazam"})})};function An(){var n=Object(u.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate( 50%, 50% );\n    background-color: green;\n    padding: 30px;\n\n    h1{\n        color: yellow;\n    }\n"]);return An=function(){return n},n}var Tn=l.c.div(An());var $n=function(){return Object(i.jsx)(Tn,{children:Object(i.jsx)("h1",{children:"idankzm"})})};var En=function(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],a=e[1],c=function(){a(!t)};return Object(i.jsxs)(d.a,{children:[Object(i.jsx)(C,{}),Object(i.jsx)(k,{toggle:c}),Object(i.jsx)(S,{isOpen:t,toggle:c}),Object(i.jsxs)(N.c,{children:[Object(i.jsx)(N.a,{exact:!0,path:"/",component:Mn}),Object(i.jsx)(N.a,{path:"/about",component:U}),Object(i.jsx)(N.a,{path:"/homes",component:qn}),Object(i.jsx)(N.a,{path:"/rentals",component:$n})]})]})};o.a.render(Object(i.jsxs)(a.a.StrictMode,{children:[Object(i.jsx)(En,{}),","]}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6de609c7.chunk.js.map