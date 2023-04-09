"use strict";(self.webpackChunkpython_guts=self.webpackChunkpython_guts||[]).push([[1365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,_=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(_,l(l({ref:t},p),{},{components:n})):r.createElement(_,l({ref:t},p))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={tags:["\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445","\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b","\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c","\u041c\u0430\u0441\u0441\u0438\u0432\u044b","\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","\u041f\u0430\u043c\u044f\u0442\u044c"]},l="\u041c\u043e\u0434\u0443\u043b\u044c array",s={unversionedId:"notes/data-structures/array",id:"notes/data-structures/array",title:"\u041c\u043e\u0434\u0443\u043b\u044c array",description:"\u0414\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0438\u0437 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 array, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0435\u0434\u0435\u0442 \u0441\u0435\u0431\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a,",source:"@site/docs/notes/data-structures/array.md",sourceDirName:"notes/data-structures",slug:"/notes/data-structures/array",permalink:"/python-guts/docs/notes/data-structures/array",draft:!1,editUrl:"https://github.com/insaze/python-guts/tree/main/docs/notes/data-structures/array.md",tags:[{label:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/python-guts/docs/tags/\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b-\u0434\u0430\u043d\u043d\u044b\u0445"},{label:"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b",permalink:"/python-guts/docs/tags/\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0435-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b"},{label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",permalink:"/python-guts/docs/tags/\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{label:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b",permalink:"/python-guts/docs/tags/\u043c\u0430\u0441\u0441\u0438\u0432\u044b"},{label:"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",permalink:"/python-guts/docs/tags/\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},{label:"\u041f\u0430\u043c\u044f\u0442\u044c",permalink:"/python-guts/docs/tags/\u043f\u0430\u043c\u044f\u0442\u044c"}],version:"current",frontMatter:{tags:["\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445","\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b","\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c","\u041c\u0430\u0441\u0441\u0438\u0432\u044b","\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","\u041f\u0430\u043c\u044f\u0442\u044c"]},sidebar:"tutorialSidebar",previous:{title:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/python-guts/docs/notes/data-structures/"},next:{title:"\u041f\u043e\u0438\u0441\u043a \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0438\u043c\u0435\u043d",permalink:"/python-guts/docs/notes/data-structures/namespace-lookup"}},o={},u=[{value:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",level:2},{value:"\u041a\u043e\u043f\u0430\u0435\u043c\u0441\u044f \u0432 \u043a\u0438\u0448\u043a\u0430\u0445",id:"\u043a\u043e\u043f\u0430\u0435\u043c\u0441\u044f-\u0432-\u043a\u0438\u0448\u043a\u0430\u0445",level:2},{value:"\u0412\u044b\u0432\u043e\u0434\u044b",id:"\u0432\u044b\u0432\u043e\u0434\u044b",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043c\u043e\u0434\u0443\u043b\u044c-array"},"\u041c\u043e\u0434\u0443\u043b\u044c array"),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0438\u0437 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0435\u0434\u0435\u0442 \u0441\u0435\u0431\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a,\n\u043e\u0434\u043d\u0430\u043a\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c."),(0,a.kt)("p",null,"\u041a\u0430\u043a\u0438\u0435 \u0442\u0438\u043f\u044b \u043c\u043e\u0436\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'b' - signed char (int, 1 \u0431\u0430\u0439\u0442)"),(0,a.kt)("li",{parentName:"ul"},"'B' - unsigned char (int, 1 \u0431\u0430\u0439\u0442)"),(0,a.kt)("li",{parentName:"ul"},"'u' - wchar_t (\u0421\u0438\u043c\u0432\u043e\u043b Unicode, 2 \u0438\u043b\u0438 4 \u0431\u0430\u0439\u0442\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b)"),(0,a.kt)("li",{parentName:"ul"},"'h' - signed short (int, 2 \u0431\u0430\u0439\u0442\u0430)"),(0,a.kt)("li",{parentName:"ul"},"'H' - unsigned short (int, 2 \u0431\u0430\u0439\u0442\u0430)"),(0,a.kt)("li",{parentName:"ul"},"'i' - signed int (int, 2 \u0431\u0430\u0439\u0442\u0430)"),(0,a.kt)("li",{parentName:"ul"},"'I' - unsigned int (int, 2 \u0431\u0430\u0439\u0442\u0430)"),(0,a.kt)("li",{parentName:"ul"},"'l' - signed long (int, 4 \u0431\u0430\u0439\u0442\u0430)"),(0,a.kt)("li",{parentName:"ul"},"'L' - unsigned long (int, 4 \u0431\u0430\u0439\u0442\u0430)"),(0,a.kt)("li",{parentName:"ul"},"'q' - signed long long (int, 8 \u0431\u0430\u0439\u0442)"),(0,a.kt)("li",{parentName:"ul"},"'Q' - unsigned long long (int, 8 \u0431\u0430\u0439\u0442)"),(0,a.kt)("li",{parentName:"ul"},"'f' - float (float, 4 \u0431\u0430\u0439\u0442)"),(0,a.kt)("li",{parentName:"ul"},"'d' - double (float, 8 \u0431\u0430\u0439\u0442)")),(0,a.kt)("h2",{id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"},"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0438 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u0434\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from array import array\nfrom time import perf_counter\n\n\nclass Timer:\n    def __init__(self, message: str):\n        self.message = message\n        self.start = None\n        self.duration = None\n\n    def __enter__(self):\n        self.start = perf_counter()\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.duration = perf_counter() - self.start\n\n\ndata: dict[str, list] = {}\nN = 10_000\n\nlst_timer = Timer("list")\narr_timer = Timer("array")\n\nwith lst_timer:\n    lst = list(range(N))\nwith arr_timer:\n    arr = array("H", range(N))\ndata["\u0412\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"] = [lst_timer.duration, arr_timer.duration]\n\ndata["\u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"] = [lst.__sizeof__(), arr.__sizeof__()]\n\nwith lst_timer:\n    lst.append(N)\nwith arr_timer:\n    arr.append(N)\ndata["\u0412\u0440\u0435\u043c\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f"] = [lst_timer.duration, arr_timer.duration]\n\nwith lst_timer:\n    lst.insert(0, 0)\nwith arr_timer:\n    arr.insert(0, 0)\ndata["\u0412\u0440\u0435\u043c\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0432 \u043d\u0430\u0447\u0430\u043b\u043e"] = [lst_timer.duration, arr_timer.duration]\n\nwith lst_timer:\n    lst.remove(0)\nwith arr_timer:\n    arr.remove(0)\ndata["\u0412\u0440\u0435\u043c\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"] = [lst_timer.duration, arr_timer.duration]\n\nwith lst_timer:\n    _ = N / 2 in lst\nwith arr_timer:\n    _ = N / 2 in arr\ndata["\u0412\u0440\u0435\u043c\u044f \u043f\u043e\u0438\u0441\u043a\u0430"] = [lst_timer.duration, arr_timer.duration]\n\nwith lst_timer:\n    for _ in lst:\n        ...\nwith arr_timer:\n    for _ in arr:\n        ...\ndata["\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0445\u043e\u0434\u0430"] = [lst_timer.duration, arr_timer.duration]\n\nwith lst_timer:\n    _ = lst[N // 2]\nwith arr_timer:\n    _ = arr[N // 2]\ndata["\u0412\u0440\u0435\u043c\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0438"] = [lst_timer.duration, arr_timer.duration]\n\nheader = "{:<30}{:^8}{:^8}{:^8}{:^8}"\nrow = "{:<30}{:^8.1e}{:^8.1e}{:^8}{:^8.1f}"\n\nprint(header.format("", "list", "array", "winner", "ratio"))\nfor title, (lst_value, arr_value) in data.items():\n    worst, best = max(lst_value, arr_value), min(lst_value, arr_value)\n    ratio = worst / best\n    winner = \'array\' if best == arr_value else \'list\'\n    print(row.format(title, lst_value, arr_value, winner, ratio))\n')),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"                                list   array   winner  ratio  \n\u0412\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438           2.1e-04 4.9e-04   list    2.4   \n\u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b  8.0e+04 2.0e+04  array    4.0   \n\u0412\u0440\u0435\u043c\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f              3.5e-05 7.6e-07  array    45.4  \n\u0412\u0440\u0435\u043c\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0432 \u043d\u0430\u0447\u0430\u043b\u043e        3.4e-06 4.9e-06   list    1.4   \n\u0412\u0440\u0435\u043c\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f                1.6e-06 8.1e-07  array    1.9   \n\u0412\u0440\u0435\u043c\u044f \u043f\u043e\u0438\u0441\u043a\u0430                  7.4e-05 1.2e-04   list    1.7   \n\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0445\u043e\u0434\u0430                 1.6e-04 2.1e-04   list    1.3   \n\u0412\u0440\u0435\u043c\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0438              4.8e-07 5.9e-07   list    1.2 \n")),(0,a.kt)("p",null,"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0432\u0438\u0434\u0435\u0442\u044c, ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," \u0432\u044b\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0443 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f. "),(0,a.kt)("h2",{id:"\u043a\u043e\u043f\u0430\u0435\u043c\u0441\u044f-\u0432-\u043a\u0438\u0448\u043a\u0430\u0445"},"\u041a\u043e\u043f\u0430\u0435\u043c\u0441\u044f \u0432 \u043a\u0438\u0448\u043a\u0430\u0445"),(0,a.kt)("p",null,"\u041c\u0435\u043d\u044f \u0443\u0434\u0438\u0432\u0438\u043b\u043e \u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 - ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," \u0432 30-60 \u0440\u0430\u0437 \u0431\u044b\u043b \u0431\u044b\u0441\u0442\u0440\u0435\u0435. \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static PyObject *\narray_array_append(arrayobject *self, PyObject *v)\n{\n    return ins(self, Py_SIZE(self), v);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static PyObject *\nins(arrayobject *self, Py_ssize_t where, PyObject *v)\n{\n    if (ins1(self, where, v) != 0)\n        return NULL;\n    Py_RETURN_NONE;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static int\nins1(arrayobject *self, Py_ssize_t where, PyObject *v)\n{\n    char *items;\n    Py_ssize_t n = Py_SIZE(self);\n    if (v == NULL) {\n        PyErr_BadInternalCall();\n        return -1;\n    }\n    if ((*self->ob_descr->setitem)(self, -1, v) < 0)\n        return -1;\n\n    if (array_resize(self, n+1) == -1)\n        return -1;\n    items = self->ob_item;\n    if (where < 0) {\n        where += n;\n        if (where < 0)\n            where = 0;\n    }\n    if (where > n)\n        where = n;\n    /* appends don't need to call memmove() */\n    if (where != n)\n        memmove(items + (where+1)*self->ob_descr->itemsize,\n            items + where*self->ob_descr->itemsize,\n            (n-where)*self->ob_descr->itemsize);\n    return (*self->ob_descr->setitem)(self, where, v);\n}\n")),(0,a.kt)("p",null,"\u0421\u0440\u0430\u0432\u043d\u0438\u043c \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static PyObject *\nlist_append(PyListObject *self, PyObject *object)\n{\n    if (_PyList_AppendTakeRef(self, Py_NewRef(object)) < 0) {\n        return NULL;\n    }\n    Py_RETURN_NONE;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static inline int\n_PyList_AppendTakeRef(PyListObject *self, PyObject *newitem)\n{\n    assert(self != NULL && newitem != NULL);\n    assert(PyList_Check(self));\n    Py_ssize_t len = PyList_GET_SIZE(self);\n    Py_ssize_t allocated = self->allocated;\n    assert((size_t)len + 1 < PY_SSIZE_T_MAX);\n    if (allocated > len) {\n        PyList_SET_ITEM(self, len, newitem);\n        Py_SET_SIZE(self, len + 1);\n        return 0;\n    }\n    return _PyList_AppendTakeRefListResize(self, newitem);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int\n_PyList_AppendTakeRefListResize(PyListObject *self, PyObject *newitem)\n{\n    Py_ssize_t len = PyList_GET_SIZE(self);\n    assert(self->allocated == -1 || self->allocated == len);\n    if (list_resize(self, len + 1) < 0) {\n        Py_DECREF(newitem);\n        return -1;\n    }\n    PyList_SET_ITEM(self, len, newitem);\n    return 0;\n}\n")),(0,a.kt)("p",null,"\u0414\u0430\u043b\u044c\u0448\u0435 \u043a\u043e\u043f\u043d\u0443\u0442\u044c \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c =(. \u041a\u0430\u0436\u0435\u0442\u0441\u044f, \u0447\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439 \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."),(0,a.kt)("h2",{id:"\u0432\u044b\u0432\u043e\u0434\u044b"},"\u0412\u044b\u0432\u043e\u0434\u044b"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u0436\u043d\u0430 \u043f\u0430\u043c\u044f\u0442\u044c, \u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0441\u0438\u043b\u044c\u043d\u043e \u0435\u0435 \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c, \u043e\u0434\u043d\u0430\u043a\u043e \u043f\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043e\u043d \u0441\u0438\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u043e\u0431\u044b\u0447\u043d\u043e\u043c\u0443 \u0441\u043f\u0438\u0441\u043a\u0443. \u041c\u0430\u0441\u0441\u0438\u0432\u044b \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"numpy")," \u0432 \u044d\u0442\u043e\u043c \u043f\u043b\u0430\u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435."),(0,a.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/array.html"},"array. \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/python/cpython/blob/main/Modules/arraymodule.c"},"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043c\u043e\u0434\u0443\u043b\u044f array"))))}m.isMDXComponent=!0}}]);