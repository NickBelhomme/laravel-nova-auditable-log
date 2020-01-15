!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e){t.exports=function(t,e,r,n,a,o){var i,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,s=t.default);var u,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId=a),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(t,e){return u.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:i,exports:s,options:l}}},function(t,e,r){t.exports=r(6)},function(t,e,r){r(3),t.exports=r(12)},function(t,e,r){Nova.booting(function(t,e,n){t.component("auditable-log",r(4))})},function(t,e,r){var n=r(0)(r(5),r(11),!1,null,null,null);t.exports=n.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),a=r.n(n),o=r(8),i=r.n(o);e.default={props:["resourceName","resourceId","field"],components:{RestoreAuditModal:i.a},data:function(){return{audits:[],displayAudits:!1,pagination:{},restore:null,parentFields:[],canRestore:!1}},mounted:function(){!0===this.displayAudits&&this.fetchAudits(),this.parentFields=function(t){var e={};t.filter(function(t){return""!==t.attribute}).forEach(function(t){if(""!==t.attribute){var r=t.attribute,n=t.value,a=t.name;e[r]={value:n,label:a}}}),e.length!==t.length&&t.filter(function(t){return""===t.attribute&&void 0!==t.dependencies&&t.dependencies.length===t.dependencies.filter(function(t){return t.satisfied}).length}).forEach(function(t){t.fields.forEach(function(t){var r=t.attribute,n=t.value,a=t.name;e[r]={value:n,label:a}})});return e}(this.$parent.$children.filter(function(t){return"panel"===t.$vnode.componentOptions.tag})[0].fields)},methods:{showAndFetch:function(){this.displayAudits=!0,this.fetchAudits()},fetchAudits:function(){var t,e=(t=a.a.mark(function t(){var e,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n||(n="/nova-vendor/auditable-log/audits/"+this.resourceName+"/"+this.resourceId),t.prev=1,t.next=4,Nova.request().get(n);case 4:e=t.sent,r=e.data,this.audits=r.audits.data,this.pagination=r.audits,this.canRestore=r.restore,t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}},t,this,[[1,11]])}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(a,o){try{var i=e[a](o),s=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}(),formatData:function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push({name:r,value:t[r]});return e},showRestoreAudit:function(t){this.restore=t},restored:function(t){var e=this;t.forEach(function(t){e.parentFields[t.key].value=t.value}),this.fetchAudits()}}}},function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(7),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},_={};_[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(N([])));g&&g!==n&&a.call(g,i)&&(_=g);var y=C.prototype=b.prototype=Object.create(_);k.prototype=y.constructor=C,C.constructor=k,C[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},A(E.prototype),E.prototype[s]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var a=new E(x(t,e,r,n));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},A(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return s.type="throw",s.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;R(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function x(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n=d;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=w(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function k(){}function C(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,i){var s=w(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},i)}i(s.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=w(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){var n=r(0)(r(9),r(10),!1,null,null,null);t.exports=n.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),a=r.n(n);e.default={props:["fields","audit","resourceName","resourceId"],data:function(){return{restoreIds:[],selectAll:!1}},methods:{handleClose:function(){this.$emit("close")},handleConfirm:function(){var t,e=(t=a.a.mark(function t(){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.restoreIds.length>0)){t.next=6;break}return t.next=3,Nova.request().post("/nova-vendor/auditable-log/audits/"+this.resourceName+"/"+this.resourceId+"/"+this.audit.id,{restore:this.restoreIds});case 3:e=t.sent,r=this.restoreIds.map(function(t){return{key:t,value:e.data.record[t]}}),this.$emit("restored",r);case 6:this.$emit("close");case 7:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(a,o){try{var i=e[a](o),s=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}(),toggleSelectAll:function(){this.allSelected?this.restoreIds=[]:this.restoreIds=this.comparison.map(function(t){return t.key})}},computed:{allSelected:function(){return this.comparison.length===this.restoreIds.length},comparison:function(){var t=this;return Object.keys(this.audit.new_values).map(function(e){return void 0===t.fields[e]?null:t.fields[e].value==t.audit.new_values[e]?null:{key:e,label:t.fields[e].label,current:t.fields[e].value,restore:t.audit.new_values[e]}}).filter(function(t){return null!==t})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("modal",{on:{"modal-close":t.handleClose},scopedSlots:t._u([{key:"default",fn:function(e){return r("form",{staticClass:"bg-white rounded-lg shadow-lg overflow-hidden",staticStyle:{width:"750px"},on:{submit:function(e){return e.preventDefault(),t.handleConfirm(e)}}},[t._t("default",[r("div",{staticClass:"p-8"},[r("heading",{staticClass:"mb-6",attrs:{level:2}},[t._v("\n                    "+t._s(t.__("Restore audit"))+"\n                ")]),t._v(" "),r("table",{staticClass:"table w-full mt-4"},[r("thead",[r("th",{staticStyle:{"max-width":"20px"}},[r("checkbox",{attrs:{checked:t.allSelected},on:{input:t.toggleSelectAll}})],1),t._v(" "),r("th",[t._v("\n                        "+t._s(t.__("Field"))+"\n                    ")]),t._v(" "),r("th",[t._v("\n                        "+t._s(t.__("Current"))+"\n                    ")]),t._v(" "),r("th",[t._v("\n                        "+t._s(t.__("Restore to"))+"\n                    ")])]),t._v(" "),r("tbody",[t._l(t.comparison,function(e){return r("tr",[r("td",{staticClass:"text-center",staticStyle:{"max-width":"20px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.restoreIds,expression:"restoreIds"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{value:e.key,checked:Array.isArray(t.restoreIds)?t._i(t.restoreIds,e.key)>-1:t.restoreIds},on:{change:function(r){var n=t.restoreIds,a=r.target,o=!!a.checked;if(Array.isArray(n)){var i=e.key,s=t._i(n,i);a.checked?s<0&&(t.restoreIds=n.concat([i])):s>-1&&(t.restoreIds=n.slice(0,s).concat(n.slice(s+1)))}else t.restoreIds=o}}})]),t._v(" "),r("td",[t._v(t._s(e.label))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(t._s(e.current))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(t._s(e.restore))])])}),t._v(" "),0==t.comparison.length?r("tr",[r("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v("\n                            "+t._s(t.__("No changes"))+"\n                        ")])]):t._e()],2)])],1)]),t._v(" "),r("div",{staticClass:"bg-30 px-6 py-3 flex"},[r("div",{staticClass:"ml-auto"},[r("button",{staticClass:"btn text-80 font-normal h-9 px-3 mr-3 btn-link",attrs:{type:"button","data-testid":"cancel-button",dusk:"cancel-delete-button"},on:{click:function(e){return e.preventDefault(),t.handleClose(e)}}},[t._v("\n                    "+t._s(t.__("Cancel"))+"\n                ")]),t._v(" "),r("button",{ref:"confirmButton",staticClass:"btn btn-default btn-danger",attrs:{id:"confirm-delete-button","data-testid":"confirm-button",type:"submit"}},[t._v("\n                    "+t._s(t.__("Restore"))+"\n                ")])])])],2)}}],null,!0)})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("hr",{staticClass:"border-t-2 border-50 my-11"}),t._v(" "),t.displayAudits?r("div",[r("h2",{staticClass:"mb-3 text-90 font-normal text-2xl"},[t._v(t._s(t.__("Audit Log")))]),t._v(" "),r("div",{staticClass:"card"},[r("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[r("thead",[r("tr",[r("th"),t._v(" "),r("th",{staticClass:"text-left"},[r("span",[t._v(" "+t._s(t.__("User"))+" ")])]),t._v(" "),r("th",{staticClass:"text-left"},[r("span",[t._v(" "+t._s(t.__("Event"))+" ")])]),t._v(" "),r("th",{staticClass:"text-left"},[r("span",[t._v(" "+t._s(t.__("Date/Time"))+" ")])]),t._v(" "),r("th",{staticClass:"text-left"},[r("span",[t._v(" "+t._s(t.__("Old Values"))+" ")])]),t._v(" "),r("th",{staticClass:"text-left"},[r("span",[t._v(" "+t._s(t.__("New Values"))+" ")])]),t._v(" "),t.canRestore?r("th"):t._e()])]),t._v(" "),r("tbody",t._l(t.audits,function(e){return r("tr",[r("td",["created"===e.event?r("svg",{staticClass:"h-6 text-60 svg-inline--fa fa-save fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}})]):t._e(),t._v(" "),"updated"===e.event?r("svg",{staticClass:"h-6 text-60 svg-inline--fa fa-save fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}})]):t._e(),t._v(" "),"deleted"===e.event?r("svg",{staticClass:"h-6 text-60 svg-inline--fa fa-trash-alt fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{fill:"currentColor",d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}})]):t._e()]),t._v(" "),r("td",[t._v("\n                        "+t._s(e.user?e.user.name:t.__("console"))+"\n                    ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(e.event)+"\n                    ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(e.created_at)+"\n                    ")]),t._v(" "),r("td",t._l(t.formatData(e.old_values),function(e){return r("div",{staticClass:"my-2"},[r("span",{staticClass:"inline-block bg-30 p-1 rounded-sm mr-2"},[t._v(t._s(e.name))]),t._v(" "+t._s(e.value)+"\n                        ")])}),0),t._v(" "),r("td",t._l(t.formatData(e.new_values),function(e){return r("div",{staticClass:"my-2"},[r("span",{staticClass:"inline-block bg-30 p-1 rounded-sm mr-2"},[t._v(t._s(e.name))]),t._v(" "+t._s(e.value)+"\n                        ")])}),0),t._v(" "),t.canRestore?r("td",{staticClass:"text-center"},[r("svg",{staticStyle:{"max-width":"20px"},attrs:{"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape",viewBox:"0 -256 1792 1792",id:"svg3447",version:"1.1","inkscape:version":"0.48.3.1 r9886",width:"100%",height:"100%","sodipodi:docname":"undo_font_awesome.svg"},on:{click:function(r){return t.showRestoreAudit(e)}}},[r("defs",{attrs:{id:"defs3455"}}),t._v(" "),r("sodipodi:namedview",{attrs:{pagecolor:"#ffffff",bordercolor:"#666666",borderopacity:"1",objecttolerance:"10",gridtolerance:"10",guidetolerance:"10","inkscape:pageopacity":"0","inkscape:pageshadow":"2","inkscape:window-width":"640","inkscape:window-height":"480",id:"namedview3453",showgrid:"false","inkscape:zoom":"0.13169643","inkscape:cx":"896","inkscape:cy":"896","inkscape:window-x":"0","inkscape:window-y":"25","inkscape:window-maximized":"0","inkscape:current-layer":"svg3447"}}),t._v(" "),r("g",{attrs:{transform:"matrix(1,0,0,-1,113.89831,1262.6441)",id:"g3449"}},[r("path",{staticStyle:{fill:"currentColor"},attrs:{d:"M 1536,640 Q 1536,484 1475,342 1414,200 1311,97 1208,-6 1066,-67 924,-128 768,-128 589,-128 431.5,-52 274,24 165.5,161 57,298 18,473 q -3,14 7,27 9,12 25,12 h 199 q 23,0 30,-23 Q 329,327 464,227.5 599,128 768,128 872,128 966.5,168.5 1061,209 1130,278 q 69,69 109.5,163.5 40.5,94.5 40.5,198.5 0,104 -40.5,198.5 Q 1199,933 1130,1002 1061,1071 966.5,1111.5 872,1152 768,1152 670,1152 580,1116.5 490,1081 420,1015 L 557,877 q 31,-30 14,-69 -17,-40 -59,-40 H 64 Q 38,768 19,787 0,806 0,832 v 448 q 0,42 40,59 39,17 69,-14 l 130,-129 q 107,101 244.5,156.5 137.5,55.5 284.5,55.5 156,0 298,-61 142,-61 245,-164 103,-103 164,-245 61,-142 61,-298 z",id:"path3451","inkscape:connector-curvature":"0"}})])],1)]):t._e()])}),0)]),t._v(" "),r("div",{staticClass:"bg-20 rounded-b",attrs:{"per-page":"5","resource-count-label":"1-3 of 3","current-resource-count":"3","all-matching-resource-count":"3"}},[r("nav",{staticClass:"flex justify-between items-center"},[r("button",{staticClass:"btn btn-link py-3 px-4 text-80",class:{"opacity-50":null===t.pagination.prev_page_url,"text-primary":null!==t.pagination.prev_page_url},attrs:{disabled:null===t.pagination.prev_page_url,rel:"prev",dusk:"previous"},on:{click:function(e){return t.fetchAudits(t.pagination.prev_page_url)}}},[t._v("\n                        "+t._s(t.__("Previous"))+"\n                    ")]),t._v(" "),r("span",{staticClass:"text-sm text-80 px-4"},[t._v("\n                "+t._s(t.pagination.from)+"-"+t._s(t.pagination.to)+" of "+t._s(t.pagination.total)+"\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-link py-3 px-4 text-80",class:{"opacity-50":null===t.pagination.next_page_url,"text-primary":null!==t.pagination.next_page_url},attrs:{disabled:null===t.pagination.next_page_url,rel:"next",dusk:"next"},on:{click:function(e){return t.fetchAudits(t.pagination.next_page_url)}}},[t._v("\n                        "+t._s(t.__("Next"))+"\n                    ")])])])])]):t._e(),t._v(" "),!1===t.displayAudits?r("button",{staticClass:"btn btn-default btn-primary",on:{click:function(e){return e.preventDefault(),t.showAndFetch(e)}}},[t._v("\n        "+t._s(t.__("View Audit Log"))+"\n    ")]):t._e(),t._v(" "),null!==t.restore?r("restore-audit-modal",{attrs:{fields:t.parentFields,resourceName:t.resourceName,resourceId:t.resourceId,audit:t.restore},on:{close:function(e){t.restore=null},restored:t.restored}}):t._e()],1)},staticRenderFns:[]}},function(t,e){}]);