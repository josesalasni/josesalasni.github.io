(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{209:function(e,t,r){"use strict";r(210)("fixed",function(e){return function(){return e(this,"tt","","")}})},210:function(e,t,r){var n=r(11),o=r(24),i=r(19),a=/"/g,s=function(e,t,r,n){var o=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(a,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},212:function(e,t,r){"use strict";var n=r(8);t.__esModule=!0,t.default=void 0;var o,i=n(r(7)),a=n(r(36)),s=n(r(79)),l=n(r(80)),c=n(r(0)),u=n(r(4)),f=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d=Object.create({}),p=function(e){var t=f(e),r=t.fluid?t.fluid.src:t.fixed.src;return d[r]||!1},h=new WeakMap;var b=function(e,t){var r=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),o);return r&&(r.observe(e),h.set(e,t)),function(){r.unobserve(e),h.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+r+"/>":"",o=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+r+o+t+a+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var r=e.sizes,n=e.srcSet,o=e.src,i=e.style,a=e.onLoad,u=e.onError,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:n,src:o},f,{onLoad:a,onError:u,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});g.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var m=function(e){function t(t){var r;r=e.call(this,t)||this;var n=!0,o=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,o=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,o=!1);var l=!(t.critical&&!t.fadeIn);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:o,fadeIn:i,hasNoScript:l,seenBefore:s},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=b(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),r=t.fluid?t.fluid.src:t.fixed.src,d[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,o=e.style,i=void 0===o?{}:o,a=e.imgStyle,s=void 0===a?{}:a,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,b=e.fixed,m=e.backgroundColor,v=e.Tag,S=e.itemProp,w=this.state.imgLoaded||!1===this.state.fadeIn,O=!0===this.state.fadeIn&&!this.state.imgCached,E=(0,l.default)({opacity:w?1:0,transition:O?"opacity 0.5s":"none"},s),C="boolean"==typeof m?"lightgray":m,k={transitionDelay:"0.5s"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&k,s,d),P={title:t,alt:this.state.isVisible?"":r,style:j,className:p};if(h){var N=h;return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),C&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&k)}),N.base64&&c.default.createElement(g,(0,l.default)({src:N.base64},P)),N.tracedSVG&&c.default.createElement(g,(0,l.default)({src:N.tracedSVG},P)),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement(g,{alt:r,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:t},N))}}))}if(b){var L=b,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},i);return"inherit"===i.display&&delete T.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},C&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:C,width:L.width,opacity:this.state.imgLoaded?0:1,height:L.height},O&&k)}),L.base64&&c.default.createElement(g,(0,l.default)({src:L.base64},P)),L.tracedSVG&&c.default.createElement(g,(0,l.default)({src:L.tracedSVG},P)),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(g,{alt:r,title:t,width:L.width,height:L.height,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:t},L))}}))}return null},t}(c.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});m.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var w=m;t.default=w},236:function(e,t,r){"use strict";r.d(t,"a",function(){return b});var n,o=r(0),i=r(34),a=r(234),s=r(235),l=r(162);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return!e||null===e.offsetParent}var b=function(e){function t(){var e,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=f(t).apply(this,arguments),(e=!o||"object"!==c(o)&&"function"!=typeof o?d(r):o).animationStart=!1,e.destroy=!1,e.onClick=function(t,r){if(!(!t||h(t)||t.className.indexOf("-leave")>=0)){var o=e.props.insertExtraNode;e.extraNode=document.createElement("div");var i=e.extraNode;i.className="ant-click-animating-node";var s=e.getAttributeName();t.setAttribute(s,"true"),n=n||document.createElement("style"),r&&"#ffffff"!==r&&"rgb(255, 255, 255)"!==r&&e.isNotGrey(r)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(r)&&"transparent"!==r&&(e.csp&&e.csp.nonce&&(n.nonce=e.csp.nonce),i.style.borderColor=r,n.innerHTML="html body { --antd-wave-shadow-color: ".concat(r,"; }"),document.body.contains(n)||document.body.appendChild(n)),o&&t.appendChild(i),a.a.addStartEventListener(t,e.onTransitionStart),a.a.addEndEventListener(t,e.onTransitionEnd)}},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var r=function(r){if("INPUT"!==r.target.tagName&&!h(r.target)){e.resetEffect(t);var n=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,n)},0),s.a.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Object(s.a)(function(){e.animationStart=!1},10)}};return t.addEventListener("click",r,!0),{cancel:function(){t.removeEventListener("click",r,!0)}}}},e.onTransitionStart=function(t){if(!e.destroy){var r=Object(i.findDOMNode)(d(e));t&&t.target===r&&(e.animationStart||e.resetEffect(r))}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.renderWave=function(t){var r=t.csp,n=e.props.children;return e.csp=r,n},e}var r,b,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o["Component"]),r=t,(b=[{key:"isNotGrey",value:function(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(e){if(e&&e!==this.extraNode&&e instanceof Element){var t=this.props.insertExtraNode,r=this.getAttributeName();e.setAttribute(r,"false"),this.removeExtraStyleNode(),t&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),a.a.removeStartEventListener(e,this.onTransitionStart),a.a.removeEndEventListener(e,this.onTransitionEnd)}}},{key:"removeExtraStyleNode",value:function(){n&&(n.innerHTML="")}},{key:"componentDidMount",value:function(){var e=Object(i.findDOMNode)(this);1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"render",value:function(){return o.createElement(l.a,null,this.renderWave)}}])&&u(r.prototype,b),y&&u(r,y),t}()},372:function(e,t,r){"use strict";var n=r(0),o=r(158),i=r.n(o),a=r(172),s=r(54),l=r(180),c=r(162);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r},m=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=h(this,b(t).apply(this,arguments))).handleClick=function(){var t=e.props,r=t.checked,n=t.onChange;n&&n(!r)},e.renderCheckableTag=function(t){var r,o=t.getPrefixCls,a=e.props,s=a.prefixCls,l=a.className,c=a.checked,u=g(a,["prefixCls","className","checked"]),p=o("tag",s),h=i()(p,(d(r={},"".concat(p,"-checkable"),!0),d(r,"".concat(p,"-checkable-checked"),c),r),l);return delete u.onChange,n.createElement("div",f({},u,{className:h,onClick:e.handleClick}))},e}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){return n.createElement(c.a,null,this.renderCheckableTag)}}])&&p(r.prototype,o),a&&p(r,a),t}(),v=r(190),S=Object(v.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"),w=r(236),O=r(178);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r},x=new RegExp("^(".concat(S.join("|"),")(-inverse)?$")),I=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=P(this,N(t).call(this,e))).state={visible:!0},r.handleIconClick=function(e){r.setVisible(!1,e)},r.renderTag=function(e){var t=r.props,o=(t.prefixCls,t.children),i=T(t,["prefixCls","children"]),s=Object(a.a)(i,["onClose","afterClose","color","visible","closable"]);return n.createElement(w.a,null,n.createElement("div",k({},s,{className:r.getTagClassName(e),style:r.getTagStyle()}),o,r.renderCloseIcon()))},Object(O.a)(!("afterClose"in e),"Tag","'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."),r}var r,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,n["Component"]),r=t,s=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(o=[{key:"setVisible",value:function(e,t){var r=this.props,n=r.onClose,o=r.afterClose;n&&n(t),o&&!n&&o(),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(e){return!!e&&x.test(e)}},{key:"getTagStyle",value:function(){var e=this.props,t=e.color,r=e.style,n=this.isPresetColor(t);return k({backgroundColor:t&&!n?t:void 0},r)}},{key:"getTagClassName",value:function(e){var t,r=e.getPrefixCls,n=this.props,o=n.prefixCls,a=n.className,s=n.color,l=this.state.visible,c=this.isPresetColor(s),u=r("tag",o);return i()(u,(C(t={},"".concat(u,"-").concat(s),c),C(t,"".concat(u,"-has-color"),s&&!c),C(t,"".concat(u,"-hidden"),!l),t),a)}},{key:"renderCloseIcon",value:function(){return this.props.closable?n.createElement(l.a,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return n.createElement(c.a,null,this.renderTag)}}])&&j(r.prototype,o),s&&j(r,s),t}();I.CheckableTag=m,I.defaultProps={closable:!1},Object(s.polyfill)(I);t.a=I}}]);
//# sourceMappingURL=13-da32c95239d2fd9c8bfc.js.map