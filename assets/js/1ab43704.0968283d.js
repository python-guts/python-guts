"use strict";(self.webpackChunkpython_guts=self.webpackChunkpython_guts||[]).push([[418],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=p(t),d=a,f=y["".concat(c,".").concat(d)]||y[d]||u[d]||o;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[y]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={tags:["\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c","\u041f\u043e\u0442\u043e\u043a\u0438","\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b","asyncio"]},s="\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0437 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439",i={unversionedId:"notes/threading-and-async/asyncify",id:"notes/threading-and-async/asyncify",title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0437 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439",description:"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0443\u044e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u043d\u0435\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0435\u0439. \u0421\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430 to_thread \u043c\u043e\u0434\u0443\u043b\u044f asyncio.",source:"@site/docs/notes/threading-and-async/asyncify.md",sourceDirName:"notes/threading-and-async",slug:"/notes/threading-and-async/asyncify",permalink:"/python-guts/docs/notes/threading-and-async/asyncify",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/threading-and-async/asyncify.md",tags:[{label:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c",permalink:"/python-guts/docs/tags/\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c"},{label:"\u041f\u043e\u0442\u043e\u043a\u0438",permalink:"/python-guts/docs/tags/\u043f\u043e\u0442\u043e\u043a\u0438"},{label:"\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b",permalink:"/python-guts/docs/tags/\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b"},{label:"asyncio",permalink:"/python-guts/docs/tags/asyncio"}],version:"current",frontMatter:{tags:["\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c","\u041f\u043e\u0442\u043e\u043a\u0438","\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b","asyncio"]},sidebar:"tutorialSidebar",previous:{title:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 aiofiles",permalink:"/python-guts/docs/notes/threading-and-async/aiofiles"},next:{title:"\u0417\u0430\u0434\u0430\u0447\u0438",permalink:"/python-guts/docs/tasks/"}},c={},p=[],l={toc:p},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(y,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439-\u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u0438\u0437-\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0437 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439"),(0,a.kt)("p",null,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0443\u044e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u043d\u0435\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0435\u0439. \u0421\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"to_thread")," \u043c\u043e\u0434\u0443\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"asyncio"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\n\n\ndef asyncify(func):\n    async def wrapper(*args, **kwargs):\n        return await asyncio.to_thread(func, *args, **kwargs)\n    return wrapper\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\nimport time\n\n\ndef asyncify(func):\n    async def wrapper(*args, **kwargs):\n        return await asyncio.to_thread(func, *args, **kwargs)\n\n    return wrapper\n\n\ndef sync_sleep():\n    time.sleep(2)\n\n\nasync_sleep = asyncify(sync_sleep)\n\n\nasync def main():\n    start = time.time()\n    await asyncio.gather(*[async_sleep() for _ in range(5)])\n    print(time.time() - start)\n\n\nif __name__ == '__main__':\n    asyncio.run(main())  # 2.0055196285247803\n")))}u.isMDXComponent=!0}}]);