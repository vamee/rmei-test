// Copyright 2003 - 2007 Peter L. Blum, All Rights Reserved, www.PeterBlum.com
// Professional Validation And More v3.0.8


var gVAM_UA = navigator.userAgent.toLowerCase();
else if (checkIt('opera')) {gVAM_Browser = "Opera"; gIsOpera = true; } 

else if (checkIt('msie')) {gVAM_Browser = "Internet Explorer"; gIsIEWin = true; }
else if (checkIt('netscape')) {gVAM_Browser = "Netscape Mozilla"; gIsNetscapeMoz = true; }
else if (!checkIt('compatible'))
|| (gVAM_UA.indexOf("msie 7") > -1))
gIsIEWin55 = true;
else if (gIsOpera)
var gVAM_MAId = null;
function Fix(pF)
return null;
if (document.getElementById)
else if (document.all)
else if (document.layers) 
{
}

function VAM_GetAtt(pE, pAName, pDefVal)
vR = pDefVal;
return pDefVal;

function VAM_SetInnerHTML(pFld, pValue)
function VAM_SetLeftPos(pFld, pPos)
function VAM_SetFocus(pFldId)
vFld = vFld.gocDE[0];

(!window.gVAM_VG || (gVAM_VG.FocF == null) || eval(gVAM_VG.FocF + '(vFld)')) && 


function VAM_ParseInt(pVal)

function VAM_StripTags(pHTML)
return gIsIEMac || (gIsIEWin && !gIsIEWin55) ? pHTML : VAM_RERpl(pHTML, "<(.|\n)+?>", "");

function VAM_RERpl(pText, pFind, pReplace)

var gVAM_NLTkn = new Array("", "<br />", "\n", "\r", " ");
{
pType = 4;

function VAM_AttachEvent(pFld, pEvtName, pCode, pFst)
pFld = VAM_GetById(pFld);

var gVAM_Events = null;

function VAM_IsVisible(pFld)
return vV;

function VAM_ApplyCss(pFld, pCss)

function VAM_InitCond(pCO, pAO)
function VAM_InitOneFldCond(pCO, pAO)

function VAM_InitTwoFldCond(pCO, pAO)

} 

function VAM_InitRangeCond(pCO, pAO)

function VAM_InitCompValCond(pCO, pAO)

function VAM_EvalMultiCond(pCO)
{
for (var vI = 0; vResult && (vI < pCO.Conds.length); vI++)
}
{
}

function VAM_EvalReqTextCond(pCO)

function VAM_EvalReqListCond(pCO)
pCO.UnassgnIdx = -1;

function VAM_EvalReqCheckCond(pCO)
vDone = true;
if (pCO.UnassgnIdx == null) 
pCO.UnassgnIdx = -1;

function VAM_EvalRangeCond(pCO)

function VAM_EvalComp2FldsCond(pCO)

function VAM_EvalCompValCond(pCO)

function VAM_EvalDTCheckCond(pCO)

function VAM_EvalRegexCond(pCO)

function VAM_EvalCheckStateCond(pCO)
return (vFld.checked == pCO.Chk) ? 1 : 0;

function VAM_EvalSelIdxCheckCond(pCO)

function VAM_EvalSelIdxListCond(pCO)

function VAM_MSCompatCustomCond(pCO)
var vSrc = {clientvalidationfunction:pCO.CVFnc};

function VAM_MSCompatOneFldCustomCond(pCO)
var vSrc = {controltovalidate:pCO.IDToEval, clientvalidationfunction:pCO.CVFnc};
return 1;

function VAM_EvalAltCS(pCO)
function VAM_EvalFixed(pCO)

function VAM_InitValAction(pAO)
if (pAO.VIdx != null) 
gVAM_Vals[pAO.VIdx] = pAO;
if (pAO.ErrFldID != null)
pAO.OrigCss = pAO.ErrFld.className; pAO.OrigColor = (pAO.ErrFld.style != null) ? pAO.ErrFld.style.color : null;
VAM_EvalCondition(pAO.Cond); pAO.FmttrFnc(pAO, true);
{
}
if (!pAO.IsValid)
if (!vFnd)

function VAM_DoValidate(pAO, pEvalRes)
if (pAO.BeforeFmt)
if (pAO.Dspl == 2) 
pAO.ErrFld.style.display = pAO.IsValid ? "none" : "inline";
if (!pAO.IsValid)

function VAM_SetHiliteFields(pAO, pEvalRes)
continue;
{
{
vFld.HFPassCnt = gVAM_ValPassCnt; }
}



function VAM_HUGetChild2Ctrls(pCO, pAO, pFldID)

function VAM_GCCheckRadioList(pFldID, pIdx, pMd)
vID = pIdx == 0 ? pFldID : pFldID + "_" + (pIdx - 1);



function VAM_StrConv(pCO, pValue)

function VAM_CIStrConv(pCO, pValue)

function VAM_StripGrpSep(pCO, pValue)

function VAM_IntConv(pCO, pValue)

function VAM_DecConv(pCO, pValue)
+ ((m[2] != null) && (m[2].length>0) ? m[2] : "0")
 "."
 (m[4] != null ? m[4] : "");

function VAM_DateConv(pCO, pValue)
return null;
return null;
return null;
} 
vM -= 1;
return null;
return (vY == date.getFullYear() && vM == date.getMonth() && vD == date.getDate()) ? date.valueOf() : null;

function VAM_CurrencyConv(pCO, pValue)
if (pCO.symbol != "")
{
pValue = pValue.replace(vRE, ""); }
var vDecStr = "";
vDone = true;
if (vChar == " ")
vVal = null;

function VAM_Comparer(pCO, pLeftVal, pRightVal, pOp)
return pLeftVal == pRightVal;
return pLeftVal != pRightVal;
return pLeftVal > pRightVal;
return pLeftVal >= pRightVal;
return pLeftVal < pRightVal;
return pLeftVal <= pRightVal;

function VAM_TextFmttr(pAO, pShow)
if (pAO.TxtErrFld == null)

function VAM_TTFmttr(pAO, pShow)

function VAM_AlertFmttr(pAO, pShow)
if (pShow && pAO.ImgErrFld && (pAO.ImgErrFld.onclick == null))

function VAM_HyperLinkFmttr(pAO, pShow)
if (pAO.LnkErrFld == null)

function VAM_GetErrFmtAlert(pAO)
var vR = "";
vR = "var vAO=gVAM_Vals[" + pAO.VIdx + "];";
vR = "var vAO=gVAMActions[" + pAO.id + "];";
{
vId = pAO.Ctl[0].id;
function VAM_SelErrMsg(pAO)

function VAM_SelSumMsg(pAO)

function VAM_OneFldReplToken(pAO, pText)
return VAM_RERpl(pText, "{TEXTVALUE}", VAM_GetTextValue(vCO.IDToEval, vCO.Trim, vCO.GetText))

function VAM_TwoFldReplToken(pAO, pText)
return VAM_RERpl(pText, "{TEXTVALUE2}", VAM_GetTextValue(vCO.IDToEval2, vCO.Trim, vCO.GetText2))

function VAM_SPReplToken(pText, pCnt, pTName)
return pText;

function VAM_CanRunActn(pAO)

function VAM_CanRunVal(pAO)

var gVAMSubmitEvent = false;
vIH += pVSO.PreListFnc(pVSO) + pList + pVSO.PostListFnc(pVSO);

function VAM_ValSumPreDefault(pVSO)

function VAM_ValSumPreBullet(pVSO)
return pVSO.BulletTL + "' " + VAM_ValSumPreAttributes(pVSO) + ">";

function VAM_ValSumPreSglPara(pVSO)

function VAM_ValSumPreDiv(pVSO)

function VAM_ValSumPreAttributes(pVSO)

function VAM_ValSumPostDefault(pVSO)

function VAM_ValSumPostBullet(pVSO)
if (pVSO.BulletTL.charAt(1) == 'o') 


function VAM_ValSumPostSglPara(pVSO)

function VAM_ValSumPostDiv(pVSO)

function VAM_ValSumFmtItemList(pVSO, pMsg, pRowNum)

function VAM_ValSumFmtBullet(pVSO, pMsg, pRowNum)

function VAM_ValSumFmtSglPara(pVSO, pMsg, pRowNum)

var gVAM_CauseVal = false; var gVAM_AltCfmMsg = "";
if (pAO.CanRun && !pAO.CanRun(pAO))
if (pAO.VT == "VAL")

function VAM_EvalCondition(pCO)

function VAM_InitActions()
if (window.PDP_InitObjects)
for (var vI = 0; vI < vAutoRun.length; vI++)
{
VAM_CalcAll();
gVAM_Init = false; } 

function VAM_InitOneAction(pActnID)

function VAM_UnloadActions()
continue;
{
vAO.ErrFld = null;

function VAM_InitValA()

function VAM_HookupControl(pFld, pAO, pCO, pAltEvent, pHUCtrlFnc)
return false;
{
|| (pFld.tagName == "TEXTAREA") || (pFld.tagName == "SELECT");
if (pAO.VT == "VAL")
if (!window.gVAM_ValFlds)
else if (gVAM_InCallback)
for (var vI = 0; vI < pFld.ActionIDs.length; vI++)
pFld.ActionIDs[pFld.ActionIDs.length] = vAOID; return vFT;
pHUCtrlFnc(pCO, pAO, pFld.id);

function VAM_FindAOById(pClientID)
continue;
return vAO;

function VAM_SetEnabled(pAO, pEnabled)
if (pAO.CID != null)

function VAM_FieldChanged(pFldId)
var vAO = gVAMActions[vFld.ActionIDs[vI]];
continue;
VAM_PostValidateFld(vFld);

function VAM_ValidateGroup(pGrp, pReal) 
{
gVAM_PageIsValid = true; var vIsValid = true; gVAMSubmitEvent = pReal;
return true;
continue;
{

VAM_PostValidate(pGrp, true); gVAM_PageIsValid = vIsValid;

function VAM_MatchGroup(pGRq, pGSp)
var vRx = new RegExp("^(" + pGSp + ")$", "i");

function VAM_OnReset(pIsPostBack)
if (!this.gVAM_Vals || !this.gVAM_VG) 
return;
for (var vI = 0; vI < gVAM_Vals.length; vI++)
continue;
VAM_PostValidate("*", true); }
VAM_RunAllFSC();

function VAM_ValOnSubmit()
if (!gVAM_CauseVal)
VAM_DisableSubmit();
var vR = VAM_ValOnSubWGrp(vGrpFld.value);
if (!vR && (window.__defaultFired != null))

function VAM_ValOnSubWGrp(pGrp)
gVAM_CauseVal = false; if (window.gVAM_VG) 
for (var vI = 0; vI < 3; vI++)
if (!VAM_ValidateGroup(pGrp, true))
if (this.confirm)
if (gVAM_AltCfmMsg != "")
return false;
else if ((gVAM_VG.CnfM != null) &&
return false;
if (gVAM_VG.CSFN != null)
} 

VAM_DisableSubmit();

function VAM_ValOnClick(pGrp, pAltMsg)

function VAM_UpdateOnClick(pFldId, pGrp, pAltMsg)
{
{
if (pAltMsg) 
vFnc = "if (!confirm(VAM_NLTkn('" + pAltMsg + "', true, 2))) return false;" + vFnc; vFld.onclick = new Function("gVAM_CauseVal = false; VAM_Reanimate();" + vFnc); }

function VAM_InitLinkBtn(pFldId, pGrp, pAltMsg)
var vFld = (typeof(pFldId) == "string") ? VAM_GetById(pFldId) : pFldId;
}
{
vFld.href = 'javascript:gVAM_CauseVal = false;VAM_Reanimate();' + vHR; 
if (this.gVAMSubmitIDs)

vOC = vOC + "if (!confirm(VAM_NLTkn('" + pAltMsg + "', true, 2))) return false;"; 
VAM_AttachEvent(vFld, "onclick", vOC, false);

function VAM_HrefClick(pGrp, pS, pAltMsg)
if (pS == "")
if (!Page_ClientValidate())

function VAM_Reanimate()
function VAM_ReanBody()
} 

function VAM_IsValid(pFld)
pFld = VAM_GetById(pFld);
continue;
return true; }

function VAM_Trim(s)

function VAM_GetTextValue(pId, pTrim, pGetTextFnc)
function Prep(pS)
if ((vC.tagName == "TABLE") || (vC.tagName == "SPAN"))
return vChild.value;
vD = true;
} 


function VAM_GetSelIdx(pId, pGetFnc)
return null;

function VAM_GetErrMsg(pVO)
return "";

vMsg = pVO.TokenRepl(pVO, vMsg);

function VAM_GetSumMsg(pVO)
return "";
vMsg = pVO.TokenRepl(pVO, vMsg);

var gVAM_ValPassCnt = 0;
if (!window.gVAM_VG) 
return;
{
for (var vI = 0; vI < gVAM_ValFlds.length; vI++)
continue;
for (var vI = 0; vI < gVAM_AONoIDs.length; vI++)
if (VAM_MatchGroup(pGrp, vAO.Group)) 
{
if (this.gVAM_SSMsgs)
var vA = gVAM_VG.AOS && ((this.gVAM_SSMsgs == null) || (this.gVAM_SSMsgs.length < gVAM_ValErrMsgs.length));
if (this.VAM_CEMDoAction)

function VAM_PostValidateFld(pFld)
if (!window.gVAM_VG) 
return;
{
return;

function VAM_PostValidateBody(pFld, pGrp, pS)
pFld.ValPassCnt = 0;
(pFld.OFPassCnt != gVAM_ValPassCnt)) 
vOFA[0] = pFld;
continue;
continue;
VAM_UpdateValErrMsgs(vAO, pS, pFld.id);
pFld.IsV = true;

else if ((vAO.CondResult == -1) && VAM_MatchGroup(pGrp, vAO.Group))
vAO.ValPassCnt = gVAM_ValPassCnt;
if ((pFld.IsV != null) && (gVAM_VG.ErrCtlCss != null))
for (var vI = 0; vI < vOFA.length; vI++)
} 
return pFld.IsV != false; } 

function VAM_GetOtherErrCtl(pOFA, pFld, pAO, pS)
if (!pFld.gocDE && (pS || (pAO.EvtToVal == 1)))
var vUPC = (vO.OFPassCnt == null) || (vO.OFPassCnt < gVAM_ValPassCnt); if (vUPC) 
pOFA[pOFA.length] = vO;
} 
{

function VAM_UpdateValErrMsgs(pAO, pS, pFldId)
if (!pS || (pAO.EvtToVal != 2))
var vId = pAO.Ctl ? pAO.Ctl[0].id : pFldId; 
gVAM_ValErrMsgs[gVAM_ValErrMsgs.length] = {Msg: vMsg, Grp: pAO.Group, FldId: vId}; }

function VAM_PostValidateErrCtl(pF, pIsV)
if (pF.SetErrStyle)
var vCss = "";
if (!vCB || (gVAM_VG.CBECCMd < 2))
{
{
if (pF.style.OrigCss != null)
if (pIsV)
} 

if (vCB && (gVAM_VG.CBECCMd != 1)) 
{
} 

function VAM_PostValidateAction(pFld, pFocus, pAlert)
if (!window.gVAM_VG)
var vMsg = gVAM_VG.AltTmpt;
vHB = vBody != ""; if (vMsg == "")
alert(VAM_StripTags(VAM_NLTkn(vMsg, true, 2))); }
{

function VAM_UpdateSummaries(pGrp, pAutoUpd)
if (this.gVAM_ValUpdFnc)

function VAM_AutoUpdateSummaries(pGrp)

function VAM_UpdateValSum(pVSO, pGrp)
{
var vPosNum = 0;
var vMsgGrp = gVAM_ValErrMsgs[vI].Grp;
vMsg = "<a href=\"javascript:VAM_SetFocus('" + gVAM_ValErrMsgs[vI].FldId + "');\">"+ vMsg+"</a>";
vList = "!"; } 
} 
} 
else 
return;
if (gVAMSubmitEvent && (pVSO.Scroll != null) && vFld.scrollIntoView)

function VAM_FixAbsPos(pVal)
if (window.gVAM_VG && pVal && gVAM_VG.VUpdF) 
eval(gVAM_VG.VUpdF);
VAM_MoveSpinners();
TMTB_Resize();