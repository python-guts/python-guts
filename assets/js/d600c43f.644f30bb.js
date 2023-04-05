"use strict";(self.webpackChunkpython_guts=self.webpackChunkpython_guts||[]).push([[1922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>_});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,_=c["".concat(p,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(_,a(a({ref:t},i),{},{components:n})):r.createElement(_,a({ref:t},i))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={tags:["\u041e\u041e\u041f","\u041f\u0430\u043c\u044f\u0442\u044c","\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"]},a="\u0421\u043b\u043e\u0442\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430. __slots__",l={unversionedId:"notes/oop/slots",id:"notes/oop/slots",title:"\u0421\u043b\u043e\u0442\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430. __slots__",description:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0432 Python \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u043b\u043e\u0432\u0430\u0440\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u043c\u0438\u043c\u043e \u0441\u0430\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0449\u0435 \u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c\u0438.",source:"@site/docs/notes/oop/slots.md",sourceDirName:"notes/oop",slug:"/notes/oop/slots",permalink:"/python-guts/docs/notes/oop/slots",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/oop/slots.md",tags:[{label:"\u041e\u041e\u041f",permalink:"/python-guts/docs/tags/\u043e\u043e\u043f"},{label:"\u041f\u0430\u043c\u044f\u0442\u044c",permalink:"/python-guts/docs/tags/\u043f\u0430\u043c\u044f\u0442\u044c"},{label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",permalink:"/python-guts/docs/tags/\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}],version:"current",frontMatter:{tags:["\u041e\u041e\u041f","\u041f\u0430\u043c\u044f\u0442\u044c","\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"]},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",permalink:"/python-guts/docs/notes/oop/"},next:{title:"\u041c\u043e\u0434\u0443\u043b\u044c weakref. \u0421\u043b\u0430\u0431\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438",permalink:"/python-guts/docs/notes/oop/weakref"}},p={},u=[{value:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043a \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c",id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438-\u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f-\u043a-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c",level:2},{value:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u043c\u044f\u0442\u0438",id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f-\u043f\u0430\u043c\u044f\u0442\u0438",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],i={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0441\u043b\u043e\u0442\u044b-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-slots"},"\u0421\u043b\u043e\u0442\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430. ",(0,o.kt)("strong",{parentName:"h1"},"slots")),(0,o.kt)("p",null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0432 Python \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u043b\u043e\u0432\u0430\u0440\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u043c\u0438\u043c\u043e \u0441\u0430\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0449\u0435 \u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c\u0438."),(0,o.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"__slots__")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u0431\u044a\u0435\u043c \u043f\u0430\u043c\u044f\u0442\u0438 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u042d\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u043f\u043e\u0442\u0435\u0440\u0438 \u043f\u0430\u043c\u044f\u0442\u0438 \u0438 \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u0432\u044b\u0434\u0435\u043b\u044f\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432."),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0431\u0435\u0437 \u0441\u043b\u043e\u0442\u043e\u0432:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Student:\n    def __init__(self, name, surname, marks):\n        self.name = name\n        self.surname = surname\n        self.marks\n        \n\nif __name__ == '__main__':\n    stud1 = Student('Alex', 'Wignorbo', [5, 4, 5, 5])\n    print(stud1.__dict__)\n")),(0,o.kt)("p",null,"\u0412\u044b\u0432\u0435\u0434\u0435\u0442"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{'name': 'Alex', 'surname': 'Wignorbo', 'marks': [5, 4, 5, 5]}\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u043e \u0441\u043b\u043e\u0442\u0430\u043c\u0438:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class StudentWithSlots:\n    __slots__ = ('name', 'surname', 'marks')\n\n    def __init__(self, name, surname, marks):\n        self.name = name\n        self.surname = surname\n        self.marks\n        \n\nif __name__ == '__main__':\n    stud2 = StudentWithSLots('Alex', 'Wignorbo', [5, 4, 5, 5])\n    print(stud2.__slots__)\n    print(stud2.__dict__)\n")),(0,o.kt)("p",null,"\u0412\u044b\u0432\u0435\u0434\u0435\u0442"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"('name', 'surname', 'marks')\nAttributeError: 'StudentWithSlots' object has no attribute '__dict__'\n")),(0,o.kt)("h2",{id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438-\u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f-\u043a-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c"},"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043a \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%%timeit\nstud1.name = 'Hello'\nstud1.name\ndel stud1.name\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"106 ns \xb1 13.4 ns per loop (mean \xb1 std. dev. of 7 runs, 10,000,000 loops each)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%%timeit\nstud2.name = 'Hello'\nstud2.name\ndel stud2.name\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"77.4 ns \xb1 2.56 ns per loop (mean \xb1 std. dev. of 7 runs, 10,000,000 loops each)\n")),(0,o.kt)("p",null,"\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0440\u043e\u0441\u0442 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 27% (Python 3.10.6, Ubuntu)"),(0,o.kt)("h2",{id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f-\u043f\u0430\u043c\u044f\u0442\u0438"},"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u043c\u044f\u0442\u0438"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import sys\n\nprint(sys.getsizeof(stud1), sys.getsizeof(stud2))\nprint(sys.getsizeof(stud1.__dict__), sys.getsizeof(stud2.__slots__))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"48 56\n360 64\n")),(0,o.kt)("p",null,"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u0442\u0438\u0442\u044c, \u043d\u0430 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u043c\u044f\u0442\u0438, \u0447\u0435\u043c \u043d\u0430 \u0442\u0435 \u0436\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"__slots__"),"."),(0,o.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/reference/datamodel.html?#object.__slots__"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f. ",(0,o.kt)("inlineCode",{parentName:"a"},"object.__slots__")))))}m.isMDXComponent=!0}}]);