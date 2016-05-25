// Copyright 2002 - 2007 Peter L. Blum, All Rights Reserved, www.PeterBlum.com
// Peter's Date Package Release 2.0.3
function SD_InitObjects(){function InitList(pSDO,pList){for(var vJ=0;vJ<pList.length;vJ++){var vBSD=pList[vJ];var vA=vBSD.SD.split('|');vBSD.SD=PDP_MakeUTCDate(vA[0],parseInt(vA[1])-1,vA[2]);if(vBSD.ED==null)vBSD.ED=vBSD.SD;else{vA=vBSD.ED.split('|');vBSD.ED=PDP_MakeUTCDate(vA[0],parseInt(vA[1])-1,vA[2]);}if(vBSD.Lbl==null)vBSD.Lbl="";if(vBSD.Dsc==null)vBSD.Dsc="";if(vBSD.Css==null)vBSD.Css=vBSD.Sel?pSDO.SelCss:pSDO.UnselCss;if(vBSD.OMCss==null)vBSD.OMCss=vBSD.Sel?pSDO.SelOMCss:pSDO.UnselOMCss;}}if(window.gSD_Objects)for(var vI=0;vI<gSD_Objects.length;vI++){var vSDO=gSD_Objects[vI];if(vSDO.Inited)continue;vSDO.Inited=1;InitList(vSDO,vSDO.Dates);for(var vDOW=0;vDOW<7;vDOW++)InitList(vSDO,vSDO.DOW[vDOW]);}}function SD_FindById(pSDId){if(window.gSD_Objects)for(var vI=0;vI<gSD_Objects.length;vI++){if(gSD_Objects[vI].ID==pSDId)return gSD_Objects[vI];}return null;}function SD_PrepId(pSDId){if(typeof(pSDId)=="string")return SD_FindById(pSDId);else return pSDId;}function SD_FindDate(pSDId,pDate){function FindOne(pList){var vR=null;var vPos=SD_BinarySearch(pList,pDate);if(vPos>-1)vR=pList[vPos];else{vPos=(-vPos)-1;if((vPos>=0)&&(vPos<pList.length)){var vBSD=pList[vPos];if(SD_Compare(pDate,vBSD)==0)vR=vBSD;}}return vR;}var vSDO=SD_PrepId(pSDId);var vDOWBSD=FindOne(vSDO.DOW[pDate.getUTCDay()]);var vBSD=FindOne(vSDO.Dates);if((vDOWBSD!=null)&&(vBSD!=null)){if(vSDO.Prc&&(!vBSD.Sel||vDOWBSD.Sel))return vBSD;else if(!vSDO.Prc&&(vBSD.Sel||!vDOWBSD.Sel))return vBSD;else return vDOWBSD;}else if(vBSD)return vBSD;else if(vDOWBSD)return vDOWBSD;else if(vSDO.UDAUn)return SD_MakeUnselDate(vSDO);else return null;}function SD_MakeUnselDate(pSDO){if(!pSDO.UnSlBSD)pSDO.UnSlBSD={Sel:0,Lbl:"",Dsc:"",Css:pSDO.UnselCss,OMCss:pSDO.UnselOMCss};return pSDO.UnSlBSD;}function SD_UnselectableEvaluateIsValid(pVFld){var vR=true;var vSPId=PDP_GetAtt(pVFld,"SpDatesID","");var vDTBId=PDP_GetAtt(pVFld,"controltovalidate","");if((vSPId!="")&&(vDTBId!="")){var vDate=DTB_GetDateValue(vDTBId);if(vDate!=null){vDate=PDP_MakeUTCDate(vDate.getFullYear(),vDate.getMonth(),vDate.getDate());var vBSD=SD_FindDate(vSPId,vDate);if((vBSD!=null)&&!vBSD.Sel){var vEM=PDP_GetAtt(pVFld,"EM","");if(vBSD.Lbl==""){var vNL=PDP_GetAtt(pVFld,"NoLabelEM","");if(vNL!="")vEM=vNL;}if(vEM!=""){vEM=vEM.replace("{0}",vBSD.Lbl);PDP_SetAtt(pVFld,"ErrorMessage",vEM);if((pVFld.innerHTML!="")&&(pVFld.innerHTML.charAt(0)=="<"))return false;if(!eval(PDP_GetAtt(pVFld,"HasText","true")))PDP_SetInnerHTML(pVFld,vEM);}vR=false;}}}return vR;}function SD_InitSequentialSearch(pSDId){var vSDO=SD_PrepId(pSDId);if(!vSDO.LastPos){vSDO.LastPos=new Array(8);vSDO.LastBSD=new Array(8);}for(var vI=0;vI<8;vI++){vSDO.LastPos[vI]=-1;vSDO.LastBSD[vI]=null;}}function SD_SequentialSearch(pSDId,pDate){var vSDO=SD_PrepId(pSDId);var vR=SD_SequentialSearchOne(vSDO,pDate,vSDO.Dates,0);if((vR==null)||vR.Sel){var vDOW=pDate.getUTCDay();var vDOWBSD=SD_SequentialSearchOne(vSDO,pDate,vSDO.DOW[vDOW],vDOW+1);if((vDOWBSD!=null)&&(vR!=null)){if(!vDOWBSD.Sel)vR=vDOWBSD;}else if(vDOWBSD!=null)vR=vDOWBSD;}if(!vR&&vSDO.UDAUn)vR=SD_MakeUnselDate(vSDO);return vR;}function SD_SequentialSearchOne(pSDO,pDate,pList,pLastIndex){var vBSD=pSDO.LastBSD[pLastIndex];var vPos=pSDO.LastPos[pLastIndex];var vR=null;if(vPos==-1){vPos=SD_BinarySearch(pList,pDate);if(vPos>-1)vBSD=pList[vPos];else{vPos=(-vPos)-1;if(vPos==-1)vPos=0;if(vPos<pList.length)vBSD=pList[vPos];}}if(vBSD!=null){if(SD_Compare(pDate,vBSD)==0)vR=vBSD;else if(vBSD.ED<pDate){vPos++;if(vPos<pList.length){vBSD=pList[vPos];if(SD_Compare(pDate,vBSD)==0)vR=vBSD;}else vBSD=null;}}pSDO.LastBSD[pLastIndex]=vBSD;pSDO.LastPos[pLastIndex]=vPos;return vR;}function SD_BinarySearch(pList,pDate){if(pList.length<5){for(var vI=0;vI<pList.length;vI++){var vBSD=pList[vI];switch(SD_Compare(pDate,vBSD)){case-1:return-(vI+1);case 0:return vI;case 1:break;}}return-(pList.length+1);}else{var vLow=0;var vHigh=pList.length-1;var vTest=-1;while(vLow<=vHigh){var vMid=(vLow+vHigh)/2;var vTest=(vMid<1)?0:parseInt(vMid);var vR=SD_Compare(pDate,pList[vTest]);if(vR>0){vLow=vTest+1;continue};if(vR<0){vHigh=vTest-1;continue};return vTest;}return-(vTest+1);}}function SD_Compare(pDate,pSDO){if(pDate<pSDO.SD)return-1;else if(pDate>pSDO.ED)return 1;else return 0;}function SP_CBResp(pR,pCID){eval(pR);for(var vI=0;vI<gSD_Objects.length;vI++){if(gSD_Objects[vI].ID==vSDO.ID){gSD_Objects[vI]=vSDO;SD_InitObjects();break;}}var vCal=PDP_GetById(pCID);if((window.gCUD_MonthShown==vCal.AO.Month+1)&&(window.gCUD_YearShown==vCal.AO.Year)){CSC_FillInMonth(pCID,true);var vCBS=PDP_GetById(pCID+"_CBS");if(vCBS)vCBS.style.display="none";}}function SD_GetHTMLStnd(pSDO,pDCF,pBSD,pDate){var vHTML="";if(pBSD.Fmt==null)vHTML=pBSD.Sel?pSDO.SelFmt:pSDO.UnselFmt;else vHTML=pBSD.Fmt;if(vHTML!="")return SD_ConvDayTokens(pDCF,pBSD,pDate,vHTML);else return"";}function SD_ConvDayTokens(pDCF,pBSD,pDate,pHTML){var vNHTML="";var vLI=0;var vRE=/(\{1\})|(\{LABEL\})|(\{DESC\})|(\{DATE\})/g;while(true){var vA=vRE.exec(pHTML);if(vA){var vRT="";switch(vA[0].substr(1,2)){case"1}":case"LA":vRT=pBSD.Lbl;break;case"DE":vRT=SD_ConvDescToken(pDCF,pBSD);break;case"DA":vRT=PDP_FmtDate2(pDate,pDCF.TknPat,pDCF.TknFmt);break;}if(vLI<vA.index)vNHTML+=pHTML.substring(vLI,vA.index);vNHTML+=vRT;vLI=vA.index+vA[0].length;}else break;}if(vLI<pHTML.length)vNHTML+=pHTML.substring(vLI,pHTML.length);return vNHTML;}function SD_ConvDescToken(pDCF,pBSD){var vRT=SD_TruncDesc(pBSD.Dsc,pDCF.TrcDsc,pDCF.TrcSlk);var vD="";switch(pDCF.MrgFmt){case 0:vD="<br />";break;case 1:vRT="<p>"+vRT+"</p>";vD="</p><p>";break;case 2:vD="&hellip;";break;case 3:vD=pDCF.MrgCst;break;}return vRT.replace(/\{\|\}/g,vD);}function SD_TruncDesc(pDesc,pLen,pSlack){function IsLetterOrDigit(pPos){var vCode=vRT.charCodeAt(pPos);if((vCode>255)||((vCode>64)&&(vCode<91))||((vCode>96)&&(vCode<123))||((vCode>47)&&(vCode<58))||((vCode>127)&&(vCode<161)))return true;else return false;}var vRT=pDesc;if((pLen>0)&&(vRT.length>pSlack+pLen)){if(IsLetterOrDigit(pLen)&&(pSlack>0)){var vPos=pLen+1;while(vPos>-1){if(IsLetterOrDigit(vPos)){if(vPos>pSlack+pLen){vRT=vRT.substr(0,vPos);vPos=-1;}else vPos++;}else{vRT=vRT.substr(0,vPos);vPos=-1;}}}else{var vC=" {|}";var vPos=pLen;while(vC.indexOf(vRT.charAt(vPos))>-1){vPos--;if(vPos==0)break;}vRT=(vPos>0)?vRT.substr(0,vPos):"";}if(vRT.length<pDesc.length)vRT=vRT+"&hellip;";}return vRT;}