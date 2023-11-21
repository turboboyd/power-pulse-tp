"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[800],{2610:function(e,a,t){t.d(a,{Z:function(){return h}});var s="StatisticsItem_statisticItem__ZAGsK",n="StatisticsItem_statisticItemPositive__kw-pk",c="StatisticsItem_statisticItemNegative__HJTjN",r="StatisticsItem_primaryStatisticItem__WSxqY",i="StatisticsItem_statisticTitleWrap__NRxuv",l="StatisticsItem_statisticTitle__9-4pX",o="StatisticsItem_statisticPrimaryTitle__4BDlN",d="StatisticsItem_statisticIcon__X8AOQ",u="StatisticsItem_statisticValue__qdzXl",m=t(182),_=t(3329),h=function(e){var a=e.statisticsName,t=e.statisticsIcon,h=e.statisticsValue,x=e.statisticPrimary,y=e.fulfilledNorm,j=void 0===y?"":y;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("li",{className:"".concat(s," ").concat(x&&r," ").concat(""!==j&&"positive"===j?n:""!==j&&"negative"===j?c:""),children:[(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)(m.Z,{className:d,iconId:t}),(0,_.jsx)("p",{className:"".concat(l," ").concat(x&&o),children:a})]}),(0,_.jsx)("div",{className:u,children:h})]})})}},4112:function(e,a,t){t.d(a,{Z:function(){return c}});var s="TitlePage_title__zyjBQ",n=t(3329);function c(e){var a=e.title;return(0,n.jsx)("h1",{className:s,children:a})}},1301:function(e,a,t){var s=t(9434),n=t(3027);a.Z=function(){return{diaryProducts:(0,s.v9)(n.P3),diaryExercises:(0,s.v9)(n.KR),diaryIsLoading:(0,s.v9)(n.$x),diaryError:(0,s.v9)(n.QN)}}},800:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ne}});var s=t(5861),n=t(9439),c=t(4687),r=t.n(c),i="DiaryPage_diaryPage__pKsQy",l="DiaryPage_calendarWrap__cPPCu",o="DiaryPage_calendar__EWxfj",d="DiaryPage_sectionWrap__fGhT1",u=t(4112),m="DayDashboard_dayDashboard__XV93s",_="DayDashboard_statisticList__nct9L",h="DayDashboard_adviceWrap__d1eN6",x="DayDashboard_adviceIconWrap__f+yUg",y="DayDashboard_exclamationIcon__xfLbC",j="DayDashboard_adviceText__Ky3eB",N=t(182),v=t(2610),f=t(9434),p=t(4289),b=t(3027),D=function(){var e,a,t=(0,f.v9)(p.dy),s=(0,f.v9)(b.P3),n=(0,f.v9)(b.KR),c=null!==(e=null===(a=t.profileSettings)||void 0===a?void 0:a.bmr)&&void 0!==e?e:"0",r=s.reduce((function(e,a){return e+a.calories}),0),i=c-r,l=n.reduce((function(e,a){return e+a.calories}),0),o=n.reduce((function(e,a){return e+a.time}),0);return{dailyCalorieIntake:c,caloriesConsumed:r,caloriesRemaining:i,dailyPhysicalActivity:110,caloriesBurned:l,sportsRemaining:Math.floor(o/60)-110}},I=t(3329),g=function(){var e=D(),a=e.dailyCalorieIntake,t=e.caloriesConsumed,s=e.caloriesRemaining,n=e.dailyPhysicalActivity,c=e.caloriesBurned,r=e.sportsRemaining,i=t<a?"positive":"negative",l=r>0?"positive":"negative";return(0,I.jsxs)("div",{className:m,children:[(0,I.jsxs)("ul",{className:_,children:[(0,I.jsx)(v.Z,{statisticsName:"Daily calorie intake",statisticsValue:"".concat(a),statisticsIcon:"Fluent_food",statisticPrimary:!0}),(0,I.jsx)(v.Z,{statisticsName:"Daily physical activity",statisticsValue:"".concat(n," min"),statisticsIcon:"Dumbbell",statisticPrimary:!0}),(0,I.jsx)(v.Z,{statisticsName:"\u0421alories consumed",statisticsValue:"".concat(t),statisticsIcon:"Apple"}),(0,I.jsx)(v.Z,{statisticsName:"\u0421alories burned",statisticsValue:"".concat(c),statisticsIcon:"Calories"}),(0,I.jsx)(v.Z,{statisticsName:"Calories remaining",statisticsValue:"".concat(s),statisticsIcon:"Bubble",fulfilledNorm:i}),(0,I.jsx)(v.Z,{statisticsName:"Sports remaining",statisticsValue:"positive"===l?"+".concat(r," min"):"".concat(r," min"),statisticsIcon:"Runner",fulfilledNorm:l})]}),(0,I.jsxs)("div",{className:h,children:[(0,I.jsx)("div",{className:x,children:(0,I.jsx)(N.Z,{className:y,iconId:"tabler:exclamation-mark"})}),(0,I.jsx)("p",{className:j,children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},T="DayExercises_dayExecrcises__bQ6ZY",P="DayExercises_dayScrollWrap__LYu-4",k="DayExercises_diaryNav__wSSyn",C="DayExercises_diarySubtitle__56ycD",S=t(1301),w=t(2041),E=t(2791),Z=t(1087),W="ButtonAddItem_addButtonLink__6S3vs",L="ButtonAddItem_addButtonImg__mhW8u",V=function(e){var a=e.titleLink,t=e.titleRoute;return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(Z.OL,{className:W,to:t,children:[a,(0,I.jsx)(N.Z,{className:L,iconId:"Arrow"})]})})},R={diaryMainItem:"ExercisesTable_diaryMainItem__Uq6bI",table:"ExercisesTable_table__57s17",element:"ExercisesTable_element__XGGXa",elementWrap:"ExercisesTable_elementWrap__Dw79t",nameCategory:"ExercisesTable_nameCategory__NXhaV",nameValue:"ExercisesTable_nameValue__ktQfv",trashImg:"ExercisesTable_trashImg__f8acI",nameTrash:"ExercisesTable_nameTrash__DY8HQ",bodyTable:"ExercisesTable_bodyTable__D7rlB",diaryMainList:"ExercisesTable_diaryMainList__eIyzS"},F=t(9577),B=t(7120),A=function(e){var a=e.execrcises,t=(0,f.I0)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("ul",{className:R.diaryMainList,children:a.map((function(e){var a=e._id,s=e.bodyPart,n=e.equipment,c=e.name,r=e.target,i=e.calories,l=e.time;return(0,I.jsx)("li",{className:R.diaryMainItem,children:(0,I.jsxs)("table",{className:R.table,children:[(0,I.jsxs)("tbody",{className:R.bodyTable,children:[(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Body Part"}),(0,I.jsx)("td",{className:R.nameValue,children:(0,F.Z)(s)})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Equipment"}),(0,I.jsx)("td",{className:R.nameValue,children:(0,F.Z)(n)})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Name"}),(0,I.jsx)("td",{className:R.nameValue,children:(0,F.Z)(c)})]})]}),(0,I.jsxs)("tbody",{className:R.elementWrap,children:[(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Target"}),(0,I.jsx)("td",{className:R.nameValue,children:(0,F.Z)(r)})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Burned Calories"}),(0,I.jsx)("td",{className:R.nameValue,children:i})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Time"}),(0,I.jsx)("td",{className:R.nameValue,children:l})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:"".concat(R.nameCategory," ").concat(R.nameTrash),children:"Trash"}),(0,I.jsx)("td",{className:R.trashValue,onClick:function(){var e;t((e=a,void t((0,B.xm)(e))))},children:(0,I.jsx)(N.Z,{className:R.trashImg,iconId:"Trash"})})]})]})]})},a)}))})})},M="EmptyList_notFoundPlugTextWrap__t6Msc",K="EmptyList_notFoundPlugText__zPRyy",Q=function(e){var a=e.listName;return(0,I.jsx)("div",{className:M,children:(0,I.jsxs)("p",{className:K,children:["Not found ",a]})})},X=function(){var e=(0,S.Z)().diaryExercises;return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:T,children:(0,I.jsxs)("div",{className:P,children:[(0,I.jsxs)("div",{className:k,children:[(0,I.jsx)("h3",{className:C,children:"Execrcises"}),(0,I.jsx)(V,{titleLink:"Add exercise",titleRoute:w.ZT})]}),0===e.length?(0,I.jsx)(Q,{listName:"exercises"}):(0,I.jsx)(A,{execrcises:e})]})})})},Y="DayProducts_dayProducts__LAo5g",q="DayProducts_dayScrollWrap__DIuIV",G="DayProducts_diaryNav__JjD4d",H="DayProducts_diarySubtitle__3acfh",J="ProductsTable_diaryMainItem__qlJX4",z="ProductsTable_element__aIisf",O="ProductsTable_elementWrap__0QI3A",U="ProductsTable_nameCategory__e1unZ",$="ProductsTable_nameValue__dFBF+",ee="ProductsTable_recommendWrap__ZRMtE",ae="ProductsTable_productRecommend__rAcms",te="ProductsTable_productNotRecommend__reFto",se="ProductsTable_trashValue__YrW-N",ne="ProductsTable_trashImg__HTxxa",ce="ProductsTable_nameTrash__tJVPK",re="ProductsTable_table__IpdJ7",ie="ProductsTable_bodyTable__JWiA8",le="ProductsTable_diaryMainList__bG8Dg",oe=function(e){var a=e.products,t=(0,f.I0)();return(0,I.jsx)("ul",{className:le,children:a.map((function(e,a){var s=e._id,n=e.title,c=e.category,r=e.calories,i=e.amount,l=e.recommended;return(0,I.jsx)("li",{className:J,children:(0,I.jsxs)("table",{className:re,children:[(0,I.jsxs)("tbody",{className:ie,children:[(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Title"}),(0,I.jsx)("td",{className:$,children:(0,F.Z)(n)})]}),(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Category"}),(0,I.jsx)("td",{className:$,children:(0,F.Z)(c)})]})]}),(0,I.jsxs)("tbody",{className:O,children:[(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Calories"}),(0,I.jsx)("td",{className:$,children:r})]}),(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Weight"}),(0,I.jsx)("td",{className:$,children:i})]}),(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Recommend"}),(0,I.jsx)("td",{className:$,children:(0,I.jsxs)("div",{className:"".concat(ee),children:[(0,I.jsx)("span",{className:"".concat(l?ae:te)}),l?"Yes":"No"]})})]}),(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:"".concat(U," ").concat(ce),children:"Trash"}),(0,I.jsx)("td",{className:se,onClick:function(){var e;e=s,t((0,B.Wq)(e))},children:(0,I.jsx)(N.Z,{className:ne,iconId:"Trash"})})]})]})]})},s)}))})},de=function(){var e=(0,S.Z)().diaryProducts;return(0,I.jsx)("div",{className:Y,children:(0,I.jsxs)("div",{className:q,children:[(0,I.jsxs)("div",{className:G,children:[(0,I.jsx)("h3",{className:H,children:"Products"}),(0,I.jsx)(V,{titleLink:"Add product",titleRoute:w.H1})]}),0===e.length?(0,I.jsx)(Q,{listName:"products"}):(0,I.jsx)(oe,{products:e})]})})},ue={daySwitch:"DaySwitch_daySwitch__Fv7Lz",inputWrap:"DaySwitch_inputWrap__Ra4R+",calendarInput:"DaySwitch_calendarInput__0uBnb",calendarIcon:"DaySwitch_calendarIcon__LyIhh",currentDate:"DaySwitch_currentDate__BhZlX",chevronIconWrap:"DaySwitch_chevronIconWrap__ooP6n",chevronIcon:"DaySwitch_chevronIcon__ih5GH",chevronLeftIcon:"DaySwitch_chevronLeftIcon__E70xl"},me=t(9513),_e=t.n(me),he=t(7834),xe=(t(8639),(0,E.forwardRef)((function(e,a){var t=e.value,s=e.onClick,n=e.onChange,c=e.onKeyDown;return(0,I.jsx)("div",{children:(0,I.jsx)("input",{ref:a,className:ue.calendarInput,value:t,onClick:function(e){s(e)},onChange:function(e){n(e.target.value)},onKeyDown:c,readOnly:!0})})}))),ye=function(e){var a=e.handleDate,t=(0,E.useState)(new Date),s=(0,n.Z)(t,2),c=s[0],r=s[1],i=(0,E.useState)(!1),l=(0,n.Z)(i,2),o=l[0],d=l[1],u=(0,he.Z)().user,m=new Date(u.registrDate);(0,E.useEffect)((function(){a(c)}),[c,a]);var _=function(){d((function(e){return!e}))},h=function(e){document.querySelector(".".concat(ue.calendarInput)).click(),e()};return(0,I.jsxs)("div",{children:[(0,I.jsx)("style",{children:"\n  .react-datepicker__month-container{\n    border-radius: 8px;\n    background: #EF8964;\n  }\n  .react-datepicker__header {\n    background-color:  #EF8964;\n    color: #EFEDE8;\n  }\n    .react-datepicker__year-read-view{\n      display:none;\n    }\n  .react-datepicker__day-name{\n     color:rgba(239, 237, 232, 0.50);\n}\n.react-datepicker__day--disabled{\n  color:rgba(239, 237, 232, 0.50) !important;\n}\n\n.react-datepicker__day--disabled:hover{\n  background-color:inherit !important;\n}\n   .react-datepicker__current-month {\n     color:#EFEDE8;\n}\n.react-datepicker__day--selected{\n  border-radius: 50px;\n  background-color: black;\n}\n.react-datepicker__day {\n  color:#EFEDE8;\n}\n.react-datepicker__day:hover{\n background-color:black;\nborder-radius: 50px;\ntransition: all 150ms linear;\n}\n"}),(0,I.jsxs)("div",{className:ue.daySwitch,children:[(0,I.jsxs)("div",{className:ue.inputWrap,onClick:function(){return h(_)},children:[(0,I.jsx)(_e(),{showYearDropdown:!0,scrollableYearDropdown:!0,yearDropdownItemNumber:100,dateFormat:"dd/MM/yyyy",selected:c,onChange:function(e){r(e)},onKeyDown:function(e){"Escape"===e.key&&o&&d(!1)},minDate:m,maxDate:new Date,calendarClassName:ue.customCalendar,dayClassName:function(e){return e.toDateString()===(new Date).toDateString()?"".concat(ue.currentDate):null},customInput:(0,I.jsx)(xe,{}),onClickOutside:function(){return d(!1)}}),(0,I.jsx)("div",{children:(0,I.jsx)(N.Z,{className:ue.calendarIcon,iconId:"Calendar",onClick:h})})]}),(0,I.jsxs)("div",{className:ue.chevronIconWrap,children:[(0,I.jsx)(N.Z,{className:"".concat(ue.chevronIcon," ").concat(ue.chevronLeftIcon),iconId:"Chevron",onClick:function(){var e=new Date(c);e.setHours(0,0,0,0),e>m&&(e.setDate(e.getDate()-1),r(e))}}),(0,I.jsx)(N.Z,{className:ue.chevronIcon,iconId:"Chevron",onClick:function(){var e=new Date(c);e.setDate(e.getDate()+1),e<=new Date&&r(e)}})]})]})]})},je=t(0),Ne=function(){var e=(0,f.I0)(),a=(0,E.useState)(null),t=(0,n.Z)(a,2),c=t[0],m=t[1];(0,E.useEffect)((function(){!function(){if(c){var a={date:c};e((0,B.hw)(a))}}()}),[e,c]);var _=function(){var e=(0,s.Z)(r().mark((function e(a){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,je.Z)(a),e.next=3,m(t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,I.jsxs)("div",{className:i,children:[(0,I.jsxs)("div",{className:l,children:[(0,I.jsx)(u.Z,{title:"Diary"}),(0,I.jsx)("div",{className:o,children:(0,I.jsx)(ye,{handleDate:_})})]}),(0,I.jsxs)("div",{className:d,children:[(0,I.jsx)(g,{}),(0,I.jsxs)("div",{children:[(0,I.jsx)(de,{}),(0,I.jsx)(X,{})]})]})]})}},3027:function(e,a,t){t.d(a,{$x:function(){return c},KR:function(){return n},P3:function(){return s},QN:function(){return r}});var s=function(e){return e.diary.diaryProducts},n=function(e){return e.diary.diaryExercises},c=function(e){return e.diary.isLoading},r=function(e){return e.diary.error}},9577:function(e,a){a.Z=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}},0:function(e,a){a.Z=function(e){var a=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();return"".concat(s,"-").concat(t,"-").concat(a)}}}]);
//# sourceMappingURL=800.68f8fa80.chunk.js.map