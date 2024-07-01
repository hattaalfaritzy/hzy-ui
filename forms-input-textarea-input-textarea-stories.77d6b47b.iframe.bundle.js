"use strict";(self.webpackChunk_hattaalfaritzy_hzy_ui=self.webpackChunk_hattaalfaritzy_hzy_ui||[]).push([[772],{"./src/components/forms/input-textarea/input-textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_textarea_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),cn=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utils/cn.ts")),commons=__webpack_require__("./src/components/commons/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var InputTextarea=function(_param){var className=_param.className,classNameWrapper=_param.classNameWrapper,classNameLabel=_param.classNameLabel,label=_param.label,errorMessage=_param.errorMessage,_param_maxLength=_param.maxLength,maxLength=void 0===_param_maxLength?200:_param_maxLength,_param_rounded=_param.rounded,rounded=void 0!==_param_rounded&&_param_rounded,important=_param.important,disabled=_param.disabled,props=_object_without_properties(_param,["className","classNameWrapper","classNameLabel","label","errorMessage","maxLength","rounded","important","disabled"]);return(0,jsx_runtime.jsxs)("div",{className:(0,cn.cn)("flex flex-col w-full",classNameWrapper),children:[label&&(0,jsx_runtime.jsxs)("div",{className:(0,cn.cn)(classNameLabel||"block font-semibold text-sm text-dark pb-1.5"),children:[label,label&&important&&(0,jsx_runtime.jsx)("span",{className:(0,cn.cn)("after:content-['*'] text-error")})]}),(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("relative flex justify-between items-center w-full text-dark text-sm border border-[#D9DDE2]",disabled?"bg-black/10":"bg-white",rounded?"rounded-full":"rounded-lg",errorMessage&&"border-error focus:border-error focus:ring-0",className),children:(0,jsx_runtime.jsx)("textarea",_object_spread({rows:3,disabled,className:(0,cn.cn)("w-full bg-transparent p-2.5 px-3",rounded&&"rounded-full px-4",!disabled&&"cursor-pointer"),maxLength},props))}),errorMessage&&(0,jsx_runtime.jsx)(commons.QB,{className:"mt-2",label:errorMessage})]})};function input_textarea_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}InputTextarea.__docgenInfo={description:"",methods:[],displayName:"InputTextarea",props:{className:{required:!1,tsType:{name:"string"},description:""},classNameWrapper:{required:!1,tsType:{name:"string"},description:""},classNameLabel:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},important:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TextareaHTMLAttributes"]};const input_textarea_stories={title:"Components/Forms/Input Textarea",component:InputTextarea,tags:["autodocs"]};var Base=function(args){return(0,jsx_runtime.jsx)(InputTextarea,function input_textarea_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){input_textarea_stories_define_property(target,key,source[key])}))}return target}({},args))}.bind({});Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:"args => {\n  return <InputTextarea {...args} />;\n}",...Base.parameters?.docs?.source}}};const __namedExportsOrder=["Base"]}}]);