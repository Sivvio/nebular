(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"3leM":function(t,e,n){"use strict";n.r(e),n.d(e,"ToggleModule",(function(){return M}));var o=n("3Pt+"),i=n("0AKQ"),r=n("ofXK"),c=n("IVq4"),s=n("fXoL"),l=function(){function t(){}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[r.c,c.a]]}),t}(),a=n("tyNb"),b=n("S+eJ"),g=n("R0Ic"),u=n("XNiG"),d=n("1G5W"),p=n("FA0J"),h=n("NfCQ"),f=n("FuSZ");function m(t,e){1&t&&s.Rb(0,"nb-icon",6)}var y=["*"],k=function(){function t(t,e,n,o,i){this.changeDetector=t,this.layoutDirection=e,this.renderer=n,this.hostElement=o,this.zone=i,this.onChange=function(){},this.onTouched=function(){},this.destroy$=new u.a,this._checked=!1,this._disabled=!1,this._status="basic",this.labelPosition="end",this.checkedChange=new s.o}return Object.defineProperty(t.prototype,"checked",{get:function(){return this._checked},set:function(t){this._checked=Object(p.a)(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=Object(p.a)(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"status",{get:function(){return this._status},set:function(t){""===t&&(Object(p.b)("NbToggle"),t="basic"),this._status=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"primary",{get:function(){return"primary"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"success",{get:function(){return"success"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"warning",{get:function(){return"warning"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"danger",{get:function(){return"danger"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"info",{get:function(){return"info"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"basic",{get:function(){return"basic"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"control",{get:function(){return"control"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelLeft",{get:function(){return"left"===this.labelPosition},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelRight",{get:function(){return"right"===this.labelPosition},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelStart",{get:function(){return"start"===this.labelPosition},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelEnd",{get:function(){return"end"===this.labelPosition},enumerable:!1,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this.layoutDirection.onDirectionChange().pipe(Object(d.a)(this.destroy$)).subscribe((function(){return t.changeDetector.detectChanges()}))},t.prototype.ngAfterViewInit=function(){var t=this;this.zone.runOutsideAngular((function(){return setTimeout((function(){t.renderer.addClass(t.hostElement.nativeElement,"nb-transition")}))}))},t.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.complete()},t.prototype.checkState=function(){return this.checked?this.layoutDirection.isLtr()?"right":"left":this.layoutDirection.isLtr()?"left":"right"},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.writeValue=function(t){this.checked=t,this.changeDetector.markForCheck()},t.prototype.setDisabledState=function(t){this.disabled=Object(p.a)(t),this.changeDetector.markForCheck()},t.prototype.updateValue=function(t){this.checked=t.target.checked,this.checkedChange.emit(this.checked),this.onChange(this.checked)},t.prototype.onInputClick=function(t){t.stopPropagation()},t.\u0275fac=function(e){return new(e||t)(s.Qb(s.h),s.Qb(h.c),s.Qb(s.F),s.Qb(s.l),s.Qb(s.A))},t.\u0275cmp=s.Kb({type:t,selectors:[["nb-toggle"]],hostVars:22,hostBindings:function(t,e){2&t&&s.Ib("status-primary",e.primary)("status-success",e.success)("status-warning",e.warning)("status-danger",e.danger)("status-info",e.info)("status-basic",e.basic)("status-control",e.control)("toggle-label-left",e.labelLeft)("toggle-label-right",e.labelRight)("toggle-label-start",e.labelStart)("toggle-label-end",e.labelEnd)},inputs:{checked:"checked",disabled:"disabled",status:"status",labelPosition:"labelPosition"},outputs:{checkedChange:"checkedChange"},features:[s.Cb([{provide:o.k,useExisting:Object(s.X)((function(){return t})),multi:!0}])],ngContentSelectors:y,decls:7,vars:7,consts:[[1,"toggle-label"],["type","checkbox","role","switch",1,"native-input","visually-hidden",3,"disabled","checked","change","blur","click"],[1,"toggle"],[1,"toggle-switcher"],["icon","checkmark-bold-outline","pack","nebular-essentials",4,"ngIf"],[1,"text"],["icon","checkmark-bold-outline","pack","nebular-essentials"]],template:function(t,e){1&t&&(s.qc(),s.Wb(0,"label",0),s.Wb(1,"input",1),s.hc("change",(function(t){return e.updateValue(t)}))("blur",(function(){return e.onTouched()}))("click",(function(t){return e.onInputClick(t)})),s.Vb(),s.Wb(2,"div",2),s.Wb(3,"span",3),s.Jc(4,m,1,0,"nb-icon",4),s.Vb(),s.Vb(),s.Wb(5,"span",5),s.pc(6),s.Vb(),s.Vb()),2&t&&(s.Db(1),s.rc("disabled",e.disabled)("checked",e.checked),s.Eb("aria-checked",e.checked),s.Db(1),s.Ib("checked",e.checked),s.Db(1),s.rc("@position",e.checkState()),s.Db(1),s.rc("ngIf",e.checked))},directives:[r.o,f.a],styles:["[_nghost-%COMP%]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;outline:none}.toggle-label-left[_nghost-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){padding-right:.6875rem}[dir=ltr]   .toggle-label-left[_nghost-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}[dir=rtl]   .toggle-label-left[_nghost-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.toggle-label-right[_nghost-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){padding-left:.6875rem}[dir=ltr]   .toggle-label-right[_nghost-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}[dir=rtl]   .toggle-label-right[_nghost-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.toggle-label-start[_nghost-%COMP%]   .toggle-label[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}[dir=ltr]   .toggle-label-start[_nghost-%COMP%]   .toggle-label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){padding-right:.6875rem}[dir=ltr]   .toggle-label-end[_nghost-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty), [dir=rtl]   .toggle-label-start[_nghost-%COMP%]   .toggle-label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){padding-left:.6875rem}[dir=rtl]   .toggle-label-end[_nghost-%COMP%]   .text[_ngcontent-%COMP%]:not(:empty){padding-right:.6875rem}.nb-transition[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]{-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:background-color,border,-webkit-box-shadow;transition-property:background-color,border,-webkit-box-shadow;transition-property:background-color,border,box-shadow;transition-property:background-color,border,box-shadow,-webkit-box-shadow;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.toggle-label[_ngcontent-%COMP%]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.toggle[_ngcontent-%COMP%], .toggle-label[_ngcontent-%COMP%]{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.toggle[_ngcontent-%COMP%]{-webkit-box-sizing:content-box;box-sizing:content-box}.toggle-switcher[_ngcontent-%COMP%]{position:absolute;border-radius:50%;margin:1px}.toggle-switcher[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"],data:{animation:[Object(g.l)("position",[Object(g.i)("right",Object(g.j)({right:0,left:"*"})),Object(g.i)("left",Object(g.j)({left:0,right:"*"})),Object(g.k)(":enter",[Object(g.e)(0)]),Object(g.k)("right <=> left",[Object(g.e)("0.15s")])])]},changeDetection:0}),t}(),O=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nb-toggle-disabled"]],decls:4,vars:1,consts:[[1,"example-items-col"],["disabled",""],["disabled","",3,"checked"]],template:function(t,e){1&t&&(s.Wb(0,"nb-card"),s.Wb(1,"nb-card-body",0),s.Rb(2,"nb-toggle",1),s.Rb(3,"nb-toggle",2),s.Vb(),s.Vb()),2&t&&(s.Db(3),s.rc("checked",!0))},directives:[b.b,b.a,k],encapsulation:2}),t}(),P=function(){function t(){this.toggleNgModel=!0,this.toggleFormControl=new o.c}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nb-toggle-form"]],decls:6,vars:2,consts:[[1,"example-items-col"],[3,"ngModel","ngModelChange"],[3,"formControl"]],template:function(t,e){1&t&&(s.Wb(0,"nb-card"),s.Wb(1,"nb-card-body",0),s.Wb(2,"nb-toggle",1),s.hc("ngModelChange",(function(t){return e.toggleNgModel=t})),s.Lc(3,"Toggle with NgModel"),s.Vb(),s.Wb(4,"nb-toggle",2),s.Lc(5,"Toggle with FormControl"),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Db(2),s.rc("ngModel",e.toggleNgModel),s.Db(2),s.rc("formControl",e.toggleFormControl))},directives:[b.b,b.a,k,o.l,o.o,o.d],encapsulation:2}),t}(),w=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nb-toggle-label-position"]],decls:12,vars:0,consts:[[1,"example-items-col"],["labelPosition","start"],["labelPosition","end"],["labelPosition","right"],["labelPosition","left"],["disabled",""]],template:function(t,e){1&t&&(s.Wb(0,"nb-card"),s.Wb(1,"nb-card-body",0),s.Wb(2,"nb-toggle",1),s.Lc(3,"Label Start"),s.Vb(),s.Wb(4,"nb-toggle",2),s.Lc(5,"Label End"),s.Vb(),s.Wb(6,"nb-toggle",3),s.Lc(7,"Label Right"),s.Vb(),s.Wb(8,"nb-toggle",4),s.Lc(9,"Label Left"),s.Vb(),s.Wb(10,"nb-toggle",5),s.Lc(11,"Label Default Disabled"),s.Vb(),s.Vb(),s.Vb())},directives:[b.b,b.a,k],encapsulation:2}),t}(),C=[{path:"toggle-disabled.component",component:O},{path:"toggle-showcase.component",component:function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nb-toggle-showcase"]],decls:3,vars:0,template:function(t,e){1&t&&(s.Wb(0,"nb-card"),s.Wb(1,"nb-card-body"),s.Rb(2,"nb-toggle"),s.Vb(),s.Vb())},directives:[b.b,b.a,k],encapsulation:2}),t}()},{path:"toggle-status.component",component:function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nb-toggle-status"]],decls:17,vars:0,consts:[[1,"example-items-rows"],["status","basic"],["status","primary"],["status","success"],["status","info"],["status","warning"],["status","danger"],[1,"control-status-example"],["status","control"]],template:function(t,e){1&t&&(s.Wb(0,"nb-card"),s.Wb(1,"nb-card-body",0),s.Wb(2,"nb-toggle",1),s.Lc(3,"Basic"),s.Vb(),s.Wb(4,"nb-toggle",2),s.Lc(5,"Primary"),s.Vb(),s.Wb(6,"nb-toggle",3),s.Lc(7,"Success"),s.Vb(),s.Wb(8,"nb-toggle",4),s.Lc(9,"Info"),s.Vb(),s.Wb(10,"nb-toggle",5),s.Lc(11,"Warning"),s.Vb(),s.Wb(12,"nb-toggle",6),s.Lc(13,"Danger"),s.Vb(),s.Wb(14,"div",7),s.Wb(15,"nb-toggle",8),s.Lc(16,"Control"),s.Vb(),s.Vb(),s.Vb(),s.Vb())},directives:[b.b,b.a,k],styles:[".example-items-rows[_ngcontent-%COMP%] {\n      align-items: center;\n    }"]}),t}()},{path:"toggle-test.component",component:function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nb-app-toggle-test"]],decls:11,vars:4,consts:[[1,"example-items-col"],["id","first"],["id","second",3,"checked"],["id","disabled",3,"disabled"],[3,"checked","disabled"],["id","primary","status","primary"],["id","success","status","success"],["id","warning","status","warning"],["id","danger","status","danger"],["id","info","status","info"]],template:function(t,e){1&t&&(s.Wb(0,"nb-card"),s.Wb(1,"nb-card-body",0),s.Rb(2,"nb-toggle",1),s.Rb(3,"nb-toggle",2),s.Rb(4,"nb-toggle",3),s.Rb(5,"nb-toggle",4),s.Rb(6,"nb-toggle",5),s.Rb(7,"nb-toggle",6),s.Rb(8,"nb-toggle",7),s.Rb(9,"nb-toggle",8),s.Rb(10,"nb-toggle",9),s.Vb(),s.Vb()),2&t&&(s.Db(3),s.rc("checked",!0),s.Db(1),s.rc("disabled",!0),s.Db(1),s.rc("checked",!0)("disabled",!0))},directives:[b.b,b.a,k],encapsulation:2}),t}()},{path:"toggle-label-position.component",component:w},{path:"toggle-form.component",component:P}],x=function(){function t(){}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(C)],a.g]}),t}(),M=function(){function t(){}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[o.g,o.r,i.a,l,x]]}),t}()}}]);