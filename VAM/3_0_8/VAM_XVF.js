// Copyright 2003 - 2007 Peter L. Blum, All Rights Reserved, www.PeterBlum.com
// Professional Validation And More v3.0.8


function VAM_EvalVisCond(pCO)
return VAM_IsVisible(VAM_GetById(pCO.IDToEval)) == pCO.Vis ? 1 : 0;

function VAM_EvalEnabledCond(pCO)

function VAM_EvalReadOnlyCond(pCO)

function VAM_EvalClassNameCond(pCO)


function VAM_EvalBTxtLenCond(pCO)

function VAM_TxtLenReplToken(pAO, pText)

function VAM_CntChars(pCO, pText)

function VAM_NoErrFmt(pAO)
return;
|| (pAO.NEFMd == 3)) 
vVis = pAO.IsValid;
{ 
vVis = false;
vVis = (pAO.CondResult == 1) &&
vVis = false;

function VAM_ValSumPreTbl(pVSO)

function VAM_ValSumPostTbl(pVSO)

function VAM_ValSumFmtTbl(pVSO, pMsg, pRowNum)

function VAM_GetAttrCondVal(pCO)

function VAM_DisableSubmit()
var vCode = "javascript:VAM_DSBody(true);";
function VAM_DSBody(pDisable) 
{
vFld.disabled = pDisable;
}

function VAM_InitMenuControl(pFldID, pGrp, pAll, pLoc)
function VAM_IMCChildren(pFld, pGrp, pAll, pLoc)
function VAM_IMCUpdate(pFld, pGrp, pAll, pLoc)
function VAM_InitLinkMenuControl(pFldID, pGrp, pMsg)

function VAM_ILMChildren(pFld, pGrp, pMsg)