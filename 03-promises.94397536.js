function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector("form"),u=l.elements.delay,s=l.elements.amount,d=l.elements.step;function a(e,n){return new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function f({position:n,delay:t}){e(r).Notify.success(`Fulfilled promise ${n} in ${t}ms`)}function c({position:n,delay:t}){e(r).Notify.failure(`Rejected promise ${n} in ${t}ms`)}l.addEventListener("submit",(function(e){e.preventDefault();let n=Number(u.value);for(let e=1;e<=Number(s.value);e++)a(e,n).then(f).catch(c),n+=Number(d.value)}));
//# sourceMappingURL=03-promises.94397536.js.map
