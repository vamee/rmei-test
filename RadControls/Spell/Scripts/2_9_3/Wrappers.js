if (typeof(window.RadSpellNamespace)=="undef\x69\x6e\145\x64"){window.RadSpellNamespace=new Object(); }window.RadSpellWrappers=new Object(); RadSpellNamespace.oc= function (text){var Of=text.replace(/\x0a/gi,"<t\x65\x6cerikc\x72\x20/>"); Of=Of.replace(/\x0d/gi,"\x3cteleriklf\x20\x2f>"); return Of; } ; RadSpellNamespace.Od= function (text){var Of=text.replace(/\x3c\x74\x65\x6c\x65\x72\x69\x6b\x63\x72\s*\x2f\x3e/gi,"\012"); var Of=Of.replace(/\x3c\x74\x65\x6c\x65\x72\x69\x6b\x6c\x66\s*\x2f\x3e/gi,"\015"); return Of; } ; function lv(i2,ownerDocument){ this.Ig=i2; if (ownerDocument==null){ownerDocument=document; } ; this.ownerDocument=ownerDocument; } ; lv.prototype.iv= function (){return (this.Ig.disabled!= true); } ; lv.prototype.Iv= function (ow){var Ow=(ow== true)?"\x65nab\x6c\x65": "disable"; this[Ow](); } ; lv.prototype.lw= function (){return ""; } ; lv.prototype.iw= function (){return ""; } ; lv.prototype.Oh= function (){ this.Ig.disabled= false; if (this.iw()!=""){ this.Ig.className=this.iw(); } ; } ; lv.prototype.Ia= function (){ this.Ig.disabled= true; if (this.lw()!=""){ this.Ig.className=this.lw(); } ; } ; lv.prototype.Iw= function (){return this.Ig.style.visibility!="\x68idd\x65\x6e"; } ; lv.prototype.ox= function (){ this.Ig.style.visibility="hidden"; } ; lv.prototype.Ox= function (){return this.Ig.style.display; } ; lv.prototype.Iu= function (l){ this.Ig.style.display=l; } ; lv.prototype.show= function (){ this.Ig.style.visibility="\x76\151s\x69\x62le"; } ; lv.lx= function (ix,Ix){if (Ix==null){Ix=document; } ; if (Ix.all!=null){return Ix.all[ix]; } ; return Ix.getElementById(ix); } ; function oy(){var Oy= function (Ig,ownerDocument){ this.base=lv; this.base(Ig,ownerDocument); } ; Oy.prototype=new lv(); Oy.o9= function (ix,Ix){var ly=lv.lx(ix,Ix); if (ly==null){return null; }else {return new Oy(ly,Ix); } ; } ; return Oy; } ; RadSpellWrappers.Or=oy(); RadSpellWrappers.Or.prototype.getText= function (){return this.Ig.innerHTML; } ; RadSpellWrappers.Or.prototype.setText= function (caption){ this.Ig.innerHTML=caption; } ; RadSpellWrappers.Or.prototype.os= function (d){ this.Ig.onclick=d; };RadSpellWrappers.l9=oy(); RadSpellWrappers.l9.prototype.iy= function (){return this.Ig.options.length; } ; RadSpellWrappers.l9.prototype.lh= function (Iy,oz){var Oz=new Option(Iy,oz); if (this.Ig.options.add!=null){ this.Ig.options.add(Oz); }else { this.Ig.options[this.iy()]=Oz; }} ; RadSpellWrappers.l9.prototype.lp= function (){ this.Ig.options.length=0; } ; RadSpellWrappers.l9.prototype.Oi= function (){return this.Ig.selectedIndex; } ; RadSpellWrappers.l9.prototype.Ih= function (selected){ this.Ig.selectedIndex=selected; } ; RadSpellWrappers.l9.prototype.getItem= function (index){return this.Ig.options[index]; } ; RadSpellWrappers.Ov=oy(); RadSpellWrappers.Ov.prototype.getText= function (){return this.Ig.value; } ; RadSpellWrappers.Ov.prototype.setText= function (text){ this.Ig.value=text; } ; RadSpellWrappers.I2=oy(); RadSpellWrappers.I2.prototype.getText= function (){var html=this.lz().innerHTML; return html!=null?html: ""; } ; RadSpellWrappers.I2.prototype.setText= function (text){ this.lz().innerHTML=text; } ; RadSpellWrappers.I2.prototype.o3= function (){var la=this.Ig.id; var iframe=null; if (this.ownerDocument.frames!=null && this.ownerDocument.frames[la]!=null){iframe=this.ownerDocument.frames[la]; } ; if (iframe==null){iframe=lv.lx(la,this.ownerDocument); } ; if (iframe.document!=null){return iframe.document; }else {return iframe.contentWindow.document; } ; } ; RadSpellWrappers.I2.prototype.lz= function (){return this.o3().body; } ; RadSpellWrappers.I2.prototype.iz= function (){var la=this.Ig.id; var iframe=null; if (this.ownerDocument.frames!=null && this.ownerDocument.frames[la]!=null){return this.ownerDocument.frames[la]; } ; if (iframe==null){var frame=lv.lx(la,this.ownerDocument); return frame.contentWindow; } ; return null; } ; RadSpellWrappers.I2.prototype.Iz= function (){return typeof(this.lz().contentEditable)!="u\x6ede\x66\x69ned"; } ; RadSpellWrappers.I2.prototype.op= function (ou){if (this.Iz()){ this.lz().contentEditable=ou; } ; } ; RadSpellWrappers.I2.prototype.ov= function (){if (!this.Iz()){return false; }else {return this.lz().contentEditable=="true" || this.lz().contentEditable== true; } ; } ; RadSpellWrappers.I8=oy(); RadSpellWrappers.I8.prototype.lw= function (){return "\x42utton\x44\x69sabl\x65\x64"; } ; RadSpellWrappers.I8.prototype.iw= function (){return "Butto\x6e"; } ; RadSpellWrappers.I8.prototype.o10= function (){return this.Ig.innerHTML; } ; RadSpellWrappers.I8.prototype.lj= function (caption){ this.Ig.innerHTML=caption; } ;
if (typeof(Sys) != "undefined"){if (Sys.Application != null && Sys.Application.notifyScriptLoaded != null){Sys.Application.notifyScriptLoaded();}}if (typeof(Sys) != "undefined"){if (Sys.Application != null && Sys.Application.notifyScriptLoaded != null){Sys.Application.notifyScriptLoaded();}}