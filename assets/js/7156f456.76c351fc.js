"use strict";(self.webpackChunkpython_guts=self.webpackChunkpython_guts||[]).push([[7781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={tags:["\u0426\u0438\u043a\u043b\u044b","\u0423\u0441\u043b\u043e\u0432\u0438\u044f","for-else","while-else","enumerate"]},l="\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 else \u043a \u0446\u0438\u043a\u043b\u0430\u043c",i={unversionedId:"notes/basics/else-with-loops",id:"notes/basics/else-with-loops",title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 else \u043a \u0446\u0438\u043a\u043b\u0430\u043c",description:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b",source:"@site/docs/notes/basics/else-with-loops.md",sourceDirName:"notes/basics",slug:"/notes/basics/else-with-loops",permalink:"/python-guts/docs/notes/basics/else-with-loops",draft:!1,editUrl:"https://github.com/insaze/python-guts/tree/main/docs/notes/basics/else-with-loops.md",tags:[{label:"\u0426\u0438\u043a\u043b\u044b",permalink:"/python-guts/docs/tags/\u0446\u0438\u043a\u043b\u044b"},{label:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f",permalink:"/python-guts/docs/tags/\u0443\u0441\u043b\u043e\u0432\u0438\u044f"},{label:"for-else",permalink:"/python-guts/docs/tags/for-else"},{label:"while-else",permalink:"/python-guts/docs/tags/while-else"},{label:"enumerate",permalink:"/python-guts/docs/tags/enumerate"}],version:"current",frontMatter:{tags:["\u0426\u0438\u043a\u043b\u044b","\u0423\u0441\u043b\u043e\u0432\u0438\u044f","for-else","while-else","enumerate"]},sidebar:"tutorialSidebar",previous:{title:"\u0421\u043a\u0440\u044b\u0442\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 or \u0438 and",permalink:"/python-guts/docs/notes/basics/and-or-trick"},next:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043c\u0430\u0442\u0440\u0438\u0447\u043d\u043e\u0433\u043e \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/python-guts/docs/notes/basics/matmul-operator"}},s={},p=[{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0431\u043e\u0442\u044b",level:2},{value:"\u041a\u0440\u0438\u0442\u0438\u043a\u0430",id:"\u043a\u0440\u0438\u0442\u0438\u043a\u0430",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-else-\u043a-\u0446\u0438\u043a\u043b\u0430\u043c"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 else \u043a \u0446\u0438\u043a\u043b\u0430\u043c"),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0431\u043e\u0442\u044b"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"if"),", \u043d\u043e \u0435\u0449\u0435 \u0438 \u043a \u0446\u0438\u043a\u043b\u0430\u043c. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u044d\u0442\u043e \u0442\u0430\u043a: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0415\u0441\u043b\u0438 \u0446\u0438\u043a\u043b \u043d\u0435 \u0431\u044b\u043b \u043f\u0440\u0435\u0440\u0432\u0430\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"break"),", \u0442\u043e \u043e\u0442\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0431\u043b\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"else"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"arr = [1, 2, 3]\nto_find = int(input('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430: '))\n\nfor i, item in enumerate(arr):\n    if item == to_find:\n        print(f'\u042d\u043b\u0435\u043c\u0435\u043d\u0442 {to_find} \u0438\u043c\u0435\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 {i}')\n        break\nelse:\n    print(f'\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 {to_find} \u043d\u0435\u0442 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430: 2\n\u042d\u043b\u0435\u043c\u0435\u043d\u0442 2 \u0438\u043c\u0435\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430: 5\n\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 5 \u043d\u0435\u0442 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435\n")),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0441\u0447\u0438\u0442\u0430\u0442\u044c, \u0447\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0435 \u043a \u0446\u0438\u043a\u043b\u0443, \u0430 \u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"break"),". \u041a\u043e\u043c\u0443-\u0442\u043e \u0442\u0430\u043a \u043b\u0435\u0433\u0447\u0435 \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b)"),(0,a.kt)("p",null,"\u0417\u0430\u0447\u0430\u0441\u0442\u0443\u044e \u044d\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447 \u043f\u043e\u0438\u0441\u043a\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0438 \u043a\u043e\u0433\u0434\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0430\u0439\u0434\u0435\u043d \u0438 \u043a\u043e\u0433\u0434\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"while"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"else")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c-\u043e\u0447\u0435\u043d\u044c \u0440\u0435\u0434\u043a\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 99% \u0435\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0431\u044b\u0447\u043d\u044b\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"else"),"."),(0,a.kt)("h2",{id:"\u043a\u0440\u0438\u0442\u0438\u043a\u0430"},"\u041a\u0440\u0438\u0442\u0438\u043a\u0430"),(0,a.kt)("p",null,"\u041d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0443\u0434\u043e\u0431\u043d\u0430\u044f, \u0443 \u043d\u0435\u0435 \u0435\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u043e\u0432, \u0441\u0447\u0438\u0442\u0430\u044e\u0449\u0438\u0445, \u0447\u0442\u043e \u043e\u043d\u0430 \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442 \u0447\u0438\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0440\u0435\u0434\u043a\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"else"),", \u0442\u043e, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0432\u0430\u0441 \u0432 \u0437\u0430\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e. \u0415\u0441\u043b\u0438 \u0431\u044b \u0432\u044b \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437 \u0443\u0432\u0438\u0434\u0435\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u043a\u043e\u0434, \u043e \u0447\u0435\u043c \u0431\u044b \u0432\u044b \u043f\u043e\u0434\u0443\u043c\u0430\u043b\u0438?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"for x in range(3):\n    ...\nelse:\n    print('Done')\n")),(0,a.kt)("p",null,"\u041b\u043e\u0433\u0438\u0447\u043d\u0435\u0435 \u0431\u044b\u043b\u043e \u0431\u044b \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"nobreak"),". \u0422\u043e\u0433\u0434\u0430 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u043b\u0438\u0437\u043a\u043e \u0437\u043d\u0430\u043a\u043e\u043c \u0441 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u043e\u043c Python, \u044d\u0442\u0430 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0434\u0430\u0441\u0442 \u0435\u043c\u0443 \u0437\u043d\u0430\u0442\u044c, \u0447\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"Done")," \u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u043d\u0435 \u0431\u044b\u043b\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"break"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"for x in range(3):\n    ...\nnobreak:\n    print('Done')\n")),(0,a.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f. break and continue Statements, and else Clauses on Loops"))))}m.isMDXComponent=!0}}]);