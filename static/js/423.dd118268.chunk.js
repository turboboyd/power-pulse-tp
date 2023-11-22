"use strict";(self.webpackChunkpowerpulse=self.webpackChunkpowerpulse||[]).push([[423],{2610:function(e,a,t){t.d(a,{Z:function(){return h}});var s="StatisticsItem_statisticItem__ZAGsK",n="StatisticsItem_statisticItemPositive__kw-pk",r="StatisticsItem_statisticItemNegative__HJTjN",c="StatisticsItem_primaryStatisticItem__WSxqY",i="StatisticsItem_statisticTitleWrap__NRxuv",l="StatisticsItem_statisticTitle__9-4pX",o="StatisticsItem_statisticPrimaryTitle__4BDlN",d="StatisticsItem_statisticIcon__X8AOQ",u="StatisticsItem_statisticValue__qdzXl",m=t(182),_=t(3329),h=function(e){var a=e.statisticsName,t=e.statisticsIcon,h=e.statisticsValue,x=e.statisticPrimary,y=e.fulfilledNorm,j=void 0===y?"":y;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("li",{className:"".concat(s," ").concat(x&&c," ").concat(""!==j&&"positive"===j?n:""!==j&&"negative"===j?r:""),children:[(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)(m.Z,{className:d,iconId:t}),(0,_.jsx)("p",{className:"".concat(l," ").concat(x&&o),children:a})]}),(0,_.jsx)("div",{className:u,children:h})]})})}},4112:function(e,a,t){t.d(a,{Z:function(){return r}});var s="TitlePage_title__zyjBQ",n=t(3329);function r(e){var a=e.title;return(0,n.jsx)("h1",{className:s,children:a})}},1301:function(e,a,t){var s=t(9434),n=t(3027);a.Z=function(){return{diaryProducts:(0,s.v9)(n.P3),diaryExercises:(0,s.v9)(n.KR),diaryIsLoading:(0,s.v9)(n.$x),diaryError:(0,s.v9)(n.QN)}}},7423:function(e,a,t){t.r(a),t.d(a,{default:function(){return ve}});var s=t(5861),n=t(9439),r=t(4687),c=t.n(r),i="DiaryPage_diaryPage__pKsQy",l="DiaryPage_calendarWrap__cPPCu",o="DiaryPage_calendar__EWxfj",d="DiaryPage_sectionWrap__fGhT1",u=t(4112),m="DayDashboard_dayDashboard__XV93s",_="DayDashboard_statisticList__nct9L",h="DayDashboard_adviceWrap__d1eN6",x="DayDashboard_adviceIconWrap__f+yUg",y="DayDashboard_exclamationIcon__xfLbC",j="DayDashboard_adviceText__Ky3eB",N=t(182),v=t(2610),p=t(9434),f=t(4289),b=t(3027),g=function(){var e,a,t=(0,p.v9)(f.dy),s=(0,p.v9)(b.P3),n=(0,p.v9)(b.KR),r=null!==(e=null===(a=t.profileSettings)||void 0===a?void 0:a.bmr)&&void 0!==e?e:"0",c=s.reduce((function(e,a){return e+a.calories}),0),i=r-c,l=n.reduce((function(e,a){return e+a.calories}),0),o=n.reduce((function(e,a){return e+a.time}),0);return{dailyCalorieIntake:r,caloriesConsumed:c,caloriesRemaining:i,dailyPhysicalActivity:110,caloriesBurned:l,sportsRemaining:Math.floor(o/60)-110}},D=t(3329),I=function(){var e=g(),a=e.dailyCalorieIntake,t=e.caloriesConsumed,s=e.caloriesRemaining,n=e.dailyPhysicalActivity,r=e.caloriesBurned,c=e.sportsRemaining,i=t<a?"positive":"negative",l=c>0?"positive":"negative";return(0,D.jsxs)("div",{className:m,children:[(0,D.jsxs)("ul",{className:_,children:[(0,D.jsx)(v.Z,{statisticsName:"Daily calorie intake",statisticsValue:"".concat(a),statisticsIcon:"Fluent_food",statisticPrimary:!0}),(0,D.jsx)(v.Z,{statisticsName:"Daily physical activity",statisticsValue:"".concat(n," min"),statisticsIcon:"Dumbbell",statisticPrimary:!0}),(0,D.jsx)(v.Z,{statisticsName:"\u0421alories consumed",statisticsValue:"".concat(t),statisticsIcon:"Apple"}),(0,D.jsx)(v.Z,{statisticsName:"\u0421alories burned",statisticsValue:"".concat(r),statisticsIcon:"Calories"}),(0,D.jsx)(v.Z,{statisticsName:"Calories remaining",statisticsValue:"".concat(s),statisticsIcon:"Bubble",fulfilledNorm:i}),(0,D.jsx)(v.Z,{statisticsName:"Sports remaining",statisticsValue:"positive"===l?"+".concat(c," min"):"".concat(c," min"),statisticsIcon:"Runner",fulfilledNorm:l})]}),(0,D.jsxs)("div",{className:h,children:[(0,D.jsx)("div",{className:x,children:(0,D.jsx)(N.Z,{className:y,iconId:"tabler:exclamation-mark"})}),(0,D.jsx)("p",{className:j,children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},T="DayExercises_dayExecrcises__bQ6ZY",P="DayExercises_dayScrollWrap__LYu-4",k="DayExercises_diaryNav__wSSyn",S="DayExercises_diarySubtitle__56ycD",C=t(1301),w=t(2041),E=t(2791),Z=t(1087),W="ButtonAddItem_addButtonLink__6S3vs",V="ButtonAddItem_addButtonImg__mhW8u",L=function(e){var a=e.titleLink,t=e.titleRoute;return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(Z.OL,{className:W,to:t,children:[a,(0,D.jsx)(N.Z,{className:V,iconId:"Arrow"})]})})},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,a){return e+=(a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_"}),"")},F={diaryMainItem:"ExercisesTable_diaryMainItem__Uq6bI",table:"ExercisesTable_table__57s17",element:"ExercisesTable_element__XGGXa",elementWrap:"ExercisesTable_elementWrap__Dw79t",nameCategory:"ExercisesTable_nameCategory__NXhaV",nameValue:"ExercisesTable_nameValue__ktQfv",trashImg:"ExercisesTable_trashImg__f8acI",nameTrash:"ExercisesTable_nameTrash__DY8HQ",bodyTable:"ExercisesTable_bodyTable__D7rlB",diaryMainList:"ExercisesTable_diaryMainList__eIyzS"},B=t(9577),A=t(7120),M=function(e){var a=e.exercises,t=(0,p.I0)();return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("ul",{className:F.diaryMainList,children:a.map((function(e){var a=e._id,s=e.bodyPart,n=e.equipment,r=e.name,c=e.target,i=e.calories,l=e.time;return(0,D.jsx)("li",{className:F.diaryMainItem,children:(0,D.jsxs)("table",{className:F.table,children:[(0,D.jsxs)("tbody",{className:F.bodyTable,children:[(0,D.jsxs)("tr",{className:F.element,children:[(0,D.jsx)("th",{className:F.nameCategory,children:"Body Part"}),(0,D.jsx)("td",{className:F.nameValue,children:(0,B.Z)(s)})]}),(0,D.jsxs)("tr",{className:F.element,children:[(0,D.jsx)("th",{className:F.nameCategory,children:"Equipment"}),(0,D.jsx)("td",{className:F.nameValue,children:(0,B.Z)(n)})]}),(0,D.jsxs)("tr",{className:F.element,children:[(0,D.jsx)("th",{className:F.nameCategory,children:"Name"}),(0,D.jsx)("td",{className:F.nameValue,children:(0,B.Z)(r)})]})]}),(0,D.jsxs)("tbody",{className:F.elementWrap,children:[(0,D.jsxs)("tr",{className:F.element,children:[(0,D.jsx)("th",{className:F.nameCategory,children:"Target"}),(0,D.jsx)("td",{className:F.nameValue,children:(0,B.Z)(c)})]}),(0,D.jsxs)("tr",{className:F.element,children:[(0,D.jsx)("th",{className:F.nameCategory,children:"Burned Calories"}),(0,D.jsx)("td",{className:F.nameValue,children:i})]}),(0,D.jsxs)("tr",{className:F.element,children:[(0,D.jsx)("th",{className:F.nameCategory,children:"Time"}),(0,D.jsx)("td",{className:F.nameValue,children:l})]}),(0,D.jsxs)("tr",{className:F.element,children:[(0,D.jsx)("th",{className:"".concat(F.nameCategory," ").concat(F.nameTrash),children:"Trash"}),(0,D.jsx)("td",{className:F.trashValue,onClick:function(){return function(e){t((0,A.xm)(e))}(a)},children:(0,D.jsx)(N.Z,{className:F.trashImg,iconId:"Trash"})})]})]})]})},R())}))})})},K="EmptyList_notFoundPlugTextWrap__t6Msc",Q="EmptyList_notFoundPlugText__zPRyy",X=function(e){var a=e.listName;return(0,D.jsx)("div",{className:K,children:(0,D.jsxs)("p",{className:Q,children:["Not found ",a]})})},Y=function(){var e=(0,C.Z)().diaryExercises;return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("div",{className:T,children:(0,D.jsxs)("div",{className:P,children:[(0,D.jsxs)("div",{className:k,children:[(0,D.jsx)("h3",{className:S,children:"Execrcises"}),(0,D.jsx)(L,{titleLink:"Add exercise",titleRoute:w.ZT})]}),0===e.length?(0,D.jsx)(X,{listName:"exercises"}):(0,D.jsx)(M,{exercises:e})]})})})},q="DayProducts_dayProducts__LAo5g",G="DayProducts_dayScrollWrap__DIuIV",H="DayProducts_diaryNav__JjD4d",J="DayProducts_diarySubtitle__3acfh",z="ProductsTable_diaryMainItem__qlJX4",U="ProductsTable_element__aIisf",O="ProductsTable_elementWrap__0QI3A",$="ProductsTable_nameCategory__e1unZ",ee="ProductsTable_nameValue__dFBF+",ae="ProductsTable_recommendWrap__ZRMtE",te="ProductsTable_productRecommend__rAcms",se="ProductsTable_productNotRecommend__reFto",ne="ProductsTable_trashValue__YrW-N",re="ProductsTable_trashImg__HTxxa",ce="ProductsTable_nameTrash__tJVPK",ie="ProductsTable_table__IpdJ7",le="ProductsTable_bodyTable__JWiA8",oe="ProductsTable_diaryMainList__bG8Dg",de=function(e){var a=e.products,t=(0,p.I0)();return(0,D.jsx)("ul",{className:oe,children:a.map((function(e,a){var s=e._id,n=e.title,r=e.category,c=e.calories,i=e.amount,l=e.recommended;return(0,D.jsx)("li",{className:z,children:(0,D.jsxs)("table",{className:ie,children:[(0,D.jsxs)("tbody",{className:le,children:[(0,D.jsxs)("tr",{className:U,children:[(0,D.jsx)("th",{className:$,children:"Title"}),(0,D.jsx)("td",{className:ee,children:(0,B.Z)(n)})]}),(0,D.jsxs)("tr",{className:U,children:[(0,D.jsx)("th",{className:$,children:"Category"}),(0,D.jsx)("td",{className:ee,children:(0,B.Z)(r)})]})]}),(0,D.jsxs)("tbody",{className:O,children:[(0,D.jsxs)("tr",{className:U,children:[(0,D.jsx)("th",{className:$,children:"Calories"}),(0,D.jsx)("td",{className:ee,children:c})]}),(0,D.jsxs)("tr",{className:U,children:[(0,D.jsx)("th",{className:$,children:"Weight"}),(0,D.jsx)("td",{className:ee,children:i})]}),(0,D.jsxs)("tr",{className:U,children:[(0,D.jsx)("th",{className:$,children:"Recommend"}),(0,D.jsx)("td",{className:ee,children:(0,D.jsxs)("div",{className:"".concat(ae),children:[(0,D.jsx)("span",{className:"".concat(l?te:se)}),l?"Yes":"No"]})})]}),(0,D.jsxs)("tr",{className:U,children:[(0,D.jsx)("th",{className:"".concat($," ").concat(ce),children:"Trash"}),(0,D.jsx)("td",{className:ne,onClick:function(){var e;e=s,t((0,A.Wq)(e))},children:(0,D.jsx)(N.Z,{className:re,iconId:"Trash"})})]})]})]})},R())}))})},ue=function(){var e=(0,C.Z)().diaryProducts;return(0,D.jsx)("div",{className:q,children:(0,D.jsxs)("div",{className:G,children:[(0,D.jsxs)("div",{className:H,children:[(0,D.jsx)("h3",{className:J,children:"Products"}),(0,D.jsx)(L,{titleLink:"Add product",titleRoute:w.H1})]}),0===e.length?(0,D.jsx)(X,{listName:"products"}):(0,D.jsx)(de,{products:e})]})})},me={daySwitch:"DaySwitch_daySwitch__Fv7Lz",inputWrap:"DaySwitch_inputWrap__Ra4R+",calendarInput:"DaySwitch_calendarInput__0uBnb",calendarIcon:"DaySwitch_calendarIcon__LyIhh",currentDate:"DaySwitch_currentDate__BhZlX",chevronIconWrap:"DaySwitch_chevronIconWrap__ooP6n",chevronIcon:"DaySwitch_chevronIcon__ih5GH",chevronLeftIcon:"DaySwitch_chevronLeftIcon__E70xl"},_e=t(9513),he=t.n(_e),xe=t(7834),ye=(t(8639),(0,E.forwardRef)((function(e,a){var t=e.value,s=e.onClick,n=e.onChange,r=e.onKeyDown;return(0,D.jsx)("div",{children:(0,D.jsx)("input",{ref:a,className:me.calendarInput,value:t,onClick:function(e){s(e)},onChange:function(e){n(e.target.value)},onKeyDown:r,readOnly:!0})})}))),je=function(e){var a=e.handleDate,t=(0,E.useState)(new Date),s=(0,n.Z)(t,2),r=s[0],c=s[1],i=(0,E.useState)(!1),l=(0,n.Z)(i,2),o=l[0],d=l[1],u=(0,xe.Z)().user,m=new Date(u.registrDate);(0,E.useEffect)((function(){a(r)}),[r,a]);return(0,D.jsxs)("div",{children:[(0,D.jsx)("style",{children:"\n  .react-datepicker__month-container{\n    border-radius: 8px;\n    background: #EF8964;\n  }\n  .react-datepicker__header {\n    background-color:  #EF8964;\n    color: #EFEDE8;\n  }\n    .react-datepicker__year-read-view{\n      display:none;\n    }\n  .react-datepicker__day-name{\n     color:rgba(239, 237, 232, 0.50);\n}\n.react-datepicker__day--disabled{\n  color:rgba(239, 237, 232, 0.50) !important;\n}\n\n.react-datepicker__day--disabled:hover{\n  background-color:inherit !important;\n}\n   .react-datepicker__current-month {\n     color:#EFEDE8;\n}\n.react-datepicker__day--selected{\n  border-radius: 50px;\n  background-color: black;\n}\n.react-datepicker__day {\n  color:#EFEDE8;\n}\n.react-datepicker__day:hover{\n background-color:black;\nborder-radius: 50px;\ntransition: all 150ms linear;\n}\n"}),(0,D.jsxs)("div",{className:me.daySwitch,children:[(0,D.jsxs)("div",{className:me.inputWrap,onClick:function(){document.querySelector(".".concat(me.calendarInput)).click()},children:[(0,D.jsx)(he(),{showYearDropdown:!0,scrollableYearDropdown:!0,yearDropdownItemNumber:100,dateFormat:"dd/MM/yyyy",selected:r,onChange:function(e){c(e)},onKeyDown:function(e){"Escape"===e.key&&o&&d(!1)},minDate:m,maxDate:new Date,calendarClassName:me.customCalendar,dayClassName:function(e){return e.toDateString()===(new Date).toDateString()?"".concat(me.currentDate):null},customInput:(0,D.jsx)(ye,{}),onClickOutside:function(){return d(!1)}}),(0,D.jsx)("div",{children:(0,D.jsx)(N.Z,{className:me.calendarIcon,iconId:"Calendar"})})]}),(0,D.jsxs)("div",{className:me.chevronIconWrap,children:[(0,D.jsx)(N.Z,{className:"".concat(me.chevronIcon," ").concat(me.chevronLeftIcon),iconId:"Chevron",onClick:function(){var e=new Date(r);e.setHours(0,0,0,0),e>m&&(e.setDate(e.getDate()-1),c(e))}}),(0,D.jsx)(N.Z,{className:me.chevronIcon,iconId:"Chevron",onClick:function(){var e=new Date(r);e.setDate(e.getDate()+1),e<=new Date&&c(e)}})]})]})]})},Ne=t(0),ve=function(){var e=(0,p.I0)(),a=(0,E.useState)(null),t=(0,n.Z)(a,2),r=t[0],m=t[1];(0,E.useEffect)((function(){!function(){if(r){var a={date:r};e((0,A.hw)(a))}}()}),[e,r]);var _=function(){var e=(0,s.Z)(c().mark((function e(a){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,Ne.Z)(a),e.next=3,m(t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,D.jsxs)("div",{className:i,children:[(0,D.jsxs)("div",{className:l,children:[(0,D.jsx)(u.Z,{title:"Diary"}),(0,D.jsx)("div",{className:o,children:(0,D.jsx)(je,{handleDate:_})})]}),(0,D.jsxs)("div",{className:d,children:[(0,D.jsx)(I,{}),(0,D.jsxs)("div",{children:[(0,D.jsx)(ue,{}),(0,D.jsx)(Y,{})]})]})]})}},3027:function(e,a,t){t.d(a,{$x:function(){return r},KR:function(){return n},P3:function(){return s},QN:function(){return c}});var s=function(e){return e.diary.diaryProducts},n=function(e){return e.diary.diaryExercises},r=function(e){return e.diary.isLoading},c=function(e){return e.diary.error}},9577:function(e,a){a.Z=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}},0:function(e,a){a.Z=function(e){var a=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();return"".concat(s,"-").concat(t,"-").concat(a)}}}]);
//# sourceMappingURL=423.dd118268.chunk.js.map