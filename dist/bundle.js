!function(e){function t(t){for(var r,i,c=t[0],a=t[1],f=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);p.length;)p.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={3:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=a;u.push([11,1,0,2,4]),n()}([function(e,t,n){"use strict";t.a={BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/medium/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:"restaurant-cache",DATABASE_NAME:"restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"}},function(e,t,n){"use strict";var r=n(10),o=n(0);function u(e,t,n,r,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){u(i,r,o,c,a,"next",e)}function a(e){u(i,r,o,c,a,"throw",e)}c(void 0)}))}}var c=o.a.DATABASE_NAME,a=o.a.DATABASE_VERSION,f=o.a.OBJECT_STORE_NAME,l=Object(r.a)(c,a,{upgrade:function(e){e.createObjectStore(f,{keyPath:"id"})}}),s={getRestaurant:function(e){return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,l;case 4:return t.abrupt("return",t.sent.get(f,e));case 5:case"end":return t.stop()}}),t)})))()},getAllRestaurants:function(){return i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l;case 2:return e.abrupt("return",e.sent.getAll(f));case 3:case"end":return e.stop()}}),e)})))()},putRestaurant:function(e){return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hasOwnProperty("id")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,l;case 4:return t.abrupt("return",t.sent.put(f,e));case 5:case"end":return t.stop()}}),t)})))()},deleteRestaurant:function(e){return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l;case 2:return t.abrupt("return",t.sent.delete(f,e));case 3:case"end":return t.stop()}}),t)})))()},searchRestaurants:function(e){var t=this;return i(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getAllRestaurants();case 2:return n.abrupt("return",n.sent.filter((function(t){var n=(t.name||"-").toLowerCase().replace(/\s/g,""),r=e.toLowerCase().replace(/\s/g,"");return-1!==n.indexOf(r)})));case 3:case"end":return n.stop()}}),n)})))()}};t.a=s},function(e,t,n){"use strict";var r=n(0),o={ALL_RESTAURANT:"".concat(r.a.BASE_URL,"list"),DETAIL:function(e){return"".concat(r.a.BASE_URL,"detail/").concat(e)},SEARCH:function(e){return"".concat(r.a.BASE_URL,"search?q=").concat(e)},REVIEW:"".concat(r.a.BASE_URL,"review")};function u(e,t,n,r,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){u(i,r,o,c,a,"next",e)}function a(e){u(i,r,o,c,a,"throw",e)}c(void 0)}))}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r,u,a,f,l;return t=e,n=null,r=[{key:"allRestaurant",value:(l=i(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.ALL_RESTAURANT);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.restaurants);case 7:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})},{key:"detailRestaurant",value:(f=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.DETAIL(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)})},{key:"searchRestaurant",value:(a=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.SEARCH(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"sendReview",value:(u=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify(t)),e.next=3,fetch(o.REVIEW,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,location.reload(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),function(e){return u.apply(this,arguments)})}],n&&c(t.prototype,n),r&&c(t,r),e}();t.a=a},,,,,,,,,function(e,t,n){"use strict";n.r(t);n(12),n(13),n(15),n(17),n(19),n(20),n(21),n(22),n(23),n(6),n(24);var r=n(9),o=n(7),u=document.getElementById("ham-bar"),i=document.getElementById("close-bar"),c=document.getElementById("ul-navbar");u.addEventListener("click",(function(){i.classList.add("show-icon"),u.classList.add("unshow-icon"),c.classList.add("show")})),i.addEventListener("click",(function(){u.classList.remove("unshow-icon"),i.classList.remove("show-icon"),c.classList.remove("show")}));var a=new r.a({content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){a.renderPage()})),window.addEventListener("load",(function(){a.renderPage(),Object(o.a)()}))},,,,,,,,function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function c(e,t,n){return(c=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,n,i,c,s,p=(t=y,n=a(),function(){var e,r=l(t);if(n){var o=l(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <a href="#header-title" class="skip-link">Go To Content</a>\n    <nav id="drawer" class="nav">\n      <div class="navbar">\n        <label class="brand-logo"><a href="/"><img src="../images/logo/logo.png" alt="brand logo" /></a></label>\n        <label for="icon" class="bar">\n          <button aria-label="open navbar menu" id="ham-bar" class="hamburger-bar">☰</button>\n          <button aria-label="close navbar menu" id="close-bar" class="close-bar">✖</button>\n        </label>\n\n        <ul id="ul-navbar">\n          <li><a href="#/home">HOME</a></li>\n          <li><a href="#/favorite">FAVORITE</a></li>\n          <li><a href="https://www.linkedin.com/in/guido-aryasatya-29b7931b4/" target="_blank" rel="noreferrer">CONTACT</a></li>\n        </ul>\n      </div>\n    </nav>'}}])&&o(i.prototype,c),s&&o(i,s),y}(i(HTMLElement));customElements.define("navbar-component",s)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function c(e,t,n){return(c=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,n,i,c,s,p=(t=y,n=a(),function(){var e,r=l(t);if(n){var o=l(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="hero">\n      <div class="hero-inner">\n        <h1 tabindex="0" class="hero-title">FIND YOUR FAVORITE <br />RESTAURANT</h1>\n        <p class="hero-tagline">Find the best restaurant in your city</p>\n        <form action="#header-title">\n          <input type="submit" class="hero-button" value="FIND NOW!"></input>\n        </form>\n      </div>\n    </div>'}}])&&o(i.prototype,c),s&&o(i,s),y}(i(HTMLElement));customElements.define("hero-component",s)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function c(e,t,n){return(c=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,n,i,c,s,p=(t=y,n=a(),function(){var e,r=l(t);if(n){var o=l(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <h2 tabindex="0" id="header-title" class="header-title">Explore Restaurant</h2>'}}])&&o(i.prototype,c),s&&o(i,s),y}(i(HTMLElement));customElements.define("header-component",s)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function c(e,t,n){return(c=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,n,i,c,s,p=(t=y,n=a(),function(){var e,r=l(t);if(n){var o=l(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <p tabindex="0" class="footer">Copyright ©2021 Hunger by Guido Aryasatya</p>'}}])&&o(i.prototype,c),s&&o(i,s),y}(i(HTMLElement));customElements.define("footer-component",s)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function c(e,t,n){return(c=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,n,i,c,s,p=(t=y,n=a(),function(){var e,r=l(t);if(n){var o=l(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="formReviews">\n      <h2>Form Reviews</h2>\n      <form action="" class="inputReviews">\n        <label>Name</label>\n        <input id="name-review" type="text" maxlength="16" autocomplete="off" placeholder="Input your name" required>\n        <label>Reviews</label>\n        <input id="content-review" type="text" maxlength="48" placeholder="Input your reviews" required>\n        <button id="submit-review" class="submit" type="submit">Submit</button>\n      </form>\n    </div>'}}])&&o(i.prototype,c),s&&o(i,s),y}(i(HTMLElement));customElements.define("form-reviews",s)}]);