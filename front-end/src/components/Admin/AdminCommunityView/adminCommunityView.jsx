import AdminDashboardComponent from "../AdminDashboardComponent/adminDashboardComponent";
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createRef, useEffect, useState } from "react";
import { selectCurrentCommunityResume } from "../../../store/resume/resume-selector";
import { TextField } from "@mui/material";

const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    ForeColor,
    BackColor,
    CleanFormatting,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    NumberedList,
    BulletedList,
    Undo,
    Redo,
    FontSize,
    FontName,
    FormatBlock,
    Link,
    Unlink,
    InsertImage,
    ViewHtml,
    InsertTable,
    InsertFile,
    SelectAll,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell,
} = EditorTools;

const AdminCommunityView = () => {

    const content = createRef();
    var { slugPara } = useParams();
    const [documentName, setDocumentName] = useState("");
    const dummyRecommendationResume = useSelector(selectCurrentCommunityResume);

    useEffect(() => {
        dummyRecommendationResume.map((data) => {
            if (data.slug === slugPara) {
                setDocumentName(data.title)
                EditorUtils.setHtml(content.current.view, JSON.parse(data.ResumeData));
            }
        })
        // console.log(EditorUtils.getHtml(content.current.view.state))
    }, [])
    console.log(slugPara)

    return (
        <AdminDashboardComponent>
            <div className='form-text-field' style={{ marginTop: "3rem" }} >
                <TextField
                    label="Template Name"
                    value={documentName}
                    fullWidth
                    InputProps={{ style: { fontSize: 14 } }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                />
            </div>
            <div className="createResume-editor">
                <Editor tools={[
                    [Bold, Italic, Underline, Strikethrough],
                    [Subscript, Superscript],
                    ForeColor,
                    BackColor,
                    [CleanFormatting],
                    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                    [Indent, Outdent],
                    [OrderedList, UnorderedList],
                    [NumberedList, BulletedList],
                    FontSize,
                    FontName,
                    FormatBlock,
                    [SelectAll],
                    [Undo, Redo],
                    [Link, Unlink, InsertImage, ViewHtml],
                    [InsertTable, InsertFile],
                    [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                    [DeleteRow, DeleteColumn, DeleteTable],
                    [MergeCells, SplitCell],
                ]} contentStyle={{
                    height: 630
                }} ref={content} />
            </div>
        </AdminDashboardComponent>
    )
}

export default AdminCommunityView;