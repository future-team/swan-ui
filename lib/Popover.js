!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.swan=t():e.swan=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=144)}({0:function(e,t){e.exports=function(e,t,n,r,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),r&&(c._scopeId=r);var p;if(o?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=p):n&&(p=n),p){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(e,t){return p.call(t),d(e,t)}:c.beforeCreate=d?[].concat(d,p):[p]}return{esModule:i,exports:a,options:c}}},11:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},118:function(e,t,n){var r=n(90);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(12)("02f02f72",r,!1)},12:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(g){var i=f++;r=l||(l=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=n(15),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=p(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=p(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},144:function(e,t,n){e.exports=n(49)},15:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],c=i[2],p=i[3],u={id:e+":"+o,css:s,media:c,sourceMap:p};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},49:function(e,t,n){"use strict";function r(e){s||n(118)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(74),i=n.n(o),a=n(94),s=!1,c=n(0),p=r,u=c(i.a,a.a,p,"data-v-0adf58ea",null);u.options.__file="src/modules/popover/Popover.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] Popover.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"SwPopover",data:function(){return{position:{},visible:!1}},methods:{handleClick:function(){this.visible=!this.visible},handleDocumentClick:function(){this.visible=!1}},watch:{visible:function(e){var t=this;e&&this.$nextTick(function(){t.targetWidth=t.$refs.targetElem.clientWidth,t.targetHeight=t.$refs.targetElem.clientHeight,t.arrowWidth=t.$refs.arrowElem.clientWidth,t.arrowHeight=t.$refs.arrowElem.clientHeight,t.contentWidth=t.$refs.contentElem.clientWidth,t.contentHeight=t.$refs.contentElem.clientHeight;var e={},n={};switch(t.placement){case"bottom":e={top:t.targetHeight+t.distance+"px",left:t.targetWidth/2+"px"},n={top:t.targetHeight+t.arrowHeight/2+t.distance+"px",left:0};break;case"top":e={top:-t.distance+"px",left:t.targetWidth/2+"px"},n={top:-(t.contentHeight+t.arrowHeight/2+t.distance)+"px",left:0};break;case"left":e={top:t.targetHeight/2+"px",left:-t.distance+"px"},n={top:-(t.contentHeight-t.targetHeight)/2+"px",left:-(t.contentWidth+t.arrowWidth+t.distance)+"px"};break;case"right":e={top:t.targetHeight/2+"px",left:t.targetWidth+t.arrowWidth/2+t.distance+"px"},n={top:-(t.contentHeight-t.targetHeight)/2+"px",left:t.targetWidth+t.arrowWidth+t.distance+"px"};break;default:e={}}t.position={arrowPosition:e,contentPosition:n}})}},mounted:function(){document.addEventListener("click",this.handleDocumentClick)},props:{classPrefix:{type:String,default:"popover"},placement:{type:String,default:"bottom"},distance:{type:Number,default:5},content:{type:String,default:""}}}},90:function(e,t,n){t=e.exports=n(11)(void 0),t.push([e.i,"\n.ph-popover-main[data-v-0adf58ea]{\n    padding: 0;\n}\n.ph-popover-right .ph-popover-main[data-v-0adf58ea] {\n     margin-left:0;\n}\n",""])},94:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative",display:"inline-block"}},[n("div",{class:"ph-popover ph-popover-"+e.placement+" show"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],ref:"arrowElem",staticClass:"ph-popover-arrow",style:e.position.arrowPosition}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],ref:"contentElem",staticClass:"ph-popover-main",style:e.position.contentPosition},[n("div",{staticClass:"ph-popover-content"},[e._t("content",[n("div",{staticClass:"ph-popover-text",staticStyle:{"white-space":"nowrap"}},[e._v(e._s(e.content))])])],2)])]),e._v(" "),n("div",{ref:"targetElem",on:{click:function(t){t.stopPropagation(),e.handleClick(t)}}},[e._t("default")],2)])},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};t.a=i}})});