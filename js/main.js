!function(n){var o={};function e(l){if(o[l])return o[l].exports;var c=o[l]={i:l,l:!1,exports:{}};return n[l].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=n,e.c=o,e.d=function(n,o,l){e.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:l})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,o){if(1&o&&(n=e(n)),8&o)return n;if(4&o&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&o&&"string"!=typeof n)for(var c in n)e.d(l,c,function(o){return n[o]}.bind(null,c));return l},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\n// if ('serviceWorker' in navigator) {\n//   window.addEventListener('load', function () {\n//     navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n//       Registration was successful\n//       console.log('ServiceWorker registration successful with scope: ', registration.scope);\n//     }, function (err) {\n//       registration failed :(\n//       console.log('ServiceWorker registration failed: ', err);\n//     });\n//   });\n// }\n\n// place your code below\n\n\n// const name = \"Ola\"\n// const city = \"Poznaniu\";\n// console.log(`Mam na imię ${name} i mieszkam w ${city}`);\n// const about = document.querySelector ('.about__paragraph--js');\n// console.log(about);\n// console.log(about.innerHTML);\n\n// about.innerHTML = 'Pozdrawiam !!!';\n\n// let yourAge, yourName;\n\n// function hello (yourName, yourAge) {\n//     console.log(`Witaj ${yourName} ! Masz ${yourAge} lat`);\n\n// };\n\n// hello(\"Karolina\", \"30\");\n\n// const welcome = (yourName, yourAge) => {\n//     console.log(`Witaj ${yourName}! Masz ${yourAge} lat!`);\n// }\n\n// welcome('Asia',15);\n\nconst navigationSwitcher = document.querySelector('.navigation__switcher--js');\n// console.log(navigationSwitcher);\n\nconst navigationList = document.querySelector('.navigation__list--js');\n// console.log(navigationList);\n\nnavigationSwitcher.addEventListener('click', (e) => {\n  navigationList.classList.toggle('navigation__list--visible');\n  if (navigationList.classList.contains('navigation__list--visible')) {\n    navigationSwitcher.innerHTML = '&#935;';\n  } else {\n    navigationSwitcher.innerHTML = '&#926;';\n  }\n\n});\n\n\n// console.log(`Hello world!`);\n\n// for ( let i = 0; i < 100; i++) {\n//   console.log(`${i+1} powtórzenie`);\n// }\n\n// let a = 1;\n// console.log(a++);\n// console.log(a);\n\n// let b = 2;\n// console.log(b--);\n// console.log(b);\n\n// let c = 1;\n// console.log(++c);\n// console.log(c);\n\n// let d = 1;\n// console.log(--d);\n// console.log(d);\n\n// const faces = ['😏', '😎', '😠', 'text'];\n\n// for (let i = 0; i < faces.length; i++) {\n//   console.log(`i: ${i}`);\n//   console.log(`element ${i + 1}: ${faces[i]}`);\n// }\n\n// for (let face of faces) {\n//   console.log(face);\n// }\n\n// let a = 10;\n\n// while (a > 0) {\n//   console.log(a--);\n// }\n\n// let n = 3;\n// while (n < 9) {\n//   console.log(n);\n//   n = n + 3;\n// }\n// console.log(n);\n\n// let b = 4;\n\n// do {\n// b = b+3;\n// console.log(b);\n// } while (b <9) ;\n\n// const person = {\n//   name: 'ola',\n//   surname: 'gardo'\n// }\n\n// for (let property in person) {\n//   console.log(`${property}: ${person[property]}`);\n// }\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxnQkFBZ0IsS0FBSztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsU0FBUyxVQUFVLFFBQVE7O0FBRXZEOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLFNBQVMsU0FBUyxRQUFRO0FBQ3REOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsR0FBRztBQUNILDBDQUEwQztBQUMxQzs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQSxtQkFBbUIsU0FBUztBQUM1QixvQkFBb0IsSUFBSTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLGtCQUFrQjtBQUNwQyx1QkFBdUIsRUFBRTtBQUN6Qiw0QkFBNEIsTUFBTSxJQUFJLFNBQVM7QUFDL0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixTQUFTLElBQUksaUJBQWlCO0FBQ2xEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbi8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuLy8gICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4vLyAgICAgICBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbi8vICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4vLyAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuLy8gICAgICAgcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuLy8gICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5cbi8vIGNvbnN0IG5hbWUgPSBcIk9sYVwiXG4vLyBjb25zdCBjaXR5ID0gXCJQb3puYW5pdVwiO1xuLy8gY29uc29sZS5sb2coYE1hbSBuYSBpbWnEmSAke25hbWV9IGkgbWllc3prYW0gdyAke2NpdHl9YCk7XG4vLyBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcuYWJvdXRfX3BhcmFncmFwaC0tanMnKTtcbi8vIGNvbnNvbGUubG9nKGFib3V0KTtcbi8vIGNvbnNvbGUubG9nKGFib3V0LmlubmVySFRNTCk7XG5cbi8vIGFib3V0LmlubmVySFRNTCA9ICdQb3pkcmF3aWFtICEhISc7XG5cbi8vIGxldCB5b3VyQWdlLCB5b3VyTmFtZTtcblxuLy8gZnVuY3Rpb24gaGVsbG8gKHlvdXJOYW1lLCB5b3VyQWdlKSB7XG4vLyAgICAgY29uc29sZS5sb2coYFdpdGFqICR7eW91ck5hbWV9ICEgTWFzeiAke3lvdXJBZ2V9IGxhdGApO1xuXG4vLyB9O1xuXG4vLyBoZWxsbyhcIkthcm9saW5hXCIsIFwiMzBcIik7XG5cbi8vIGNvbnN0IHdlbGNvbWUgPSAoeW91ck5hbWUsIHlvdXJBZ2UpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhgV2l0YWogJHt5b3VyTmFtZX0hIE1hc3ogJHt5b3VyQWdlfSBsYXQhYCk7XG4vLyB9XG5cbi8vIHdlbGNvbWUoJ0FzaWEnLDE1KTtcblxuY29uc3QgbmF2aWdhdGlvblN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX3N3aXRjaGVyLS1qcycpO1xuLy8gY29uc29sZS5sb2cobmF2aWdhdGlvblN3aXRjaGVyKTtcblxuY29uc3QgbmF2aWdhdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbGlzdC0tanMnKTtcbi8vIGNvbnNvbGUubG9nKG5hdmlnYXRpb25MaXN0KTtcblxubmF2aWdhdGlvblN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fbGlzdC0tdmlzaWJsZScpO1xuICBpZiAobmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZpZ2F0aW9uX19saXN0LS12aXNpYmxlJykpIHtcbiAgICBuYXZpZ2F0aW9uU3dpdGNoZXIuaW5uZXJIVE1MID0gJyYjOTM1Oyc7XG4gIH0gZWxzZSB7XG4gICAgbmF2aWdhdGlvblN3aXRjaGVyLmlubmVySFRNTCA9ICcmIzkyNjsnO1xuICB9XG5cbn0pO1xuXG5cbi8vIGNvbnNvbGUubG9nKGBIZWxsbyB3b3JsZCFgKTtcblxuLy8gZm9yICggbGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbi8vICAgY29uc29sZS5sb2coYCR7aSsxfSBwb3d0w7NyemVuaWVgKTtcbi8vIH1cblxuLy8gbGV0IGEgPSAxO1xuLy8gY29uc29sZS5sb2coYSsrKTtcbi8vIGNvbnNvbGUubG9nKGEpO1xuXG4vLyBsZXQgYiA9IDI7XG4vLyBjb25zb2xlLmxvZyhiLS0pO1xuLy8gY29uc29sZS5sb2coYik7XG5cbi8vIGxldCBjID0gMTtcbi8vIGNvbnNvbGUubG9nKCsrYyk7XG4vLyBjb25zb2xlLmxvZyhjKTtcblxuLy8gbGV0IGQgPSAxO1xuLy8gY29uc29sZS5sb2coLS1kKTtcbi8vIGNvbnNvbGUubG9nKGQpO1xuXG4vLyBjb25zdCBmYWNlcyA9IFsn8J+YjycsICfwn5iOJywgJ/CfmKAnLCAndGV4dCddO1xuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGZhY2VzLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGNvbnNvbGUubG9nKGBpOiAke2l9YCk7XG4vLyAgIGNvbnNvbGUubG9nKGBlbGVtZW50ICR7aSArIDF9OiAke2ZhY2VzW2ldfWApO1xuLy8gfVxuXG4vLyBmb3IgKGxldCBmYWNlIG9mIGZhY2VzKSB7XG4vLyAgIGNvbnNvbGUubG9nKGZhY2UpO1xuLy8gfVxuXG4vLyBsZXQgYSA9IDEwO1xuXG4vLyB3aGlsZSAoYSA+IDApIHtcbi8vICAgY29uc29sZS5sb2coYS0tKTtcbi8vIH1cblxuLy8gbGV0IG4gPSAzO1xuLy8gd2hpbGUgKG4gPCA5KSB7XG4vLyAgIGNvbnNvbGUubG9nKG4pO1xuLy8gICBuID0gbiArIDM7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhuKTtcblxuLy8gbGV0IGIgPSA0O1xuXG4vLyBkbyB7XG4vLyBiID0gYiszO1xuLy8gY29uc29sZS5sb2coYik7XG4vLyB9IHdoaWxlIChiIDw5KSA7XG5cbi8vIGNvbnN0IHBlcnNvbiA9IHtcbi8vICAgbmFtZTogJ29sYScsXG4vLyAgIHN1cm5hbWU6ICdnYXJkbydcbi8vIH1cblxuLy8gZm9yIChsZXQgcHJvcGVydHkgaW4gcGVyc29uKSB7XG4vLyAgIGNvbnNvbGUubG9nKGAke3Byb3BlcnR5fTogJHtwZXJzb25bcHJvcGVydHldfWApO1xuLy8gfVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);