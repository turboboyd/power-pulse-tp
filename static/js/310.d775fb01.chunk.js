"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{2610:function(e,a,t){t.d(a,{Z:function(){return h}});var i="StatisticsItem_statisticItem__ZAGsK",s="StatisticsItem_statisticItemPositive__kw-pk",r="StatisticsItem_statisticItemNegative__HJTjN",n="StatisticsItem_primaryStatisticItem__WSxqY",l="StatisticsItem_statisticTitleWrap__NRxuv",c="StatisticsItem_statisticTitle__9-4pX",o="StatisticsItem_statisticPrimaryTitle__4BDlN",d="StatisticsItem_statisticIcon__X8AOQ",u="StatisticsItem_statisticValue__qdzXl",m=t(182),v=t(3329),h=function(e){var a=e.statisticsName,t=e.statisticsIcon,h=e.statisticsValue,_=e.statisticPrimary,x=e.fulfilledNorm,g=void 0===x?"":x;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("li",{className:"".concat(i," ").concat(_&&n," ").concat(""!==g&&"positive"===g?s:""!==g&&"negative"===g?r:""),children:[(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)(m.Z,{className:d,iconId:t}),(0,v.jsx)("p",{className:"".concat(c," ").concat(_&&o),children:a})]}),(0,v.jsx)("div",{className:u,children:h})]})})}},4112:function(e,a,t){t.d(a,{Z:function(){return r}});var i="TitlePage_title__zyjBQ",s=t(3329);function r(e){var a=e.title;return(0,s.jsx)("h1",{className:i,children:a})}},5310:function(e,a,t){t.r(a),t.d(a,{default:function(){return ee}});var i=t(9439),s=t(2791),r=t(4112),n=t(5705),l=t(9434),c=t(9894),o="RadioButton_radio__EypEe",d="RadioButton_radioInput__w5BLD",u="RadioButton_radioLabel__Z4vDL",m=t(3329),v=function(e){var a=e.id,t=e.name,i=e.value,s=e.checked,r=e.label,n=e.onChange;return(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("input",{className:d,type:"radio",id:a,name:t,value:i,checked:s,onChange:n}),(0,m.jsx)("label",{className:u,htmlFor:a,children:r})]})},h="ErrorMessages_errorMessage__rqIL-",_=function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(n.Bc,{className:h,name:"name",component:"div"}),(0,m.jsx)(n.Bc,{className:h,name:"height",component:"div"}),(0,m.jsx)(n.Bc,{className:h,name:"currentWeight",component:"div"}),(0,m.jsx)(n.Bc,{className:h,name:"desiredWeight",component:"div"}),(0,m.jsx)(n.Bc,{className:h,name:"birthday",component:"div"})]})},x=t(9513),g=t.n(x),p=(t(8639),{datePicker:"\u0421alendarBirthDay_datePicker__xnsJQ",customCalendar:"\u0421alendarBirthDay_customCalendar__4sblh",iconCalendar:"\u0421alendarBirthDay_iconCalendar__uniMB"}),y=t(182),j=t(4289),b=(0,s.forwardRef)((function(e,a){var t=e.value,i=e.onClick,s=e.onChange,r=e.onKeyDown;return(0,m.jsx)("div",{style:{backgroundColor:"black",color:"white"},children:(0,m.jsx)("input",{ref:a,className:p.datePicker,value:t,onClick:function(e){i(),i(e)},onChange:function(e){s(e.target.value)},onKeyDown:r,readOnly:!0,style:{backgroundColor:"black",color:"white"}})})})),N=function(e){var a,t=e.onBirthdayChange,r=(0,l.v9)(j.dy),n=null!==r&&void 0!==r&&null!==(a=r.profileSettings)&&void 0!==a&&a.birthday?new Date(r.profileSettings.birthday):new Date,c=(0,s.useState)(n),o=(0,i.Z)(c,2),d=o[0],u=o[1],v=(0,s.useState)(!1),h=(0,i.Z)(v,2),_=h[0],x=h[1],N=(0,s.useState)(null),f=(0,i.Z)(N,2),k=f[0],C=f[1],F=function(){x(!_)};return(0,m.jsxs)("div",{children:[(0,m.jsx)("style",{children:"\n  .react-datepicker__header {\n    background-color:  #e6533c;\n    color: white;\n  }\n  .react-datepicker__year-option {\n    background-color:  #e6533c;\n    color: white;\n  }\n\n  .react-datepicker__year-dropdown {\n    margin-top: 0.25rem;\n    max-height: 20rem;\n  }\n"}),(0,m.jsxs)("div",{className:p.container,children:[k&&(0,m.jsx)("div",{style:{color:"red"},children:k}),(0,m.jsx)(g(),{showYearDropdown:!0,scrollableYearDropdown:!0,yearDropdownItemNumber:100,dateFormat:"dd.MM.yyyy",selected:d,onChange:function(e){(new Date).getFullYear()-e.getFullYear()<18?C("You must be at least 18 years old."):(C(null),u(e)),t(e),F()},onClickCapture:F,maxDate:new Date,calendarClassName:p.customCalendar,dayClassName:function(e){return e.toDateString()===(new Date).toDateString()?"".concat(p.currentDate):null},customInput:(0,m.jsx)(b,{onKeyDown:function(e){"Escape"===e.key&&x(!1)}})}),(0,m.jsx)(y.Z,{className:p.iconCalendar,iconId:"icon-calendar-white",onClick:function(){document.querySelector(".".concat(p.datePicker)).click()}})]})]})},f=t(9880),k=t(2598),C=t(7834),F="UserForm_formWrapper__JaDbg",w="UserForm_titleName__mlZUd",W="UserForm_input__qGgJS",U="UserForm_inputEmail__OcZEo",A="UserForm_inputContainer__ONhX9",S="UserForm_inputWrapper__DeOXH",D="UserForm_fieldContainer__0Iy7g",I="UserForm_labelInput__oqalT",Z="UserForm_field__q4Q+y",B="UserForm_radioWrapper__d4VqI",q="UserForm_titleBlood__QkInL",V="UserForm_radioContainer__d43aJ",R="UserForm_radioBloodContainer__1R4Mc",L="UserForm_radioSexContainer__5bygo",M="UserForm_levelActivityWrapper__C5Zpu",P="UserForm_levelInput__bErWt",E="UserForm_buttonSave__vXMtE",T=function(){var e=(0,l.I0)(),a=(0,C.Z)().user,t=a.name,i=a.profileSettings,s=a.isLoading,r=i||{},o=r.height,d=void 0===o?0:o,u=r.currentWeight,h=void 0===u?0:u,x=r.desiredWeight,g=void 0===x?0:x,p=r.blood,y=void 0===p?0:p,j=r.sex,b=void 0===j?"":j,T=r.levelActivity,H=void 0===T?0:T,O=i?new Date(i.birthday):new Date("2022-01-01"),Y="".concat(O.getFullYear(),"-").concat(String(O.getMonth()+1).padStart(2,"0"),"-").concat(String(O.getDate()).padStart(2,"0")),J={name:t,height:d,email:a.email,currentWeight:h,desiredWeight:g,birthday:Y,blood:y,sex:b.toString(),levelActivity:H};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(n.J9,{initialValues:J,validationSchema:f.Z,onSubmit:function(a){var t={name:a.name,profileSettings:{height:a.height,currentWeight:a.currentWeight,desiredWeight:a.desiredWeight,birthday:new Date(a.birthday).toISOString(),blood:a.blood,sex:a.sex,levelActivity:a.levelActivity}};e((0,k.ZF)(t)),console.log(t)},children:function(e){return(0,m.jsxs)(n.l0,{children:[(0,m.jsxs)("div",{className:F,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:w,children:"Basic info"}),(0,m.jsx)(n.gN,{className:W,name:"name",type:"text",placeholder:"Your name"})]}),(0,m.jsx)("div",{children:(0,m.jsx)(n.gN,{className:"".concat(W," ").concat(U),type:"text",name:"email",readOnly:!0,disabled:!0})})]})," ",(0,m.jsxs)("div",{className:A,children:[(0,m.jsxs)("div",{className:S,children:[(0,m.jsxs)("div",{className:D,children:[(0,m.jsx)("label",{className:I,htmlFor:"height",children:"Height"}),(0,m.jsx)(n.gN,{className:Z,type:"number",name:"height",id:"height",placeholder:""})]}),(0,m.jsxs)("div",{className:D,children:[(0,m.jsx)("label",{className:I,htmlFor:"currentWeight",children:"Current Weight"}),(0,m.jsx)(n.gN,{className:Z,type:"number",name:"currentWeight",id:"currentWeight",placeholder:""})]})]}),(0,m.jsxs)("div",{className:S,children:[(0,m.jsxs)("div",{className:D,children:[(0,m.jsx)("label",{className:I,htmlFor:"desiredWeight",children:"Desired Weight"}),(0,m.jsx)(n.gN,{className:Z,type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:""})]}),(0,m.jsxs)("div",{className:D,style:{position:"relative"},children:[(0,m.jsx)("label",{className:I,htmlFor:"birthday"}),(0,m.jsx)(N,{minDate:new Date("1900-01-01"),selected:e.values.birthday,onBirthdayChange:function(a){return e.setFieldValue("birthday",a)}})]})]})]}),(0,m.jsx)(_,{}),(0,m.jsx)("p",{className:"".concat(w," ").concat(q),children:"Blood"}),(0,m.jsxs)("div",{className:B,children:[(0,m.jsxs)("div",{className:V,children:[(0,m.jsxs)("div",{className:R,children:[(0,m.jsx)(v,{name:"blood",value:1,id:"1",label:"1",checked:1===e.values.blood,onChange:function(){return e.setFieldValue("blood",1)}}),(0,m.jsx)(v,{name:"blood",value:2,id:"2",label:"2",checked:2===e.values.blood,onChange:function(){return e.setFieldValue("blood",2)}}),(0,m.jsx)(v,{name:"blood",value:3,id:"3",label:"3",checked:3===e.values.blood,onChange:function(){return e.setFieldValue("blood",3)}}),(0,m.jsx)(v,{name:"blood",value:4,id:"4",label:"4",checked:4===e.values.blood,onChange:function(){return e.setFieldValue("blood",4)}})]}),(0,m.jsxs)("div",{className:L,children:[(0,m.jsx)(v,{name:"sex",id:"male",value:"male",label:"Male",checked:"male"===e.values.sex,onChange:function(){return e.setFieldValue("sex","male")}}),(0,m.jsx)(v,{name:"sex",id:"female",value:"female",label:"Female",checked:"female"===e.values.sex,onChange:function(){return e.setFieldValue("sex","female")}})]})]}),(0,m.jsxs)("div",{className:M,children:[(0,m.jsx)(v,{name:"levelActivity",id:"levelActivity1",value:1,label:"Sedentary lifestyle (little or no physical activity)",checked:1===e.values.levelActivity,onChange:function(){return e.setFieldValue("levelActivity",1)}}),(0,m.jsx)(v,{className:P,name:"levelActivity",value:2,id:"levelActivity2",label:"Light activity (light exercises/sports 1-3 days per week)",checked:2===e.values.levelActivity,onChange:function(){return e.setFieldValue("levelActivity",2)}}),(0,m.jsx)(v,{name:"levelActivity",value:3,id:"levelActivity3",label:"Moderately active (moderate exercises/sports 3-5 days per week)",checked:3===e.values.levelActivity,onChange:function(){return e.setFieldValue("levelActivity",3)}}),(0,m.jsx)(v,{name:"levelActivity",value:4,id:"levelActivity4",label:"Very active (intense exercises/sports 6-7 days per week)",checked:4===e.values.levelActivity,onChange:function(){return e.setFieldValue("levelActivity",4)}}),(0,m.jsx)(v,{name:"levelActivity",value:5,id:"levelActivity5",label:"Extremely active (very strenuous exercises/sports and physical work)",checked:5===e.values.levelActivity,onChange:function(){return e.setFieldValue("levelActivity",5)}})]})]}),(0,m.jsx)(c.Z,{className:E,type:"submit",text:"Save",disabled:s||!e.isValid||!e.dirty||!e.values.blood||!e.values.sex||!e.values.levelActivity})]})}})})},H=t(7689),O=t(5130),Y=t(6526),J={avatarWrapper:"Avatar_avatarWrapper__HGshb",avatar:"Avatar_avatar__Uauly",iconAvatar:"Avatar_iconAvatar__BvS-l",iconUpload:"Avatar_iconUpload__sGakc",textUserName:"Avatar_textUserName__hs91K",textUser:"Avatar_textUser__uhr9y"},X=function(e){var a=e.name,t=e.avatarURL,i=(0,l.v9)((function(e){return e.auth.avatarURL})),s=(0,l.I0)(),r=i,n=(0,m.jsx)("img",{src:t,alt:"Avatar",style:{borderRadius:"100%",width:"100%",height:"100%"}}),c=(0,m.jsx)(y.Z,{className:J.iconAvatar,iconId:"icon-avatar"});return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:J.avatarWrapper,children:[(0,m.jsx)("div",{className:J.avatar,children:r?n:c}),(0,m.jsxs)("form",{className:J.form,children:[(0,m.jsx)("input",{type:"file",name:"file",id:"inputFile",style:{display:"none"},onChange:function(e){var a=e.target.files[0];if(a){var t=new Blob([a]),i=URL.createObjectURL(t);s((0,Y.Zj)(i))}s((0,O.g)(a))}}),(0,m.jsx)("label",{htmlFor:"inputFile",style:{cursor:"pointer"},children:(0,m.jsx)(y.Z,{className:J.iconUpload,iconId:"icon-add-avatar"})})]}),(0,m.jsx)("p",{className:J.textUserName,children:a}),(0,m.jsx)("p",{className:J.textUser,children:"User"})]})})},K=t(2610),Q={avatarWrapper:"UserCard_avatarWrapper__bexJ0",statisticsWrapper:"UserCard_statisticsWrapper__EkmxP",iconWarning:"UserCard_iconWarning__5HgWQ",warningWrap:"UserCard_warningWrap__mgW8-",warningText:"UserCard_warningText__A0XkK",svg_logout:"UserCard_svg_logout__zlr+k",logout:"UserCard_logout__tfrFI"},G=function(e){var a=e.user,t=(0,l.I0)(),i=(0,H.s0)(),r=a.name,n=a.avatarURL,c=a.profileSettings,o=a&&c&&c.bmr||0,d=(0,s.useCallback)((function(){t((0,k.ne)()),i("/")}),[t,i]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:Q.avatarWrapper,children:[(0,m.jsx)(X,{name:r,avatarURL:n}),(0,m.jsxs)("div",{className:Q.statisticsWrapper,children:[(0,m.jsx)(K.Z,{className:Q.statistics,statisticsName:"Daily calorie intake",statisticsValue:"".concat(o),statisticsIcon:"Fluent_food",statisticPrimary:!0}),(0,m.jsx)(K.Z,{statisticsName:"Daily norm of sports",statisticsValue:"110 min",statisticsIcon:"Dumbbell",statisticPrimary:!0})]}),(0,m.jsxs)("div",{className:Q.warningWrap,children:[(0,m.jsx)(y.Z,{className:Q.iconWarning,iconId:"icon-warning"}),(0,m.jsx)("p",{className:Q.warningText,children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),(0,m.jsxs)("button",{onClick:d,to:"/",className:Q.logout,children:["Logout ",(0,m.jsx)(y.Z,{className:Q.svg_logout,iconId:"Log-out"})]})]})})},z="ProfilePage_title__qrAwv",$="ProfilePage_container__HAlWm",ee=function(){var e=(0,C.Z)().user,a=e.avatarURL,t=(0,s.useState)(a),n=(0,i.Z)(t,2)[1];return(0,s.useEffect)((function(){n(a)}),[a]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.Z,{title:"Profile Settings",className:z}),(0,m.jsxs)("div",{className:$,children:[(0,m.jsx)(T,{user:e}),(0,m.jsx)(G,{user:e})]})]})}},9880:function(e,a,t){var i=t(8007),s=i.Ry({name:i.Z_().required("Name is required"),height:i.Rx("Number").typeError("Must be a number").positive("Must be positive.").min(150,"Height must be at least 150cm").required("Height is required"),currentWeight:i.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Current weight must be at least 35kg").required("Current weight is required"),desiredWeight:i.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Desired weight must be at least 35kg").required("Desired weight is required"),birthday:i.hT().max(new Date,"Birthday must be in the past").min(new Date("1900-01-01"),"Birthday must be after 1900-01-01").required("Birthday is required")});a.Z=s}}]);
//# sourceMappingURL=310.d775fb01.chunk.js.map