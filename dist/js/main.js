(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");let o=setInterval((()=>{let e=(()=>{let e=(new Date("01 january 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600),n=Math.floor(e/60%60),c=Math.floor(e%60);return c<0&&(clearInterval(o),c=0,n=0,t=0),t=(t<10?"0":"")+t,n=(n<10?"0":"")+n,c=(c<10?"0":"")+c,{hours:t,minutes:n,seconds:c}})();t.textContent=e.hours,n.textContent=e.minutes,c.textContent=e.seconds}),1e3)})(),(()=>{const e=document.querySelector("menu");let t,n=0,c=0,o=!0;const l=()=>{o?n+=50:n-=50,!o&&n<=c||o&&n>=c?(document.documentElement.scrollTop=c,cancelAnimationFrame(t)):(document.documentElement.scrollTop=n,requestAnimationFrame(l))},r=()=>{e.classList.toggle("active-menu")},a=e=>{c=e.offsetTop,n=document.documentElement.scrollTop,o=n<c,t=requestAnimationFrame(l)};document.addEventListener("click",(t=>{if(console.log(t.target),t.target.closest(".menu")||t.target.classList.contains("close-btn"))r();else if(t.target.closest("menu>ul>li>a")){t.preventDefault();const e=document.querySelector(t.target.attributes.href.nodeValue);a(e),r()}else if(t.target.closest("main>a")){t.preventDefault();const e=document.querySelector("#service-block");a(e)}else e.classList.contains("active-menu")&&!t.target.closest("menu")&&r()}))})(),(()=>{let e=document.documentElement.clientWidth;const t=document.querySelector(".popup"),n=t.querySelector(".popup-content"),c=document.querySelectorAll(".popup-btn");let o,l=0;const r=()=>{l++,n.style.left=l+"%",l<38?requestAnimationFrame(r):(l=0,cancelAnimationFrame(o))};c.forEach((n=>{n.addEventListener("click",(()=>{t.style.display="block",e>768&&(o=requestAnimationFrame(r))}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")})),window.addEventListener("resize",(()=>{e=document.documentElement.clientWidth}))})(),(()=>{const e=[],t=[],n=[],c=document.getElementById("form1").querySelectorAll("input"),o=document.getElementById("form2").querySelectorAll("input"),l=document.getElementById("form3").querySelectorAll("input"),r=document.querySelectorAll(".calc-square, .calc-count, .calc-day"),a=c=>{"text"===c.type?e.push(c):"email"===c.type?t.push(c):"tel"===c.type&&n.push(c)};c.forEach((e=>{a(e)})),o.forEach((e=>{a(e)})),l.forEach((e=>{a(e)})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z\@\-\_\.\!\~\*\']/,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D\(\)\-/,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();