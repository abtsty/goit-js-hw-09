!function(){var t=document.querySelector(".color-switcher-btn-start"),e=document.querySelector(".color-switcher-btn-stop"),n=null;function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.setAttribute("disabled",""),t.addEventListener("click",(function(){n=setInterval(o,777),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.9674403e.js.map