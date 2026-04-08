"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(p,n){
var i=require('@stdlib/array-base-arraylike2object/dist');function c(e,r){return typeof e[r]=="function"}function v(e){var r,t;for(r=[],t=e.length-1;t>=0;t--)r.push(e[t]);return r}function f(e){var r,t,a,o;for(r=e.data,t=e.accessors[0],a=[],o=r.length-1;o>=0;o--)a.push(t(r,o));return a}function d(e){var r;return c(e,"toReversed")?e.toReversed():(r=i(e),r.accessorProtocol?f(r):v(e))}n.exports=d
});var h=s();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
