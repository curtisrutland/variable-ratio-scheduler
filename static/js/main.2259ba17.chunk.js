(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a){},130:function(e,a,t){e.exports=t(304)},154:function(e,a,t){},293:function(e,a){},294:function(e,a){},304:function(e,a,t){"use strict";t.r(a);var n=t(19);Object(n.a)();var r=t(1),l=t.n(r),o=t(15),c=t.n(o),i=(t(154),t(32)),u=t(126),m=t.n(u),s=t(114),f=t.n(s),d=t(45),h=t.n(d),b=t(46),g=t.n(b),E=Object(n.b)({toolbar:{display:"flex",justifyContent:"center"}});function v(){var e=E();return l.a.createElement(f.a,{position:"static",color:"primary"},l.a.createElement(h.a,{className:e.toolbar},l.a.createElement(g.a,{variant:"h6",color:"inherit"},"VR Schedule Generator")))}var p=t(47),w=t(116),x=t(118),N=t.n(x),j=t(120),C=t.n(j),O=t(119),R=t.n(O),y=t(67),V=t.n(y),k=t(117),G=t.n(k),M=Object(n.b)({card:{width:400,maxWidth:"95%",margin:"0 auto"},form:{width:"100%",padding:8,display:"flex",flexFlow:"column nowrap",alignContent:"stretch"},row:{display:"flex",justifyContent:"stretch",marginTop:8,marginBottom:8},number:{flexGrow:1,marginLeft:"4px",marginRight:"4px"},actions:{justifyContent:"center"}});function S(e){var a=e.label,t=e.defaultValue,n=e.onChange,o=e.className,c=void 0===o?"":o,u=Object(r.useState)(t),m=Object(i.a)(u,2),s=m[0],f=m[1];return l.a.createElement(G.a,{className:c,label:a,value:s,onChange:function(e){var a=parseInt(e.target.value);isNaN(a)?(n(0),f("")):(n(a),f(a))},type:"number",variant:"outlined",InputLabelProps:{shrink:!0}})}function _(e){var a=e.onGenerate,t=Object(r.useState)({target:10,min:5,max:15,count:20,enabled:!0}),n=Object(i.a)(t,2),o=n[0],c=n[1],u=M();function m(e){return function(a){var t=Object(w.a)({},o,Object(p.a)({},e,a));t.enabled=function(e){var a=e.min,t=e.max,n=e.count,r=e.target;return!(a>=t)&&!(a<1||t<1)&&!(n<2)&&!(r<1)}(t),c(t)}}return l.a.createElement(N.a,{className:u.card,elevation:5},l.a.createElement(R.a,null,l.a.createElement("form",{noValidate:!0,autoComplete:"off",className:u.form},l.a.createElement("div",{className:u.row},l.a.createElement(S,{label:"Target VR",defaultValue:o.target,onChange:m("target"),className:u.number}),l.a.createElement(S,{label:"Amount to Generate",defaultValue:o.count,onChange:m("count"),className:u.number})),l.a.createElement("div",{className:u.row},l.a.createElement(S,{label:"Min Ratio",defaultValue:o.min,onChange:m("min"),className:u.number}),l.a.createElement(S,{label:"Max Ratio",defaultValue:o.max,onChange:m("max"),className:u.number})))),l.a.createElement(C.a,{className:u.actions},l.a.createElement(V.a,{size:"small",disabled:!o.enabled,onClick:function(){a(o)}},"Generate")))}function I(e,a){return e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e+1))+e}function T(e){return Math.round(e.reduce(function(e,a){return e+a})/e.length)}function F(e,a,t){if(e<1)throw new Error("count must be > 0");if(a<1||t<1)throw new Error("min and max must be > 0");if(a>t)throw new Error("max must be > min");for(var n=[],r=0;r<e;r++)n.push(I(a,t));return n}var B=t(123),J=t.n(B),L=t(125),W=t.n(L),z=t(34),A=t.n(z),D=t(124),P=t.n(D),q=t(70),H=t.n(q),K=t(31),Q=t.n(K),U=t(121),X=t.n(U),Y=t(122),Z=t.n(Y),$=t(33),ee=t.n($);var ae=Object(n.b)({root:{width:400,maxWidth:"95%",margin:"0 auto"},table:{width:"100%"},spacer:{flexGrow:1},icon:{marginRight:"-12px"}});function te(e){var a=e.results,t=e.avg,n=ae();return l.a.createElement(Q.a,{className:n.root,elevation:5},l.a.createElement(h.a,null,l.a.createElement(g.a,{variant:"h6"},"VR ",t),l.a.createElement("span",{className:n.spacer}),l.a.createElement(X.a,{className:n.icon,onClick:function(){!function(e,a){var t=e.map(function(e,a){return[a+1,e]});t.unshift(["#","Ratio"]);var n=ee.a.utils.aoa_to_sheet(t),r=ee.a.utils.book_new();ee.a.utils.book_append_sheet(r,n,"VR Schedule");var l="VR ".concat(a," Schedule - ").concat((new Date).getTime(),".xlsx");ee.a.writeFile(r,l)}(a,t)}},l.a.createElement(Z.a,null))),l.a.createElement(J.a,{className:n.table},l.a.createElement(P.a,null,l.a.createElement(H.a,null,l.a.createElement(A.a,null,"#"),l.a.createElement(A.a,{align:"right"},"Ratio"))),l.a.createElement(W.a,null,a.map(function(e,a){return l.a.createElement(H.a,{key:a},l.a.createElement(A.a,null,a+1),l.a.createElement(A.a,{align:"right"},e))}))))}var ne=Object(n.b)({root:{height:"100%",width:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"stretch"},overflowContainer:{width:"100%",padding:8,overflow:"auto"},spacer:{height:16,width:"100%"}});c.a.render(l.a.createElement(function(){var e=ne(),a=Object(r.useState)(null),t=Object(i.a)(a,2),n=t[0],o=t[1];return l.a.createElement("div",{className:e.root},l.a.createElement(m.a,null),l.a.createElement(v,null),l.a.createElement("div",{className:e.overflowContainer},l.a.createElement(_,{onGenerate:function(e){var a=e.min,t=e.max,n=function(e,a,t,n){var r=0;do{var l=F(e,t,n);if(T(l)===a)return console.debug("Took ".concat(r+1," tries to generate.")),l;r++}while(r<1e4);return console.error("Couldn't generate target list after ".concat(r," attempts. Returning random list.")),F(e,t,n)}(e.count,e.target,a,t);console.debug(n),o({results:n,avg:T(n)})}}),l.a.createElement("div",{className:e.spacer}),null==n?null:l.a.createElement(te,{results:n.results,avg:n.avg})))},null),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.2259ba17.chunk.js.map