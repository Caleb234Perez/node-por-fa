"use strict";(self.webpackChunkminiProyecto2=self.webpackChunkminiProyecto2||[]).push([[68],{9068:(E,g,a)=>{a.r(g),a.d(g,{RegistModule:()=>O});var d=a(6895),_=a(2011),m=a(4331),o=a(433);class h{static nom(n){console.log(n.value);var r=n.value;return console.log(r),""!=r?null:{nom:!0}}}var e=a(4650),v=a(1205);function x(t,n){1&t&&(e.TgZ(0,"samp",18),e._uU(1,"Nombre requerido"),e.qZA())}function Z(t,n){1&t&&(e.TgZ(0,"samp",18),e._uU(1,"email requerido"),e.qZA())}function b(t,n){1&t&&(e.TgZ(0,"samp",18),e._uU(1,"formato de email no valido "),e.qZA())}function U(t,n){1&t&&(e.TgZ(0,"samp",18),e._uU(1,"contrase\xf1a requerida"),e.qZA())}function C(t,n){1&t&&(e.TgZ(0,"samp",18),e._uU(1,"minimo 6 caracteres"),e.qZA())}function P(t,n){1&t&&(e.TgZ(0,"samp",18),e._uU(1,"las contrase\xf1as deben coincidir"),e.qZA())}function w(t,n){1&t&&(e.TgZ(0,"samp",18),e._uU(1,"Telefono requerido"),e.qZA())}const y=function(){return["/singin"]};function M(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"div")(1,"div",3),e._UZ(2,"img",4),e.TgZ(3,"h1"),e._uU(4," Login"),e.qZA()(),e.TgZ(5,"form",5)(6,"div",6)(7,"label",7),e._uU(8,"Name"),e.qZA(),e._UZ(9,"input",8),e.YNc(10,x,2,0,"samp",9),e.qZA()(),e.TgZ(11,"form",10),e.NdJ("ngSubmit",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.registrar())}),e.TgZ(12,"div",6)(13,"label",7),e._uU(14,"Email"),e.qZA(),e._UZ(15,"input",11),e.YNc(16,Z,2,0,"samp",9),e.YNc(17,b,2,0,"samp",9),e.qZA(),e.TgZ(18,"div",6)(19,"label",12),e._uU(20,"Password"),e.qZA(),e._UZ(21,"input",13),e.YNc(22,U,2,0,"samp",9),e.YNc(23,C,2,0,"samp",9),e.qZA(),e.TgZ(24,"div",6)(25,"label",12),e._uU(26,"Repeat password"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,P,2,0,"samp",9),e.qZA(),e.TgZ(29,"div",6)(30,"label",12),e._uU(31,"Phone"),e.qZA(),e._UZ(32,"input",15),e.YNc(33,w,2,0,"samp",9),e.qZA(),e.TgZ(34,"button",16),e._uU(35,"Registrar"),e.qZA()(),e.TgZ(36,"a",17),e._uU(37,"volver"),e.qZA()()}if(2&t){const r=e.oxw();let s,i,u,l,p,f,c;e.xp6(5),e.Q6J("formGroup",r.nombreUsur),e.xp6(5),e.Q6J("ngIf",null==(s=r.nombreUsur.get("nombre"))||null==s.errors?null:s.errors.nom),e.xp6(1),e.Q6J("formGroup",r.regitrarUsuario),e.xp6(5),e.Q6J("ngIf",(null==(i=r.regitrarUsuario.get("email"))?null:i.hasError("required"))&&(null==(i=r.regitrarUsuario.get("email"))?null:i.touched)),e.xp6(1),e.Q6J("ngIf",(null==(u=r.regitrarUsuario.get("email"))?null:u.hasError("email"))&&(null==(u=r.regitrarUsuario.get("email"))?null:u.touched)),e.xp6(5),e.Q6J("ngIf",(null==(l=r.regitrarUsuario.get("password"))?null:l.hasError("required"))&&(null==(l=r.regitrarUsuario.get("password"))?null:l.touched)),e.xp6(1),e.Q6J("ngIf",(null==(p=r.regitrarUsuario.get("password"))?null:p.hasError("minlength"))&&(null==(p=r.regitrarUsuario.get("password"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",r.regitrarUsuario.value.password!=r.regitrarUsuario.value.repPassword&&(null==(f=r.regitrarUsuario.get("repPassword"))?null:f.touched)),e.xp6(5),e.Q6J("ngIf",(null==(c=r.regitrarUsuario.get("Phone"))?null:c.hasError("required"))&&(null==(c=r.regitrarUsuario.get("Phone"))?null:c.touched)),e.xp6(1),e.Q6J("disabled",r.regitrarUsuario.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(11,y))}}function T(t,n){1&t&&(e.TgZ(0,"div",19),e._UZ(1,"div")(2,"div")(3,"div")(4,"div"),e.qZA())}const A=[{path:"",component:(()=>{class t{constructor(r,s,i){this.fb=r,this.afAuth=s,this.router=i,this.load=!1,this.nombreUsur=new o.cw({nombre:new o.NI("",[h.nom])}),this.regitrarUsuario=this.fb.group({email:["",[o.kI.required,o.kI.email]],password:["",[o.kI.required,o.kI.minLength(6)]],repPassword:["",[o.kI.required,o.kI.minLength(6)]],phone:["",[o.kI.required]]})}ngOnInit(){}registrar(){const r=this.regitrarUsuario.value.email,s=this.regitrarUsuario.value.password,i=this.regitrarUsuario.value.repPassword,u=this.regitrarUsuario.value.phone;this.load=!0,s!=i?(this.runError(),this.load=!1):(console.log(r,s,i,u),this.afAuth.createUserWithEmailAndPassword(r,s).then(l=>{this.runSuccess(),this.router.navigate(["/singin"]),console.log("firus")}).catch(l=>{console.log("Balto: "+l),this.load=!1,this.fireError(l.code)}))}fireError(r){switch(r){case"auth/email-already-in-use":this.runError2();break;case"auth/weak-password":this.runError3();break;default:this.runError4()}}runError(){alertify.error("Las contrase\xf1as deben ser iguales.")}runError2(){alertify.error("El usuario ya existe.")}runError3(){alertify.error("La contrase\xf1a es muy d\xe9bil.")}runError4(){alertify.error("Error desconocido. Intente de nuevo.")}runSuccess(){alertify.success("Registro creado exitosamente.")}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(o.qu),e.Y36(v.zQ),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-regist"]],decls:8,vars:2,consts:[[1,"wrapper"],[4,"ngIf","ngIfElse"],["loadBlock",""],[1,"bodies"],["src","assets/login.png","alt","",1,"logo"],["action","",3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["type","email","aria-describedby","emailHelp","placeholder","Enter name","formControlName","nombre",1,"form-control"],["class","text-danger",4,"ngIf"],[3,"formGroup","ngSubmit"],["type","email","aria-describedby","emailHelp","placeholder","Enter email","formControlName","email",1,"form-control"],["for","exampleInputPassword1"],["type","password","placeholder","Password","formControlName","password",1,"form-control","mb-"],["type","password","placeholder","Password","formControlName","repPassword",1,"form-control","mb-"],["type","tel","placeholder","Phone","formControlName","phone",1,"form-control","mb-"],["type","submit",1,"btn","btn-primary","btn-lg","log-btn",3,"disabled"],[3,"routerLink"],[1,"text-danger"],[1,"lds-ellipsis"]],template:function(r,s){if(1&r&&(e.TgZ(0,"head")(1,"title"),e._uU(2,"Registro"),e.qZA()(),e.TgZ(3,"body")(4,"div",0),e.YNc(5,M,38,12,"div",1),e.YNc(6,T,5,0,"ng-template",null,2,e.W1O),e.qZA()()),2&r){const i=e.MAs(7);e.xp6(5),e.Q6J("ngIf",!s.load)("ngIfElse",i)}},dependencies:[d.O5,m.rH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".wrapper[_ngcontent-%COMP%]{background-color:azure;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[_ngcontent-%COMP%]{height:130px;margin-bottom:10px}.bodies[_ngcontent-%COMP%]{width:100%;max-width:330px;margin:10px;text-align:center}.log-btn[_ngcontent-%COMP%]{width:330px;margin-bottom:10px}.lds-ellipsis[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:cornflowerblue;animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:8px;animation:_ngcontent-%COMP%_lds-ellipsis1 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:8px;animation:_ngcontent-%COMP%_lds-ellipsis2 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:32px;animation:_ngcontent-%COMP%_lds-ellipsis2 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){left:56px;animation:_ngcontent-%COMP%_lds-ellipsis3 .6s infinite}@keyframes _ngcontent-%COMP%_lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes _ngcontent-%COMP%_lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes _ngcontent-%COMP%_lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}"]}),t})()}];let R=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(A),m.Bz]}),t})();var q=a(2340);let O=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,R,o.UX,_.hO.initializeApp(q.N.firebaseConfig)]}),t})()}}]);