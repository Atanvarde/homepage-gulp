!function(n){var e={};function l(i){if(e[i])return e[i].exports;var t=e[i]={i:i,l:!1,exports:{}};return n[i].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=e,l.d=function(n,e,i){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)l.d(i,t,function(e){return n[e]}.bind(null,t));return i},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="",l(l.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\n// const name = \"Ola\"\n// const city = \"Poznaniu\";\n// console.log(`Mam na imię ${name} i mieszkam w ${city}`);\n// const about = document.querySelector ('.about__paragraph--js');\n// console.log(about);\n// console.log(about.innerHTML);\n\n// about.innerHTML = 'Pozdrawiam !!!';\n\n// let yourAge, yourName;\n\n// function hello (yourName, yourAge) {\n//     console.log(`Witaj ${yourName} ! Masz ${yourAge} lat`);\n\n// };\n\n// hello(\"Karolina\", \"30\");\n\n// const welcome = (yourName, yourAge) => {\n//     console.log(`Witaj ${yourName}! Masz ${yourAge} lat!`);\n// }\n\n// welcome('Asia',15);\n\nconst navigationSwitcher = document.querySelector('.navigation__switcher--js');\nconsole.log(navigationSwitcher);\n\nconst navigationList = document.querySelector('.navigation__list--js');\nconsole.log(navigationList);\n\nnavigationSwitcher.addEventListener('click', (e) => {\n    navigationList.classList.toggle('navigation__list--visible');\n    if (navigationList.classList.contains('navigation__list--visible')) {\n        navigationSwitcher.innerHTML = '&#935;';\n    } else {\n        navigationSwitcher.innerHTML = '&#926;';\n    }\n\n});\n\n\nconsole.log(`Hello world!`);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxnQkFBZ0IsS0FBSztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsU0FBUyxVQUFVLFFBQVE7O0FBRXZEOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLFNBQVMsU0FBUyxRQUFRO0FBQ3REOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsS0FBSztBQUNMLDhDQUE4QztBQUM5Qzs7QUFFQSxDQUFDOzs7QUFHRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuXG4vLyBjb25zdCBuYW1lID0gXCJPbGFcIlxuLy8gY29uc3QgY2l0eSA9IFwiUG96bmFuaXVcIjtcbi8vIGNvbnNvbGUubG9nKGBNYW0gbmEgaW1pxJkgJHtuYW1lfSBpIG1pZXN6a2FtIHcgJHtjaXR5fWApO1xuLy8gY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmFib3V0X19wYXJhZ3JhcGgtLWpzJyk7XG4vLyBjb25zb2xlLmxvZyhhYm91dCk7XG4vLyBjb25zb2xlLmxvZyhhYm91dC5pbm5lckhUTUwpO1xuXG4vLyBhYm91dC5pbm5lckhUTUwgPSAnUG96ZHJhd2lhbSAhISEnO1xuXG4vLyBsZXQgeW91ckFnZSwgeW91ck5hbWU7XG5cbi8vIGZ1bmN0aW9uIGhlbGxvICh5b3VyTmFtZSwgeW91ckFnZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGBXaXRhaiAke3lvdXJOYW1lfSAhIE1hc3ogJHt5b3VyQWdlfSBsYXRgKTtcblxuLy8gfTtcblxuLy8gaGVsbG8oXCJLYXJvbGluYVwiLCBcIjMwXCIpO1xuXG4vLyBjb25zdCB3ZWxjb21lID0gKHlvdXJOYW1lLCB5b3VyQWdlKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coYFdpdGFqICR7eW91ck5hbWV9ISBNYXN6ICR7eW91ckFnZX0gbGF0IWApO1xuLy8gfVxuXG4vLyB3ZWxjb21lKCdBc2lhJywxNSk7XG5cbmNvbnN0IG5hdmlnYXRpb25Td2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19zd2l0Y2hlci0tanMnKTtcbmNvbnNvbGUubG9nKG5hdmlnYXRpb25Td2l0Y2hlcik7XG5cbmNvbnN0IG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QtLWpzJyk7XG5jb25zb2xlLmxvZyhuYXZpZ2F0aW9uTGlzdCk7XG5cbm5hdmlnYXRpb25Td2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fbGlzdC0tdmlzaWJsZScpO1xuICAgIGlmIChuYXZpZ2F0aW9uTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmlnYXRpb25fX2xpc3QtLXZpc2libGUnKSkge1xuICAgICAgICBuYXZpZ2F0aW9uU3dpdGNoZXIuaW5uZXJIVE1MID0gJyYjOTM1Oyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmF2aWdhdGlvblN3aXRjaGVyLmlubmVySFRNTCA9ICcmIzkyNjsnO1xuICAgIH1cblxufSk7XG5cblxuY29uc29sZS5sb2coYEhlbGxvIHdvcmxkIWApO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);