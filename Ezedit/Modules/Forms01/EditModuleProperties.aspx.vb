Imports PeterBlum.VAM

Partial Class Ezedit_Modules_PR01_EditModuleProperties
    Inherits System.Web.UI.Page

    Dim strModuleKey As String = "Forms01"
    Dim strForeignKey As String = "FormID"
    Dim intFormID As Integer = 0
    Dim intPageModuleID As Integer = 0
    Dim intFormPageTypeID As Integer = 0

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        intFormID = CInt(Request("FormID"))
        intPageModuleID = CInt(Request("PageModuleID"))

        If Not IsPostBack Then
            intFormID = CInt(Request("FormID"))
            intPageModuleID = CInt(Request("PageModuleID"))

            intFormPageTypeID = Emagine.GetNumber(Emagine.GetDbValue("SELECT FormPageTypeID FROM PageModules WHERE PageModuleID = " & intPageModuleID))
            Me.BindFormPageTypes()
            Me.BindCodeFiles(strModuleKey)
            ddlDisplayPageId = Pages01.PopulatePageOptionsDDL(ddlDisplayPageId, 0, 0, 0, Session("EzEditStatusID"), Session("EzEditLanguageID"))
            lblModuleName.Text = "<a href='Default.aspx' class='breadcrumb'>Forms</a>"
            btnDelete.Attributes.Add("onclick", "return confirm('Are you sure you want to delete?');")
            If intPageModuleID > 0 Then
                Me.Edit(intPageModuleID, strModuleKey, intFormID)
            Else
                Me.Add()
            End If
        Else

            intFormPageTypeID = ddlFormPageTypeID.SelectedValue
        End If

        Me.BindRptFields(strModuleKey, intFormPageTypeID)
    End Sub

    Sub BindCodeFiles(ByVal strModuleKey As String)
        Dim SQL As String = "SELECT CodeFileID, Description FROM ModuleCodeFiles WHERE ModuleKey = '" & strModuleKey & "'"
        ddlCodeFileID.AppendDataBoundItems = True
        ddlCodeFileID.DataValueField = "CodeFileID"
        ddlCodeFileID.DataTextField = "Description"
        ddlCodeFileID.DataSource = Emagine.GetDataTable(SQL)
        ddlCodeFileID.DataBind()
    End Sub

    Sub BindFormPageTypes()
        Dim SQL As String = "SELECT ModuleTypeID AS FormPageTypeID, ModuleType AS FormPageType FROM ModuleTypes WHERE ModuleKey = '" & strModuleKey & "'"
        ddlFormPageTypeID.DataValueField = "FormPageTypeID"
        ddlFormPageTypeID.DataTextField = "FormPageType"
        ddlFormPageTypeID.DataSource = Emagine.GetDataTable(SQL)
        ddlFormPageTypeID.DataBind()
    End Sub

    Sub BindRptFields(ByVal strModuleKey As String, ByVal intModuleTypeID As Integer)
        Dim dtrFields As Data.SqlClient.SqlDataReader = Modules.GetModuleProperties(strModuleKey, intModuleTypeID)
        If dtrFields.HasRows Then
            rptFields.DataSource = dtrFields
            rptFields.DataBind()
            rptFields.EnableViewState = False
        Else
            rptFields.Visible = True
        End If
        dtrFields.Close()
    End Sub

    Sub Add()
        lblPageTitle.Text = " > Add Form to Page"
    End Sub

    Sub Edit(ByVal intPageModuleId As Integer, ByVal strModuleKey As String, ByVal intCategoryId As String)
        lblPageTitle.Text = " > Edit Form Properties"
        Dim PageModule As New PageModule
        PageModule = PageModule.GetModulePage(intPageModuleId)
        If Not IsPostBack Then
            ddlDisplayPageId.SelectedValue = PageModule.PageID
            ddlCodeFileID.SelectedValue = PageModule.CodeFileID
            ddlFormPageTypeID.SelectedValue = PageModule.FormPageTypeID
        End If
        txtSortOrder.Text = PageModule.SortOrder
    End Sub

    Protected Sub rptFields_ItemDataBound(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.RepeaterItemEventArgs) Handles rptFields.ItemDataBound
        If e.Item.ItemType = ListItemType.Item Or e.Item.ItemType = ListItemType.AlternatingItem Then

            Dim strModuleKey As String = DataBinder.Eval(e.Item.DataItem, "ModuleKey")
            Dim intPropertyId As Integer = CInt(DataBinder.Eval(e.Item.DataItem, "PropertyId"))
            Dim intPropertyTypeId As Integer = CInt(DataBinder.Eval(e.Item.DataItem, "PropertyTypeID"))
            Dim strPropertyName As String = DataBinder.Eval(e.Item.DataItem, "PropertyName")
            Dim strHelpText As String = DataBinder.Eval(e.Item.DataItem, "HelpText").ToString()
            Dim strSelectedValue As String = Modules.GetPropertyValue(intPageModuleID, intPropertyId)
            'Response.Write(intPropertyId & " - " & intPropertyTypeId & " - " & strPropertyName & " - " & strSelectedValue & "<br>")

            Dim strLabel As String = DataBinder.Eval(e.Item.DataItem, "DisplayName").ToString
            Dim strLabelCss As String = "form-label"
            Dim tdFieldLabel As HtmlTableCell = CType(e.Item.FindControl("tdFieldLabel"), HtmlTableCell)
            Dim tdFormField As HtmlTableCell = CType(e.Item.FindControl("tdFormField"), HtmlTableCell)
            Dim trForms As HtmlTableRow = CType(e.Item.FindControl("trForms"), HtmlTableRow)
            Dim lblFieldLabel As Label = CType(e.Item.FindControl("lblFieldLabel"), Label)
            Dim plcFormField As PlaceHolder = CType(e.Item.FindControl("plcFormField"), PlaceHolder)
            Dim strBgColor As String

            'FormFields01.DisplayFormField(intPropertyId, Request(intPropertyId), CType(e.Item.FindControl("plcFormField"), PlaceHolder), True)
            Dim Formfield As New Control

            If intPropertyTypeId = 0 Then
                Dim lbl As New Label
                tdFieldLabel.Visible = False
                tdFormField.ColSpan = 2
                lbl.Text = DataBinder.Eval(e.Item.DataItem, "HelpText")
                Formfield = lbl
            Else
                lblFieldLabel.Text = strLabel & ":"
                lblFieldLabel.CssClass = "form_label"
            End If

            Select Case intPropertyTypeId
                Case 0
                    Formfield = FormFields01.GetContentBlock(intPropertyId, strHelpText)

                Case 1
                    Formfield = FormFields01.GetTextBox(intPropertyId, strSelectedValue, 300, 20, "form", 50)
                    Formfield.ID = intPropertyId
                Case 2, 3
                    Formfield = Modules.GetPropertyOptions(intPropertyTypeId, strPropertyName, intPropertyId, strSelectedValue, "main")
                    Formfield.ID = intPropertyId
                Case 101
                    Dim ddlDetailsPageId As New DropDownList
                    ddlDetailsPageId.AppendDataBoundItems = True
                    ddlDetailsPageId.Items.Add(New ListItem("<-- Please Choose -->", 0))
                    Formfield = Pages01.PopulatePageOptionsDDL(ddlDetailsPageId, 0, 0, 0, Session("EzEditStatusID"), Session("EzEditLanguageID"))
                    ddlDetailsPageId.SelectedValue = strSelectedValue
                    Formfield.ID = intPropertyId
                    'Dim Validator As New PeterBlum.VAM.RequiredListValidator
                    'Validator.ID = "rlv" & intPropertyId
                    'Validator.ControlIDToEvaluate = intPropertyId
                    'Validator.UnassignedIndex = 0
                    'Validator.SummaryErrorMessage = strLabel & " is required."
                    'plcFormField.Controls.Add(Validator)
                Case 102
                    Dim ddlRegistrationFormPages As New DropDownList
                    ddlRegistrationFormPages.CssClass = "main"
                    ddlRegistrationFormPages.Items.Add(New ListItem("None", 0))
                    ddlRegistrationFormPages.AppendDataBoundItems = True

                    Dim dtrFormPages As Data.SqlClient.SqlDataReader = Pages01.GetFormPages(2, Emagine.GetNumber(Session("EzEditStatusID")), Emagine.GetNumber(Session("EzEditLanguageID")))
                    If dtrFormPages.HasRows Then
                        ddlRegistrationFormPages.DataSource = dtrFormPages

                        ddlRegistrationFormPages.DataValueField = "PageID"
                        ddlRegistrationFormPages.DataTextField = "PageName"
                        'ddlRegistrationFormPages.SelectedValue = strSelectedValue
                        ddlRegistrationFormPages.DataBind()
                    End If
                    dtrFormPages.Close()

                    For i As Integer = 0 To ddlRegistrationFormPages.Items.Count - 1
                        If ddlRegistrationFormPages.Items.Item(i).Value = strSelectedValue Then
                            ddlRegistrationFormPages.SelectedValue = strSelectedValue
                            Exit For
                        End If
                    Next

                    Formfield = ddlRegistrationFormPages
                    'Formfield = Modules.GetFormPageOptionsDDL(strSelectedValue, False, "main")
                    Formfield.ID = intPropertyId

                    'Formfield = Modules.GetFormPageOptionsDDL(strSelectedValue, False, "main")
                    'Formfield.ID = intPropertyId
                    'Case Else
                    '   Formfield = FormFields01.GetTextBox(intPropertyId, "OK", 300, 20, "form", 50)
            End Select

            plcFormField.Controls.Add(Formfield)

            If e.Item.ItemType = ListItemType.Item Then strBgColor = "#FFFFFF" Else strBgColor = "#F3F2F7"

            trForms.BgColor = strBgColor
            trForms.Attributes("onmouseover") = "this.style.backgroundColor='#D2CEC2'"
            trForms.Attributes("onmouseout") = "this.style.backgroundColor='" & strBgColor & "'"

        End If
    End Sub

    Protected Sub btnSave_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnSave.Click

        PeterBlum.VAM.Globals.Page.Validate()
        If PeterBlum.VAM.Globals.Page.IsValid Then

            Dim PageModule As New PageModule
            PageModule.PageModuleId = intPageModuleID
            PageModule.PageID = ddlDisplayPageId.SelectedValue
            PageModule.CodeFileID = ddlCodeFileID.SelectedValue
            PageModule.FormPageTypeID = ddlFormPageTypeID.SelectedValue
            PageModule.ModuleKey = strModuleKey
            PageModule.ForeignKey = strForeignKey
            PageModule.ForeignValue = intFormID
            PageModule.SortOrder = Emagine.GetNumber(txtSortOrder.Text)

            If intPageModuleID > 0 Then
                PageModule.Update(PageModule)
                PageModuleProperty.DeleteAll(intPageModuleID)
                Session("Alert") = "The module properties for this page have been updated succesfully."
            Else
                intPageModuleID = PageModule.Insert(PageModule)
                Session("Alert") = "The module properties for this page have been added succesfully."
            End If

            If intPageModuleID > 0 Then
                Me.InsertModuleProperties(Page, intPageModuleID)
                Redirect()
            Else
                lblAlert.Text = "There was a problem saving page module data."
            End If

        End If
    End Sub

    Public Sub InsertModuleProperties(ByVal objParentControl As Control, ByVal intPageModuleID As Integer)
        Dim Control As New Control()

        For Each Control In objParentControl.Controls
            If IsNumeric(Control.ID) Then
                If TypeOf Control Is TextBox Then
                    'Response.Write(Control.ID & " : " & DirectCast(Control, TextBox).Text & " : " & Control.Parent.GetType().FullName & " : " & Control.Parent.ID & "<br>")
                    PageModuleProperty.Insert(intPageModuleID, Control.ID, DirectCast(Control, TextBox).Text)

                ElseIf TypeOf Control Is DropDownList Then
                    'Response.Write(Control.ID & " : " & DirectCast(Control, DropDownList).SelectedValue & "<br>")
                    PageModuleProperty.Insert(intPageModuleID, Control.ID, DirectCast(Control, DropDownList).SelectedValue)

                ElseIf TypeOf Control Is ListBox Then
                    Dim i As Integer
                    Dim ListBox As ListBox = DirectCast(Control, ListBox)
                    Dim arySelectedValues As Array = ListBox.GetSelectedIndices
                    Dim PropertyValue As String = ""

                    For i = 0 To UBound(arySelectedValues)
                        PropertyValue = PropertyValue & ListBox.Items(arySelectedValues(i)).Value
                        If i < UBound(arySelectedValues) Then PropertyValue = PropertyValue & "||"
                    Next

                    PageModuleProperty.Insert(intPageModuleID, Control.ID, PropertyValue)

                ElseIf TypeOf Control Is CheckBoxList Then
                    Dim CheckBoxList As CheckBoxList = DirectCast(Control, CheckBoxList)
                    Dim Item As ListItem
                    Dim PropertyValue As String = ""

                    For Each Item In CheckBoxList.Items
                        If Item.Selected Then
                            PropertyValue = PropertyValue & Item.Value & "||"
                        End If
                    Next

                    PageModuleProperty.Insert(intPageModuleID, Control.ID, PropertyValue)

                ElseIf TypeOf Control Is RadioButtonList Then
                    'Response.Write(Control.ID & " : " & DirectCast(Control, RadioButtonList).SelectedItem.ToString & "<br>")
                    PageModuleProperty.Insert(intPageModuleID, Control.ID, DirectCast(Control, RadioButtonList).SelectedItem.ToString)

                ElseIf TypeOf Control Is HiddenField Then
                    'Response.Write(Control.ID & " : " & DirectCast(Control, HiddenField).Value & "<br>")
                    PageModuleProperty.Insert(intPageModuleID, Control.ID, DirectCast(Control, HiddenField).Value)
                End If
            End If

            If Control.HasControls Then InsertModuleProperties(Control, intPageModuleID)
        Next
    End Sub

    Protected Sub btnCancel_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnCancel.Click
        Redirect()
    End Sub

    Sub OnItemCommand(ByVal Src As Object, ByVal Args As RepeaterCommandEventArgs)
        'Dim intUserId As HiddenField = Args.Item.FindControl("hidUserId")
        If Args.CommandName = "Delete" Then
            'If EzeditUser.DeleteUser(intUserId.Value) Then
            ' lblAlert.Text = "User Deleted"
            'Me.BindRpUsers()
            'Else
            '    lblAlert.Text = "Error Deleting User"
            'End If
        End If
    End Sub


    Protected Sub btnDelete_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnDelete.Click
        Dim SQL As String

        SQL = "DELETE FROM PageModuleProperties WHERE PageModuleID = " & intPageModuleID
        Emagine.ExecuteSQL(SQL)

        SQL = "DELETE FROM PageModules WHERE PageModuleID = " & intPageModuleID
        Emagine.ExecuteSQL(SQL)

        Redirect()
    End Sub

    Sub Redirect()
        Response.Redirect("Default.aspx")
    End Sub
End Class
