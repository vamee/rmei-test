if (typeof(RadSpellNamespace)=="u\x6e\x64efined")RadSpellNamespace= {} ; RadSpellNamespace.SpellDialogControl= function (t){ this.Id=t[0]; this.Language=t[1]; RadControlsNamespace.DomEventsMixin.Initialize(this ); this.Suggestions=this.FindChildElement(RadSpellNamespace.SpellDialogControl.SuggestionsID); this.Suggestions.focus(); this.DisableElement(this.Suggestions); this.Ignore=this.GetConfiguredButton(RadSpellNamespace.SpellDialogControl.IgnoreID,"\x49g\x6e\x6freHan\x64\x6cer"); this.IgnoreAll=this.GetConfiguredButton(RadSpellNamespace.SpellDialogControl.IgnoreAllID,"\x49\147\x6e\x6freAl\x6c\x48andl\x65r"); this.AddCustom=this.GetConfiguredButton(RadSpellNamespace.SpellDialogControl.AddCustomID,"\x41ddCust\x6f\x6dHandl\x65\x72"); this.Change=this.GetConfiguredButton(RadSpellNamespace.SpellDialogControl.ChangeID,"Chang\x65\x48andle\x72"); this.ChangeAll=this.GetConfiguredButton(RadSpellNamespace.SpellDialogControl.ChangeAllID,"\x43\x68angeAl\x6c\x48andl\x65\x72"); this.Undo=this.GetConfiguredButton(RadSpellNamespace.SpellDialogControl.UndoID,"\x55ndoHandler"); this.Cancel=this.GetConfiguredButton(RadSpellNamespace.SpellDialogControl.CancelID,"CancelHa\x6e\x64ler"); this.EnableButton(this.Cancel); this.Localization=RadSpellNamespace.Localization[this.Language]; this.AttachDomEvent(window,"\x6c\x6fad","\x53tartSpe\x6c\x6cCheck"); this.SpellProcessor=null; this.ContentDisplay=null; var self=this ; this.ModeChangedHandler= function (O3,i8){self.ContentDisplay_ModeChanged(i8); };this.SuggestionsDblClickHandler= function (O3,I8){self.Suggestions_DblClick(I8); } ; };RadSpellNamespace.SpellDialogControl.SpellCheckServiceID="\x5fSpellChe\x63\x6bServ\x69\x63e"; RadSpellNamespace.SpellDialogControl.TextContainerID="_TextContai\x6e\x65r"; RadSpellNamespace.SpellDialogControl.TextEditorID="\137Te\x78\x74Editor"; RadSpellNamespace.SpellDialogControl.SuggestionsID="_Suggestio\x6e\x73"; RadSpellNamespace.SpellDialogControl.IgnoreID="\x5f\x49gnore"; RadSpellNamespace.SpellDialogControl.IgnoreAllID="\x5fIgnoreAll"; RadSpellNamespace.SpellDialogControl.AddCustomID="\x5fAddCustom"; RadSpellNamespace.SpellDialogControl.ChangeID="_Change"; RadSpellNamespace.SpellDialogControl.ChangeAllID="\x5fChangeAll"; RadSpellNamespace.SpellDialogControl.UndoID="\x5fUndo"; RadSpellNamespace.SpellDialogControl.CancelID="\x5fCancel"; RadSpellNamespace.SpellDialogControl.prototype= {IgnoreHandler:function (e){if (this.ContentDisplay.IsEditMode){ this.ContentDisplay.SwitchMode(); }else { this.SpellProcessor.Ignore(); this.o9( false); this.MoveForward(); }} ,IgnoreAllHandler:function (e){ this.SpellProcessor.IgnoreAll(); this.o9( true); this.MoveForward(); } ,AddCustomHandler:function (e){var O9=this.SpellProcessor.GetCurrentBadWord().wordString; if (!confirm(this.Localization["\101ddWord1"]+O9+this.Localization["AddWord2"])){return; }var l9=this.GetService(); var dialogArguments=GetDialogArguments( true); if (dialogArguments.DictionaryLanguage){l9.DictionaryLanguage=dialogArguments.DictionaryLanguage; } this.DisableAllButtons(); var self=this ; l9.AddCustomWord(O9, function (O3,l3){self.AddCustomResponseReceived(l3); } ); } ,AddCustomResponseReceived:function (l3){var l7=this.SpellProcessor.GetCurrentBadWord().wordString; this.SpellProcessor.ProcessCustomWordAddition(); this.i9(l7); this.ProcessCurrentStep(); } ,ChangeHandler:function (e){ this.ChangeCurrentWord(this.ContentDisplay.GetReplacementWord()); } ,ChangeAllHandler:function (e){if (this.SpellProcessor.AreAllWordsFixed()){return; } this.SpellProcessor.ChangeAll(this.ContentDisplay.GetReplacementWord()); this.I9( true); this.MoveForward(); } ,UndoHandler:function (e){var oa=this.SpellProcessor.Oa(); this.SpellProcessor.Undo(); this.la(oa); this.ProcessCurrentStep(); } ,CancelHandler:function (e){ this.CloseDialog(this.SpellProcessor.ia() && confirm(this.Localization["Confirm"])); } ,DisableButton:function (button){ this.DisableElement(button); this.SetElementClass(button,"\x62\x75\x74tonDis\x61\x62led"); } ,EnableButton:function (button){ this.EnableElement(button); this.SetElementClass(button,"b\x75\x74ton"); } ,SetButtonEnabled:function (button,Ia){if (Ia){ this.EnableButton(button); }else { this.DisableButton(button); }} ,DisableElement:function (T){T.disabled= true; } ,EnableElement:function (T){T.disabled= false; } ,SetElementClass:function (T,className){T.className=className; } ,FindChildElement:function (ob){return document.getElementById(this.Id+ob); } ,GetConfiguredButton:function (Ob,lb){var button=this.FindChildElement(Ob); if (button){ this.AttachDomEvent(button,"click",lb); this.DisableButton(button); }return button; } ,GetService:function (){return window[this.Id+RadSpellNamespace.SpellDialogControl.SpellCheckServiceID]; } ,ChangeCurrentWord:function (ib){if (this.SpellProcessor.AreAllWordsFixed()){return; } this.SpellProcessor.Change(ib); this.I9( false); this.MoveForward(); } ,MoveForward:function (){ this.SpellProcessor.MoveToNextWord(); this.ProcessCurrentStep(); } ,ProcessCurrentStep:function (){if (!this.SpellProcessor.AreAllWordsFixed()){ this.UpdateContent(); }else { this.CloseDialog( true); }} ,Ib:function (oc){ this.DisableAllButtons(); if (this.ContentDisplay){ this.ContentDisplay.DetachEvent("\x4dodeCha\x6e\x67ed",this.ModeChangedHandler); this.ContentDisplay.DetachEvent("\x53ugges\x74\x69onsDb\x6c\x43lic\x6b",this.SuggestionsDblClickHandler); this.ContentDisplay.DisposeDomEvents(); this.ContentDisplay=null; } this.Oc(); if (this.SpellProcessor){if (this.SpellProcessor.AreAllWordsFixed()){ this.RadSpell.SetSpellChecked( true); }if (oc){ this.lc(); } this.SpellProcessor=null; } this.RadSpell=null; this.DisposeDomEvents(); this.ic(); } ,CloseDialog:function (oc){ this.Ib(oc); CloseDlg(); } ,StartSpellCheck:function (){var dialogArguments=GetDialogArguments( true); this.RadSpell=dialogArguments.RadSpell; this.TextSource=dialogArguments.TextSource; this.Ic(); var l9=this.GetService(); if (dialogArguments.DictionaryLanguage){l9.DictionaryLanguage=dialogArguments.DictionaryLanguage; } this.TextToCheck=this.EscapeNewLines(this.TextSource.GetText()); var self=this ; l9.SpellCheck(this.TextToCheck, function (O3,l3){self.SpellCheckResponseReceived(l3); } ); } ,Ic:function (){var self=this ; window.radWindow.OnClientClosing= function (){self.Ib( false); };} ,ic:function (){window.radWindow.OnClientClosing=null; } ,SpellCheckResponseReceived:function (l3){ this.SpellProcessor=new RadSpellNamespace.SpellProcessor(this.TextToCheck,l3.BadWords,l3.WordOffsets); if (!this.SpellProcessor.AreAllWordsFixed()){ this.InitContentDisplay(); this.UpdateContent(); }else { this.CloseDialog( true); }} ,EscapeNewLines:function (text){var od=text.replace(/\x0a/gi,"<\x74eleri\x6b\x63r />"); od=od.replace(/\x0d/gi,"\x3cteler\x69\x6blf /\x3e"); return od; } ,Od:function (text){var od=text.replace(/\x3c\x74\x65\x6c\x65\x72\x69\x6b\x63\x72\s*\x2f\x3e/gi,"\x0a"); var od=od.replace(/\x3c\x74\x65\x6c\x65\x72\x69\x6b\x6c\x66\s*\x2f\x3e/gi,"\015"); return od; } ,UpdateContent:function (){if (this.ContentDisplay.IsEditMode){ this.ContentDisplay.SwitchMode(); } this.ContentDisplay.ShowText(this.SpellProcessor.GetCurrentErrorContent()); this.ld(); this.ContentDisplay.FillSuggestions(this.SpellProcessor.GetCurrentSuggestions()); this.UpdateButtonStates(); } ,ld:function (){var oe=document.getElementById(this.SpellProcessor.Oe()); if (oe){if (window.radWindow==null && oe.scrollIntoView!=null){oe.scrollIntoView(); }else {if (!this.ContentDisplay.IsEditMode){ this.ContentDisplay.TextContainer.scrollTop=oe.offsetTop; oe.focus(); }}}} ,DisableAllButtons:function (){ this.DisableButton(this.Ignore); this.DisableButton(this.IgnoreAll); this.DisableButton(this.Change); this.DisableButton(this.ChangeAll); this.DisableButton(this.Undo); this.DisableButton(this.Cancel); if (this.AddCustom){ this.DisableButton(this.AddCustom); }} ,IsElementEnabled:function (T){return !T.disabled; } ,InitContentDisplay:function (){ this.ContentDisplay=new RadSpellNamespace.ContentDisplay(this,this.FindChildElement(RadSpellNamespace.SpellDialogControl.TextContainerID),this.FindChildElement(RadSpellNamespace.SpellDialogControl.TextEditorID),this.Suggestions); this.ContentDisplay.AttachEvent("M\x6fdeCha\x6e\x67ed",this.ModeChangedHandler); this.ContentDisplay.AttachEvent("\x53uggestionsD\x62\x6cClic\x6b",this.SuggestionsDblClickHandler); this.ContentDisplay.w(); } ,UpdateButtonStates:function (){var le=this.SpellProcessor.GetCurrentSuggestions().length>0; this.EnableButton(this.Ignore); this.SetButtonEnabled(this.IgnoreAll,!this.ContentDisplay.IsEditMode); this.SetButtonEnabled(this.Undo,this.SpellProcessor.GetCurrentUndoAction()!=null); this.SetButtonEnabled(this.Change,this.ContentDisplay.IsEditMode || le); this.SetButtonEnabled(this.ChangeAll,!this.ContentDisplay.IsEditMode && le); if (this.AddCustom!=null){ this.SetButtonEnabled(this.AddCustom,!this.ContentDisplay.IsEditMode); } this.Ignore.innerHTML=this.ContentDisplay.IsEditMode?this.Localization["\x55\x6e\x64oEdit"]: this.Localization["Ign\x6f\x72e"]; } ,ContentDisplay_ModeChanged:function (i8){var ie=""; if (i8.IsEditMode){ie=this.SpellProcessor.GetCurrentBadWord().wordString; }else {ie=this.SpellProcessor.GetCurrentErrorContent(); } this.UpdateButtonStates(); this.ContentDisplay.ShowText(ie); this.ld(); } ,Suggestions_DblClick:function (I8){if (this.SpellProcessor.GetCurrentSuggestions().length>0){ this.ChangeCurrentWord(I8.SelectedValue); }else {alert(this.Localization["No\x73\x75ggest\x69\x6fns"]); }} ,lc:function (){ this.TextSource.SetText(this.Od(this.SpellProcessor.TextToCheck)); } ,Oc:function (){if (this.SpellProcessor && this.SpellProcessor.AreAllWordsFixed()){var l3= {Ie: false };this.RadSpell.RaiseEvent("O\x6e\x43lientC\x68\x65ckF\x69\x6eis\x68\x65d",l3); if (!l3.Ie){alert(this.Localization["SpellCh\x65\x63kCo\x6d\x70lete"]); }}else { this.RadSpell.RaiseEvent("\x4fnClientChe\x63\x6bCan\x63\x65lle\x64", {} ); } this.RadSpell.RaiseEvent("\x4fnClie\x6e\x74Dialo\x67\x43los\x69\x6eg", {} ); } ,I9:function (of){var Of=this.SpellProcessor.GetCurrentBadWord(); var l3= {If:Of.og,ib:Of.wordString,Og: this.SpellProcessor.Oa(),of:of } ; this.RadSpell.RaiseEvent("\x4f\156\x43\x6cientW\x6f\x72dCo\x72\162ec\x74\145d",l3); } ,o9:function (lg){var Ig=this.SpellProcessor.GetCurrentBadWord(); var l3= {oh:Ig.og,Og: this.SpellProcessor.Oa(),lg:lg } ; this.RadSpell.RaiseEvent("\x4fnClient\x57\x6frdIg\x6e\x6fred",l3); } ,la:function (Og){var Oh=this.SpellProcessor.GetCurrentBadWord(); var l3= {If:Oh.og,Og:Og } ; this.RadSpell.RaiseEvent("OnClien\x74\x41ctio\x6e\x55ndon\x65",l3); } ,i9:function (l7){var l3= {l7:l7 } ; this.RadSpell.RaiseEvent("OnCl\x69\x65ntCus\x74\x6fmWo\x72\144\x41\x64ded",l3); }} ;
if (typeof(Sys) != "undefined"){if (Sys.Application != null && Sys.Application.notifyScriptLoaded != null){Sys.Application.notifyScriptLoaded();}}
