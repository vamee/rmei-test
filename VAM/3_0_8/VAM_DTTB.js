// Copyright 2003 - 2007 Peter L. Blum, All Rights Reserved, www.PeterBlum.com
// Professional Validation And More v3.0.8


function VAM_ReformatInit(pAO)

function VAM_ReformatAction(pAO, pEvalRes)

function VAM_DateFmt(pAO, pVal)

function VAM_CurrFmt(pAO, pVal)
var vCurr = Math.abs(pVal).toString(); if (pAO.mindecdig > 0) 
{
{
if (pAO.Cond.decsep != ".")

function VAM_IntFmt(pAO, pVal)

function VAM_DecFmt(pAO, pVal)

function VAM_AddGrpSep(pAO, pText)
{

function VAM_GetDTTBValue(pTBId)

function VAM_SetDTTBValue(pTBId, pValue)
vFld.orval = ""; VAM_SOCCheck(pTBId); vR = true;
function VAM_FormatDTTBValue(pTBId, pValue)
var gVAM_PassThruKey = false; var gVAM_KFVal = null;
{
vFld.KO = pKO;

function VAM_KeyPress(pFld, pE)
return true;
return true;
{
return false;
if (gVAM_KFVal && vKO.MxTab)
(vKC == 57401) || 
(gIsSafari && (vKC >= 63232) && (vKC <= 63276))) 
return true;
{
if (vKO.EBtn)
VAM_ClickBtn(vKO.EBtn, true);
else if (vKO.ETab)
vR = true;
{
if (vKO.CTab && (vKO.CTab.indexOf(vKCS) > -1) && (pFld.value != ""))
vR = true;
gVAM_KFVal = pFld.value;

function VAM_OnKeyDown(pFld, pE)
{
return true;

function VAM_TabAtMax(pFld)
(pFld.value.length == pFld.maxLength) && 
(pFld.value.length > gVAM_KFVal.length) && 
(pFld.value.substr(0, gVAM_KFVal.length) == gVAM_KFVal)) 
{

function VAM_ClickBtn(pBId, pFcs)

function VAM_KeyToBtn(pE, pKC, pBId, pFcs)

vFld.onpaste = new Function("event.returnValue=false;return false;");

function VAM_GetKeyCode(pE)
function VAM_StopEvent(pE)

function VAM_IsCtrl(pE)

var gVAM_SOC = null;
return;
{
if (!gVAM_SOC)
gVAM_SOC[gVAM_SOC.length] = vFld;

function VAM_DisposeSOC()

function VAM_SOCCheck(pTBId)

function VAM_SOCSet(pTBId, pEvt)
vFld.orval = vFld.value;

var gVAM_GOC = null;
if (!pCFld || !pDEFld)
{
if (!gVAM_GOC)
gVAM_GOC[gVAM_GOC.length] = pCFld;

function VAM_DisposeGOC()
}

function VAM_GOCInitCstmOC(pCFID, pOnC)

function VAM_GOCCheck(pCFID)
VAM_FieldChanged(pCFID);

function VAM_GOCSet(pDEFld, pHF, pD)


{
continue;
VAM_AttachEvent(vF, "onfocus", "VAM_VWBClear('" + vO.CID + "');");
if (vF.style.OrigCss != null)
vF.OrigCss = vF.className;
VAM_VWBSet(vO.CID);

function VAM_VWBClear(pFId)
{

function VAM_VWBSet(pFId)
{
{
VAM_VWBFixCss(vF);
vCss = true;
vCss = true;
vF.className = vF.VWBCss;

function VAM_VWBFixCss(pF)
{
pF.className = pF.OrigCss;

function VAM_TBIsBlank(pF)

function VAM_FireEvent(pFld, pEN, pDOMET)
pFld = VAM_GetById(pFld);
pFld.fireEvent('on'+pEN);
{
case "UIEvents":
{
var vEv = "";