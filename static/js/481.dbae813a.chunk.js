"use strict";(self.webpackChunkreact_converters=self.webpackChunkreact_converters||[]).push([[481],{1193:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),a=t(5987),u=t(3360),s=t(184),i=["children"];var l=function(e){var n=e.children,t=(0,a.Z)(e,i);return(0,s.jsx)(u.Z,(0,r.Z)((0,r.Z)({variant:"outline-primary",className:"btn-custom"},t),{},{children:n}))}},4432:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(2791),a=t(7022),u=t(184);var s=function(e){var n=e.name,t=e.children;return(0,u.jsxs)(a.Z,{as:"section",fluid:"md",className:"px-4",children:[(0,u.jsx)("h2",{className:"text-uppercase mb-4 border-bottom border-gray pb-2",children:n}),t]})},i=t(1413),l=t(4942),o=t(3027),c=t(5581),m=t(4994),d=t(9439),f=t(5763);function v(e,n,t){var a=(0,r.useRef)(),u=(0,r.useRef)(e);return(0,r.useEffect)((function(){u.current=e}),[e]),(0,r.useEffect)((function(){if(t&&n){return a.current=setTimeout((function(){return u.current()}),n),function(){return clearTimeout(a.current)}}}),[n,t]),a}var h=function(e){var n=e.disabled,t=void 0!==n&&n,a=e.onClick,s=(0,r.useState)(!1),i=(0,d.Z)(s,2),l=i[0],o=i[1];return v((function(){return o(!1)}),500,l),v(a,333.3333333333333,l),(0,u.jsx)("button",{type:"button",className:"swap-button ".concat(l?"rotate":""),onClick:function(){return o(!0)},disabled:t,children:(0,u.jsx)(f.$wy,{size:25})})};var p=function(e){var n=e.children,t=e.invalidMessage;return(0,u.jsxs)(o.Z.Group,{className:"feedback-group",children:[(0,r.cloneElement)(n,{isInvalid:!!t}),t&&(0,u.jsx)(o.Z.Control.Feedback,{type:"invalid",children:t})]})};var x=function(e){var n=e.optionList;return(0,u.jsx)(u.Fragment,{children:n.map((function(e){var n=e.id,t=e.names;return(0,u.jsxs)("option",{value:n,children:[t.full," ",t.short&&"(".concat(t.short,")")]},n)}))})};var j,Z,b=function(e){var n=e.defaultOptionText,t=e.groupsList;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("option",{value:"",disabled:!0,children:n||"Select option..."}),t.map((function(e){return(0,u.jsx)("optgroup",{label:e.name,children:(0,u.jsx)(x,{optionList:e.content})},e.name)}))]})},g=t(1193);!function(e){e.AMOUNT="amount",e.FROM="from",e.TO="to"}(j||(j={}));var N=(Z={},(0,l.Z)(Z,j.AMOUNT,{required:"Amount field is required!",min:{value:0,message:"Amount should be bigger than zero!"}}),(0,l.Z)(Z,j.FROM,{required:"From unit of measurement should be selected!"}),(0,l.Z)(Z,j.TO,{validate:{equalFromAndTo:function(e,n){return e!==n.from||"From and to values should not be equal!"}}}),Z),O=t(8113),M=t(5671),T=t(3144),F=t(136),k=t(516),y=function(e){(0,F.Z)(t,e);var n=(0,k.Z)(t);function t(e){var r;return(0,M.Z)(this,t),(r=n.call(this)).message=void 0,r.message=e,r}return(0,T.Z)(t,null,[{key:"MeasurementUnitNotFound",value:function(e){return new t(e)}}]),t}((0,t(293).Z)(Error));var w=t(3433);var R=function(e){var n,t,r,a,s=e.converterData,d=(n={},(0,l.Z)(n,j.FROM,""),(0,l.Z)(n,j.TO,""),n),f=(0,m.w)().setResult,v=(0,c.cI)({defaultValues:d}),x=v.register,Z=v.handleSubmit,M=v.setValue,T=v.watch,F=v.formState.errors,k=s.type,R=s.groups,S=x(j.AMOUNT,N[j.AMOUNT]),U=x(j.FROM,N[j.FROM]),A=x(j.TO,N[j.TO]),C=T(j.FROM),q=T(j.TO),_=C===q||!Boolean(C)||!Boolean(q),E=Z((function(e){var n=function(e,n){var t=n.amount,r=n.from,a=n.to,u=e.reduce((function(e,n){return[].concat((0,w.Z)(e),(0,w.Z)(n.content))}),[]);return{amount:t,fromUnit:u.find((function(e){return e.id===r})),toUnit:u.find((function(e){return e.id===a}))}}(R,e),t=function(e){var n=e.amount,t=e.fromUnit,r=e.toUnit;if(!t)return y.MeasurementUnitNotFound("From unit was not found!");if(!r)return y.MeasurementUnitNotFound("To unit was not found!");var a=new O.p(n);return{value:new O.p(1).div(t.value).times(a).times(r.value),names:r.names,from:{amount:a,names:t.names}}}(n);f(t)}));return(0,u.jsxs)(o.Z,{onSubmit:E,className:"converter-form",children:[(0,u.jsxs)(o.Z.Group,{className:"form-group",children:[(0,u.jsxs)(o.Z.Text,{children:["Convert ",k," from: "]}),(0,u.jsx)(p,{invalidMessage:null===(t=F[j.AMOUNT])||void 0===t?void 0:t.message,children:(0,u.jsx)(o.Z.Control,(0,i.Z)({type:"number",placeholder:"Enter ".concat(k,"..."),autoComplete:"off",step:"any"},S))}),(0,u.jsx)(p,{invalidMessage:null===(r=F[j.FROM])||void 0===r?void 0:r.message,children:(0,u.jsx)(o.Z.Select,(0,i.Z)((0,i.Z)({},U),{},{children:(0,u.jsx)(b,{defaultOptionText:"Select unit of measurement...",groupsList:R})}))})]}),(0,u.jsxs)(o.Z.Group,{className:"form-group",children:[(0,u.jsxs)(o.Z.Text,{className:"d-flex justify-content-between align-items-center",children:["to:",(0,u.jsx)(h,{onClick:function(){M(j.FROM,q),M(j.TO,C)},disabled:_})]}),(0,u.jsx)(o.Z.Group,{className:"feedback-group",children:(0,u.jsx)(p,{invalidMessage:null===(a=F[j.TO])||void 0===a?void 0:a.message,children:(0,u.jsx)(o.Z.Select,(0,i.Z)((0,i.Z)({},A),{},{children:(0,u.jsx)(b,{defaultOptionText:"All units of measurement",groupsList:R})}))})})]}),(0,u.jsx)(g.Z,{type:"submit",children:"Convert"})]})};function S(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return new O.p(e).round(n).toString()}var U=t(5987),A=["names"];var C=function(e){var n=e.names,t=(0,U.Z)(e,A);return(0,u.jsx)("span",(0,i.Z)((0,i.Z)({},t),{},{children:(null===n||void 0===n?void 0:n.short)||n.full}))};var q=function(e){var n=e.error;return(0,u.jsxs)("div",{className:"my-3",children:["Converting failed: ",(0,u.jsx)("span",{className:"text-danger",children:n.message})]})};var _=function(e){var n=e.result;if(n instanceof y)return(0,u.jsx)(q,{error:n});var t=function(e){var n=e.toExponential().split("e"),t=(0,d.Z)(n,2),r=t[0],a=t[1],u=Number(a);if(Math.abs(u)<=3){var s=r.split(".")[1];return s?{value:s.length>10?S(e):e.toString()}:{value:e.toString()}}return{value:S(r),exponent:u}}(n.value);return(0,u.jsxs)("div",{className:"my-3",children:[(0,u.jsx)("span",{className:"text-muted",children:"Result is: "}),(0,u.jsx)("span",{className:"result__mantissa",children:t.value})," ",(null===t||void 0===t?void 0:t.exponent)&&(0,u.jsxs)("span",{className:"result__exponent",children:["x 10",(0,u.jsx)("sup",{children:null===t||void 0===t?void 0:t.exponent})]})," ",(0,u.jsx)(C,{names:n.names,className:"result__unit-of-measurement"})]})};var E=function(e){var n=e.converterName,t=e.converterApiData,a=(0,m.w)(),i=a.result,l=a.setResult;return(0,r.useEffect)((function(){l(null)}),[l]),(0,u.jsxs)(s,{name:"".concat(n," converter"),children:[(0,u.jsx)(R,{converterData:t}),i&&(0,u.jsx)(_,{result:i})]})}},5481:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(4432),a=JSON.parse('{"type":"volume","groups":[{"name":"Metric system","content":[{"id":"\xb5l","value":1000000,"names":{"short":"\xb5l","full":"microliter"}},{"id":"mm3","value":1000000,"names":{"short":"mm\xb3","full":"cubic milimeter"}},{"id":"ml","value":1000,"names":{"short":"ml","full":"mililiter"}},{"id":"cm3","value":1000,"names":{"short":"cm\xb3","full":"cubic centimeter"}},{"id":"cl","value":100,"names":{"full":"centiliter"}},{"id":"dl","value":10,"names":{"full":"deciliter"}},{"id":"l","value":1,"names":{"full":"liter"}},{"id":"dm3","value":1,"names":{"short":"dm\xb3","full":"cubic decimeter"}},{"id":"hl","value":0.1,"names":{"full":"hectoliter"}},{"id":"m3","value":0.001,"names":{"short":"m\xb3","full":"cubic meter"}},{"id":"km3","value":1e-12,"names":{"short":"km\xb3","full":"cubic kilometer"}}]},{"name":"British imperial (dry)","content":[{"id":"ba","value":0.006110602,"names":{"full":"barrel"}},{"id":"bu","value":0.0274961,"names":{"short":"bu","full":"bushel"}},{"id":"pk","value":0.1099844,"names":{"short":"pk","full":"pek"}},{"id":"gal","value":0.2199688,"names":{"short":"gal","full":"gallon"}},{"id":"qt","value":0.8798751,"names":{"short":"qt","full":"quart"}},{"id":"pt","value":1.759751,"names":{"short":"pt","full":"pint"}}]},{"name":"British imperial (fluid)","content":[{"id":"oz","value":35.19501,"names":{"short":"oz","full":"fluid ounce"}}]}]}'),u=t(184);var s=function(){return(0,u.jsx)(r.Z,{converterName:"volume",converterApiData:a})}}}]);
//# sourceMappingURL=481.dbae813a.chunk.js.map