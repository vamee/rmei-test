// Copyright 2003 - 2007 Peter L. Blum, All Rights Reserved, www.PeterBlum.com
// Professional Validation And More v3.0.8


var gVAMCalcCnt = 0;
{
var vTID = pAO.CID2 + "_Token";
function VAM_CalcInitList(pAO, pExp)
VAM_CalcInitList(pAO, vIC.Exp); if (vIC.ExpT != null) 
VAM_CalcInitList(pAO, vIC.ExpT); if (vIC.ExpF != null) 
VAM_CalcInitList(pAO, vIC.ExpF); } 
pAO.CalcVal = 0.0; pAO.Cnt = -1; } 

function VAM_CalcAction(pAO, pEvalRes)
try
gVAMCalcCnt++;
} 

function VAM_Calculate(pAO)
vVal = VAM_Round(vVal, pAO.RM, pAO.DP);

function VAM_CalcExp(pAO, pExp)
if (!pExp)
vVal = VAM_CalcExp(pAO, vIC.Exp);
vVal = vIC.Const;
{
(vIC.CFSI != null)) 
{
vVal = NaN;
}
vVal = NaN;
else if (vIC.CID != null) 
{
var vTB = VAM_GetById(vIC.CID);
vVal = vIC.BlkZ ? 0.0 : NaN;
vVal = VAM_GetDTTBValue(vIC.CID);
{
vVal = vIC.BlkZ ? 0.0 : NaN;
vVal = vIC.InvZ ? 0.0 : NaN;
{
{
vVal = NaN;
vVal = 0.0;
vVal = VAM_CalcExp(pAO, vIC.ExpT);
vVal = VAM_CalcExp(pAO, vIC.ExpF);
break;
}
if (vIC.CCalc != null)
vT = vT + vVal;
vT = vT - vVal;
vT = vT * vVal;
if (vVal != 0.0)
return vT

function VAM_CalcShowValue(pAO, pVal)
if (vF.style.display == "none") 
return;
{
pAO.OrigCss = (vF.className != pAO.InvCss) ? vF.className : "";
{
{
{
{
if (Math.round(pVal) != pVal)
pVal = VAM_Round(pVal, 0, 0);
{
{

function VAM_Round(pVal, pMd, pDP)
vSV = Math.floor(Math.abs(vSV));
var vNV = Math.floor(vSV); if ((vSV != vNV) && (vNV % 2 == 1)) 
{ 
vNV = Math.round(vSV);

vSV = Math.round(Math.abs(vSV)); if (pVal < 0)
return 0; } 

function VAM_CalcAll()
continue;

function VAM_CalcOne(pID)

function VAM_CalcFromCond(pID)