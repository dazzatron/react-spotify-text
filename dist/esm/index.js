import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{useRef as r,useEffect as i,useState as o}from"react";var s,a=[],c="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(s||(s={}));var u,d=function(e){return Object.freeze(e)},h=function(e,t){this.inlineSize=e,this.blockSize=t,d(this)},f=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,d(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),l=function(e){return e instanceof SVGElement&&"getBBox"in e},v=function(e){if(l(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},p=function(e){var t;if(e instanceof Element)return!0;var n=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},g="undefined"!=typeof window?window:{},b=new WeakMap,m=/auto|scroll/,x=/^tb|vertical/,w=/msie|trident/i.test(g.navigator&&g.navigator.userAgent),y=function(e){return parseFloat(e||"0")},E=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new h((n?t:e)||0,(n?e:t)||0)},T=d({devicePixelContentBoxSize:E(),borderBoxSize:E(),contentBoxSize:E(),contentRect:new f(0,0,0,0)}),z=function(e,t){if(void 0===t&&(t=!1),b.has(e)&&!t)return b.get(e);if(v(e))return b.set(e,T),T;var n=getComputedStyle(e),r=l(e)&&e.ownerSVGElement&&e.getBBox(),i=!w&&"border-box"===n.boxSizing,o=x.test(n.writingMode||""),s=!r&&m.test(n.overflowY||""),a=!r&&m.test(n.overflowX||""),c=r?0:y(n.paddingTop),u=r?0:y(n.paddingRight),h=r?0:y(n.paddingBottom),p=r?0:y(n.paddingLeft),g=r?0:y(n.borderTopWidth),z=r?0:y(n.borderRightWidth),S=r?0:y(n.borderBottomWidth),B=p+u,O=c+h,R=(r?0:y(n.borderLeftWidth))+z,k=g+S,C=a?e.offsetHeight-k-e.clientHeight:0,N=s?e.offsetWidth-R-e.clientWidth:0,D=i?B+R:0,M=i?O+k:0,A=r?r.width:y(n.width)-D-N,W=r?r.height:y(n.height)-M-C,F=A+B+N+R,L=W+O+C+k,P=d({devicePixelContentBoxSize:E(Math.round(A*devicePixelRatio),Math.round(W*devicePixelRatio),o),borderBoxSize:E(F,L,o),contentBoxSize:E(A,W,o),contentRect:new f(p,c,A,W)});return b.set(e,P),P},S=function(e,t,n){var r=z(e,n),i=r.borderBoxSize,o=r.contentBoxSize,a=r.devicePixelContentBoxSize;switch(t){case s.DEVICE_PIXEL_CONTENT_BOX:return a;case s.BORDER_BOX:return i;default:return o}},B=function(e){var t=z(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=d([t.borderBoxSize]),this.contentBoxSize=d([t.contentBoxSize]),this.devicePixelContentBoxSize=d([t.devicePixelContentBoxSize])},O=function(e){if(v(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},R=function(){var e=1/0,t=[];a.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new B(t.target),i=O(t.target);r.push(n),t.lastReportedSize=S(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},k=function(e){a.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(O(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},C=function(){var e,t=0;for(k(t);a.some((function(e){return e.activeTargets.length>0}));)t=R(),k(t);return a.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:c}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=c),window.dispatchEvent(e)),t>0},N=[],D=function(e){if(!u){var t=0,n=document.createTextNode("");new MutationObserver((function(){return N.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),u=function(){n.textContent="".concat(t?t--:t++)}}N.push(e),u()},M=0,A={attributes:!0,characterData:!0,childList:!0,subtree:!0},W=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],F=function(e){return void 0===e&&(e=0),Date.now()+e},L=!1,P=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!L){L=!0;var n,r=F(e);n=function(){var n=!1;try{n=C()}finally{if(L=!1,e=r-F(),!M)return;n?t.run(1e3):e>0?t.run(e):t.start()}},D((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,A)};document.body?t():g.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),W.forEach((function(t){return g.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),W.forEach((function(t){return g.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),X=function(e){!M&&e>0&&P.start(),!(M+=e)&&P.stop()},_=function(){function e(e,t){this.target=e,this.observedBox=t||s.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=S(this.target,this.observedBox,!0);return e=this.target,l(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),I=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},j=new WeakMap,V=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},q=function(){function e(){}return e.connect=function(e,t){var n=new I(e,t);j.set(e,n)},e.observe=function(e,t,n){var r=j.get(e),i=0===r.observationTargets.length;V(r.observationTargets,t)<0&&(i&&a.push(r),r.observationTargets.push(new _(t,n&&n.box)),X(1),P.schedule())},e.unobserve=function(e,t){var n=j.get(e),r=V(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&a.splice(a.indexOf(n),1),n.observationTargets.splice(r,1),X(-1))},e.disconnect=function(e){var t=this,n=j.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),G=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");q.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");q.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");q.unobserve(this,e)},e.prototype.disconnect=function(){q.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}(),H=n["undefined"!=typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];function J(){}var U,Y="undefined"!=typeof window&&"ResizeObserver"in window?window.ResizeObserver:G;function K(e,t){var n,o,s,a,c=U||(n=0,o=[],s=new Map,a=new Y(((e,t)=>{o=o.concat(e),n||window.requestAnimationFrame((function(){for(var e=new Set,r=function(n){if(e.has(o[n].target))return"continue";e.add(o[n].target);var r=s.get(o[n].target);null==r||r.forEach((e=>e(o[n],t)))},i=0;i<o.length;i++)r(i);o=[],n=0})),n=1})),U={observer:a,subscribe(e,t){var n;a.observe(e);var r=null!==(n=s.get(e))&&void 0!==n?n:[];r.push(t),s.set(e,r)},unsubscribe(e,t){var n,r=null!==(n=s.get(e))&&void 0!==n?n:[];if(1===r.length)return a.unobserve(e),void s.delete(e);var i=r.indexOf(t);-1!==i&&r.splice(i,1),s.set(e,r)}}),u=(e=>{var t=r(e);return i((()=>{t.current=e})),t})(t);return H((()=>{function t(e,t){n||u.current(e,t)}var n=0,r=e&&"current"in e?e.current:e;return r?(c.subscribe(r,t),()=>{n=1,c.unsubscribe(r,t)}):J}),[e,c,u]),c.observer}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".react-spotify-text {\n  animation: mask infinite linear;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.react-spotify-text-wrapper {\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n}\n.react-spotify-text-placeholder {\n  display: inline-block;\n  max-width: 100%;\n}\n.react-spotify-text-inner {\n  mask-image: linear-gradient(90deg, #000 calc(100% - 1rem), transparent 100%);\n}\n.react-spotify-text-text {\n  display: inline-block;\n  padding-right: 20%;\n  box-sizing: border-box;\n  animation: text infinite linear;\n}\n@keyframes text {\n  80%, 100% {\n    transform: translateX(-100%);\n  }\n}\n@keyframes mask {\n  0%, 60% {\n    mask-image: linear-gradient(90deg, transparent 0, #000 1rem);\n  }\n  80%, 100% {\n    mask-image: none;\n  }\n}");const Q=n=>{const{text:i}=n,s=r(null),[a,c]=o(!1),u=i.length/7.5+"s";return K(s,(()=>{s.current.clientWidth>=s.current.parentElement.clientWidth?c(!0):c(!1)})),e("div",Object.assign({className:"react-spotify-text-wrapper"},{children:[t("div",Object.assign({style:{visibility:a?"hidden":"visible"},className:"react-spotify-text-placeholder",ref:s},{children:i})),a&&t("div",Object.assign({className:"react-spotify-text",style:{animationDuration:u}},{children:t("div",Object.assign({className:"react-spotify-text-inner"},{children:[...Array(2)].map(((e,n)=>t("div",Object.assign({className:"react-spotify-text-text",style:{animationDuration:u}},{children:i}),n)))}))}))]}))};export{Q as ReactSpotifyText};
