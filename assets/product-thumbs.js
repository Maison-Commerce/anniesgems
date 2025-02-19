!function(){"use strict";function t(){return(document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth)<window.theme.sizes.small}const e="[data-image-id]",s="product-images",i="[data-section-type]",o="[data-thumb-item]",r="[data-thumb-link]",n="[data-thumbs-slider]",a="data-active-media",c="data-media-id",d="is-active";customElements.get("product-thumbs")||customElements.define("product-thumbs",class extends HTMLElement{constructor(){super(),this.container=this.closest(i),this.productImages=this.container.querySelectorAll(e),this.productImagesContainer=this.container.querySelector(s),this.productThumbs=this.container.querySelectorAll(o),this.thumbSlider=this.querySelector(n),this.thumbLinks=this.querySelectorAll(r)}connectedCallback(){this.handleEvents(),this.preloadImagesOnHover(),this.activeMediaObserver()}disconnectedCallback(){this.observer&&this.observer.disconnect()}activeMediaObserver(){this.observer=new MutationObserver((t=>{for(const e of t)"attributes"===e.type&&e.attributeName==a&&this.setActiveThumb()})),this.observer.observe(this.productImagesContainer,{attributes:!0,childList:!1,subtree:!1})}handleEvents(){this.thumbLinks.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault();const s=t.closest(o),i=t.getAttribute(c);s.classList.contains(d)||this.dispatchEvent(new CustomEvent("theme:media:select",{bubbles:!0,detail:{id:i}}))})),t.addEventListener("keyup",(e=>{if("Enter"===e.code){const e=t.getAttribute(c),s=this.productImagesContainer.querySelector(`[${c}="${e}"]`)?.querySelectorAll('model-viewer, video, iframe, button, [href], input, [tabindex]:not([tabindex="-1"])')[0];s&&(s.dispatchEvent(new Event("focus")),s.dispatchEvent(new Event("select")))}}))}))}preloadImagesOnHover(){this.thumbLinks.forEach((t=>{t.addEventListener("mouseover",(()=>{const e=t.getAttribute(c);this.productImagesContainer.querySelector(`[${c}="${e}"] img`)?.setAttribute("loading","eager")}))}))}setActiveThumb(){const t=this.productImagesContainer.getAttribute(a),e=this.querySelector(`[${c}="${t}"]`);this.querySelector(`${o}.${d}`)?.classList.remove(d),e?.parentNode.classList.add(d),requestAnimationFrame((()=>{this.scrollToThumb()}))}scrollToThumb(){const e=this.thumbSlider;if(e){const s=e.querySelector(`.${d}`);if(!s)return;const i=e.scrollTop,o=e.scrollLeft,r=e.offsetWidth,n=e.offsetHeight,a=i+n,c=o+r,u=s.offsetTop,l=s.offsetLeft,h=s.offsetWidth,m=s.offsetHeight,b=i>u,v=o>l,f=l+h>c,p=u+m>a||b,g=f||v,E=t();if(p||g){let t=u-n+m,s=l-r+h;b&&(t=u),f&&E&&(s+=parseInt(window.getComputedStyle(e).paddingRight)),v&&(s=l,E&&(s-=parseInt(window.getComputedStyle(e).paddingLeft))),e.scrollTo({top:t,left:s,behavior:"smooth"})}}}})}();
