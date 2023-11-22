"use strict";(self.webpackChunkpowerpulse=self.webpackChunkpowerpulse||[]).push([[569],{1023:function(e,r,n){n.d(r,{Z:function(){return x}});var t="BasicModalWindow_backdrop__zF1Qa",s="BasicModalWindow_modalWrapper__z8HT4",i=n(4164),c=n(2791),a="CloseButton_button__1uWD8",o="CloseButton_iconClose__6Mb78",d=n(182),l=n(3329),u=function(e){var r=e.handleCloseModal;return(0,l.jsx)("button",{className:a,type:"button",onClick:r,children:(0,l.jsx)(d.Z,{className:o,iconId:"Close"})})},m=document.querySelector("#modal-root"),x=function(e){var r=e.children,n=e.handleModalToggle;(0,c.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,i.createPortal)((0,l.jsx)("div",{className:t,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)(u,{handleCloseModal:n}),r]})}),m)}},1301:function(e,r,n){var t=n(9434),s=n(3027);r.Z=function(){return{diaryProducts:(0,t.v9)(s.P3),diaryExercises:(0,t.v9)(s.KR),diaryIsLoading:(0,t.v9)(s.$x),diaryError:(0,t.v9)(s.QN)}}},5781:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(9434),s=function(e){return e.exercises.exercisesFilter},i=function(e){return e.exercises.totalRecords},c=function(e){return e.exercises.itemsSelectedFilter},a=function(e){return e.exercises.isLoading},o=function(e){return e.exercises.error},d=function(e){return e.exercises.getMore},l=function(){return{exercisesFilter:(0,t.v9)(s),exercisesTotalRecords:(0,t.v9)(i),exercisesItemsSelectFilter:(0,t.v9)(c),exercisesIsLoading:(0,t.v9)(a),exercisesError:(0,t.v9)(o),exercisesGetMore:(0,t.v9)(d)}}},4960:function(e,r,n){n.r(r),n.d(r,{default:function(){return xe}});var t=n(2791),s=n(7689),i=n(9971),c=n(5781),a=n(5294),o=n(9434),d=n(365),l=n(9439),u=n(1220),m=n(182),x=n(1023),_=n(1301),f="AddExerciseForm_container__6v-Rz",h="AddExerciseForm_wrapper__7dS13",p="AddExerciseForm_imageWrapper__42zMK",v="AddExerciseForm_image__xjPOL",g="AddExerciseForm_textTime__l89AT",E="AddExerciseForm_timerWrapper__lUGx8",j="AddExerciseForm_listWrapper__3FNeu",N="AddExerciseForm_button__kFszF",T="undefined"==typeof window?t.useEffect:t.useLayoutEffect,C=function(e,r){return 0===e||e===r?0:"number"==typeof r?e-r:0},y=function(e){return{position:"relative",width:e,height:e}},w={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},S=function(e,r,n,t,s){return 0===t?r:r+n*((s?t-e:e)/t)},Z=function(e){var r,n;return null!=(n=null==(r=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,r,n,t){return"#".concat(r).concat(r).concat(n).concat(n).concat(t).concat(t)})).substring(1).match(/.{2}/g))?void 0:r.map((function(e){return parseInt(e,16)})))?n:[]},k=function(e,r){var n,t=e.colors,s=e.colorsTime,i=e.isSmoothColorTransition,c=void 0===i||i;if("string"==typeof t)return t;var a=null!=(n=null==s?void 0:s.findIndex((function(e,n){return e>=r&&r>=s[n+1]})))?n:-1;if(!s||-1===a)return t[0];if(!c)return t[a];var o=s[a]-r,d=s[a]-s[a+1],l=Z(t[a]),u=Z(t[a+1]),m=!!e.isGrowing;return"rgb(".concat(l.map((function(e,r){return 0|S(o,e,u[r]-e,d,m)})).join(","),")")},I=function(e){var r=e.duration,n=e.initialRemainingTime,s=e.updateInterval,i=e.size,c=void 0===i?180:i,a=e.strokeWidth,o=void 0===a?12:a,d=e.trailStrokeWidth,u=e.isPlaying,m=void 0!==u&&u,x=e.isGrowing,_=void 0!==x&&x,f=e.rotation,h=void 0===f?"clockwise":f,p=e.onComplete,v=e.onUpdate,g=(0,t.useRef)(),E=function(e,r,n){var t=e/2,s=r/2,i=t-s,c=2*i,a="clockwise"===n?"1,0":"0,1",o=2*Math.PI*i;return{path:"m ".concat(t,",").concat(s," a ").concat(i,",").concat(i," 0 ").concat(a," 0,").concat(c," a ").concat(i,",").concat(i," 0 ").concat(a," 0,-").concat(c),pathLength:o}}(c,Math.max(o,null!=d?d:0),h),j=E.path,N=E.pathLength,y=function(e){var r=e.isPlaying,n=e.duration,s=e.startAt,i=void 0===s?0:s,c=e.updateInterval,a=void 0===c?0:c,o=e.onComplete,d=e.onUpdate,u=(0,t.useState)(i),m=(0,l.Z)(u,2),x=m[0],_=m[1],f=(0,t.useRef)(0),h=(0,t.useRef)(i),p=(0,t.useRef)(-1e3*i),v=(0,t.useRef)(null),g=(0,t.useRef)(null),E=(0,t.useRef)(null),j=function e(r){var t=r/1e3;if(null===g.current)return g.current=t,void(v.current=requestAnimationFrame(e));var s=t-g.current,i=f.current+s;g.current=t,f.current=i;var c=h.current+(0===a?i:(i/a|0)*a),o=h.current+i,d="number"==typeof n&&o>=n;_(d?n:c),d||(v.current=requestAnimationFrame(e))},N=function(){v.current&&cancelAnimationFrame(v.current),E.current&&clearTimeout(E.current),g.current=null},C=(0,t.useCallback)((function(e){N(),f.current=0;var n="number"==typeof e?e:i;h.current=n,_(n),r&&(v.current=requestAnimationFrame(j))}),[r,i]);return T((function(){if(null==d||d(x),n&&x>=n){p.current+=1e3*n;var e=(null==o?void 0:o(p.current/1e3))||{},r=e.shouldRepeat,t=void 0!==r&&r,s=e.delay,i=void 0===s?0:s,c=e.newStartAt;t&&(E.current=setTimeout((function(){return C(c)}),1e3*i))}}),[x,n]),T((function(){return r&&(v.current=requestAnimationFrame(j)),N}),[r,n,a]),{elapsedTime:x,reset:C}}({isPlaying:m,duration:r,startAt:C(r,n),updateInterval:s,onUpdate:"function"==typeof v?function(e){var n=Math.ceil(r-e);n!==g.current&&(g.current=n,v(n))}:void 0,onComplete:"function"==typeof p?function(e){var n,t=null!=(n=p(e))?n:{},s=t.shouldRepeat,i=t.delay,c=t.newInitialRemainingTime;if(s)return{shouldRepeat:s,delay:i,newStartAt:C(r,c)}}:void 0}),w=y.elapsedTime,Z=r-w;return{elapsedTime:w,path:j,pathLength:N,remainingTime:Math.ceil(Z),rotation:h,size:c,stroke:k(e,Z),strokeDashoffset:S(w,0,N,r,_),strokeWidth:o}},b=function(e){var r=e.children,n=e.strokeLinecap,s=e.trailColor,i=e.trailStrokeWidth,c=I(e),a=c.path,o=c.pathLength,d=c.stroke,l=c.strokeDashoffset,u=c.remainingTime,m=c.elapsedTime,x=c.size,_=c.strokeWidth;return t.createElement("div",{style:y(x)},t.createElement("svg",{viewBox:"0 0 ".concat(x," ").concat(x),width:x,height:x,xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:a,fill:"none",stroke:null!=s?s:"#d9d9d9",strokeWidth:null!=i?i:_}),t.createElement("path",{d:a,fill:"none",stroke:d,strokeLinecap:null!=n?n:"round",strokeWidth:_,strokeDasharray:o,strokeDashoffset:l})),"function"==typeof r&&t.createElement("div",{style:w},r({remainingTime:u,elapsedTime:m,color:d})))};b.displayName="CountdownCircleTimer";var A="Timer_buttonWrapper__hpmp-",F="Timer_button__o3ZMD",L="Timer_icon__FwvTw",M="Timer_text__yQr+w",P="Timer_textCalories__IEWvV",R=function(e){var r=Math.floor(e/60),n=e%60,t=r<10?"0".concat(r):r,s=n<10?"0".concat(n):n;return"".concat(t,":").concat(s)},W=n(3329),D=function(e){var r=e.burnedCalories,n=e.time,s=e.dynamicCalories,i=e.setDynamicCalories,c=e.exerciseTime,a=e.setExerciseTime,o=(0,t.useState)(0),d=(0,l.Z)(o,2),u=d[0],x=d[1],_=(0,t.useState)(!1),f=(0,l.Z)(_,2),h=f[0],p=f[1],v=(0,t.useState)(""),g=(0,l.Z)(v,2),E=g[0],j=g[1];return(0,t.useEffect)((function(){if(h){var e=setInterval((function(){j((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}}),[h]),(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)("div",{children:[(0,W.jsx)(b,{size:124,isPlaying:h,duration:60*n,colors:"var(--orange)",strokeWidth:4,trailColor:" rgba(239, 237, 232, 0.3)",initialRemainingTime:60*n+E,onUpdate:function(e){!function(e){var t=e.remainingTime,s=60*Number(n),o=Number(s-t);a(o);var d=Math.floor(c*r/s);i(d)}({remainingTime:e})},children:function(e){var r=e.remainingTime;return(0,W.jsx)("div",{children:R(r)})}},u),(0,W.jsxs)("div",{className:A,children:[(0,W.jsx)("button",{className:F,onClick:function(){p((function(e){return!e})),x((function(e){return e+1}))},children:(0,W.jsx)(m.Z,{className:L,iconId:h?"Pause":"Polygon"})}),(0,W.jsxs)("p",{className:M,children:["Burned calories:",(0,W.jsx)("span",{className:P,children:s})]})]})]})})},B=n(0),z="ModalExercisesList_cardList__+mVYT",q="ModalExercisesList_cardItem__VSDL-",U="ModalExercisesList_cardText__HJTX+",Q="ModalExercisesList_cardTitle__xXbLp",G=n(9577),H=function(e){var r=e.exercise;return(0,W.jsxs)("ul",{className:z,children:[(0,W.jsxs)("li",{className:q,children:[(0,W.jsx)("p",{className:U,children:"Name:"}),(0,W.jsx)("strong",{className:Q,children:(0,G.Z)(r.name)})]}),(0,W.jsxs)("li",{className:q,children:[(0,W.jsx)("p",{className:U,children:"Body part:"}),(0,W.jsx)("strong",{className:Q,children:(0,G.Z)(r.bodyPart)})]}),(0,W.jsxs)("li",{className:q,children:[(0,W.jsx)("p",{className:U,children:"Target:"}),(0,W.jsx)("strong",{className:Q,children:(0,G.Z)(r.target)})]}),(0,W.jsxs)("li",{className:q,children:[(0,W.jsx)("p",{className:U,children:"Equipment:"}),(0,W.jsx)("strong",{className:Q,children:(0,G.Z)(r.equipment)})]})]})},K=n(7120),V=function(e){var r=e.handleModalExercise,n=e.handleModalSuccess,s=e.handleSelectedExercise,i=e.exercise,c=(0,t.useState)(""),a=(0,l.Z)(c,2),d=a[0],u=a[1],m=(0,t.useState)(""),x=(0,l.Z)(m,2),T=x[0],C=x[1],y=(0,o.I0)(),w=(0,_.Z)().diaryError,S=new Date,Z={date:(0,B.Z)(S),exercise:i._id,time:T,calories:d};return(0,W.jsx)("div",{className:f,children:(0,W.jsxs)("div",{className:h,children:[(0,W.jsxs)("div",{children:[(0,W.jsx)("div",{className:p,children:(0,W.jsx)("img",{className:v,src:i.gifUrl,alt:"Exercise example"})}),(0,W.jsx)("p",{className:g,children:"Time"}),(0,W.jsx)("div",{className:E,children:(0,W.jsx)(D,{burnedCalories:i.burnedCalories,time:i.time,dynamicCalories:d,setDynamicCalories:u,exerciseTime:T,setExerciseTime:C})})]}),(0,W.jsxs)("div",{className:j,children:[(0,W.jsx)(H,{exercise:i}),(0,W.jsx)("button",{className:N,type:"submit",disabled:!(T>0),onClick:function(){y((0,K.ec)(Z)),w?console.log("Server error. Try again later"):(r(),n(),s(Z))},children:"Add to diary"})]})]})})},Y="AddExerciseSuccess_container__UEI5a",O="AddExerciseSuccess_image__ricfH",X="AddExerciseSuccess_title__saeVm",$="AddExerciseSuccess_text1__seNOF",J="AddExerciseSuccess_text2__t7aGD",ee="AddExerciseSuccess_textTime__7kP+0",re="AddExerciseSuccess_textCalories__ERS6Y",ne="AddExerciseSuccess_button__6fWTn",te="AddExerciseSuccess_linkWrapper__msKjb",se="AddExerciseSuccess_link__ZaHDo",ie="AddExerciseSuccess_iconArrow__Qq-QT",ce=n.p+"static/media/thumbIcon.06ff8a8bdc626f0847f6.png",ae=n(1087),oe=n(2041),de=function(e){var r=e.handleModalSuccess,n=e.selectedExercise;return(0,W.jsxs)("div",{className:Y,children:[(0,W.jsx)("img",{className:O,src:ce,alt:"Thumb up icon"}),(0,W.jsx)("strong",{className:X,children:"Well done"}),(0,W.jsxs)("p",{className:$,children:["Your time: ",(0,W.jsx)("span",{className:ee,children:n.time})]}),(0,W.jsxs)("p",{className:J,children:["Burned calories:"," ",(0,W.jsx)("span",{className:re,children:n.calories})]}),(0,W.jsx)("button",{className:ne,type:"button",onClick:r,children:"Next exercise"}),(0,W.jsxs)("div",{className:te,children:[(0,W.jsx)(ae.OL,{to:oe.zw,className:se,onClick:r,children:"To the diary"}),(0,W.jsx)(m.Z,{className:ie,iconId:"Arrow"})]})]})},le=(0,t.forwardRef)((function(e,r){var n=e.exercise,s=(0,t.useState)(!1),i=(0,l.Z)(s,2),c=i[0],a=i[1],o=(0,t.useState)(!1),d=(0,l.Z)(o,2),_=d[0],f=d[1],h=(0,t.useState)({}),p=(0,l.Z)(h,2),v=p[0],g=p[1],E=function(){a((function(e){return!e})),document.body.classList.toggle("body-scroll-lock")},j=function(){f((function(e){return!e})),document.body.classList.toggle("body-scroll-lock")};return(0,W.jsxs)("div",{className:u.Z.exerciseWrapper,ref:r,children:[(0,W.jsxs)("div",{className:u.Z.exerciseCardTopPart,children:[(0,W.jsx)("p",{className:u.Z.exerciseCardTopDiet,children:"workout"}),(0,W.jsxs)("button",{className:u.Z.exerciseArrow,onClick:E,children:["Start",(0,W.jsx)(m.Z,{className:u.Z.exerciseArrowSvg,iconId:"Arrow"})]})]}),c&&(0,W.jsx)(x.Z,{handleModalToggle:E,children:(0,W.jsx)(V,{handleModalExercise:E,handleModalSuccess:j,exercise:n,handleSelectedExercise:function(e){g(e)}})}),_&&(0,W.jsx)(x.Z,{handleModalToggle:j,children:(0,W.jsx)(de,{handleModalSuccess:j,selectedExercise:v})}),(0,W.jsxs)("div",{className:u.Z.exerciseName,children:[(0,W.jsx)(m.Z,{className:u.Z.exerciseManSvg,iconId:"Runner"}),(0,W.jsx)("h3",{className:u.Z.exerciseNameText,children:n.name})]}),(0,W.jsxs)("ul",{className:u.Z.exerciseCardLowPart,children:[(0,W.jsxs)("li",{children:["Burned calories:",(0,W.jsx)("span",{children:n.burnedCalories})]}),(0,W.jsxs)("li",{children:["Body part:",(0,W.jsx)("span",{className:u.Z.exerciseCardItem,children:n.bodyPart})]}),(0,W.jsxs)("li",{children:["Target:",(0,W.jsx)("span",{className:u.Z.exerciseCardItem,children:n.target})]})]})]})})),ue=n(4354),me=function(e){var r=e.id,n=(0,o.I0)(),s=(0,c.Z)().exercisesItemsSelectFilter;return(0,t.useEffect)((function(){var e={page:1,id:r},t=a.Z.CancelToken.source(),s=t.token;return n((0,d.R)({params:e,cancelToken:s})),function(){return t.cancel()}}),[r,n]),(0,t.useEffect)((function(){return function(){n((0,ue.C)())}}),[n]),(0,W.jsx)("div",{className:i.Z.cardContainerBackground,children:(0,W.jsx)("div",{className:i.Z.cardContainer,children:s.map((function(e){return e._id&&(0,W.jsx)(le,{exercise:e},e._id)}))})})};var xe=function(){var e=(0,s.UO)().id;return(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(me,{id:e})})}},3027:function(e,r,n){n.d(r,{$x:function(){return i},KR:function(){return s},P3:function(){return t},QN:function(){return c}});var t=function(e){return e.diary.diaryProducts},s=function(e){return e.diary.diaryExercises},i=function(e){return e.diary.isLoading},c=function(e){return e.diary.error}},9577:function(e,r){r.Z=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}},0:function(e,r){r.Z=function(e){var r=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),t=e.getFullYear();return"".concat(t,"-").concat(n,"-").concat(r)}},1220:function(e,r){r.Z={exerciseWrapper:"ExercisesItem_exerciseWrapper__RIxrk",exerciseCardTopPart:"ExercisesItem_exerciseCardTopPart__Pqhh+",exerciseCardTopDiet:"ExercisesItem_exerciseCardTopDiet__NE2S6",exerciseArrow:"ExercisesItem_exerciseArrow__qG4Qc",exerciseName:"ExercisesItem_exerciseName__ZDurI",exerciseManSvg:"ExercisesItem_exerciseManSvg__6FfGy",exerciseArrowSvg:"ExercisesItem_exerciseArrowSvg__PllwK",exerciseNameText:"ExercisesItem_exerciseNameText__lZpBN",exerciseCardLowPart:"ExercisesItem_exerciseCardLowPart__Pd5F8",exerciseCardItem:"ExercisesItem_exerciseCardItem__hHkND",productRecommendedTrue:"ExercisesItem_productRecommendedTrue__ImE7z",productRecommendedFalse:"ExercisesItem_productRecommendedFalse__ZZ2Vd",productsCardTopPart:"ExercisesItem_productsCardTopPart__oPg19",productRecommended:"ExercisesItem_productRecommended__NqFXH",productCategory:"ExercisesItem_productCategory__w+tQU"}},9971:function(e,r){r.Z={exerciseArrowSvg:"ExercisesList_exerciseArrowSvg__eumz-",exerciseArrow:"ExercisesList_exerciseArrow__IEsFr",exercisesTitle:"ExercisesList_exercisesTitle__6FPY+",cardContainer:"ExercisesList_cardContainer__MW6u4",cardContainerBackground:"ExercisesList_cardContainerBackground__xLfR5",containerProducts:"ExercisesList_containerProducts__PcZc6"}}}]);
//# sourceMappingURL=569.f7463d08.chunk.js.map