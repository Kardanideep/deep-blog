(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},9053:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(260),a=r(8203),n=r(5155),i=r.n(n),l=r(7292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7890)),"D:\\next\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9019)),"D:\\next\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\next\\app\\page.js"],p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6221:(e,t,r)=>{Promise.resolve().then(r.bind(r,7890))},6541:(e,t,r)=>{Promise.resolve().then(r.bind(r,1011))},1011:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5512);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,r){if(e.el="string"==typeof r?document.querySelector(r):r,e.options=a({},n,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(e){return e.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(e.stringsElement.children),i=s.length;if(i)for(var l=0;l<i;l+=1)e.strings.push(s[l].innerHTML.trim())}for(var o in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[o]=o;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var r=document.createElement("style");r.setAttribute(t,"true"),r.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(r)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var r=document.createElement("style");r.setAttribute(t,"true"),r.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(r)}},e}()),new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,r){if("html"!==r.contentType)return t;var s,a=e.substring(t).charAt(0);if("<"===a||"&"===a){for(s="<"===a?">":";";e.substring(t+1).charAt(0)!==s&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,r){if("html"!==r.contentType)return t;var s,a=e.substring(t).charAt(0);if(">"===a||";"===a){for(s=">"===a?"<":"&";e.substring(t-1).charAt(0)!==s&&!(--t<0););t--}return t},e}());var i=r(8009),l=r(8531),o=r.n(l),c=r(771);function d(){let e=(0,i.useRef)(null);return(0,s.jsxs)("main",{children:[(0,s.jsxs)("section",{className:"container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center",children:[(0,s.jsxs)("div",{className:"w-full text-center lg:text-left lg:w-1/2 lg:-mt-8",children:[(0,s.jsxs)("h1",{className:"text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl",children:["Your ",(0,s.jsx)("span",{className:"font-semibold",children:"Ultimate Guide "}),"to  Programming  ",(0,s.jsx)("br",{className:"hidden lg:block"}),"In ",(0,s.jsx)("span",{className:"font-semibold underline decoration-primary",children:(0,s.jsx)("span",{ref:e})})]}),(0,s.jsxs)("p",{className:"mt-4 text-lg text-gray-500 dark:text-gray-300",children:["Comprehensive coding tutorials and resources to ",(0,s.jsx)("br",{className:"hidden lg:block"})," kickstart your apps, projects, or programming journey!"]}),(0,s.jsx)("div",{className:"mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20",children:(0,s.jsx)("form",{action:"https://www.creative-tim.com/twcomponents/search",className:"flex flex-wrap justify-between md:flex-row"})})]}),(0,s.jsx)("div",{className:"w-full mt-4 lg:mt-0 lg:w-1/2",children:(0,s.jsx)("img",{src:"https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg",alt:"tailwind css components",className:"w-full h-full max-w-md mx-auto"})})]}),(0,s.jsx)("section",{className:"py-12 bg-gray-100 dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"container px-4 mx-auto",children:[(0,s.jsxs)("div",{className:"text-center mb-12",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold text-gray-800 dark:text-gray-200",children:"Pricing Plans"}),(0,s.jsx)("p",{className:"mt-4 text-lg text-gray-500 dark:text-gray-300",children:"Choose the plan that suits you best"})]}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-center",children:[(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center",children:[(0,s.jsx)("h3",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200",children:"Basic"}),(0,s.jsx)("p",{className:"mt-4 text-gray-500 dark:text-gray-300",children:"$10/month"}),(0,s.jsxs)("ul",{className:"mt-6 mb-6 space-y-4",children:[(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:(0,s.jsx)("s",{children:"50GB Storage"})}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Basic Support"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:(0,s.jsx)("s",{children:"Up to 5 Users"})}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:(0,s.jsx)("s",{children:"Community Access"})}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Weekly Updates"})]})]})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500",children:[(0,s.jsx)("h3",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200",children:"Standard"}),(0,s.jsx)("p",{className:"mt-4 text-gray-500 dark:text-gray-300",children:"$20/month"}),(0,s.jsx)("span",{className:"inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full",children:"Bestseller"}),(0,s.jsxs)("ul",{className:"mt-6 mb-6 space-y-4",children:[(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"50GB Storage"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Priority Support"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Up to 5 Users"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Community Access"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Daily Updates"})]})]})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center",children:[(0,s.jsx)("h3",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200",children:"Premium"}),(0,s.jsx)("p",{className:"mt-4 text-gray-500 dark:text-gray-300",children:"$30/month"}),(0,s.jsxs)("ul",{className:"mt-6 mb-6 space-y-4",children:[(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"200GB Storage"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"24/7 Support"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Unlimited Users"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Community Access"}),(0,s.jsx)("li",{className:"text-gray-600 dark:text-gray-400",children:"Real-time Updates"})]})]})})]})]})}),(0,s.jsx)("section",{className:"py-12 bg-white dark:bg-gray-800",children:(0,s.jsxs)("div",{className:"container px-4 mx-auto",children:[(0,s.jsxs)("div",{className:"text-center mb-12",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold text-gray-800 dark:text-gray-200",children:"What Our Clients Say"}),(0,s.jsx)("p",{className:"mt-4 text-lg text-gray-500 dark:text-gray-300",children:"Hear from our satisfied customers"})]}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-center",children:[(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900 transform transition duration-500 hover:scale-105 text-center",children:[(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:'"The tutorials on this site are clear, easy to follow, and incredibly helpful. My coding skills have improved significantly!"'}),(0,s.jsx)("h3",{className:"mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200",children:"Happy Patel"}),(0,s.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"Web Developer, Freelancer"})]})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900 transform transition duration-500 hover:scale-105 text-center",children:[(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:'"The Python tutorials here are a lifesaver! The examples and explanations make complex concepts so easy to understand."'}),(0,s.jsx)("h3",{className:"mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200",children:"Kashyap Jivani"}),(0,s.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"Python Developer, Tech Solutions"})]})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900 transform transition duration-500 hover:scale-105 text-center",children:[(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:'"These CSS tutorials are incredibly helpful! They provide clear examples and efficient solutions to styling challenges."'}),(0,s.jsx)("h3",{className:"mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200",children:"Riya Kardani"}),(0,s.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"Frontend Developer, Creative Studios"})]})})]})]})}),(0,s.jsx)("section",{className:"py-12 bg-gray-100 dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"container px-4 mx-auto",children:[(0,s.jsxs)("div",{className:"text-center mb-12",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold text-gray-800 dark:text-gray-200",children:"Top Blogs"}),(0,s.jsx)("p",{className:"mt-4 text-lg text-gray-500 dark:text-gray-300",children:"Check out our most popular blog posts"})]}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-center",children:[(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105",children:[(0,s.jsx)("img",{src:"/css.jpg",className:"w-full h-64 object-cover rounded-t-lg"}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-200",children:"CSS Tutorial"}),(0,s.jsx)("p",{className:"mt-2 mb-2 text-gray-600 dark:text-gray-400",children:"This is a blog for learning CSS, covering basic to advanced concepts. "}),(0,s.jsx)(o(),{href:"/blogpost/css-tutorial",className:(0,c.r)({variant:"outline"}),children:"Click here"})]})]})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105",children:[(0,s.jsx)("img",{src:"/ai.webp",alt:"Blog 2",className:"w-full h-64 object-cover rounded-t-lg"}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-200",children:"ChatGPT vs. Gemini"}),(0,s.jsx)("p",{className:"mt-2 mb-2 text-gray-600 dark:text-gray-400",children:"Comparing the features and capabilities of ChatGPT and Gemini."}),(0,s.jsx)(o(),{href:"/blogpost/chatgpt-vs-gemini",className:(0,c.r)({variant:"outline"}),children:"Click here"})]})]})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:(0,s.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105",children:[(0,s.jsx)("img",{src:"/c.jpg",alt:"Blog 3",className:"w-full h-64 object-cover rounded-t-lg"}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-200",children:"C Programming Tutorial"}),(0,s.jsx)("p",{className:"mt-2 mb-2 text-gray-600 dark:text-gray-400",children:"This is a comprehensive tutorial for learning C programming."}),(0,s.jsx)(o(),{href:"/blogpost/c-programming-tutorial",className:(0,c.r)({variant:"outline"}),children:"Click here"})]})]})})]})]})})]})}},7890:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\next\\\\app\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\next\\app\\page.js","default")},6055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,411,77,345],()=>r(9053));module.exports=s})();