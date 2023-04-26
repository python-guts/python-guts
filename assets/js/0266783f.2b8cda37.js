"use strict";(self.webpackChunkpython_guts=self.webpackChunkpython_guts||[]).push([[7569],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={tags:["\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c","\u0424\u0430\u0439\u043b\u044b","asyncio","aiofiles"]},l="\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 aiofiles",o={unversionedId:"notes/threading-and-async/aiofiles",id:"notes/threading-and-async/aiofiles",title:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 aiofiles",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0435\u0439, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043f\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u0441 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043f\u043e\u0442\u0435\u0440\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438.",source:"@site/docs/notes/threading-and-async/aiofiles.md",sourceDirName:"notes/threading-and-async",slug:"/notes/threading-and-async/aiofiles",permalink:"/python-guts/notes/threading-and-async/aiofiles",draft:!1,editUrl:"https://github.com/insaze/python-guts/tree/main/docs/notes/threading-and-async/aiofiles.md",tags:[{label:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c",permalink:"/python-guts/tags/\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c"},{label:"\u0424\u0430\u0439\u043b\u044b",permalink:"/python-guts/tags/\u0444\u0430\u0439\u043b\u044b"},{label:"asyncio",permalink:"/python-guts/tags/asyncio"},{label:"aiofiles",permalink:"/python-guts/tags/aiofiles"}],version:"current",frontMatter:{tags:["\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c","\u0424\u0430\u0439\u043b\u044b","asyncio","aiofiles"]},sidebar:"tutorialSidebar",previous:{title:"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",permalink:"/python-guts/notes/threading-and-async/"},next:{title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440",permalink:"/python-guts/notes/threading-and-async/async-context-manager"}},s={},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430-aiofiles"},"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 aiofiles"),(0,i.kt)("p",null,"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0435\u0439, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043f\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u0441 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043f\u043e\u0442\u0435\u0440\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. "),(0,i.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Tinche/aiofiles"},"aiofiles"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0441\u0435 \u044d\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0435\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0438\u043c\u0438 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u043c\u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"."),(0,i.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip install aiofiles\n")),(0,i.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0444\u0430\u0439\u043b\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"aiofiles.open()"),". \u0414\u0430\u043b\u0435\u0435 \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0444\u0430\u0439\u043b\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0440\u0443\u0442\u0438\u043d:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"readline"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"readlines"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"readable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"write"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"writelines"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"writable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"truncate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"close")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"seek"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tell")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fileno")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flush")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isatty"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import aiofiles\nimport asyncio\n\n\nasync def main():\n    async with aiofiles.open("hello.txt", "w") as file:\n        await file.write("Hello\\nworld!")\n\n    async with aiofiles.open("hello.txt", "r") as file:\n        content = await file.read()\n        print(content)\n        await file.seek(0)\n\n        async for line in file:\n            print("-", line.rstrip("\\n"))\n\n        print(await file.tell())\n\n\nif __name__ == \'__main__\':\n    asyncio.run(main())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Hello\nworld!\n- Hello\n- world!\n12\n")))}d.isMDXComponent=!0}}]);