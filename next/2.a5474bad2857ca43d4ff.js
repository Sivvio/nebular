(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"++eV":function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r,o=n("tk/3"),i=n("LRne"),s=n("lJxs"),a=n("JIr8"),u=n("eIep"),c=n("V1Ee"),p=n("t+5P"),f=n("4pP6"),l=n("NUSx"),h=n("iVvT"),d=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),y=new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.baseEndpoint="/api/auth/",e.login={alwaysFail:!1,endpoint:"login",method:"post",requireValidToken:!0,redirect:{success:"/",failure:null},defaultErrors:["Login/Email combination is not correct, please try again."],defaultMessages:["You have been successfully logged in."]},e.register={alwaysFail:!1,endpoint:"register",method:"post",requireValidToken:!0,redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["You have been successfully registered."]},e.requestPass={endpoint:"request-pass",method:"post",redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["Reset password instructions have been sent to your email."]},e.resetPass={endpoint:"reset-pass",method:"put",redirect:{success:"/",failure:null},resetPasswordTokenKey:"reset_password_token",defaultErrors:["Something went wrong, please try again."],defaultMessages:["Your password has been successfully changed."]},e.logout={alwaysFail:!1,endpoint:"logout",method:"delete",redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["You have been successfully logged out."]},e.refreshToken={endpoint:"refresh-token",method:"post",requireValidToken:!0,redirect:{success:null,failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["Your token has been successfully refreshed."]},e.token={class:f.e,key:"data.token",getter:function(t,e,n){return Object(h.b)(e.body,n.token.key)}},e.errors={key:"data.errors",getter:function(t,e,n){return Object(h.b)(e.error,n.errors.key,n[t].defaultErrors)}},e.messages={key:"data.messages",getter:function(t,e,n){return Object(h.b)(e.body,n.messages.key,n[t].defaultMessages)}},e}return d(e,t),e}(l.a)),g=n("fXoL"),O=n("tyNb"),b=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),w=function(t){function e(e,n){var r=t.call(this)||this;return r.http=e,r.route=n,r.defaultOptions=y,r}return b(e,t),e.setup=function(t){return[e,t]},e.prototype.authenticate=function(t){var e=this,n="login",r=this.getOption("login.method"),o=this.getActionEndpoint(n),i=this.getOption("login.requireValidToken");return this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(n){if(e.getOption("login.alwaysFail"))throw e.createFailResponse(t);return n}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption("login.redirect.success"),[],e.getOption("messages.getter")(n,t,e.options),e.createToken(e.getOption("token.getter")(n,t,e.options),i))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.register=function(t){var e=this,n="register",r=this.getOption(n+".method"),o=this.getActionEndpoint(n),i=this.getOption(n+".requireValidToken");return this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(r){if(e.getOption(n+".alwaysFail"))throw e.createFailResponse(t);return r}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption(n+".redirect.success"),[],e.getOption("messages.getter")(n,t,e.options),e.createToken(e.getOption("token.getter")("login",t,e.options),i))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.requestPassword=function(t){var e=this,n="requestPass",r=this.getOption(n+".method"),o=this.getActionEndpoint(n);return this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(t){if(e.getOption(n+".alwaysFail"))throw e.createFailResponse();return t}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption(n+".redirect.success"),[],e.getOption("messages.getter")(n,t,e.options))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.resetPassword=function(t){var e=this;void 0===t&&(t={});var n="resetPass",r=this.getOption(n+".method"),o=this.getActionEndpoint(n),i=this.getOption(n+".resetPasswordTokenKey");return t[i]=this.route.snapshot.queryParams[i],this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(t){if(e.getOption(n+".alwaysFail"))throw e.createFailResponse();return t}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption(n+".redirect.success"),[],e.getOption("messages.getter")(n,t,e.options))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.logout=function(){var t=this,e="logout",n=this.getOption("logout.method"),r=this.getActionEndpoint(e);return Object(i.a)({}).pipe(Object(u.a)(function(e){return r?t.http.request(n,r,{observe:"response"}):Object(i.a)(e)}),Object(s.a)(function(e){if(t.getOption("logout.alwaysFail"))throw t.createFailResponse();return e}),Object(s.a)(function(n){return new c.a(!0,n,t.getOption("logout.redirect.success"),[],t.getOption("messages.getter")(e,n,t.options))}),Object(a.a)(function(n){return t.handleResponseError(n,e)}))},e.prototype.refreshToken=function(t){var e=this,n="refreshToken",r=this.getOption(n+".method"),o=this.getActionEndpoint(n),i=this.getOption(n+".requireValidToken");return this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(r){if(e.getOption(n+".alwaysFail"))throw e.createFailResponse(t);return r}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption(n+".redirect.success"),[],e.getOption("messages.getter")(n,t,e.options),e.createToken(e.getOption("token.getter")(n,t,e.options),i))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.handleResponseError=function(t,e){var n=[];return t instanceof o.d?n=this.getOption("errors.getter")(e,t,this.options):n.push(t instanceof f.a?t.message:"Something went wrong."),Object(i.a)(new c.a(!1,t,this.getOption(e+".redirect.failure"),n))},e.\u0275fac=function(t){return new(t||e)(g.dc(o.b),g.dc(O.a))},e.\u0275prov=g.Mb({token:e,factory:e.\u0275fac}),e}(p.a)},"+q8+":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("i6JN"),o=n("fXoL"),i=function(){function t(){}return t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({factory:function(e){return new(e||t)},imports:[[r.a]]}),t}()},"0ICW":function(t,e,n){"use strict";n.d(e,"g",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"f",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"a",function(){return p}),n.d(e,"e",function(){return f});var r=n("fXoL"),o=[],i={strategies:[],forms:{login:{redirectDelay:500,strategy:"email",rememberMe:!0,showMessages:{success:!0,error:!0},socialLinks:o},register:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},terms:!0,socialLinks:o},requestPassword:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},socialLinks:o},resetPassword:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},socialLinks:o},logout:{redirectDelay:500,strategy:"email"},validation:{password:{required:!0,minLength:4,maxLength:50},email:{required:!0},fullName:{required:!1,minLength:4,maxLength:50}}}},s=new r.r("Nebular Auth Options"),a=new r.r("Nebular User Auth Options"),u=new r.r("Nebular Auth Strategies"),c=new r.r("Nebular Auth Tokens"),p=new r.r("Nebular Simple Interceptor Header"),f=new r.r("Nebular Interceptor Filter")},"4pP6":function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"f",function(){return f}),n.d(e,"e",function(){return h}),n.d(e,"b",function(){return d}),n.d(e,"d",function(){return y}),n.d(e,"c",function(){return g});var r,o=n("iVvT"),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(){function t(){this.payload=null}return t.prototype.getName=function(){return this.constructor.NAME},t.prototype.getPayload=function(){return this.payload},t}(),a=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return Object.setPrototypeOf(r,n.prototype),r}return i(e,t),e}(Error),u=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return Object.setPrototypeOf(r,n.prototype),r}return i(e,t),e}(Error),c=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return Object.setPrototypeOf(r,n.prototype),r}return i(e,t),e}(u),p=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return Object.setPrototypeOf(r,n.prototype),r}return i(e,t),e}(u);function f(t,e,n,r){return new t(e,n,r)}function l(t){if(0===t.length)throw new c("Cannot extract from an empty payload.");var e,n=t.split(".");if(3!==n.length)throw new p("The payload "+t+" is not valid JWT payload and must consist of three parts.");try{e=Object(o.c)(n[1])}catch(r){throw new p("The payload "+t+" is not valid JWT payload and cannot be parsed.")}if(!e)throw new p("The payload "+t+" is not valid JWT payload and cannot be decoded.");return JSON.parse(e)}var h=function(t){function e(e,n,r){var o=t.call(this)||this;o.token=e,o.ownerStrategyName=n,o.createdAt=r;try{o.parsePayload()}catch(i){if(!(i instanceof a))throw i}return o.createdAt=o.prepareCreatedAt(r),o}return i(e,t),e.prototype.parsePayload=function(){this.payload=null},e.prototype.prepareCreatedAt=function(t){return t||new Date},e.prototype.getCreatedAt=function(){return this.createdAt},e.prototype.getValue=function(){return this.token},e.prototype.getOwnerStrategyName=function(){return this.ownerStrategyName},e.prototype.isValid=function(){return!!this.getValue()},e.prototype.toString=function(){return this.token?this.token:""},e.NAME="nb:auth:simple:token",e}(s),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.prepareCreatedAt=function(e){var n=this.getPayload();return n&&n.iat?new Date(1e3*Number(n.iat)):t.prototype.prepareCreatedAt.call(this,e)},e.prototype.parsePayload=function(){if(!this.token)throw new a("Token not found. ");this.payload=l(this.token)},e.prototype.getTokenExpDate=function(){var t=this.getPayload();if(t&&!t.hasOwnProperty("exp"))return null;var e=new Date(0);return e.setUTCSeconds(t.exp),e},e.prototype.isValid=function(){return t.prototype.isValid.call(this)&&(!this.getTokenExpDate()||new Date<this.getTokenExpDate())},e.NAME="nb:auth:jwt:token",e}(h),y=function(t){function e(e,n,r){return void 0===e&&(e={}),t.call(this,function(t){if("string"==typeof t)try{return JSON.parse(t)}catch(e){}return t}(e),n,r)||this}return i(e,t),e.prototype.getValue=function(){return this.token.access_token},e.prototype.getRefreshToken=function(){return this.token.refresh_token},e.prototype.setRefreshToken=function(t){this.token.refresh_token=t},e.prototype.parsePayload=function(){if(!this.token)throw new a("Token not found.");if(!Object.keys(this.token).length)throw new c("Cannot extract payload from an empty token.");this.payload=this.token},e.prototype.getType=function(){return this.token.token_type},e.prototype.isValid=function(){return t.prototype.isValid.call(this)&&(!this.getTokenExpDate()||new Date<this.getTokenExpDate())},e.prototype.getTokenExpDate=function(){return this.token.hasOwnProperty("expires_in")?new Date(this.createdAt.getTime()+1e3*Number(this.token.expires_in)):null},e.prototype.toString=function(){return JSON.stringify(this.token)},e.NAME="nb:auth:oauth2:token",e}(h),g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.parsePayload=function(){t.prototype.parsePayload.call(this),this.parseAccessTokenPayload()},e.prototype.parseAccessTokenPayload=function(){var t=this.getValue();if(!t)throw new a("access_token key not found.");this.accessTokenPayload=l(t)},e.prototype.getAccessTokenPayload=function(){return this.accessTokenPayload},e.prototype.prepareCreatedAt=function(e){var n=this.accessTokenPayload;return n&&n.iat?new Date(1e3*Number(n.iat)):t.prototype.prepareCreatedAt.call(this,e)},e.prototype.isValid=function(){return this.accessTokenPayload&&t.prototype.isValid.call(this)},e.prototype.getTokenExpDate=function(){if(this.accessTokenPayload&&this.accessTokenPayload.hasOwnProperty("exp")){var e=new Date(0);return e.setUTCSeconds(this.accessTokenPayload.exp),e}return t.prototype.getTokenExpDate.call(this)},e.NAME="nb:auth:oauth2:jwt:token",e}(y)},"6y2k":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r,o=n("LRne"),i=n("3E0/"),s=n("t+5P"),a=n("V1Ee"),u=n("NUSx"),c=n("4pP6"),p=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token={class:c.e},e.delay=1e3,e.alwaysFail=!1,e}return p(e,t),e}(u.a)),l=n("fXoL"),h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultOptions=f,e}return h(e,t),e.setup=function(t){return[e,t]},e.prototype.authenticate=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.register=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.requestPassword=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.resetPassword=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.logout=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.refreshToken=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.createDummyResult=function(t){if(this.getOption("alwaysFail"))return new a.a(!1,this.createFailResponse(t),null,["Something went wrong."]);try{var e=this.createToken("test token",!0);return new a.a(!0,this.createSuccessResponse(t),"/",[],["Successfully logged in."],e)}catch(n){return new a.a(!1,this.createFailResponse(t),null,[n.message])}},e.\u0275prov=l.Mb({token:e,factory:e.\u0275fac=function(t){return y(t||e)}}),e}(s.a),y=l.Yb(d)},"89WS":function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"b",function(){return u}),n.d(e,"a",function(){return c}),n.d(e,"d",function(){return p});var r,o=n("4pP6"),i=n("NUSx"),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t){return t.CODE="code",t.TOKEN="token",t}({}),u=function(t){return t.AUTHORIZATION_CODE="authorization_code",t.PASSWORD="password",t.REFRESH_TOKEN="refresh_token",t}({}),c=function(t){return t.NONE="none",t.BASIC="basic",t.REQUEST_BODY="request-body",t}({}),p=new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.baseEndpoint="",e.clientId="",e.clientSecret="",e.clientAuthMethod=c.NONE,e.redirect={success:"/",failure:null},e.defaultErrors=["Something went wrong, please try again."],e.defaultMessages=["You have been successfully authenticated."],e.authorize={endpoint:"authorize",responseType:a.CODE,requireValidToken:!0},e.token={endpoint:"token",grantType:u.AUTHORIZATION_CODE,requireValidToken:!0,class:o.d},e.refresh={endpoint:"token",grantType:u.REFRESH_TOKEN,requireValidToken:!0},e}return s(e,t),e}(i.a))},Abgx:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var r=n("fXoL"),o=n("ofXK"),i=n("tyNb"),s=n("3Pt+"),a=n("F4EV"),u=n("0AKQ"),c=n("DJEY"),p=n("+q8+"),f=n("+Zd3"),l=n("4aFR"),h=n("IVq4"),d=n("BDhN"),y=n("4pP6"),g=n("Y4k2"),O=n("Bc6B"),b=n("znn7"),w=n("6y2k"),k=n("X/Iy"),v=n("++eV"),m=n("0ICW"),T=n("iVvT");function j(t,e){var n=[];return t.strategies.forEach(function(t){var r=t[1],o=e.get(t[0]);o.setOptions(r),n.push(o)}),n}function E(t){var e=[];return t.forEach(function(t){e.push(t.getOption("token.class"))}),e}function P(t){return Object(T.a)(m.g,t)}function A(t){return!0}var _=function(){function t(){}return t.forRoot=function(e){return{ngModule:t,providers:[{provide:m.f,useValue:e},{provide:m.b,useFactory:P,deps:[m.f]},{provide:m.c,useFactory:j,deps:[m.b,r.s]},{provide:m.d,useFactory:E,deps:[m.c]},{provide:b.a,useValue:y.e},{provide:m.a,useValue:"Authorization"},{provide:m.e,useValue:A},{provide:g.b,useClass:g.a},b.b,d.a,O.a,w.a,v.a,k.a]}},t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[o.c,a.a,u.a,c.a,p.a,f.a,l.a,i.g,s.g,h.a]]}),t}()},BDhN:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("LRne"),o=n("lJxs"),i=n("eIep"),s=n("0ICW"),a=n("fXoL"),u=n("Bc6B"),c=function(){function t(t,e){this.tokenService=t,this.strategies=e}return t.prototype.getToken=function(){return this.tokenService.get()},t.prototype.isAuthenticated=function(){return this.getToken().pipe(Object(o.a)(function(t){return t.isValid()}))},t.prototype.isAuthenticatedOrRefresh=function(){var t=this;return this.getToken().pipe(Object(i.a)(function(e){return e.getValue()&&!e.isValid()?t.refreshToken(e.getOwnerStrategyName(),e).pipe(Object(i.a)(function(e){return e.isSuccess()?t.isAuthenticated():Object(r.a)(!1)})):Object(r.a)(e.isValid())}))},t.prototype.onTokenChange=function(){return this.tokenService.tokenChange()},t.prototype.onAuthenticationChange=function(){return this.onTokenChange().pipe(Object(o.a)(function(t){return t.isValid()}))},t.prototype.authenticate=function(t,e){var n=this;return this.getStrategy(t).authenticate(e).pipe(Object(i.a)(function(t){return n.processResultToken(t)}))},t.prototype.register=function(t,e){var n=this;return this.getStrategy(t).register(e).pipe(Object(i.a)(function(t){return n.processResultToken(t)}))},t.prototype.logout=function(t){var e=this;return this.getStrategy(t).logout().pipe(Object(i.a)(function(t){return t.isSuccess()&&e.tokenService.clear().pipe(Object(o.a)(function(){return t})),Object(r.a)(t)}))},t.prototype.requestPassword=function(t,e){return this.getStrategy(t).requestPassword(e)},t.prototype.resetPassword=function(t,e){return this.getStrategy(t).resetPassword(e)},t.prototype.refreshToken=function(t,e){var n=this;return this.getStrategy(t).refreshToken(e).pipe(Object(i.a)(function(t){return n.processResultToken(t)}))},t.prototype.getStrategy=function(t){var e=this.strategies.find(function(e){return e.getName()===t});if(!e)throw new TypeError("There is no Auth Strategy registered under '"+t+"' name");return e},t.prototype.processResultToken=function(t){return t.isSuccess()&&t.getToken()?this.tokenService.set(t.getToken()).pipe(Object(o.a)(function(e){return t})):Object(r.a)(t)},t.\u0275fac=function(e){return new(e||t)(a.dc(u.a),a.dc(s.c))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac}),t}()},Bc6B:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("2Vo4"),o=n("LRne"),i=n("pLZG"),s=n("w1tV"),a=n("fXoL"),u=n("Y4k2"),c=function(){function t(t){this.tokenStorage=t,this.token$=new r.a(null),this.publishStoredToken()}return t.prototype.tokenChange=function(){return this.token$.pipe(Object(i.a)(function(t){return!!t}),Object(s.a)())},t.prototype.set=function(t){return this.tokenStorage.set(t),this.publishStoredToken(),Object(o.a)(null)},t.prototype.get=function(){var t=this.tokenStorage.get();return Object(o.a)(t)},t.prototype.clear=function(){return this.tokenStorage.clear(),this.publishStoredToken(),Object(o.a)(null)},t.prototype.publishStoredToken=function(){this.token$.next(this.tokenStorage.get())},t.\u0275fac=function(e){return new(e||t)(a.dc(u.b))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac}),t}()},NUSx:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(){}}()},V1Ee:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e,n,r,o,i){void 0===i&&(i=null),this.success=t,this.response=e,this.redirect=n,this.errors=[],this.messages=[],this.errors=this.errors.concat([r]),r instanceof Array&&(this.errors=r),this.messages=this.messages.concat([o]),o instanceof Array&&(this.messages=o),this.token=i}return t.prototype.getResponse=function(){return this.response},t.prototype.getToken=function(){return this.token},t.prototype.getRedirect=function(){return this.redirect},t.prototype.getErrors=function(){return this.errors.filter(function(t){return!!t})},t.prototype.getMessages=function(){return this.messages.filter(function(t){return!!t})},t.prototype.isSuccess=function(){return this.success},t.prototype.isFailure=function(){return!this.success},t}()},"X/Iy":function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r,o=n("tk/3"),i=n("LRne"),s=n("eIep"),a=n("lJxs"),u=n("JIr8"),c=n("MGne"),p=n("t+5P"),f=n("4pP6"),l=n("V1Ee"),h=n("89WS"),d=n("fXoL"),y=n("tyNb"),g=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),O=function(){return(O=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},b=function(t){function e(e,n,r){var o,c,p=t.call(this)||this;return p.http=e,p.route=n,p.window=r,p.redirectResultHandlers=((o={})[h.c.CODE]=function(){return Object(i.a)(p.route.snapshot.queryParams).pipe(Object(s.a)(function(t){return t.code?p.requestToken(t.code):Object(i.a)(new l.a(!1,t,p.getOption("redirect.failure"),p.getOption("defaultErrors"),[]))}))},o[h.c.TOKEN]=function(){var t=p.getOption("authorize.requireValidToken");return Object(i.a)(p.route.snapshot.fragment).pipe(Object(a.a)(function(t){return p.parseHashAsQueryParams(t)}),Object(a.a)(function(e){return e.error?new l.a(!1,e,p.getOption("redirect.failure"),p.getOption("defaultErrors"),[]):new l.a(!0,e,p.getOption("redirect.success"),[],p.getOption("defaultMessages"),p.createToken(e,t))}),Object(u.a)(function(t){var e=[];return e.push(t instanceof f.a?t.message:"Something went wrong."),Object(i.a)(new l.a(!1,t,p.getOption("redirect.failure"),e))}))},o),p.redirectResults=((c={})[h.c.CODE]=function(){return Object(i.a)(p.route.snapshot.queryParams).pipe(Object(a.a)(function(t){return!(!t||!t.code&&!t.error)}))},c[h.c.TOKEN]=function(){return Object(i.a)(p.route.snapshot.fragment).pipe(Object(a.a)(function(t){return p.parseHashAsQueryParams(t)}),Object(a.a)(function(t){return!(!t||!t.access_token&&!t.error)}))},c),p.defaultOptions=h.d,p}return g(e,t),e.setup=function(t){return[e,t]},Object.defineProperty(e.prototype,"responseType",{get:function(){return this.getOption("authorize.responseType")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clientAuthMethod",{get:function(){return this.getOption("clientAuthMethod")},enumerable:!1,configurable:!0}),e.prototype.authenticate=function(t){var e=this;return this.getOption("token.grantType")===h.b.PASSWORD?this.passwordToken(t.email,t.password):this.isRedirectResult().pipe(Object(s.a)(function(t){return t?e.getAuthorizationResult():(e.authorizeRedirect(),Object(i.a)(new l.a(!0)))}))},e.prototype.getAuthorizationResult=function(){var t=this.redirectResultHandlers[this.responseType];if(t)return t.call(this);throw new Error("'"+this.responseType+"' responseType is not supported,\n                      only 'token' and 'code' are supported now")},e.prototype.refreshToken=function(t){var e=this,n=this.getActionEndpoint("refresh"),r=this.getOption("refresh.requireValidToken"),i=this.buildAuthHeader()||new o.e;return i=i.append("Content-Type","application/x-www-form-urlencoded"),this.http.post(n,this.buildRefreshRequestData(t),{headers:i}).pipe(Object(a.a)(function(n){return new l.a(!0,n,e.getOption("redirect.success"),[],e.getOption("defaultMessages"),e.createRefreshedToken(n,t,r))}),Object(u.a)(function(t){return e.handleResponseError(t)}))},e.prototype.passwordToken=function(t,e){var n=this,r=this.getActionEndpoint("token"),i=this.getOption("token.requireValidToken"),s=this.buildAuthHeader()||new o.e;return s=s.append("Content-Type","application/x-www-form-urlencoded"),this.http.post(r,this.buildPasswordRequestData(t,e),{headers:s}).pipe(Object(a.a)(function(t){return new l.a(!0,t,n.getOption("redirect.success"),[],n.getOption("defaultMessages"),n.createToken(t,i))}),Object(u.a)(function(t){return n.handleResponseError(t)}))},e.prototype.authorizeRedirect=function(){this.window.location.href=this.buildRedirectUrl()},e.prototype.isRedirectResult=function(){return this.redirectResults[this.responseType].call(this)},e.prototype.requestToken=function(t){var e=this,n=this.getActionEndpoint("token"),r=this.getOption("token.requireValidToken"),i=this.buildAuthHeader()||new o.e;return i=i.append("Content-Type","application/x-www-form-urlencoded"),this.http.post(n,this.buildCodeRequestData(t),{headers:i}).pipe(Object(a.a)(function(t){return new l.a(!0,t,e.getOption("redirect.success"),[],e.getOption("defaultMessages"),e.createToken(t,r))}),Object(u.a)(function(t){return e.handleResponseError(t)}))},e.prototype.buildCodeRequestData=function(t){var e={grant_type:this.getOption("token.grantType"),code:t,redirect_uri:this.getOption("token.redirectUri"),client_id:this.getOption("clientId")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(e)))},e.prototype.buildRefreshRequestData=function(t){var e={grant_type:this.getOption("refresh.grantType"),refresh_token:t.getRefreshToken(),scope:this.getOption("refresh.scope"),client_id:this.getOption("clientId")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(e)))},e.prototype.buildPasswordRequestData=function(t,e){var n={grant_type:this.getOption("token.grantType"),username:t,password:e,scope:this.getOption("token.scope")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(n)))},e.prototype.buildAuthHeader=function(){if(this.clientAuthMethod===h.a.BASIC){if(this.getOption("clientId")&&this.getOption("clientSecret"))return new o.e({Authorization:"Basic "+btoa(this.getOption("clientId")+":"+this.getOption("clientSecret"))});throw Error("For basic client authentication method, please provide both clientId & clientSecret.")}},e.prototype.cleanParams=function(t){return Object.entries(t).forEach(function(e){return!e[1]&&delete t[e[0]]}),t},e.prototype.addCredentialsToParams=function(t){if(this.clientAuthMethod===h.a.REQUEST_BODY){if(this.getOption("clientId")&&this.getOption("clientSecret"))return O(O({},t),{client_id:this.getOption("clientId"),client_secret:this.getOption("clientSecret")});throw Error("For request body client authentication method, please provide both clientId & clientSecret.")}return t},e.prototype.handleResponseError=function(t){var e=[];return t instanceof o.d?t.error.error_description?e.push(t.error.error_description):e=this.getOption("defaultErrors"):e.push(t instanceof f.a?t.message:"Something went wrong."),Object(i.a)(new l.a(!1,t,this.getOption("redirect.failure"),e,[]))},e.prototype.buildRedirectUrl=function(){var t=O({response_type:this.getOption("authorize.responseType"),client_id:this.getOption("clientId"),redirect_uri:this.getOption("authorize.redirectUri"),scope:this.getOption("authorize.scope"),state:this.getOption("authorize.state")},this.getOption("authorize.params"));return this.getActionEndpoint("authorize")+"?"+this.urlEncodeParameters(this.cleanParams(t))},e.prototype.parseHashAsQueryParams=function(t){return t?t.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=decodeURIComponent(n[1]),t},{}):{}},e.prototype.urlEncodeParameters=function(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},e.prototype.createRefreshedToken=function(t,e,n){var r=this.createToken(t,n);return!r.getRefreshToken()&&e.getRefreshToken()&&r.setRefreshToken(e.getRefreshToken()),r},e.prototype.register=function(t){throw new Error("`register` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")},e.prototype.requestPassword=function(t){throw new Error("`requestPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")},e.prototype.resetPassword=function(t){throw void 0===t&&(t={}),new Error("`resetPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")},e.prototype.logout=function(){return Object(i.a)(new l.a(!0))},e.\u0275fac=function(t){return new(t||e)(d.dc(o.b),d.dc(y.a),d.dc(c.f))},e.\u0275prov=d.Mb({token:e,factory:e.\u0275fac}),e}(p.a)},Y4k2:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return u});var r,o=n("fXoL"),i=n("znn7"),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(){return function(){}}(),u=function(t){function e(e){var n=t.call(this)||this;return n.parceler=e,n.key="auth_app_token",n}return s(e,t),e.prototype.get=function(){var t=localStorage.getItem(this.key);return this.parceler.unwrap(t)},e.prototype.set=function(t){var e=this.parceler.wrap(t);localStorage.setItem(this.key,e)},e.prototype.clear=function(){localStorage.removeItem(this.key)},e.\u0275fac=function(t){return new(t||e)(o.dc(i.b))},e.\u0275prov=o.Mb({token:e,factory:e.\u0275fac}),e}(a)},iVvT:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u});var r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(arguments.length<1||"object"!=typeof arguments[0])return!1;if(arguments.length<2)return arguments[0];var n,a,u=arguments[0],c=Array.prototype.slice.call(arguments,1);return c.forEach(function(t){"object"!=typeof t||Array.isArray(t)||Object.keys(t).forEach(function(e){return a=u[e],(n=t[e])===u?void 0:"object"!=typeof n||null===n?void(u[e]=n):Array.isArray(n)?void(u[e]=s(n)):o(n)?void(u[e]=i(n)):"object"!=typeof a||null===a||Array.isArray(a)?void(u[e]=r({},n)):void(u[e]=r(a,n))})}),u};function o(t){return t instanceof Date||t instanceof RegExp}function i(t){if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);throw new Error("cloneSpecificValue: Unexpected situation")}function s(t){var e=[];return t.forEach(function(t,n){e[n]="object"==typeof t&&null!==t?Array.isArray(t)?s(t):o(t)?i(t):r({},t):t}),e}function a(t,e,n){void 0===t&&(t={});var o=e.split("."),i=r({},t||{});return o.forEach(function(t){i=i&&void 0!==i[t]?i[t]:void 0}),void 0===i?n:i}function u(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("Illegal base64url string!")}return function(t){return decodeURIComponent(Array.prototype.map.call(function(t){var e="";if((t=String(t).replace(/=+$/,"")).length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var n=0,r=void 0,o=void 0,i=0;o=t.charAt(i++);~o&&(r=n%4?64*r+o:o,n++%4)?e+=String.fromCharCode(255&r>>(-2*n&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return e}(t),function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}(e)}},"t+5P":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("tk/3"),o=n("iVvT"),i=n("4pP6"),s=function(){function t(){}return t.prototype.setOptions=function(t){this.options=Object(o.a)({},this.defaultOptions,t)},t.prototype.getOption=function(t){return Object(o.b)(this.options,t,null)},t.prototype.createToken=function(t,e){var n=Object(i.f)(this.getOption("token.class"),t,this.getName());if(e&&!n.isValid())throw new i.a("Token is empty or invalid.");return n},t.prototype.getName=function(){return this.getOption("name")},t.prototype.createFailResponse=function(t){return new r.f({body:{},status:401})},t.prototype.createSuccessResponse=function(t){return new r.f({body:{},status:200})},t.prototype.getActionEndpoint=function(t){var e=this.getOption(t+".endpoint"),n=this.getOption("baseEndpoint");return e?n+e:""},t}()},znn7:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a});var r=n("fXoL"),o=n("4pP6"),i=n("0ICW"),s=new r.r("Nebular Auth Options"),a=function(){function t(t,e){this.fallbackClass=t,this.tokenClasses=e}return t.prototype.wrap=function(t){return JSON.stringify({name:t.getName(),ownerStrategyName:t.getOwnerStrategyName(),createdAt:t.getCreatedAt().getTime(),value:t.toString()})},t.prototype.unwrap=function(t){var e=this.fallbackClass,n="",r="",i=null,s=this.parseTokenPack(t);return s&&(e=this.getClassByName(s.name)||this.fallbackClass,n=s.value,r=s.ownerStrategyName,i=new Date(Number(s.createdAt))),Object(o.f)(e,n,r,i)},t.prototype.getClassByName=function(t){return this.tokenClasses.find(function(e){return e.NAME===t})},t.prototype.parseTokenPack=function(t){try{return JSON.parse(t)}catch(e){}return null},t.\u0275fac=function(e){return new(e||t)(r.dc(s),r.dc(i.d))},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac}),t}()}}]);