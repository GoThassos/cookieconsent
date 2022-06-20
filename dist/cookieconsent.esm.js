/*!
* CookieConsent 3.0.0-beta.1
* https://github.com/orestbida/cookieconsent.git
* Author Orest Bida
* Released under the MIT License
*/
const e={mode:'opt-in',revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},t={t:0,o:0,i:0},a=e=>{const a={cookie:o.l};function n(e){return'function'==typeof e}function r(e){return JSON.parse(JSON.stringify(e))}'cc:onFirstConsent'===e&&n(t.t)&&t.t(r(a)),'cc:onConsent'===e&&n(t.o)&&t.o(r(a)),'cc:onChange'===e&&(a.changedCategories=o._,a.changedServices=o.v,n(t.i)&&t.i(r(a))),window.dispatchEvent(new CustomEvent(e,{detail:r(a)}))},n={p:0,u:0,m:0,g:0,h:0,C:0,S:0,k:0,M:0,T:0,A:0,N:0,D:0,B:0,O:0,J:0,V:0,F:0,H:0,j:0,I:0,P:0,G:0,U:0,L:0,R:0,q:0,K:0,W:0,X:{},Y:{}},r=e.cookie,o={Z:null,$:'',ee:{},te:null,l:null,ae:null,ne:null,re:null,oe:'',ie:!0,ce:!1,le:!1,se:!1,de:!1,_e:!1,ve:[],fe:!1,pe:!0,_:[],ue:!1,me:'',ge:!1,be:[],ye:[],he:[],we:[],Ce:!1,Se:!1,ke:!1,xe:[],Me:[],Te:[],Ae:{},Ne:{},De:{},v:{},Be:{},Oe:[],Ee:[]},i=(e,t)=>-1!==e.indexOf(t),c=e=>{var t=document.createElement(e);return'button'===e&&l(t,'type',e),t},l=(e,t,a)=>{e.setAttribute(t,a)},s=(e,t)=>{e.appendChild(t)},d=(e,t,a,n)=>{e.addEventListener(t,a,!0===n&&{passive:!0})},_=e=>{if('object'==typeof e)return Object.keys(e)},v=(e,t)=>{e.classList.add(t)},f=(e,t)=>{e.classList.remove(t)},p=()=>{var e=r.expiresAfterDays;return'function'==typeof e?e(o.me):e},u=(e,t)=>e.filter((e=>!i(t,e))).concat(t.filter((t=>!i(e,t)))),m=e=>{var t='custom';return e.accepted.length===o.be.length?t='all':e.accepted.length===o.he.length&&(t='necessary'),t},g=()=>{o.me=m(y())},b=(e,t)=>{for(var a='accept-',n=_('show-preferencesModal'),r=_('show-consentModal'),o=_(a+'all'),i=_(a+'necessary'),c=_(a+'custom'),s=0;s<n.length;s++)l(n[s],'aria-haspopup','dialog'),d(n[s],'click',(e=>{e.preventDefault(),t.showPreferences()}));for(s=0;s<r.length;s++)l(r[s],'aria-haspopup','dialog'),d(r[s],'click',(e=>{e.preventDefault(),t.show(!0)}));for(s=0;s<o.length;s++)d(o[s],'click',(e=>{v(e,'all')}));for(s=0;s<c.length;s++)d(c[s],'click',(e=>{v(e)}));for(s=0;s<i.length;s++)d(i[s],'click',(e=>{v(e,[])}));function _(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function v(e,a){e.preventDefault(),t.acceptCategory(a),t.hidePreferences(),t.hide()}},y=()=>{var e=o.be.filter((e=>!i(o.ye,e)));return{accepted:o.ye,rejected:e}},h=t=>{if(e.manageScriptTags){var a=o.Oe,n=t||o.l.categories||[],r=o.Ne,s=(e,t)=>{if(t<e.length){var a=e[t],d=o.Ee[t],_=d.Je,v=d.Ve,f=i(n,_),p=!!v&&i(r[_],v);if(!d.Fe){var u=!d.He&&f,m=!d.He&&p,g=d.He&&!f&&i(o._,_),b=d.He&&!p&&i(o.v[_]||[],v);if(u||g||m||b){d.Fe=!0,a.removeAttribute('type'),a.removeAttribute('data-category');var y=a.getAttribute('data-src');y&&a.removeAttribute('data-src');var h=c('script');if(h.textContent=a.innerHTML,((e,t)=>{for(var a=t.attributes,n=a.length,r=0;r<n;r++){var o=a[r].nodeName;l(e,o,t[o]||t.getAttribute(o))}})(h,a),y?h.src=y:y=a.src,y&&(h.onload=h.onerror=()=>{h.onload=h.onerror=null,s(e,++t)}),a.parentNode.replaceChild(h,a),y)return}}s(e,++t)}};o.be.forEach((e=>{(o.v[e]||o.Ne[e]||[]).forEach((t=>{const a=o.Ae[e][t];!a.enabled&&i(o.Ne[e],t)&&'function'==typeof a.onAccept?(a.enabled=!0,a.onAccept()):a.enabled&&!i(o.Ne[e],t)&&'function'==typeof a.onAccept&&(a.enabled=!1,a.onReject())}))})),s(a,0)}},w=e=>{var t=o.Z.guiOptions,a=t&&t.consentModal,r=t&&t.preferencesModal;function c(e,t,a,r,o,c){var l=a&&a.layout,s=a&&a.position,d=a&&!0===a.flipButtons,_=a&&!1===a.equalWeightButtons,p=l&&l.split(' ')||[],u=s&&s.split(' ')||[],m=p[0],g=p[1],b=u[0],y='pm--'===r?u[0]:u[1],h=m,w=t[m];w||(w=t[o],h=o);var C=i(w.je,g)&&g,S=i(w.Ie,b)?b:w.Pe,k=i(w.Ge,y)?y:w.Ue;e.className=c,v(e,r+h),C&&v(e,r+C),S&&v(e,r+S),k&&v(e,r+k),d&&v(e,r+'flip');var x='btn--secondary',M=c+'__';'cm'===c?(n.O&&f(n.O,M+x),n.F&&f(n.F,M+x),_&&(n.O&&v(n.O,M+x),n.F&&v(n.F,M+x))):(n.K&&f(n.K,M+x),_&&n.K&&v(n.K,M+x))}if(0===e&&o.ce){var l=['middle','top','bottom'],s=['left','center','right'],d={box:{je:['wide','inline'],Ie:l,Ge:s,Pe:'bottom',Ue:'right'},cloud:{je:['inline'],Ie:l,Ge:s,Pe:'bottom',Ue:'center'},bar:{je:['inline'],Ie:l.slice(1),Ge:[],Pe:'bottom',Ue:''}};c(n.C,d,a,'cm--','box','cm')}1===e&&c(n.H,{box:{je:[],Ie:[],Ge:[],Pe:'',Ue:''},bar:{je:['wide'],Ie:[],Ge:['left','right'],Pe:'',Ue:'left'}},r,'pm--','box','pm')},C=e=>{var t=o.te&&o.te.consentModal;if(t){!0===o.Z.disablePageInteraction&&v(n.u,'disable--interaction');var a=t.acceptAllBtn,r=t.acceptNecessaryBtn,i=t.showPreferencesBtn,_=t.closeIconLabel,f=t.footer;n.g||(n.g=c('div'),n.C=c('div'),n.S=c('div'),n.k=c('div'),n.A=c('div'),v(n.g,'cm-wrapper'),v(n.C,'cm'),v(n.S,'cm__body'),v(n.k,'cm__texts'),v(n.A,'cm__btns'),l(n.C,'role','dialog'),l(n.C,'aria-modal','true'),l(n.C,'aria-hidden','false'),l(n.C,'aria-labelledby','cm__title'),l(n.C,'aria-describedby','cm__desc'),n.C.style.visibility='hidden',_&&(n.F||(n.F=c('button'),n.F.className='cm__btn cm__btn--close',d(n.F,'click',(()=>{e.hide(),e.acceptCategory([])})),s(n.S,n.F)),l(n.F,'aria-label',_)),s(n.S,n.k),(a||r||i)&&s(n.S,n.A),s(n.C,n.S),s(n.g,n.C),s(n.m,n.g));var p=t.title;p&&(n.M||(n.M=c('div'),n.M.className=n.M.id='cm__title',l(n.M,'role','heading'),l(n.M,'aria-level','2'),s(n.k,n.M)),n.M.innerHTML=p);var u=t.description;if(u&&(o.fe&&(u=u.replace('{{revisionMessage}}',o.pe?'':t.revisionMessage||'')),n.T||(n.T=c('div'),n.T.className=n.T.id='cm__desc',s(n.k,n.T)),n.T.innerHTML=u),a&&(n.B||(n.B=c('button'),v(n.B,'cm__btn'),d(n.B,'click',(()=>{e.hide(),e.acceptCategory('all')}))),n.B.innerHTML=a),r&&(n.O||(n.O=c('button'),v(n.O,'cm__btn'),d(n.O,'click',(()=>{e.hide(),e.acceptCategory([])}))),n.O.innerHTML=r),i&&(n.J||(n.J=c('button'),n.J.className='cm__btn cm__btn--secondary',d(n.J,'click',(()=>{e.showPreferences()}))),n.J.innerHTML=i),!n.D&&i&&(n.D=c('div'),v(n.D,'cm__btn-group'),s(n.D,n.J),s(n.A,n.D)),n.N||(n.N=c('div'),v(n.N,'cm__btn-group'),r&&s(n.N,n.O),a&&s(n.N,n.B),(a||r)&&s(n.S,n.N),s(n.A,n.N)),f){if(!n.V){var m=c('div'),g=c('div');n.V=c('div'),v(m,'cm__footer'),v(g,'cm__links'),v(n.V,'cm__link-group'),s(g,n.V),s(m,g),s(n.C,m)}n.V.innerHTML=f}o.ce=!0,w(0)}},S=e=>{var t=o.te&&o.te.preferencesModal;if(t){var a=t.title,r=t.closeIconLabel,i=t.acceptAllBtn,p=t.acceptNecessaryBtn,u=t.savePreferencesBtn,m=t.sections;if(n.h)n.U=c('div'),v(n.U,'pm__body');else{n.h=c('div'),v(n.h,'pm-wrapper'),n.H=c('div'),n.H.style.visibility='hidden',v(n.H,'pm'),l(n.H,'role','dialog'),l(n.H,'aria-hidden',!0),l(n.H,'aria-modal',!0),d(n.u,'keydown',(t=>{27===t.keyCode&&e.hidePreferences()}),!0),n.j=c('div'),v(n.j,'pm__header'),n.I=c('div'),v(n.I,'pm__title'),l(n.I,'role','heading'),n.P=c('button'),v(n.P,'pm__close-btn'),l(n.P,'aria-label',t.closeIconLabel||''),d(n.P,'click',(()=>{e.hidePreferences()})),n.G=c('div'),v(n.G,'pm__body'),n.R=c('div'),v(n.R,'pm__footer');var g=c('div');v(g,'pm__btns');var b=c('div'),y=c('div');v(b,'pm__btn-group'),v(y,'pm__btn-group'),s(n.R,y),s(n.R,b),s(n.j,n.I),s(n.j,n.P),s(n.H,n.j),s(n.H,n.G),s(n.H,n.R),s(n.h,n.H),s(n.m,n.h)}a&&(n.I.innerHTML=a,r&&l(n.P,'aria-label',r)),m&&m.forEach((e=>{var a=e.title,r=e.description,i=e.linkedCategory,p=i&&o.ge[i],u=e.cookieTable,m=u&&u.body,g=m&&m.length>0,b=!!p,y=b&&o.Ae[i]||!1,h=y&&_(y)||[],w=b&&(!!r||!!g||_(y).length>0),C=c('div');if(v(C,'pm__section'),w||r){var S=c('div');v(S,'pm__section-desc-wrapper')}if(w&&h.length>0){var x=c('div');v(x,'pm__section-services'),h.forEach((e=>{var t=y[e].label||e,a=c('div'),n=c('div'),r=c('div'),o=c('span'),l=c('div');v(a,'pm__service'),v(l,'pm__service-title'),v(o,'gg-code-slash'),v(n,'pm__service-header'),v(r,'pm__service-icon');var d=k(t,e,p,0,!0,i);l.innerHTML=t,s(r,o),s(n,r),s(n,l),s(a,n),s(a,d),s(x,a)})),s(S,x)}if(a){var M=c('div'),T=c(b?'button':'div');if(v(M,'pm__section-title-wrapper'),v(T,'pm__section-title'),T.innerHTML=a,s(M,T),b){C.className+='--toggle';var A=k(a,i,p);if(h.length>0){var N=c('span');v(N,'pm__service-counter'),l(N,'aria-hidden',!0),l(N,'data-servicecounter',h.length);var D=t.serviceCounterLabel;D&&'string'==typeof D&&l(N,'data-counterlabel',D),s(T,N)}if(w){v(C,'pm__section--expandable');var B=i+'-desc';l(T,'aria-expanded',!1),l(T,'aria-controls',B)}s(M,A)}else l(T,'role','heading'),l(T,'aria-level','3');s(C,M)}if(r){var O=c('div');v(O,'pm__section-desc'),O.innerHTML=r,s(S,O)}if(w&&(l(S,'aria-hidden','true'),S.id=B,((e,t,a)=>{d(T,'click',(()=>{t.classList.contains('is-expanded')?(f(t,'is-expanded'),l(a,'aria-expanded','false'),l(e,'aria-hidden','true')):(v(t,'is-expanded'),l(a,'aria-expanded','true'),l(e,'aria-hidden','false'))}),!1)})(S,C,T),g)){var E=c('table'),J=c('thead'),V=c('tbody');v(E,'pm__section-table'),v(J,'pm__table-head'),v(V,'pm__table-body');var F=u.headers,H=_(F),j=n.p.createDocumentFragment(),I=c('tr');l(I,'role','row');for(var P=0;P<H.length;P++){var G=F[H[P]],U=c('th');U.id='cc__row-'+G,l(U,'role','columnheader'),l(U,'scope','col'),v(U,'pm__table-th'),U.innerHTML=G,s(j,U)}s(I,j),s(J,I);var L=n.p.createDocumentFragment();for(P=0;P<m.length;P++){var R=m[P],q=c('tr');l(q,'role','row'),v(q,'pm__table-tr');for(var z=0;z<H.length;z++){var K=H[z],Q=F[K],W=R[K],X=c('td'),Y=c('div');v(X,'pm__table-td'),l(X,'data-column',Q),l(X,'headers','cc__row-'+Q),Y.insertAdjacentHTML('beforeend',W),s(X,Y),s(q,X)}s(L,q)}s(V,L),s(E,J),s(E,V),s(S,E)}(w||r)&&s(C,S),s(n.G,C),n.U?s(n.U,C):s(n.G,C)})),(i||p)&&(p&&(n.K||(n.K=c('button'),v(n.K,'pm__btn'),s(b,n.K),d(n.K,'click',(()=>{h([])}))),n.K.innerHTML=p),i&&(n.q||(n.q=c('button'),v(n.q,'pm__btn'),s(b,n.q),d(n.q,'click',(()=>{h('all')}))),n.q.innerHTML=i)),u&&(n.W||(n.W=c('button'),n.W.className='pm__btn pm__btn--secondary',s(y,n.W),d(n.W,'click',(()=>{h()}))),n.W.innerHTML=u),n.U&&(n.H.replaceChild(n.U,n.G),n.G=n.U),w(1)}function h(t){e.acceptCategory(t),e.hidePreferences(),e.hide()}};function k(e,t,a,r,_,f){var p=c('label'),u=c('input'),m=c('span'),g=c('span'),b=c('span'),y=c('span');if(u.type='checkbox',v(p,'section__toggle-wrapper'),v(u,'section__toggle'),v(b,'toggle__icon-on'),v(y,'toggle__icon-off'),v(m,'toggle__icon'),v(g,'toggle__label'),l(m,'aria-hidden','true'),_?(v(p,'toggle-service'),v(u,'toggle-service'),l(u,'data-category',f),n.Y[f][t]=u):n.X[t]=u,_?(e=>{d(u,'change',(()=>{var t=n.Y[e],a=n.X[e];for(var r in o.De[e]=[],t){const a=t[r];a.checked&&o.De[e].push(a.value)}o.De[e].length>0?a.checked=!0:a.checked=!1}))})(f):(e=>{d(u,'click',(()=>{var t=n.Y[e];if(o.De[e]=[],u.checked)for(var a in t)t[a].checked=!0;else for(a in t)t[a].checked=!1}))})(t),u.value=t,g.textContent=e,s(m,y),s(m,b),o.ie)(a.enabled||a.readOnly)&&(u.checked=!0);else if(_){var h=o.Ne[f];h&&i(h,t)&&(u.checked=!0)}else i(o.l.categories,t)&&(u.checked=!0);return a.readOnly&&(u.disabled=!0),s(p,u),s(p,m),s(p,g),p}const x=e=>{var t=_(o.ee);return i(t,e)?e:i(t,o.$)?o.$:t[0]},M=async e=>{let t=o.$;if(e&&(t=x(e)),o.te=o.ee[t],!o.te)return!1;if('string'==typeof o.te){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(o.te);if(!e)return!1;o.te=e,o.ee[t]=e}else o.te=o.ee[t];return o.$=t,!0},T=e=>{var t=r.domain;o.ue=!1;var a=O(),n=[t,'.'+t];if('www.'===t.slice(0,4)){var c=t.substring(4);n.push(c,'.'+c)}var l,s=e?o.be:o._;s=s.filter((e=>{var t=o.ge[e];return!!t&&!t.readOnly&&!!t.autoClear}));for(var d=0;d<s.length;d++){var _=s[d],v=o.ge[_].autoClear,f=v&&v.cookies||[],p=i(o._,_),u=!i(o.ye,_),m=p&&u;if(e&&u||!e&&m){var g=f.length;!0===v.reloadPage&&m&&(o.ue=!0);for(var b=0;b<g;b++){var y=[],h=f[b].name,w=!!h&&'string'!=typeof h,C=f[b].domain||null,S=f[b].path||!1;if(C&&(n=[C,'.'+C]),w)for(var k=0;k<a.length;k++)h.test(a[k])&&y.push(a[k]);else{var x=(l=h,a.indexOf(l));x>-1&&y.push(a[x])}y.length>0&&D(y,S,n)}}}},A=(e,t,a)=>{var c,l=encodeURIComponent(t),s=a?(c=o.re?new Date-o.re:0,864e5*p()-c):864e5*p(),d=new Date;d.setTime(d.getTime()+s);var _=e+'='+(l||'')+(0!==s?'; expires='+d.toUTCString():'')+'; Path='+r.path+';';_+=' SameSite='+r.sameSite+';',i(window.location.hostname,'.')&&(_+=' Domain='+r.domain+';'),'https:'===window.location.protocol&&(_+=' Secure;'),n.p.cookie=_,JSON.parse(decodeURIComponent(l))},N=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},D=(e,t,a)=>{for(var r=t||'/',o=0;o<e.length;o++){for(var c=0;c<a.length;c++)n.p.cookie=e[o]+'=; path='+r+(i(a[c],'.')?'; domain='+a[c]:'')+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';e[o]}},B=(e,t)=>{let a=n.p.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return a=a?t?a.pop():e:'',a},O=e=>{const t=n.p.cookie.split(/;\s*/);let a=[];for(var r=0;r<t.length;r++){let n=t[r].split('=')[0];if(e)try{e.test(n)&&a.push(n)}catch(e){}else a.push(n)}return a},E={acceptCategory:(t,c)=>{var l=t||void 0,s=c||[],d=!1,v=[];if(l)if('object'==typeof l&&'number'==typeof l.length)for(var f=0;f<l.length;f++)i(o.be,l[f])&&v.push(l[f]);else'string'==typeof l&&('all'===l?v=o.be.slice():i(o.be,l)&&v.push(l));else v=(()=>{var e=n.X,t=[];for(var a in e)e[a].checked&&t.push(e[a].value);return t})(),d=!0;if(s.length>=1)for(f=0;f<s.length;f++)v=v.filter((e=>e!==s[f]));for(f=0;f<o.he.length;f++)i(v,o.he[f])||v.push(o.he[f]);o.ye=v,g(),d||(o.De={}),o.Be=JSON.parse(JSON.stringify(o.Ne)),o.be.forEach((e=>{var t=n.Y[e];if(0===_(t).length)return;const a=o.Ae[e],r=_(a);if(o.Ne[e]=[],i(o.he,e))r.forEach((t=>{o.Ne[e].push(t)}));else if('all'===o.me)d&&o.De[e]&&o.De[e].length>0?o.De[e].forEach((t=>{o.Ne[e].push(t)})):r.forEach((t=>{o.Ne[e].push(t)}));else if('necessary'===o.me)o.Ne[e]=[];else if(d&&o.De[e]&&o.De[e].length>0)o.De[e].forEach((t=>{o.Ne[e].push(t)}));else for(let a in t){const n=t[a];n.checked&&o.Ne[e].push(n.value)}})),(()=>{o._=u(o.ye,o.l.categories||[]);var t=o._.length>0,c=!1;o.be.forEach((e=>{o.v[e]=u(o.Ne[e]||[],o.Be[e]||[]),o.v[e].length>0&&(c=!0)}));var l=n.X;for(var s in l)i(o.ye,s)?l[s].checked=!0:l[s].checked=!1;o.be.forEach((e=>{var t=n.Y[e],a=o.Ne[e];for(var r in t){const e=t[r];i(a,r)?e.checked=!0:e.checked=!1}})),!o.ie&&e.autoClearCookies&&t&&T(),o.ne||(o.ne=new Date),o.oe||(o.oe=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.l={categories:JSON.parse(JSON.stringify(o.ye)),revision:e.revision,data:o.ae,consentTimestamp:o.ne.toISOString(),consentId:o.oe,services:JSON.parse(JSON.stringify(o.Ne))};var d=!1;(o.ie||t||c)&&(o.ie&&(o.ie=!1,d=!0),g(),o.re?o.re=new Date:o.re=o.ne,o.l.lastConsentTimestamp=o.re.toISOString(),A(r.name,JSON.stringify(o.l)),h()),d&&(e.autoClearCookies&&T(!0),a('cc:onFirstConsent'),a('cc:onConsent'),'opt-in'===e.mode)||((t||c)&&a('cc:onChange'),o.ue&&window.location.reload())})()},acceptService:(e,t)=>{if(!e||!t||'string'!=typeof t||!i(o.be,t))return!1;const a=n.Y[t]||{};if(o.De[t]=[],'string'==typeof e)if('all'===e)for(var r in a)a[r].checked=!0,c(a[r]);else for(r in a)a[r].checked=e===r,c(a[r]);else if('object'==typeof e&&Array.isArray(e))for(r in a)i(e,r)?a[r].checked=!0:a[r].checked=!1,c(a[r]);function c(e){e.dispatchEvent(new Event('change'))}E.acceptCategory()},validCookie:e=>''!==B(e,!0),eraseCookies:(e,t,a)=>{var n=[],o=r.domain,i=a?[a,'.'+a]:[o,'.'+o];if(Array.isArray(e))for(var c=0;c<e.length;c++)l(e[c]);else l(e);function l(e){if('string'==typeof e){let t=B(e);''!==t&&n.push(t)}else n=n.concat(O(e))}D(n,t,i)},setLanguage:async(e,t)=>{var a=x(e);return!(e!==a||a===o.$&&!0!==t||!await M(a)||(o.$=a,o.ce&&(C(E),b(n.Le,E)),S(E),0))},getUserPreferences:()=>{var e,t=!o.ie&&y();return{acceptType:o.me,acceptedCategories:o.ie?[]:t.accepted,rejectedCategories:o.ie?[]:t.rejected,acceptedServices:o.ie?{}:o.Ne,rejectedServices:o.ie?{}:(e={},o.be.forEach((t=>{e[t]=u(o.Ne[t]||[],_(o.Ae[t])||[])})),e)}},loadScript:(e,t,a)=>{var r='function'==typeof t;if(n.p.querySelector('script[src="'+e+'"]'))r&&t(!0);else{var o=c('script');if(a&&a.length>0)for(var i=0;i<a.length;++i)a[i]&&l(o,a[i].name,a[i].value);r&&(o.onload=()=>{t(!0)},o.onerror=()=>{t(!1)}),o.src=e,s(n.p.head,o)}},setCookieData:e=>{var t=e.value,a=!1;if('update'===e.mode){o.ae=E.getCookie('data');var n=typeof o.ae==typeof t;if(n&&'object'==typeof o.ae)for(var i in!o.ae&&(o.ae={}),t)o.ae[i]!==t[i]&&(o.ae[i]=t[i],a=!0);else!n&&o.ae||o.ae===t||(o.ae=t,a=!0)}else o.ae=t,a=!0;return a&&(o.l.data=o.ae,A(r.name,JSON.stringify(o.l),!0)),a},getCookie:(e,t)=>{var a=N(B(t||r.name,!0));return e?a[e]:a},getConfig:t=>e[t]||o.Z[t],updateScripts:()=>{h()},show:e=>{!0===e&&C(E),o.ce&&(v(n.u,'show--consent'),l(n.C,'aria-hidden','false'),o.le=!0,setTimeout((()=>{o.Se=n.p.activeElement,o.ve=o.xe}),200))},hide:()=>{o.ce&&(f(n.u,'show--consent'),l(n.C,'aria-hidden','true'),o.le=!1,setTimeout((()=>{o.Se.focus(),o.ve=null}),200))},hidePreferences:()=>{f(n.u,'show--preferences'),o.se=!1,l(n.H,'aria-hidden','true'),setTimeout((()=>{o._e=!1}),1),o.le?(o.ke&&o.ke.focus(),o.ve=o.xe):(o.Se&&o.Se.focus(),o.ve=null),o.de=!1},acceptedCategory:t=>{var a;return a=o.ie&&'opt-in'!==e.mode?o.we:y().accepted||[],i(a,t)},acceptedService:(e,t)=>i(o.Ne[t]||[],e),showPreferences:()=>{v(n.u,'show--preferences'),l(n.H,'aria-hidden','false'),o.se=!0,setTimeout((()=>{o._e=!0}),1),setTimeout((()=>{o.le?o.ke=n.p.activeElement:o.Se=n.p.activeElement,0!==o.Me.length&&(o.Me[3]?o.Me[3].focus():o.Me[0].focus(),o.ve=o.Me)}),200)},validConsent:()=>!o.ie,run:async l=>{if(!n.p.getElementById('cc-main')){if((a=>{o.Z=a,o.ee=a.language.translations,o.ge=o.Z.categories,'boolean'==typeof a.autoShow&&(e.autoShow=a.autoShow);var c=a.cookie;if(c&&'object'==typeof c){var l=c.name,s=c.domain,d=c.path,v=c.sameSite,f=c.expiresAfterDays;l&&(r.name=l),s&&(r.domain=s),d&&(r.path=d),v&&(r.sameSite=v),f&&(r.expiresAfterDays=f)}t.t=a.onFirstConsent,t.o=a.onConsent,t.i=a.onChange;var p=a.mode,u=a.revision,m=a.autoClearCookies,g=a.manageScriptTags,b=a.hideFromBots;'opt-out'===p&&(e.mode=p),'number'==typeof u&&(u>-1&&(e.revision=u),o.fe=!0),'boolean'==typeof m&&(e.autoClearCookies=m),'boolean'==typeof g&&(e.manageScriptTags=g),!1===b&&(e.hideFromBots=!1),!0===e.hideFromBots&&(o.Ce=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),e.autoClearCookies,o.fe,e.manageScriptTags;var y=o.Z.language.default;y&&(o.$=y),o.$=function(){var e,t=o.Z.language.autoDetect;if(t){if('browser'===t)return x(((e=navigator.language||navigator.browserLanguage).length>2&&(e=e[0]+e[1]),e.toLowerCase()));if('document'===t)return x(n.p.documentElement.lang)}return x(o.Z.language.default)}(),o.te=o.ee[o.$],o.$,o.be=_(o.ge),o.be.forEach((e=>{const t=o.ge[e].services||{},a=t&&!!(r=t)&&'object'==typeof r&&!Array.isArray(r)&&_(t)||[];var r;o.Ae[e]={},o.Ne[e]=[],n.Y[e]={},0!==a.length&&a.forEach((a=>{const n=t[a];n.enabled=!1,o.Ae[e][a]=n}))}));for(var h=0;h<o.be.length;h++)!0===o.ge[o.be[h]].readOnly&&o.he.push(o.be[h]);e.manageScriptTags&&(o.Oe=n.p.querySelectorAll('script[data-category]'),o.Ee=[],o.Oe.forEach((e=>{let t=e.getAttribute('data-category')||'',a=e.dataset.service||'',n=!1;if('!'===t.charAt(0)&&(t=t.slice(1),n=!0),'!'===a.charAt(0)&&(a=a.slice(1),n=!0),i(o.be,t)&&(o.Ee.push({Fe:!1,He:n,Je:t,Ve:a}),a)){const e=o.Ae[t];e[a]||(e[a]={enabled:!1})}})))})(l),o.Ce)return;o.l=N(B(r.name,!0)),o.oe=o.l.consentId;var f=void 0!==o.oe;o.ne=o.l.consentTimestamp,o.ne&&(o.ne=new Date(o.ne)),o.re=o.l.lastConsentTimestamp,o.re&&(o.re=new Date(o.re));var p=o.l.data;if(o.ae=void 0!==p?p:null,o.fe&&f&&o.l.revision!==e.revision&&(o.pe=!1),o.ce=o.ie=!(f&&o.pe&&o.ne&&o.re&&o.oe),o.ie,o.ie?'opt-out'===e.mode&&o.be.forEach((e=>{if(o.ge[e].enabled){o.we.push(e);const a=o.Ae[e]||{};for(var t in a)o.Ne[e].push(t)}})):(o.ye=o.l.categories,o.me=m(y()),o.Ne=o.l.services||{}),!await M(null))return;(e=>{n.m=c('div'),n.m.id='cc-main',n.m.style.position='fixed',n.m.style.zIndex='1000000',o.ce&&C(e),S(e),s(o.Z.root||n.p.body,n.m)})(E),(()=>{var e=['[href]','button','input','details','[tabindex="0"]'];function t(t,a){var n=!1,r=!1;try{for(var o,i=t&&t.querySelectorAll(e.join(':not([tabindex="-1"]), ')),c=i.length,l=0;l<c;)o=i[l].getAttribute('data-focus'),r||'1'!==o?'0'===o&&(n=i[l],r||'0'===i[l+1].getAttribute('data-focus')||(r=i[l+1])):r=i[l],l++}catch(e){return[]}a[0]=i[0],a[1]=i[i.length-1],a[2]=n,a[3]=r}t(n.H,o.Me),o.ce&&t(n.C,o.xe)})(),b(null,E),e.autoShow&&o.ce&&E.show(),setTimeout((()=>{v(n.m,'c--anim')}),100),(e=>{var t=!1,a=!1;d(n.u,'keydown',(e=>{'Tab'===e.key&&(o.ve&&(e.shiftKey?n.p.activeElement===o.ve[0]&&(o.ve[1].focus(),e.preventDefault()):n.p.activeElement===o.ve[1]&&(o.ve[0].focus(),e.preventDefault()),a||o.de||(a=!0,!t&&e.preventDefault(),e.shiftKey?o.ve[3]?o.ve[2]?o.ve[2].focus():o.ve[0].focus():o.ve[1].focus():o.ve[3]?o.ve[3].focus():o.ve[0].focus())),!a&&(t=!0))})),d(n.m,'click',(t=>{o._e?n.H.contains(t.target)?o.de=!0:(e.hidePreferences(0),o.de=!1):o.le&&n.C.contains(t.target)&&(o.de=!0)}),!0)})(E),o.ie?'opt-out'===e.mode&&(e.mode,o.we,h(o.we)):(h(),a('cc:onConsent'))}}};var J={init:()=>(r.domain=window.location.hostname,n.p=document,n.u=n.p.documentElement,E)};export{J as default};
