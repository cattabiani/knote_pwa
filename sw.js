if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const o=e=>n(e,c),l={module:{uri:c},exports:r,require:o};s[c]=Promise.all(i.map((e=>l[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-d7aee56d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bhsy_65w.js",revision:null},{url:"assets/index-Dkz7GIdB.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"ccd54bbdc1b2e5ac871ff55ccbdfb362"},{url:"manifest.webmanifest",revision:"e9fb397bba49e6c1c663a73c724bedeb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(?:html|css|js)$/,new e.NetworkFirst({cacheName:"html-css-js-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
