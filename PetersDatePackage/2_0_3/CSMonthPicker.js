// Copyright 2002 - 2007 Peter L. Blum, All Rights Reserved, www.PeterBlum.com
// Peter's Date Package Release 2.0.3

function MYP_Initialize(pMYPId,pAO,pICB){if(!gPDP_SupportsInnerHTML)return;var vMYPFld=PDP_GetById(pMYPId);if(pAO.KeyB)MYP_InitKeys(vMYPFld);if(gPDP_IEMac||(vMYPFld.offsetWidth==0)){var vPU=PDP_GetAtt(vMYPFld,"onpopup",'');;PDP_SetAtt(vMYPFld,"onpopup",vPU+"MYP_InitSize('"+pMYPId+"');");}if(!gPDP_IEMac&&(vMYPFld.offsetWidth!=0))MYP_InitSize(pMYPId);MYP_SelectMonthYear(pMYPId,MYP_GetMonth(pMYPId),MYP_GetYear(pMYPId));}function MYP_InitSize(pMYPId){var vMYPFld=PDP_GetById(pMYPId);var vAO=vMYPFld.AO;if(vAO.Inited)return;var vOT=PDP_GetById(pMYPId+"_OuterTable");var vComW=vOT.offsetWidth;var vClW=0;if(vMYPFld.clientWidth)vClW=vMYPFld.clientWidth;else vClW=vMYPFld.width;if(vClW>vComW)vComW=vClW;vOT.style.width=vComW+"px";var vH=PDP_GetById(pMYPId+"_Header");if(vH)vH.style.width=vComW+"px";if(gPDP_Opera7)vMYPFld.style.width=(vComW+PDP_GetLeftBorder(vMYPFld)*2)+"px";else vMYPFld.style.width=vComW+"px";vAO.Inited=true;}function MYP_MonthOnClick(pMYPId,pMonthCellId){if(PDP_GetById(pMonthCellId).InRange){MYP_MonthChange(pMYPId,pMonthCellId);MYP_OnSelectionChanged(PDP_GetById(pMYPId),false);}}function MYP_MonthChange(pMYPId,pMonthCellId){var vMYPFld=PDP_GetById(pMYPId);var vAO=vMYPFld.AO;if(!MYP_MonthNoSelection(pMYPId,pMonthCellId))return;var vMCFld=PDP_GetById(pMonthCellId);vMCFld.className=vAO.SelMCSS;if(vAO.SelMCSS=="")PDP_SetBkColor(vMCFld,"gold");PDP_GetById(pMYPId+"_Month").value=vMCFld.MonthNumber;vAO.MSelCId=pMonthCellId;}function MYP_MonthNoSelection(pMYPId,pNextSelectionCellId){var vMYPFld=PDP_GetById(pMYPId);var vAO=vMYPFld.AO;var vSelCId=vAO.MSelCId;if(vSelCId!=""){if(vSelCId==pNextSelectionCellId)return false;var vOldCell=PDP_GetById(vSelCId);vOldCell.className=vAO.MCSS;PDP_SetBkColor(vOldCell,"");}return true;}function MYP_MoveMonthSelection(pMYPId,pChangeCount){var vMYPFld=PDP_GetById(pMYPId);var vAO=vMYPFld.AO;var vSelCId=vAO.MSelCId;if(vSelCId==""){for(var vI=0;vI<12;vI++){var vCellNumber=0;if(pChangeCount>0)vCellNumber=vI;else vCellNumber=11-vI;var vNewCellId=pMYPId+"_MC_"+vCellNumber;var vInRange=PDP_GetById(vNewCellId).InRange;if(vInRange){MYP_MonthChange(pMYPId,vNewCellId);MYP_OnSelectionChanged(vMYPFld,false);return;}}}else{var vMNo=PDP_GetById(vSelCId).MonthNumber;vMNo=(vMNo+pChangeCount-1)%12;if(vMNo<0)vMNo=vMNo+12;var vNewCellId=pMYPId+"_MC_"+vMNo;var vInRange=PDP_GetById(vNewCellId).InRange;if(vInRange){MYP_MonthChange(pMYPId,vNewCellId);MYP_OnSelectionChanged(vMYPFld,false);}}}function MYP_YearOnClick(pMYPId,pYearCellId){var vYCFld=PDP_GetById(pYearCellId);if(vYCFld.InRange){MYP_YearChange(pMYPId,pYearCellId);MYP_OnSelectionChanged(PDP_GetById(pMYPId),false);}}function MYP_YearChange(pMYPId,pYearCellId){var vMYPFld=PDP_GetById(pMYPId);var vAO=vMYPFld.AO;if(!MYP_YearNoSelection(pMYPId,pYearCellId))return;var vYCFld=PDP_GetById(pYearCellId);vYCFld.className=vAO.SelYCSS;if(vAO.SelYCSS=="")PDP_SetBkColor(vYCFld,"gold");PDP_GetById(pMYPId+"_Year").value=vYCFld.Year;vAO.YSelCId=vYCFld.id;MYP_ApplyMinMaxToMonths(vMYPFld,vYCFld.Year);}function MYP_YearNoSelection(pMYPId,pNextSelectedCellId){var vMYPFld=PDP_GetById(pMYPId);var vAO=vMYPFld.AO;var vSelCId=vAO.YSelCId;if(vSelCId!=""){if(vSelCId==pNextSelectedCellId)return false;var vOldCell=PDP_GetById(vSelCId);vOldCell.className=vAO.YCSS;PDP_SetBkColor(vOldCell,"");}return true;}function MYP_ApplyMinMaxToMonths(pMYPFld,pYear){var vAO=pMYPFld.AO;var vMinM=vAO.MinM;var vMaxM=vAO.MaxM;var vMinY=vAO.MinY;var vMaxY=vAO.MaxY;var vSelCId=vAO.MSelCId;var vChkRng=(vMinM>0)||(vMaxM>0);var vMonthTable=PDP_GetById(pMYPFld.id+"_MonthTable");for(var vRC=0;vRC<vMonthTable.rows.length;vRC++){var vRow=vMonthTable.rows[vRC];for(var vCellCount=0;vCellCount<vRow.cells.length;vCellCount++){var vCell=vRow.cells[vCellCount];var vMonth=(vCellCount*6)+vRC+1;vCell.MonthNumber=vMonth;var vInRange=true;if(vChkRng&&(pYear>0)){if(vMinM>0)vInRange=(vMinY<pYear)||((vMinY==pYear)&&(vMinM<=vMonth));if(vInRange&&(vMaxM>0))vInRange=(vMaxY>pYear)||((vMaxY==pYear)&&(vMaxM>=vMonth));}vCell.style.color='';if(vInRange){if(vCell.id!=vSelCId){vCell.className=vAO.MCSS;}}else{vCell.className=vAO.OORCSS;if(vAO.OORCSS=="")vCell.style.color="gray";PDP_SetBkColor(vCell,"");if(vCell.id==vSelCId){PDP_GetById(pMYPFld.id+"_Month").value=0;vAO.MSelCId="";}}vCell.InRange=vInRange;}}}function MYP_OnMouseOver(pMCId,pFC,pBrdC){var vMC=PDP_GetById(pMCId);if(vMC.InRange){PDP_OnMouseEvent(vMC,pFC,pBrdC);}}function MYP_OnMouseOut(pMCId){MYP_OnMouseOver(pMCId,"","");}function MYP_FillInYearTable(pMYPId,pMode){var vMYPFld=PDP_GetById(pMYPId);var vAO=vMYPFld.AO;var vStartY=0;var vSelY=0;var vYFld=PDP_GetById(pMYPId+"_Year");if(pMode==0){vSelY=parseInt(vYFld.value);if(vSelY==0){var vDate=new Date();vSelY=vDate.getFullYear();}var vStartY=vSelY-vAO.InitYO;}else{var vFstY=vAO.FstY;vStartY=vFstY+pMode;if(pMode>0)vSelY=vStartY;else vSelY=vFstY-1;}vAO.FstY=vStartY;var vMinY=vAO.MinY;var vMaxY=vAO.MaxY;if((vMaxY>0)&&(vStartY>vMaxY))vStartY=vMaxY-10;if(vStartY<vMinY)vStartY=vMinY;if((vMaxY>0)&&(vSelY>vMaxY))vSelY=vMaxY-10;if(vStartY<vMinY)vSelY=vMinY;var vYearTable=PDP_GetById(pMYPId+"_YearTable");for(var vRC=0;vRC<5;vRC++){var vRow=null;if(vYearTable.rows&&!gPDP_Safari)vRow=vYearTable.rows[vRC];else{var vRows=PDPUtil_GetChildNodes(vYearTable,"TBODY",1);vRow=PDPUtil_GetChildNodes(vRows,"TR",vRC+1);}for(var vCellCount=0;vCellCount<2;vCellCount++){var vCell=null;if(vRow.cells&&!gPDP_Safari)vCell=vRow.cells[vCellCount];else vCell=PDPUtil_GetChildNodes(vRow,"TD",vCellCount+1);var vOffset=vRC+vCellCount*5;var vYearToShow=vStartY+vOffset;PDP_SetInnerHTML(vCell,vYearToShow);var vInRange=true;if(vMinY>0)vInRange=vYearToShow>=vMinY;if(vMaxY>0)vInRange=vYearToShow<=vMaxY;PDP_SetBkColor(vCell,"");vCell.style.color='';if(vInRange){if(vYearToShow==vSelY){vCell.className=vAO.SelYCSS;if(vAO.SelYCSS=="")PDP_SetBkColor(vCell,'gold');vYFld.value=vYearToShow;vAO.YSelCId=vCell.id;}else vCell.className=vAO.YCSS;}else{vCell.className=vAO.OORCSS;if(vAO.OORCSS=="")vCell.style.color="gray";}vCell.InRange=vInRange;vCell.Year=vYearToShow;}}MYP_ApplyMinMaxToMonths(vMYPFld,vSelY);PDP_GetById(pMYPId+"_PrevYears").style.visibility=(vMinY==0)||(vMinY<vStartY)?"inherit":"hidden";PDP_GetById(pMYPId+"_NextYears").style.visibility=(vMaxY==0)||(vMaxY>=vStartY+10)?"inherit":"hidden";MYP_OnSelectionChanged(vMYPFld,false);}function MYP_ClosePopup(pMYPFld){if(pMYPFld.AO.IsPopup){PDP_ClosePopup();return true;}else return false;}function MYP_Apply(pMYPId){var vMYPFld=PDP_GetById(pMYPId);MYP_OnSelectionChanged(vMYPFld,true);MYP_ClosePopup(vMYPFld);}function MYP_Cancel(pMYPId){var vF=PDP_GetById(pMYPId);var vAO=vF.AO;if(vAO.OrigM!=null){PDP_GetById(pMYPId+"_Month").value=vAO.OrigM;PDP_GetById(pMYPId+"_Year").value=vAO.OrigY;MYP_SelectMonthYear(pMYPId,parseInt(vAO.OrigM),parseInt(vAO.OrigY));}MYP_ClosePopup(vF);}function MYP_OnPopup(pMYPId){var vF=PDP_GetById(pMYPId);var vAO=vF.AO;vAO.OrigM=PDP_GetById(pMYPId+"_Month").value;vAO.OrigY=PDP_GetById(pMYPId+"_Year").value;}function MYP_OnSelectionChanged(pMYPFld,pApply){if(!pApply){if(pMYPFld.AO.AChgN)pApply=true;}if(pApply){var vOSCFnc=pMYPFld.AO.OnSelChg;if(vOSCFnc)eval(vOSCFnc);}}function MYP_SelectMonthYear(pMYPId,pMonth,pYear){var vMYPFld=PDP_GetById(pMYPId);var vAO=vMYPFld.AO;if(pYear==0)pYear=vAO.Today.getUTCFullYear();PDP_GetById(pMYPId+"_Year").value=pYear;MYP_FillInYearTable(pMYPId,0);MYP_ApplyMinMaxToMonths(vMYPFld,pYear);if(pMonth==0){pMonth=vAO.Today.getUTCMonth();}else pMonth--;var vSelCFld=PDP_GetById(pMYPId+"_MC_"+pMonth);if(vSelCFld.InRange)MYP_MonthChange(pMYPId,vSelCFld.id);else MYP_MonthNoSelection(pMYPId,vSelCFld.id);}function MYP_GetMonth(pMYPId){return parseInt(PDP_GetById(pMYPId+"_Month").value);}function MYP_GetYear(pMYPId){return parseInt(PDP_GetById(pMYPId+"_Year").value);}