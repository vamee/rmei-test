if (typeof window.RadControlsNamespace=="u\x6e\x64efined"){window.RadControlsNamespace= {} ; }if (typeof(window.RadControlsNamespace.Browser)=="u\x6e\x64efined" || typeof(window.RadControlsNamespace.Browser.Version)==null || window.RadControlsNamespace.Browser.Version<1){window.RadControlsNamespace.Browser= {Version: 1 } ; window.RadControlsNamespace.Browser.ParseBrowserInfo= function (){ this.IsMacIE=(navigator.appName=="Microsoft\x20\x49nte\x72\x6eet \x45xplorer") && ((navigator.userAgent.toLowerCase().indexOf("\x6dac")!=-1) || (navigator.appVersion.toLowerCase().indexOf("\x6d\x61c")!=-1)); this.IsSafari=(navigator.userAgent.toLowerCase().indexOf("safari")!=-1); this.IsMozilla=window.netscape && !window.opera; this.IsNetscape=/\x4e\x65\x74\x73\x63\x61\x70\x65/.test(navigator.userAgent); this.IsOpera=window.opera; this.IsOpera9=window.opera && (parseInt(window.opera.version())>8); this.IsIE=!this.IsMacIE && !this.IsMozilla && !this.IsOpera && !this.IsSafari; this.IsIE7=/\x4d\x53\x49\x45\x20\x37/.test(navigator.appVersion); this.StandardsMode=this.IsSafari || this.IsOpera9 || this.IsMozilla || document.compatMode=="CSS1Compa\x74"; this.IsMac=/\x4d\x61\x63/.test(navigator.userAgent); };RadControlsNamespace.Browser.ParseBrowserInfo(); }
if (typeof(Sys) != "undefined"){if (Sys.Application != null && Sys.Application.notifyScriptLoaded != null){Sys.Application.notifyScriptLoaded();}}
