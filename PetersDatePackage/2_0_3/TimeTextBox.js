// Copyright 2002 - 2007 Peter L. Blum, All Rights Reserved, www.PeterBlum.com
// Peter's Date Package Release 2.0.3

var gTMTB_TBIds=null;function TMTB_Init(pTBId){var vTBFld=PDP_GetById(pTBId);var vBtnFld=PDP_GetById(pTBId+"_Btns");if(vBtnFld!=null){if(gTMTB_TBIds==null){gTMTB_TBIds=new Array();}TMTB_PosBtn(pTBId);gTMTB_TBIds[gTMTB_TBIds.length]=pTBId;}}function TMTB_Resize(){TMTB_Refresh();}function TMTB_Refresh(){if(gTMTB_TBIds!=null)for(var vI=0;vI<gTMTB_TBIds.length;vI++)TMTB_PosBtn(gTMTB_TBIds[vI]);}function TMTB_PosBtn(pTBId){var vBtnFld=PDP_GetById(pTBId+"_Btns");if(vBtnFld!=null){var vTBFld=PDP_GetById(pTBId);var vBP=vBtnFld.parentNode;if(vBP&&vBP.style&&(vBP.style.verticalAlign!="middle")&&(vBtnFld.style.verticalAlign!="middle")){var vY=(vTBFld.offsetHeight-vBtnFld.offsetHeight)/2;if(vY>0)vBtnFld.style.marginTop=vY.toString()+"px";}var vFld=vTBFld;var vVis=true;while(vVis&&(vFld!=null)&&(vFld!=document.body)){vVis=!((vFld.style.visibility=="hidden")||(vFld.style.display=="none"));vFld=vFld.parentNode;}vBtnFld.style.visibility=vVis?"inherit":"hidden";}}var gTM_LastOnKeyDown=0;var gTM_PassThroughKey=false;function TMTB_OnKeyPress(pTBId,pDTBId,pE){if(!gPDP_SupportsOnKeyPress)return false;if(gTM_PassThroughKey)return true;if(gTM_LastOnKeyDown==0)return false;var vShowIt=false;var vTBFld=PDP_GetById(pTBId);var vAO=vTBFld.AO;var vKC=PDP_GetKeyCode(pE);if((vKC==null)||(vKC==0))if(gTM_LastOnKeyDown!=0)vKC=gTM_LastOnKeyDown;else return true;gTM_LastOnKeyDown=0;if(vKC==9)return true;if(vTBFld.disabled||vTBFld.readOnly)return false;if(!PDP_CtlInited(vTBFld))return false;var vKCStr=String.fromCharCode(vKC);vKCStr=vKCStr.toUpperCase();var vShiftKey=PDP_IsShift(pE);var vCtrlKey=PDP_IsCtrl(pE);if((vAO.KeyFilters.indexOf(vKCStr)>-1)||(vKC<30)){vShowIt=true;vAO.Dirty=true;}else if(!TMTB_CommandKeyProcessing(pTBId,pDTBId,vKC,vShiftKey,vCtrlKey,false))vShowIt=false;if(!vShowIt)PDP_StopEvent(pE);return vShowIt;}function TMTB_OnKeyDown(pTBId,pDTBId,pE){if(!gPDP_SupportsOnKeyPress)return false;gTM_PassThroughKey=false;var vKC=PDP_GetKeyCode(pE);gTM_LastOnKeyDown=vKC;if(gPDP_Safari)return true;var vTBFld=PDP_GetById(pTBId);if(vTBFld.disabled||vTBFld.readOnly)return vKC==9;var vAO=vTBFld.AO;if(!PDP_CtlInited(vTBFld))return false;var vKCStr=String.fromCharCode(vKC);var vShiftKey=PDP_IsShift(pE);var vCtrlKey=PDP_IsCtrl(pE);if(vCtrlKey||((vKC>=33)&&(vKC<=47)&&(vKCStr!=vAO.TSep)&&(vKCStr!='.'))){var vShowIt=true;if(!TMTB_CommandKeyProcessing(pTBId,pDTBId,vKC,vShiftKey,vCtrlKey,!vCtrlKey)){gTM_LastOnKeyDown=0;PDP_StopEvent(pE);return false;}else{gTM_PassThroughKey=true;return true;}}else return true;}function TMTB_CommandKeyProcessing(pTBId,pDTBId,pKeyCode,pShiftKey,pCtrlKey,pIsOnKeyDown){var vTBFld=PDP_GetById(pTBId);var vAO=vTBFld.AO;var vCommandId=PDP_GetCmdId(vAO.CmdKeys,pKeyCode,pCtrlKey,pShiftKey,pIsOnKeyDown);var vShowIt=false;switch(vCommandId){case"1":TMTB_AddSeconds(pTBId,pDTBId,-vAO.AddSec);break;case"2":TMTB_AddSeconds(pTBId,pDTBId,vAO.AddSec);break;case"3":TMTB_AddSeconds(pTBId,pDTBId,-3600);break;case"4":TMTB_AddSeconds(pTBId,pDTBId,3600);break;case"10":TMTB_AssignNow(pTBId,pDTBId);break;case"21":var vCM=PDP_GetById(pTBId+"_CM");if(vCM!=null)PDP_OpenPopup(pTBId,vCM.id,false);break;default:vShowIt=true;break;}return vShowIt;}function TMTB_OnFocus(pTBId,pToolTip){if((pToolTip!="")&&(window.status!=null)){window.status=pToolTip;}var vAO=PDP_GetById(pTBId).AO;if(vAO&&vAO.APUF&&!vAO.APUOn&&(gPUNPos==-1)&&window.TMTB_OnPopup&&vAO.TPId){var vT=gPUNPos;var vTP=PDP_GetById(vAO.TPId);vTP.NoFocus=1;TMTB_OnPopup(pTBId,pTBId+"_PU");if(vT<gPUNPos)vAO.APUOn=1;vTP.NoFocus=0;}}var vTMTB_InOC=false;function TMTB_OnChange(pTBId,pDTBId){if(vTMTB_InOC)return true;var vTBFld=PDP_GetById(pTBId);if(vTBFld.value==''){TMTB_CallOnCF(vTBFld,pDTBId,null,false);PDP_ClearError(pTBId);return true;}var vAO=vTBFld.AO;if(!vAO)return false;vAO.Dirty=false;var vTime=TMTB_GetTimeValue(pTBId);if(vTime!=null){TMTB_SetTimeValue(pTBId,vTime,0);if(!TMTB_TestInRange(pTBId,vTime,true,true)){TMTB_CallOnCF(vTBFld,pDTBId,vTime,true);return false;}else{vTMTB_InOC=true;TMTB_CallOnCF(vTBFld,pDTBId,vTime,false);vAO.Dirty=false;vTMTB_InOC=false;return true;}}else{TMTB_CallOnCF(vTBFld,pDTBId,null,true);PDP_ShowError(pTBId,1,vAO.ErrAOC);return false;}}function TMTB_CallOnCF(pTB,pDTBId,pTime,pErr){var vN=pTB.AO.OCFN;if(vN!=null){if((pTime==null)||pErr)if(pTB.AO.OCFA!=1)return;eval(vN+"(pTB.id, pDTBId, pTime, pErr);");}}function TMTB_OnBlur(pTBId,pUpdateStatus){if(pUpdateStatus&&(window.status!=null))window.status='';var vTBFld=PDP_GetById(pTBId);var vAO=vTBFld.AO;if(!vAO)return;if(vAO.Dirty){vAO.Dirty=false;if(vTBFld.fireEvent!=null)vTBFld.fireEvent('onchange');else if(document.createEvent!=null){var vEvt=document.createEvent('HTMLEvents');vEvt.initEvent('change',true,false);vTBFld.dispatchEvent(vEvt);}else{var vOnChange=vTBFld.getAttribute('onchange');var vOCStr=vOnChange.toString();var vIndex=vOCStr.indexOf('TMTB_OnChange');vOCStr=vOCStr.substring(vIndex,vOCStr.length-1);vIndex=vOCStr.indexOf(')');vOCStr=vOCStr.substring(0,vIndex+1);eval(vOCStr+';');}}if(vAO.APUF&&vAO.APUOn)window.setTimeout("TMTB_AutoClose('"+pTBId+"');",500);}function TMTB_TransferToDate(pDTBId,pDate){if(pDTBId){DTB_SetDateValue(pDTBId,pDate,11);}}function TMTB_AssignNow(pTBId,pDTBId){if(!PDP_CmdCanEdit(pTBId))return;var vNow=new Date();var vTime=(vNow.getHours()*3600)+(vNow.getMinutes()*60)+vNow.getSeconds();TMTB_SetTimeValue(pTBId,vTime,1);if(TMTB_TestInRange(pTBId,vTime,true,true)){TMTB_TransferToDate(pDTBId,vNow);PDP_GetById(pTBId).select();PDP_ClearError(pTBId);}TMTB_OnBlur(pTBId,true);}function TMTB_AddSeconds(pTBId,pDTBId,pSeconds){if(!PDP_CmdCanEdit(pTBId))return;var vTBFld=PDP_GetById(pTBId);var vAO=vTBFld.AO;var vTime=null;var vInc=pSeconds>0;var vBSA=false;if(PDP_GetById(pTBId).value==''){vTime=TMTB_BlankStartsAt(vTBFld,vInc);vBSA=vTime!=null;}else{vTime=TMTB_GetTimeValue(pTBId);if((vTime==null)&&vAO.CmdFE){vTime=TMTB_BlankStartsAt(vTBFld,vInc);vBSA=vTime!=null;}}if(vTime!=null){if(!TMTB_TestInRange(pTBId,vTime,!vAO.CmdFE,!vAO.CmdFE)){if(vAO.CmdFE){vTime=TMTB_BlankStartsAt(vTBFld,vInc);vBSA=vTime!=null;}if(!vAO.CmdFE||(vTime==null))return false;}if(!vBSA){vTime=vTime+pSeconds;if(!TMTB_TestInRange(pTBId,vTime,false,false)){var vError=false;if(pDTBId!=""){var vDTBFld=PDP_GetById(pDTBId);if(DTB_IncDate(pDTBId,vInc)){if(vInc){var vMin=TMTB_GetMinTime(vTBFld);if(vMin==0)vTime=vTime-86400;else vTime=vMin;}else{var vMax=TMTB_GetMaxTime(vTBFld);if(vMax>=86399)vTime=vTime+86400;else vTime=vMax;}}else vError=true;}if((pDTBId=="")||vError){if(vInc)vTime=TMTB_GetMaxTime(vTBFld);else vTime=TMTB_GetMinTime(vTBFld);PDP_ShowError(pTBId,2,false);setTimeout("javascript:PDP_ClearError('"+pTBId+"');",500);}}}var vSecs=vTime%60;vTime=vTime-vSecs;TMTB_SetTimeValue(pTBId,vTime,11);if(vTBFld.select)vTBFld.select();return true;}else{PDP_ShowError(pTBId,1,true);return false;}}function TMTB_BlankStartsAt(pTBFld,pInc){var vTime=null;switch(pTBFld.AO.BlnkMd){case 0:if(pInc)vTime=TMTB_GetMinTime(pTBFld);else{vTime=TMTB_GetMaxTime(pTBFld);if(vTime==null)vTime=(24*3600)-1;}break;case 1:vTime=pTBFld.AO.BlnkVal;break;case 2:var vNow=new Date();vTime=(vNow.getHours()*3600)+(vNow.getMinutes()*60)+vNow.getSeconds();break;}return vTime;}function TMTB_JumpMinutes(pTBId,pDTBId,pFwd){var vAO=PDP_GetById(pTBId).AO;var vI=pFwd?1:-1;TMTB_AddSeconds(pTBId,pDTBId,vI*vAO.AddSec);}function TMTB_IsEmpty(pTBId){return(PDP_GetById(pTBId).value.length==0);}function TMTB_GetTimeValue(pTBId){var vTBFld=PDP_GetById(pTBId);if(vTBFld.value.length==0)return null;var vAO=vTBFld.AO;if((vTBFld.value==vAO.LastText)&&(vAO.LastTime!=-1))return vAO.LastTime;vAO.LastText=vTBFld.value;vAO.LastTime=-1;var vTime=TMTB_ParseTime(pTBId,vTBFld.value);if(vTime==null){if(vTBFld.style){if(vAO.ErrFC!='')vTBFld.style.color=vAO.ErrFC;if(vAO.ErrBC!='')PDP_SetBkColor(vTBFld,vAO.ErrBC);}return null;}else{PDP_ClearError(pTBId);vAO.LastTime=vTime;return vTime;}}function TMTB_ParseTime(pTBId,pText){pText=pText.toUpperCase();var vTBFld=PDP_GetById(pTBId);var vAO=vTBFld.AO;var vIsAMB=TMTB_GetAMPM(vTBFld,vAO.AM,pText);var vIsPMB=TMTB_GetAMPM(vTBFld,vAO.PM,pText);var vTimeSep=vAO.TSep;var vSupportsDecB=(vAO.DecMd==1)&&vTimeSep!='.';var vHasDecB=false;var vHasTimeSepB=false;var vErrorB=false;var vHasDigitsB=false;var vStripped="";for(var vPos=0;!vErrorB&&(vPos<pText.length);vPos++){var vChar=pText.charAt(vPos);if((vAO.DecMd==2)&&(vChar=="."))vChar=vTimeSep;if((vChar>='0')&&(vChar<='9')){vStripped=vStripped+vChar;vHasDigitsB=true;}else if(vChar=='.'){if(vAO.DecMd==0)vErrorB=true;else if(vSupportsDecB&&vHasDecB)vErrorB=true;else{vStripped=vStripped+vChar;if(!vSupportsDecB)vHasTimeSepB=true;else vHasDecB=true;}}else if(vChar==vTimeSep){vStripped=vStripped+vChar;vHasTimeSepB=true;}else break;}pText=vStripped;if(!vHasDigitsB)return null;if(vSupportsDecB&&vHasDecB&&vHasTimeSepB)vErrorB=true;var vHours=0;var vMinutes=0;var vSeconds=0;if(!vErrorB){if(vSupportsDecB&&vHasDecB){var vPos=pText.indexOf(".");if(vPos>0)vHours=PDP_ParseInt(pText.substr(0,vPos));var vDecimal=parseFloat(pText);vDecimal=(vDecimal-vHours)*3600.0;var vTS=Math.round(vDecimal);if(vTS>=3600)vTS=3599;vMinutes=PDP_Trunc((vTS/60)%60);vSeconds=vTS%60;}else{if((pText.length>2)&&!vHasTimeSepB)pText=TMTB_AutoFillInTimeSeparators(pText,vTimeSep);var pTextBoxParts=pText.split(vTimeSep);vHours=PDP_ParseInt(pTextBoxParts[0]);if(isNaN(vHours))vHours=0;if(pTextBoxParts.length>1){vMinutes=PDP_ParseInt(pTextBoxParts[1]);if(isNaN(vMinutes))vMinutes=0;else if(vMinutes>=60)vErrorB=true;}if(pTextBoxParts.length>2){vSeconds=PDP_ParseInt(pTextBoxParts[2]);if(isNaN(vSeconds))vSeconds=0;else if(vSeconds>=60)vErrorB=true;}}}if(!vErrorB){if(vIsPMB&&(vHours<12))vHours=vHours+12;else if(vIsAMB&&(vHours==12))vHours=0;var vTime=vHours*3600+vMinutes*60+vSeconds;var vRound=vAO.Round;if(vRound>0){var vOverflow=vTime%vRound;if(vOverflow!=0)vTime=vTime+(vRound-vOverflow);}return vTime;}else return null;}function TMTB_GetAMPM(pTBFld,pSymbol,pText){var vR=false;var vAMPM=pSymbol.toUpperCase();if(vAMPM.length>0){vR=pText.indexOf(vAMPM)>-1;if(!vR&&(vAMPM.length>1)){vR=pText.indexOf(vAMPM.charAt(0))>-1;}}return vR;}function TMTB_SetTimeValue(pTBId,pTime,pAfter){var vTBFld=PDP_GetById(pTBId);var vAO=vTBFld.AO;var vRslt='';if(pTime!=null){if((vAO.ShSec==0)||((vAO.ShSec==2)&&(pTime%60==0)))vRslt=vAO.ShPtn;else vRslt=vAO.LPtn;var vHrs=PDP_Trunc(pTime/3600);var vVal=vHrs;if(!vAO.MilTm)if(vVal==0)vVal=12;else if((vVal>12)&&(vVal<24))vVal=vVal-12;vRslt=TMTB_SetOneElement(vRslt,"h",vVal);vVal=PDP_Trunc((pTime/60)%60);vRslt=TMTB_SetOneElement(vRslt,"m",vVal);vVal=pTime%60;vRslt=TMTB_SetOneElement(vRslt,"s",vVal);var vAMPM="";if(vHrs>=12)vAMPM=vAO.PM;else vAMPM=vAO.AM;if(vRslt.indexOf("tt")>-1)vRslt=vRslt.replace("tt",vAMPM);else if(vRslt.indexOf("t")>-1)if(vAMPM.length>0)vRslt=vRslt.replace("t",vAMPM.charAt(0));else vRslt=vRslt.replace("t","");}vTBFld.value=vRslt;vAO.LastTime=-1;if(pAfter){vAO.Dirty=true;if(pAfter==2)TMTB_CallOnCF(vTBFld,"",pTime,false);else if(pAfter>=10)TMTB_OnBlur(pTBId,pAfter==11);}}function TMTB_SetOneElement(pPtn,pChar,pVal){var vVal=pVal.toString();var vTwoChar=pChar+pChar;if(pPtn.indexOf(vTwoChar)>-1){if(vVal<10)pPtn=pPtn.replace(vTwoChar,"0"+vVal);else pPtn=pPtn.replace(vTwoChar,vVal);}else if(pPtn.indexOf(pChar)>-1){pPtn=pPtn.replace(pChar,vVal);}return pPtn;}function TMTB_GetMinTime(pTBFld){return pTBFld.AO.Min;}function TMTB_GetMaxTime(pTBFld){var vMax=pTBFld.AO.Max;if(vMax!=-1){return vMax;}else return null;}function TMTB_TestInRange(pTBId,pTime,pShowError,pShowAlert){var vTBFld=PDP_GetById(pTBId);var vMin=TMTB_GetMinTime(vTBFld);if(vMin>pTime){if(pShowError)PDP_ShowError(pTBId,2,pShowAlert);return false;}var vMax=TMTB_GetMaxTime(vTBFld);if(vMax!=null){if(vMax<pTime){if(pShowError)PDP_ShowError(pTBId,2,pShowAlert);return false;}}return true;}function TMTB_AutoFillInTimeSeparators(pText,pTimeSep){var vHours=(pText.length%2==0)?pText.substr(0,2):pText.substr(0,1);var vMinutes=pText.substr(vHours.length,2);var vSeconds="";var vRem=pText.length-(vHours.length+vMinutes.length);if(vRem>0)vSeconds=pText.substr(vHours.length+vMinutes.length,vRem);if(vSeconds=="")return vHours+pTimeSep+vMinutes;else return vHours+pTimeSep+vMinutes+pTimeSep+vSeconds;}var gTMTB_MouseDown=false;var gTMTB_DnSpeed=500;var gTMTB_ClkCnt=0;var gTMTB_TimerID=0;function TMTB_ClickDown(pTBId,pDTBId,pSeconds,pImgId,pImgUrl){if(!PDP_CmdCanEdit(pTBId))return;gTMTB_DnSpeed=PDP_GetById(pTBId).AO.Spd1;gTMTB_ClkCnt=0;if(pImgUrl!=''){vImgFld=PDP_GetById(pImgId);if(vImgFld&&vImgFld.src)vImgFld.src=pImgUrl;}TMTB_AddSeconds(pTBId,pDTBId,pSeconds);var vCode="javascript:TMTB_ClickRepeat('"+pTBId+"', '"+pDTBId+"',"+pSeconds+")";gTMTB_TimerID=setTimeout(vCode,gTMTB_DnSpeed);gTMTB_MouseDown=true;}function TMTB_ClickRepeat(pTBId,pDTBId,pSeconds){if(gTMTB_MouseDown){TMTB_AddSeconds(pTBId,pDTBId,pSeconds);var vCode="javascript:TMTB_ClickRepeat('"+pTBId+"', '"+pDTBId+"',"+pSeconds+")";gTMTB_TimerID=setTimeout(vCode,gTMTB_DnSpeed);gTMTB_ClkCnt++;if(gTMTB_ClkCnt==4)gTMTB_DnSpeed=PDP_GetById(pTBId).AO.Spd2;}}function TMTB_ClickUp(pImgId,pImgUrl){gTMTB_MouseDown=false;if(gTMTB_TimerID!=0)clearTimeout(gTMTB_TimerID);gTMTB_TimerID=0;if(pImgUrl!=''){vImgFld=PDP_GetById(pImgId);if(vImgFld&&vImgFld.src)vImgFld.src=pImgUrl;}}function TMTB_ValidatorEvaluateIsValid(pVFld){var vTBID=PDP_GetAtt(pVFld,"controltovalidate",'');var vTBFld=PDP_GetById(vTBID);if(vTBFld.value=='')return true;if(TMTB_GetTimeValue(vTBID)!=null){var vDTBId=vTBFld.AO.DTBId;if((vDTBId!=null)&&(vTBFld.AO.LastTime>86399))return false;if(vDTBId)return DTB_GetDateValue(vDTBId)!=null;else return true;}else return false;}function TMTB_MinMaxEvaluateIsValid(pVFld){var vTBID=PDP_GetAtt(pVFld,"controltovalidate",'');if(PDP_GetById(vTBID).value=='')return true;var vTime=TMTB_GetTimeValue(vTBID);if(vTime!=null){return TMTB_TestInRange(vTBID,vTime,false,false);}else return true;}function TMTB_CompareEvaluateIsValid(pVFld){var vStartTBId=PDP_GetAtt(pVFld,"controltovalidate",'');var vEndTBId=PDP_GetAtt(pVFld,"controlhookup","");if(vEndTBId!=""){var vStartFld=PDP_GetById(vStartTBId);var vEndFld=PDP_GetById(vEndTBId);var vOp=PDP_GetAtt(pVFld,"operator","Equal");var vDTB1Id=vStartFld.AO.DTBId;var vDTB2Id=vEndFld.AO.DTBId;if((!vDTB1Id&&vDTB2Id)||(vDTB1Id&&!vDTB2Id)){vDTB1Id=null;vDTB2Id=null;}if(vDTB1Id){var vStartDate=DTB_GetDateValue(vDTB1Id);var vEndDate=DTB_GetDateValue(vDTB2Id);var vStartTime=TMTB_GetTimeValue(vStartTBId);var vEndTime=TMTB_GetTimeValue(vEndTBId);if((vStartDate==null)||(vStartTime==null)||(vEndDate==null)||(vEndTime==null))return true;vStartDate=new Date(vStartDate.getFullYear(),vStartDate.getMonth(),vStartDate.getDate(),PDP_Trunc(vStartTime/3600),PDP_Trunc((vStartTime/60)%60),vStartTime%60,0);vEndDate=new Date(vEndDate.getFullYear(),vEndDate.getMonth(),vEndDate.getDate(),PDP_Trunc(vEndTime/3600),PDP_Trunc((vEndTime/60)%60),vEndTime%60,0);vStartDate=vStartDate.valueOf();vEndDate=vEndDate.valueOf();var vR=true;switch(vOp){case"Equal":vR=vStartDate==vEndDate;break;case"NotEqual":vR=vStartDate!=vEndDate;break;case"GreaterThan":vR=vStartDate>vEndDate;break;case"GreaterThanEqual":vR=vStartDate>=vEndDate;break;case"LessThan":vR=vStartDate<vEndDate;break;case"LessThanEqual":vR=vStartDate<=vEndDate;break;}return vR;}else{var vStartTime=TMTB_GetTimeValue(vStartTBId);var vEndTime=TMTB_GetTimeValue(vEndTBId);if((vStartTime==null)||(vEndTime==null))return true;var vR=true;switch(vOp){case"Equal":vR=vStartTime==vEndTime;break;case"NotEqual":vR=vStartTime!=vEndTime;break;case"GreaterThan":vR=vStartTime>vEndTime;break;case"GreaterThanEqual":vR=vStartTime>=vEndTime;break;case"LessThan":vR=vStartTime<vEndTime;break;case"LessThanEqual":vR=vStartTime<=vEndTime;break;}return vR;}}else return true;}function TMTB_UnselectableEvaluateIsValid(pVFld){var vTBID=PDP_GetAtt(pVFld,"controltovalidate",'');var vInc=parseInt(PDP_GetAtt(pVFld,"timeincr",'0'));var vUsePicker=PDP_GetAtt(pVFld,"usepicker",'')!='';var vUseMin=PDP_GetAtt(pVFld,"usemin",'')!='';return TMTB_IsSelectable(vTBID,vUsePicker,vInc,vUseMin)!=0;}function TMTB_IsSelectable(pTBId,pUsePicker,pInc,pUseMin){var vTBFld=PDP_GetById(pTBId);var vTime=TMTB_GetTimeValue(pTBId);if(vTime!=null){var vUsed=false;if(pInc>0){var vST=0;if(pUseMin)vST=TMTB_GetMinTime(vTBFld);var vBT=vTime-vST;if((vBT%pInc)==0)return 1;vUsed=true;}if(pUsePicker){var vTPId=vTBFld.AO.TPId;if(vTPId){if(TP_IsTimeInPicker(vTPId,vTime))return 1;}vUsed=true;}if(!vUsed)return-1;return 0;}else return-1;}