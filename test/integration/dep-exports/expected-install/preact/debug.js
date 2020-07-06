import{options as e,Fragment as z,Component as v}from"../preact.js";"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.4.4",e,{Fragment:z,Component:v});var A={};function F(){A={}}function q(f){return f.type===z?"Fragment":"function"==typeof f.type?f.type.displayName||f.type.name:"string"==typeof f.type?f.type:"#text"}var w=[],t=[];function D(){return w.length>0?w[w.length-1]:null}var E=!1;function B(f){return"function"==typeof f.type&&f.type!=z}function j(f){for(var k=[f],o=f;null!=o.__o;)k.push(o.__o),o=o.__o;return k.reduce(function(s,p){s+="  in "+q(p);var g=p.__source;return g?s+=" (at "+g.fileName+":"+g.lineNumber+")":E||(E=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),s+`
`},"")}var G="function"==typeof WeakMap,H=v.prototype.setState;v.prototype.setState=function(f,k){return null==this.__v?null==this.state&&console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

`+j(D())):null==this.__P&&console.warn(`Can't call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+j(this.__v)),H.call(this,f,k)};var I=v.prototype.forceUpdate;function r(f){var k=f.props,o=q(f),s="";for(var p in k)if(k.hasOwnProperty(p)&&"children"!==p){var g=k[p];"function"==typeof g&&(g="function "+(g.displayName||g.name)+"() {}"),g=Object(g)!==g||g.toString?g+"":Object.prototype.toString.call(g),s+=" "+p+"="+JSON.stringify(g)}var u=k.children;return"<"+o+s+(u&&u.length?">..</"+o+">":" />")}v.prototype.forceUpdate=function(f){return null==this.__v?console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

`+j(D())):null==this.__P&&console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+j(this.__v)),I.call(this,f)},function(){!function(){var a=e.__b,b=e.diffed,h=e.__,i=e.vnode,c=e.__r;e.diffed=function(d){B(d)&&t.pop(),w.pop(),b&&b(d)},e.__b=function(d){B(d)&&w.push(d),a&&a(d)},e.__=function(d,l){t=[],h&&h(d,l)},e.vnode=function(d){d.__o=t.length>0?t[t.length-1]:null,i&&i(d)},e.__r=function(d){B(d)&&t.push(d),c&&c(d)}}();var f=e.__b,k=e.diffed,o=e.vnode,s=e.__e,p=e.__,g=e.__h,u=G?{useEffect:new WeakMap(),useLayoutEffect:new WeakMap(),lazyPropTypes:new WeakMap()}:null;e.__e=function(a,b,h){if(b&&b.__c&&"function"==typeof a.then){var i=a;a=new Error("Missing Suspense. The throwing component was: "+q(b));for(var c=b;c;c=c.__)if(c.__c&&c.__c.__c){a=i;break}if(a instanceof Error)throw a}s(a,b,h)},e.__=function(a,b){if(!b)throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);var h;switch(b.nodeType){case 1:case 11:case 9:h=!0;break;default:h=!1}if(!h){var i=q(a);throw new Error("Expected a valid HTML node as a second argument to render.	Received "+b+" instead: render(<"+i+" />, "+b+");")}p&&p(a,b)},e.__b=function(a){var b,h,i,c=a.type,d=function y(n){return n?"function"==typeof n.type?y(n.__):n:{}}(a.__);if(void 0===c)throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports`+r(a)+`

`+j(a));if(null!=c&&"object"==typeof c)throw void 0!==c.__k&&void 0!==c.__e?new Error("Invalid type passed to createElement(): "+c+`

Did you accidentally pass a JSX literal as JSX twice?

  let My`+q(a)+" = "+r(c)+`;
  let vnode = <My`+q(a)+` />;

This usually happens when you export a JSX literal and not the component.

`+j(a)):new Error("Invalid type passed to createElement(): "+(Array.isArray(c)?"array":c));if("thead"!==c&&"tfoot"!==c&&"tbody"!==c||"table"===d.type?"tr"===c&&"thead"!==d.type&&"tfoot"!==d.type&&"tbody"!==d.type&&"table"!==d.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+r(a)+`

`+j(a)):"td"===c&&"tr"!==d.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+r(a)+`

`+j(a)):"th"===c&&"tr"!==d.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+r(a)+`

`+j(a)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+r(a)+`

`+j(a)),void 0!==a.ref&&"function"!=typeof a.ref&&"object"!=typeof a.ref&&!("$$typeof"in a))throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [`+typeof a.ref+`] instead
`+r(a)+`

`+j(a));if("string"==typeof a.type){for(var l in a.props)if("o"===l[0]&&"n"===l[1]&&"function"!=typeof a.props[l]&&null!=a.props[l])throw new Error(`Component's "`+l+'" property should be a function, but got ['+typeof a.props[l]+`] instead
`+r(a)+`

`+j(a))}if("function"==typeof a.type&&a.type.propTypes){if("Lazy"===a.type.displayName&&u&&!u.lazyPropTypes.has(a.type)){var m="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var x=a.type();u.lazyPropTypes.set(a.type,!0),console.warn(m+"Component wrapped in lazy() is "+q(x))}catch(y){console.warn(m+"We will log the wrapped component's name once it is loaded.")}}b=a.type.propTypes,h=a.props,i=q(a),Object.keys(b).forEach(function(y){var n;try{n=b[y](h,y,i,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(L){n=L}!n||n.message in A||(A[n.message]=!0,console.error("Failed prop type: "+n.message))})}f&&f(a)},e.__h=function(a,b,h){if(!a)throw new Error("Hook can only be invoked from render methods.");g&&g(a,b,h)};var C=function(a,b){return{get:function(){console.warn("getting vnode."+a+" is deprecated, "+b)},set:function(){console.warn("setting vnode."+a+" is not allowed, "+b)}}},J={nodeName:C("nodeName","use vnode.type"),attributes:C("attributes","use vnode.props"),children:C("children","use vnode.props.children")},K=Object.create({},J);e.vnode=function(a){var b=a.props;if(null!==a.type&&null!=b&&("__source"in b||"__self"in b)){var h=a.props={};for(var i in b){var c=b[i];"__source"===i?a.__source=c:"__self"===i?a.__self=c:h[i]=c}}a.__proto__=K,o&&o(a)},e.diffed=function(a){a.__k&&a.__k.forEach(function(m){if(m&&void 0===m.type){delete m.__,delete m.__b;var x=Object.keys(m).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+x+`}.

`+j(a))}});var b=a.__c;if(b&&b.__H){var h=b.__H;Array.isArray(h.__)&&h.__.forEach(function(m){if(m.__h&&(!m.__H||!Array.isArray(m.__H))){var x=q(a);console.warn("In "+x+` you are calling useMemo/useCallback without passing arguments.
This is a noop since it will not be able to memoize, it will execute it every render.

`+j(a))}})}if(k&&k(a),null!=a.__k)for(var i=[],c=0;c<a.__k.length;c++){var d=a.__k[c];if(d&&null!=d.key){var l=d.key;if(-1!==i.indexOf(l)){console.error('Following component has two or more children with the same key attribute: "'+l+`". This may cause glitches and misbehavior in rendering process. Component: 

`+r(a)+`

`+j(a));break}i.push(l)}}}}();export{F as resetPropWarnings};
