(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");let n=setInterval((()=>{let e=(()=>{let e=(new Date("01 january 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600),o=Math.floor(e/60%60),c=Math.floor(e%60);return c<0&&(clearInterval(n),c=0,o=0,t=0),t=(t<10?"0":"")+t,o=(o<10?"0":"")+o,c=(c<10?"0":"")+c,{hours:t,minutes:o,seconds:c}})();t.textContent=e.hours,o.textContent=e.minutes,c.textContent=e.seconds}),1e3)})(),(()=>{const e=document.querySelector("menu");let t,o=0,c=0,n=!0;const a=()=>{n?o+=50:o-=50,!n&&o<=c||n&&o>=c?(document.documentElement.scrollTop=c,cancelAnimationFrame(t)):(document.documentElement.scrollTop=o,requestAnimationFrame(a))},l=()=>{e.classList.toggle("active-menu")},r=e=>{c=e.offsetTop,o=document.documentElement.scrollTop,n=o<c,t=requestAnimationFrame(a)};document.addEventListener("click",(t=>{if(t.target.closest(".menu")||t.target.classList.contains("close-btn"))l();else if(t.target.closest("menu>ul>li>a")){t.preventDefault();const e=document.querySelector(t.target.attributes.href.nodeValue);r(e),l()}else if(t.target.closest("main>a")){t.preventDefault();const e=document.querySelector("#service-block");r(e)}else e.classList.contains("active-menu")&&!t.target.closest("menu")&&l()}))})(),(()=>{let e=document.documentElement.clientWidth;const t=document.querySelector(".popup"),o=t.querySelector(".popup-content"),c=document.querySelectorAll(".popup-btn");let n,a=0;const l=()=>{a++,o.style.left=a+"%",a<38?requestAnimationFrame(l):(a=0,cancelAnimationFrame(n))};c.forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",e>768&&(n=requestAnimationFrame(l))}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")})),window.addEventListener("resize",(()=>{e=document.documentElement.clientWidth}))})(),(()=>{const e=[],t=[],o=[],c=document.getElementById("form1").querySelectorAll("input"),n=document.getElementById("form2").querySelectorAll("input"),a=document.getElementById("form3").querySelectorAll("input"),l=document.querySelectorAll(".calc-square, .calc-count, .calc-day"),r=c=>{"text"===c.type?e.push(c):"email"===c.type?t.push(c):"tel"===c.type&&o.push(c)};c.forEach((e=>{r(e)})),n.forEach((e=>{r(e)})),a.forEach((e=>{r(e)})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z\@\-\_\.\!\~\*\']/,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D\(\)\-/,"")}))})),l.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let c,n,a=0;const l=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(t,a,"portfolio-item-active"),l(c,a,"dot-active"),a++,a>=t.length&&(a=0),r(t,a,"portfolio-item-active"),r(c,a,"dot-active")},u=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,a,"portfolio-item-active"),l(c,a,"dot-active"),e.target.matches("#arrow-right")?(a++,a>=t.length&&(a=0)):e.target.matches("#arrow-left")?(a--,a<0&&(a=t.length-1)):e.target.classList.contains("dot")&&c.forEach(((t,o)=>{e.target===t&&(a=o)})),r(t,a,"portfolio-item-active"),r(c,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),(()=>{let e=0;for(;e<t.length;){let t=document.createElement("li");t.classList.add("dot"),0==e&&t.classList.add("dot-active"),o.append(t),e++}c=document.querySelectorAll(".dot")})(),u(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==c&&t.target!==n&&t.target!==a||(()=>{const t=+o.options[o.selectedIndex].value,r=+c.value;let s=0,u=1,i=1;n.value>1&&(u+=+n.value/10),a.value&&a.value<5?i=2:a.value&&a.value<10&&(i=1.5),s=t&&r?e*t*r*u*i:0,l.textContent=s})()}))})(100)})();