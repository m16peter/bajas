webpackJsonp([0],{w77c:function(n,l,t){"use strict";function u(n,l,t){return function(n,l,t){return function(u){return u.lift(new y(n,l,t))}}(n,l,t)(this)}function e(n){return r._19(0,[(n()(),r._0(0,0,[[1,0],["scrollEl",1]],null,40,"div",[["class","about full-screen"]],null,null,null,null,null)),(n()(),r._17(-1,null,["\n    "])),(n()(),r._0(2,0,null,null,37,"div",[],null,null,null,null,null)),(n()(),r._17(-1,null,["\n\n      "])),(n()(),r._0(4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(5,null,["",""])),(n()(),r._17(-1,null,["\n\n      "])),(n()(),r._0(7,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(10,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(13,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(16,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(19,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(22,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(25,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(28,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(31,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n      "])),(n()(),r._0(34,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._17(-1,null,["..."])),(n()(),r._17(-1,null,["\n\n      "])),(n()(),r._0(37,0,null,null,1,"h1",[["style","cursor: pointer"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.scrollTo(0)&&u),u},null,null)),(n()(),r._17(-1,null,["SCROLL TOP"])),(n()(),r._17(-1,null,["\n\n    "])),(n()(),r._17(-1,null,["\n  "]))],null,function(n,l){var t=l.component;n(l,5,0,t.i18n(t.about.feature,"title"))})}function o(n){return r._19(0,[(n()(),r._0(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),r._17(-1,null,["\n  "])),(n()(),r.V(16777216,null,null,1,null,e)),r.Z(3,16384,null,0,c.j,[r.K,r.H],{ngIf:[0,"ngIf"]},null),(n()(),r._17(-1,null,["\n"]))],function(n,l){n(l,3,0,l.component.about.loaded)},null)}function i(n){return r._19(0,[r._15(671088640,1,{scrollEl:0}),(n()(),r.V(16777216,null,null,2,null,o)),r.Z(2,16384,null,0,c.j,[r.K,r.H],{ngIf:[0,"ngIf"]},null),r._13(131072,c.b,[r.h]),(n()(),r._17(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,2,0,r._18(l,2,0,r._12(l,3).transform(t.loading$)))},null)}Object.defineProperty(l,"__esModule",{value:!0});var r=t("LMZF"),s=function(){},c=t("Un6q"),a=t("GZB0"),h=t("AP4T"),p=t("6Xbx"),f=t("lI6h"),_=t("qgI0"),g=function(){function n(n,l){this.project=n,this.resultSelector=l}return n.prototype.call=function(n,l){return l.subscribe(new d(n,this.project,this.resultSelector))},n}(),d=function(n){function l(l,t,u){n.call(this,l),this.project=t,this.resultSelector=u,this.index=0}return Object(p.b)(l,n),l.prototype._next=function(n){var l,t=this.index++;try{l=this.project(n,t)}catch(n){return void this.destination.error(n)}this._innerSub(l,n,t)},l.prototype._innerSub=function(n,l,t){var u=this.innerSubscription;u&&u.unsubscribe(),this.add(this.innerSubscription=Object(_.a)(this,n,l,t))},l.prototype._complete=function(){var l=this.innerSubscription;l&&!l.closed||n.prototype._complete.call(this)},l.prototype._unsubscribe=function(){this.innerSubscription=null},l.prototype.notifyComplete=function(l){this.remove(l),this.innerSubscription=null,this.isStopped&&n.prototype._complete.call(this)},l.prototype.notifyNext=function(n,l,t,u,e){this.resultSelector?this._tryNotifyNext(n,l,t,u):this.destination.next(l)},l.prototype._tryNotifyNext=function(n,l,t,u){var e;try{e=this.resultSelector(n,l,t,u)}catch(n){return void this.destination.error(n)}this.destination.next(e)},l}(f.a);h.a.prototype.switchMap=function(n,l){return function(n,l){return function(t){return t.lift(new g(n,l))}}(n,l)(this)},t("Dv4c");var b=t("E9/g"),y=function(){function n(n,l,t){this.nextOrObserver=n,this.error=l,this.complete=t}return n.prototype.call=function(n,l){return l.subscribe(new v(n,this.nextOrObserver,this.error,this.complete))},n}(),v=function(n){function l(l,t,u,e){n.call(this,l);var o=new b.a(t,u,e);o.syncErrorThrowable=!0,this.add(o),this.safeSubscriber=o}return Object(p.b)(l,n),l.prototype._next=function(n){var l=this.safeSubscriber;l.next(n),l.syncErrorThrown?this.destination.error(l.syncErrorValue):this.destination.next(n)},l.prototype._error=function(n){var l=this.safeSubscriber;l.error(n),this.destination.error(l.syncErrorThrown?l.syncErrorValue:n)},l.prototype._complete=function(){var n=this.safeSubscriber;n.complete(),n.syncErrorThrown?this.destination.error(n.syncErrorValue):this.destination.complete()},l}(b.a);h.a.prototype.do=u,h.a.prototype._do=u;var m=t("BORs"),S=function(){function n(){this.init()}return n.prototype.init=function(){this.feature=new m.a,this.languages=[],this.loaded=!1},n.prototype.initialize=function(n){try{console.log("Json loaded!"),this.feature=n.data.feature,this.languages=n.data.languages,this.loaded=!0}catch(n){console.log("Ooops, something went wrong!"),this.init()}},n}(),w={json:"assets/about/about.json",title:"About | bajas.sk",description:"...",err_message:"Ooops, something went wrong!"},j=function(){function n(n,l,t,u,e,o,i,r){var s=this;this.cdr=n,this.http=l,this.i18nService=t,this.pageService=u,this.route=e,this.scrollService=o,this.urlService=i,this.appCommunicationService=r,this.about=new S,this.languageId=void 0,this.pageService.updateTitle(w.title),this.pageService.updateDescription(w.description),this.subscription=this.appCommunicationService.onChangeLanguage$.subscribe(function(n){console.log("App language:",n),s.languageId=n})}return n.prototype.ngOnInit=function(){var n=this;this.appCommunicationService.verifyLanguage(),this.loading$=this.route.paramMap.switchMap(function(l){return console.log("\x3c!-- loading"),n.about.loaded?(n.detectLanguage(l.get("url")),Object(a.a)(n.languageId)):Object(a.a)(n.http.get(w.json).retry(3).subscribe(function(t){n.about.initialize(t),n.detectLanguage(l.get("url")),console.log("loaded --\x3e")},function(n){console.log(w.err_message,n)}))})},n.prototype.detectLanguage=function(n){var l=this.urlService.detectedUrlLanguage(n,this.about.feature,this.about.languages);void 0!==l&&""!==l&&(this.languageId=l,this.appCommunicationService.selectLanguage(l)),this.cdr.detectChanges()},n.prototype.i18n=function(n,l){return this.i18nService.tryI18n(n,l,this.languageId)},n.prototype.scrollTo=function(n){this.scrollService.scrollTo(this.scrollEl,n)},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n}(),O=t("9iV4"),x=t("lcT1"),I=t("QjUj"),E=t("UHIZ"),T=t("J/E1"),C=t("RDPe"),L=t("wwDG"),k=r.Y({encapsulation:0,styles:[[".about[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:transform;-webkit-transform:translateZ(0);transform:translateZ(0);background-color:#fff}.about[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:100px 20px;font-family:cursive}"]],data:{}}),M=r.W("app-about",j,function(n){return r._19(0,[(n()(),r._0(0,0,null,null,1,"app-about",[],null,null,null,i,k)),r.Z(1,245760,null,0,j,[r.h,O.c,x.a,I.a,E.a,T.a,C.a,L.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),Z=function(){};t.d(l,"AboutModuleNgFactory",function(){return P});var P=r.X(s,[],function(n){return r._10([r._11(512,r.j,r.T,[[8,[M]],[3,r.j],r.u]),r._11(4608,c.l,c.k,[r.r,[2,c.p]]),r._11(512,c.c,c.c,[]),r._11(512,E.m,E.m,[[2,E.r],[2,E.k]]),r._11(512,Z,Z,[]),r._11(512,s,s,[]),r._11(1024,E.i,function(){return[[{path:":url",component:j}]]},[])])})}});