import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelector("form.feedback-form"),r=document.querySelector('[name="email"]'),m=document.querySelector('[name="message"]');o.addEventListener("input",l);o.addEventListener("submit",c);const s=localStorage.getItem("feedback-form-state")??{};try{const e=JSON.parse(s);e&&e.email&&e.message&&(r.value=e.email.trim(),m.value=e.message.trim())}catch{console.log("error")}function l(e){const a={email:r.value.trim(),message:m.value.trim()},t=JSON.stringify(a);localStorage.setItem("feedback-form-state",t)}function c(e){if(e.preventDefault(),r.value&&m.value){const a=localStorage.getItem("feedback-form-state"),t=JSON.parse(a);t&&console.log(t),localStorage.removeItem("feedback-form-state"),o.reset()}else alert("Введіть обидва значення")}
//# sourceMappingURL=commonHelpers2.js.map
