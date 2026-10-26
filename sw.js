const CACHE="sh-taxi-shell-v66";
const CORE=["./","./index.html","./manifest.json","./icons/sh-taxi.svg"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("sh-taxi-shell-")&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  if(event.request.mode==="navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/sw.js")){
    event.respondWith(fetch(event.request,{cache:"no-store"}).then(response=>{
      if(response.ok && (url.pathname.endsWith("/index.html") || url.pathname.endsWith("/sw.js"))){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(url.pathname.endsWith("/sw.js")?"./sw.js":"./index.html",copy));
      }
      return response;
    }).catch(()=>caches.match(url.pathname.endsWith("/sw.js")?"./sw.js":"./index.html")));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
    return response;
  })));
});