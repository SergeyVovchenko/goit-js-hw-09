import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const s=document.querySelector(".feedback-form"),a="feedback-form-state";s.addEventListener("submit",r);s.addEventListener("input",m);n();let o={email:"",message:""};function r(e){e.preventDefault();const{email:t,message:l}=e.target.elements;if(t.value===""||l.value===""){alert("Fill please all fields");return}console.log(JSON.parse(localStorage.getItem(a))),e.target.reset(),localStorage.removeItem(a)}function m(e){const t=e.target.name;o[t]=e.target.value.trim(),localStorage.setItem(a,JSON.stringify(o))}function n(){const e=JSON.parse(localStorage.getItem(a));if(!e)return;const{email:t,message:l}=s.elements;t.value=e.email,l.value=e.message}
//# sourceMappingURL=commonHelpers2.js.map