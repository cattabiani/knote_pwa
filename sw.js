if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>n(e,o),l={module:{uri:o},exports:r,require:c};s[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-d7aee56d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CbQMbAXL.css",revision:null},{url:"assets/index-doMO5TNN.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"daec28dc56bbf20bd37d6b95aa22ffca"},{url:"manifest.webmanifest",revision:"e9fb397bba49e6c1c663a73c724bedeb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(?:html|css|js)$/,new e.NetworkFirst({cacheName:"html-css-js-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
