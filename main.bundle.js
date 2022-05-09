(()=>{var n={850:()=>{var n=document.querySelector(".sidebar");document.querySelector(".hamburger-menu").addEventListener("click",(function(){var e=document.querySelector("body");"none"===window.getComputedStyle(n).display?(e.style.gridTemplateAreas="\n      'sidebar header'\n      'sidebar main'\n    ",e.style.gridTemplateColumns="1fr 4fr",n.style.display="flex"):(e.style.gridTemplateAreas="\n      'sidebar header'\n      'sidebar main'\n    ",e.style.gridTemplateColumns="0fr 4fr",n.style.display="none")}))},424:(n,e,r)=>{"use strict";r.d(e,{Z:()=>i});var t=r(537),A=r.n(t),a=r(645),o=r.n(a)()(A());o.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, h1, h2, h3, h4, h5, h6, p, em, img, strong, sub, sup, tt, \nvar, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, \narticle, aside, details, footer, header, nav, output, ruby, \nsection {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, footer, header, nav, \nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\n\n/*General Layout*/\nbody {\n  display: grid;\n  height: 100vh;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 7fr;\n  grid-template-areas: \n    'header header'\n    'main main';\n\n  font-size: calc(100% + .35vmin);\n}\n\n/* sidebar */\n.sidebar {\n  grid-area: sidebar;\n  background-color: rgb(0, 155, 216);\n  padding: 1rem;\n  min-width: min-content;\n\n  display: none;\n  flex-direction: column;\n  gap: 2rem;\n  overflow: auto;\n  color: white;\n  font-weight: bold;\n}\n\n.sidebar header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.sidebar header h1 {\n  font-size: 1.5rem;\n  position: relative;\n  top: -1px;\n}\n\n.sidebar nav, .sidebar ul {\n  height: 100%;\n}\n\n.sidebar nav ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 1.5rem;\n}\n\n.sidebar li {\n  flex: 0 1 1em;\n  position: relative;\n  vertical-align: middle;\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  outline-color: rgba(0, 0, 0, 0.151);;\n}\n\n.sidebar nav ul li:nth-last-child(3) {\n  margin-top: 2rem;\n}\n\n.sidebar li:hover {\n  background-color: rgba(0, 0, 0, 0.151);\n  outline: 1em solid rgba(0, 0, 0, 0.151);\n  transition: 100ms ease-in;\n}\n\n/* header */\n.site-header {\n  position: relative;\n  grid-area: header;\n\n  padding: 1rem;\n\n  display: grid;\n  grid-template-columns: minmax(50px, 2fr) minmax(50px, 1fr);\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas: \n    'search profile'\n    'welcome post-buttons';\n  align-items: center;\n  gap: 2rem;\n}\n\n.site-header::after {\n  position: absolute;\n  content: ' ';\n  height: 1px;\n  width: 100%;\n  bottom: -1px;\n  z-index: 0;\n  box-shadow: 0px 3px 5px 0px rgb(179, 179, 179);\n}\n\n.site-header .search {\n  display: flex;\n}\n\n.site-header .search input {\n  flex: 1;\n  max-width: 90%;\n  border: none;\n  border-radius: 15px;\n  background-color: rgb(229, 233, 236);\n  padding-left: 10px;\n}\n\n.site-header .search button {\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  margin-right: 1em;\n}\n\n.site-header .search button:hover {\n  outline: .5rem solid rgba(0, 0, 0, 0.151);\n  background-color: rgba(0, 0, 0, 0.151);\n}\n\n.site-header .profile-widgets {\n  display: flex;\n  justify-content: end;\n  gap: 5%;\n}\n\n.site-header .profile-widgets button {\n  background: none;\n  border: none;\n}\n\n.site-header .welcome {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.site-header .post-buttons {\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  gap: 5%;\n}\n\n.avatar-small {\n  border: 2px solid black !important;\n  border-radius: 50px;\n  height: 40px;\n  width: 40px;\n}\n\n.avatar-large {\n  border: 2px solid black !important;\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n}\n.new, .upload, .share {\n  flex: 1;\n  border: none;\n  align-self: center;\n  height: 100%;\n  max-height: 2.5rem;\n  border-radius: 15px;\n  background-color: rgb(0, 155, 216);\n  color: white\n}\n\n.new:hover, .upload:hover, .share:hover {\n  background-color: rgb(0, 141, 197);\n  outline: 1px solid rgb(0, 141, 197);\n}\n\n.new:active, .upload:active, .share:active {\n  background-color: rgb(0, 129, 168);\n  outline: 1px solid rgb(0, 129, 168);\n}\n\n\n/* main */\nmain {\n  grid-area: main;\n  background-color: rgb(229, 233, 236);\n  max-height: 100vh;\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas: \n    'projects announcements'\n    'projects trending';\n  overflow: auto;\n}\n\nmain section {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  gap: 5px;\n}\n\n/* projects */\n.projects {\n  grid-area: projects;\n}\n\n.projects > .grid-wrapper {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));\n  grid-auto-rows: max(30%);\n  gap: 25px;\n  overflow: auto;\n}\n\nmain .project-card {\n  box-shadow: 3px 3px 10px 3px rgb(179, 179, 179);\n\n  display: grid;\n  grid-template-columns: 10px 1fr;\n  grid-template-rows: 3fr 1fr;\n  background-color: orange;\n  border-radius: 4px;\n  margin-right: .75rem;\n}\n\n.project-card > .project-text {\n  grid-column-start: 2;\n  grid-column-end: 3;\n\n  background-color: white;\n  padding: 2rem 1rem;\n  overflow: auto;\n}\n\n.project-card .buttons {\n  grid-column-start: 2;\n  background-color: white;\n\n  display: flex;\n  justify-content: flex-end;\n  gap: 3rem;\n  padding-right: 2rem;\n  padding-bottom: 2rem;\n}\n\n.favorite-button {\n  background: none;\n  border: none;\n}\n\n.favorite-button img {\n  height: 30px;\n  width: 30px;\n}\n\n/* Announcements & trending */\n.flex-wrapper {\n  height: 100%;\n  box-shadow: 3px 3px 10px 3px rgb(179, 179, 179);\n  background-color: white;\n  border-radius: 4px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.announcement-card, .trending-card {\n  margin: 0 1rem 0 1rem;\n  padding: 1rem;\n  flex: 1;\n  align-content: center;\n}\n\nh2, h3 {\n  font-weight: bold;\n}\n\n.announcement-card {\n  border-bottom: 2px solid gainsboro;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: .25rem;\n  overflow: auto;\n}\n\n.announcement-card:last-child {\n  border: none;\n}\n\n.trending-card {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n}\n\n.trending-card .trending-user {\n  font-weight: bold;\n}\n\n.trending-card .trending-project {\n  color: gray;\n}\n\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;EAIE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA,gDAAgD;AAChD;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;;AAGA,iBAAiB;AACjB;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B;;eAEa;;EAEb,+BAA+B;AACjC;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,kCAAkC;EAClC,aAAa;EACb,sBAAsB;;EAEtB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,cAAc;EACd,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,uCAAuC;EACvC,yBAAyB;AAC3B;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,iBAAiB;;EAEjB,aAAa;;EAEb,aAAa;EACb,0DAA0D;EAC1D,2BAA2B;EAC3B;;0BAEwB;EACxB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,UAAU;EACV,8CAA8C;AAChD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;EACzC,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,OAAO;AACT;;AAEA;EACE,kCAAkC;EAClC,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;AACA;EACE,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,kCAAkC;EAClC;AACF;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;AACrC;;;AAGA,SAAS;AACT;EACE,eAAe;EACf,oCAAoC;EACpC,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B;;uBAEqB;EACrB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,QAAQ;AACV;;AAEA,aAAa;AACb;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4DAA4D;EAC5D,wBAAwB;EACxB,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,+CAA+C;;EAE/C,aAAa;EACb,+BAA+B;EAC/B,2BAA2B;EAC3B,wBAAwB;EACxB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;;EAElB,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;;EAEvB,aAAa;EACb,yBAAyB;EACzB,SAAS;EACT,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,6BAA6B;AAC7B;EACE,YAAY;EACZ,+CAA+C;EAC/C,uBAAuB;EACvB,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,OAAO;EACP,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, h1, h2, h3, h4, h5, h6, p, em, img, strong, sub, sup, tt, \nvar, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, \narticle, aside, details, footer, header, nav, output, ruby, \nsection {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, footer, header, nav, \nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\n\n/*General Layout*/\nbody {\n  display: grid;\n  height: 100vh;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 7fr;\n  grid-template-areas: \n    'header header'\n    'main main';\n\n  font-size: calc(100% + .35vmin);\n}\n\n/* sidebar */\n.sidebar {\n  grid-area: sidebar;\n  background-color: rgb(0, 155, 216);\n  padding: 1rem;\n  min-width: min-content;\n\n  display: none;\n  flex-direction: column;\n  gap: 2rem;\n  overflow: auto;\n  color: white;\n  font-weight: bold;\n}\n\n.sidebar header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.sidebar header h1 {\n  font-size: 1.5rem;\n  position: relative;\n  top: -1px;\n}\n\n.sidebar nav, .sidebar ul {\n  height: 100%;\n}\n\n.sidebar nav ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 1.5rem;\n}\n\n.sidebar li {\n  flex: 0 1 1em;\n  position: relative;\n  vertical-align: middle;\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  outline-color: rgba(0, 0, 0, 0.151);;\n}\n\n.sidebar nav ul li:nth-last-child(3) {\n  margin-top: 2rem;\n}\n\n.sidebar li:hover {\n  background-color: rgba(0, 0, 0, 0.151);\n  outline: 1em solid rgba(0, 0, 0, 0.151);\n  transition: 100ms ease-in;\n}\n\n/* header */\n.site-header {\n  position: relative;\n  grid-area: header;\n\n  padding: 1rem;\n\n  display: grid;\n  grid-template-columns: minmax(50px, 2fr) minmax(50px, 1fr);\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas: \n    'search profile'\n    'welcome post-buttons';\n  align-items: center;\n  gap: 2rem;\n}\n\n.site-header::after {\n  position: absolute;\n  content: ' ';\n  height: 1px;\n  width: 100%;\n  bottom: -1px;\n  z-index: 0;\n  box-shadow: 0px 3px 5px 0px rgb(179, 179, 179);\n}\n\n.site-header .search {\n  display: flex;\n}\n\n.site-header .search input {\n  flex: 1;\n  max-width: 90%;\n  border: none;\n  border-radius: 15px;\n  background-color: rgb(229, 233, 236);\n  padding-left: 10px;\n}\n\n.site-header .search button {\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  margin-right: 1em;\n}\n\n.site-header .search button:hover {\n  outline: .5rem solid rgba(0, 0, 0, 0.151);\n  background-color: rgba(0, 0, 0, 0.151);\n}\n\n.site-header .profile-widgets {\n  display: flex;\n  justify-content: end;\n  gap: 5%;\n}\n\n.site-header .profile-widgets button {\n  background: none;\n  border: none;\n}\n\n.site-header .welcome {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.site-header .post-buttons {\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  gap: 5%;\n}\n\n.avatar-small {\n  border: 2px solid black !important;\n  border-radius: 50px;\n  height: 40px;\n  width: 40px;\n}\n\n.avatar-large {\n  border: 2px solid black !important;\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n}\n.new, .upload, .share {\n  flex: 1;\n  border: none;\n  align-self: center;\n  height: 100%;\n  max-height: 2.5rem;\n  border-radius: 15px;\n  background-color: rgb(0, 155, 216);\n  color: white\n}\n\n.new:hover, .upload:hover, .share:hover {\n  background-color: rgb(0, 141, 197);\n  outline: 1px solid rgb(0, 141, 197);\n}\n\n.new:active, .upload:active, .share:active {\n  background-color: rgb(0, 129, 168);\n  outline: 1px solid rgb(0, 129, 168);\n}\n\n\n/* main */\nmain {\n  grid-area: main;\n  background-color: rgb(229, 233, 236);\n  max-height: 100vh;\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas: \n    'projects announcements'\n    'projects trending';\n  overflow: auto;\n}\n\nmain section {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  gap: 5px;\n}\n\n/* projects */\n.projects {\n  grid-area: projects;\n}\n\n.projects > .grid-wrapper {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));\n  grid-auto-rows: max(30%);\n  gap: 25px;\n  overflow: auto;\n}\n\nmain .project-card {\n  box-shadow: 3px 3px 10px 3px rgb(179, 179, 179);\n\n  display: grid;\n  grid-template-columns: 10px 1fr;\n  grid-template-rows: 3fr 1fr;\n  background-color: orange;\n  border-radius: 4px;\n  margin-right: .75rem;\n}\n\n.project-card > .project-text {\n  grid-column-start: 2;\n  grid-column-end: 3;\n\n  background-color: white;\n  padding: 2rem 1rem;\n  overflow: auto;\n}\n\n.project-card .buttons {\n  grid-column-start: 2;\n  background-color: white;\n\n  display: flex;\n  justify-content: flex-end;\n  gap: 3rem;\n  padding-right: 2rem;\n  padding-bottom: 2rem;\n}\n\n.favorite-button {\n  background: none;\n  border: none;\n}\n\n.favorite-button img {\n  height: 30px;\n  width: 30px;\n}\n\n/* Announcements & trending */\n.flex-wrapper {\n  height: 100%;\n  box-shadow: 3px 3px 10px 3px rgb(179, 179, 179);\n  background-color: white;\n  border-radius: 4px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.announcement-card, .trending-card {\n  margin: 0 1rem 0 1rem;\n  padding: 1rem;\n  flex: 1;\n  align-content: center;\n}\n\nh2, h3 {\n  font-weight: bold;\n}\n\n.announcement-card {\n  border-bottom: 2px solid gainsboro;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: .25rem;\n  overflow: auto;\n}\n\n.announcement-card:last-child {\n  border: none;\n}\n\n.trending-card {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n}\n\n.trending-card .trending-user {\n  font-weight: bold;\n}\n\n.trending-card .trending-project {\n  color: gray;\n}\n\n"],sourceRoot:""}]);const i=o},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,A,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),A&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=A):l[4]="".concat(A)),e.push(l))}},e}},537:n=>{"use strict";n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(A," */"),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(o).concat([a]).join("\n")}return[e].join("\n")}},379:n=>{"use strict";var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},o=[],i=0;i<n.length;i++){var d=n[i],s=t.base?d[0]+t.base:d[0],l=a[s]||0,c="".concat(s," ").concat(l);a[s]=l+1;var p=r(c),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var u=A(g,t);t.byIndex=i,e.splice(i,0,{identifier:c,updater:u,references:1})}o.push(c)}return o}function A(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,A){var a=t(n=n||[],A=A||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var i=r(a[o]);e[i].references--}for(var d=t(n,A),s=0;s<a.length;s++){var l=r(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{"use strict";var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{"use strict";n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var A=void 0!==r.layer;A&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,A&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var A=e[t];if(void 0!==A)return A.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{"use strict";var n=r(379),e=r.n(n),t=r(795),A=r.n(t),a=r(569),o=r.n(a),i=r(565),d=r.n(i),s=r(216),l=r.n(s),c=r(589),p=r.n(c),g=r(424),u={};u.styleTagTransform=p(),u.setAttributes=d(),u.insert=o().bind(null,"head"),u.domAPI=A(),u.insertStyleElement=l(),e()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals,r(850);const m=r.p+"15d3a47d0ee3d2fc815a.svg",C=r.p+"7fe3ad8eef6d8680bc74.svg";function E(n){n.target.src===m?n.target.src=C:n.target.src===C&&(n.target.src=m)}document.querySelectorAll(".favorite-button > img").forEach((function(n){return n.addEventListener("click",E)}))})()})();
//# sourceMappingURL=main.bundle.js.map