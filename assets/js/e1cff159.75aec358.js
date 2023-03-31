"use strict";(self.webpackChunkpython_guts=self.webpackChunkpython_guts||[]).push([[980],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={tags:["\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b","filter","map","sum","\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"]},s="\u0426\u0435\u043f\u043e\u0447\u043a\u0430 \u043b\u0435\u043d\u0438\u0432\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439",l={unversionedId:"notes/functional-programming/lazy-eval-chain",id:"notes/functional-programming/lazy-eval-chain",title:"\u0426\u0435\u043f\u043e\u0447\u043a\u0430 \u043b\u0435\u043d\u0438\u0432\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f filter, map \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0430\u043c\u044f\u0442\u044c \u043f\u0443\u0442\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u043b\u0435\u043d\u0438\u0432\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439:",source:"@site/docs/notes/functional-programming/lazy-eval-chain.md",sourceDirName:"notes/functional-programming",slug:"/notes/functional-programming/lazy-eval-chain",permalink:"/python-guts/docs/notes/functional-programming/lazy-eval-chain",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/functional-programming/lazy-eval-chain.md",tags:[{label:"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b",permalink:"/python-guts/docs/tags/\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b"},{label:"filter",permalink:"/python-guts/docs/tags/filter"},{label:"map",permalink:"/python-guts/docs/tags/map"},{label:"sum",permalink:"/python-guts/docs/tags/sum"},{label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",permalink:"/python-guts/docs/tags/\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}],version:"current",frontMatter:{tags:["\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b","filter","map","sum","\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"]},sidebar:"tutorialSidebar",previous:{title:"\u041c\u043e\u0434\u0443\u043b\u044c functools",permalink:"/python-guts/docs/notes/functional-programming/functools"},next:{title:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/python-guts/docs/notes/functional-programming/special-parameters"}},i={},u=[],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0446\u0435\u043f\u043e\u0447\u043a\u0430-\u043b\u0435\u043d\u0438\u0432\u044b\u0445-\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439"},"\u0426\u0435\u043f\u043e\u0447\u043a\u0430 \u043b\u0435\u043d\u0438\u0432\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439"),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0430\u043c\u044f\u0442\u044c \u043f\u0443\u0442\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u043b\u0435\u043d\u0438\u0432\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"numbers = range(10)\nodd_numbers = filter(lambda x: x % 2, numbers)\nsquared_numbers = map(lambda x: x ** 2, odd_numbers)\nresult = sum(squared_numbers)\nprint(result)\n")),(0,a.kt)("p",null,"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u043c \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u043f\u0438\u0441\u043a\u0438 \u0434\u043b\u044f \u043d\u0435\u0447\u0435\u0442\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u0438 \u0434\u043b\u044f \u0438\u0445 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043e\u0432. \u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"sum()"),", \u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043f\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043d\u043e. \u0412 \u044d\u0442\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"print"),"'\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def is_odd(number):\n    print('is_odd', number)\n    return number % 2\n\n\ndef square(number):\n    print('square', number)\n    return number ** 2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"numbers = range(10)\nodd_numbers = filter(is_odd, numbers)\nsquared_numbers = map(square, odd_numbers)\nresult = sum(squared_numbers)\nprint(result)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"is_odd 0\nis_odd 1\nsquare 1\nis_odd 2\nis_odd 3\nsquare 3\nis_odd 4\nis_odd 5\nsquare 5\nis_odd 6\nis_odd 7\nsquare 7\nis_odd 8\nis_odd 9\nsquare 9\n165\n")),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043c\u044b \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u043c \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u043f\u0438\u0441\u043a\u0438, \u0430 \u0432\u0441\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043f\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043d\u043e. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0430\u043c\u044f\u0442\u044c \u0438 \u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430."))}m.isMDXComponent=!0}}]);