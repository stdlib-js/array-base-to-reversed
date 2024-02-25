// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function e(e){var t;return function(r,e){return"function"==typeof r[e]}(e,"toReversed")?e.toReversed():(t=r(e)).accessorProtocol?function(r){var e,t,n,o;for(e=r.data,t=r.accessors[0],n=[],o=e.length-1;o>=0;o--)n.push(t(e,o));return n}(t):function(r){var e,t;for(e=[],t=r.length-1;t>=0;t--)e.push(r[t]);return e}(e)}export{e as default};
//# sourceMappingURL=index.mjs.map
