if (typeof window.RadControlsNamespace=="u\x6e\x64efined"){window.RadControlsNamespace= {} ; }RadControlsNamespace.DomEventsMixin= function (){} ; RadControlsNamespace.DomEventsMixin.Initialize= function (l){l.AttachDomEvent=this.AttachDomEvent; l.DetachDomEvent=this.DetachDomEvent; l.DisposeDomEvents=this.DisposeDomEvents; l.ClearEventPointers=this.ClearEventPointers; l.RegisterForAutomaticDisposal=this.RegisterForAutomaticDisposal; l.AutomaticDispose=this.AutomaticDispose; l.CreateEventHandler=this.CreateEventHandler; l.K=this.K; l.ClearEventPointers(); } ; RadControlsNamespace.DomEventsMixin.CreateEventHandler= function (k){var J=this ; return function (e){if (!e)e=window.event; return J[k](e); };} ; RadControlsNamespace.DomEventsMixin.AttachDomEvent= function (H,h,G){var g=this.CreateEventHandler(G); this.F[this.F.length]=[H,h,g]; this.K(H,h,g); } ; RadControlsNamespace.DomEventsMixin.K= function (H,h,g){if (H.attachEvent){H.attachEvent("\x6fn"+h,g); }else if (H.addEventListener){H.addEventListener(h,g, false); }} ; RadControlsNamespace.DomEventsMixin.DetachDomEvent= function (H,h,g){if (H.detachEvent){H.detachEvent("\x6f\156"+h,g); }} ; RadControlsNamespace.DomEventsMixin.DisposeDomEvents= function (){for (var i=0; i<this.F.length; i++){ this.DetachDomEvent(this.F[i][0],this.F[i][1],this.F[i][2]); } this.ClearEventPointers(); } ; RadControlsNamespace.DomEventsMixin.RegisterForAutomaticDisposal= function (f){var D=this ; var d=this.CreateEventHandler(f); var C= function (){d(); D.DisposeDomEvents(); D=null; } ; this.K(window,"unload",C); } ; RadControlsNamespace.DomEventsMixin.ClearEventPointers= function (){ this.F=[]; } ;
if (typeof(Sys) != "undefined"){if (Sys.Application != null && Sys.Application.notifyScriptLoaded != null){Sys.Application.notifyScriptLoaded();}}
