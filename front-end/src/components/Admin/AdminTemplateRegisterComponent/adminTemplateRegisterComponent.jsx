import { createRef, useEffect, useState } from "react";
import AdminDashboardComponent from "../AdminDashboardComponent/adminDashboardComponent";
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentRecommendationResume } from "../../../store/resume/resume-selector";
import { TextField } from "@mui/material";
import { ErrorNoty, SuccessNoty } from "../../../hooks/notifications";
import { selectCurrentAdmin } from "../../../store/admin/admin-selector";
import makeslug from "../../../hooks/randomGenerator";

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

const AdminTemplateRegisterComponent = () => {

    const content = createRef();
    var { slugPara } = useParams();
    const admin = useSelector(selectCurrentAdmin)
    const [documentName, setDocumentName] = useState("Template");
    const dummyRecommendationResume = useSelector(selectCurrentRecommendationResume);
    const [condition, setCondition] = useState(slugPara === "newRegister" ? "Submit" : "Update")

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

    const saveRecommendation = async (slug) => {
        let resume = {
            slug: slug,
            title: documentName === '' || documentName[0] === ' ' ? "Random" : documentName,
            data: JSON.stringify(EditorUtils.getHtml(content.current.view.state)),
        };
        console.log(resume)
        let result = await fetch("http://127.0.0.1:8000/api/updateRecommendationResume", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(resume)
        });
        result = await result.json();
        if (result['resume']) {
            SuccessNoty("Data has been stored")
            console.log(result['resume'])
        } else {
            ErrorNoty("Trouble storing data")
        }
    }

    const UpdateOrCreate = () => {
        if (slugPara === "newRegister") {
            saveRecommendation(makeslug())
        } else {
            saveRecommendation(slugPara)
        }
    }

    return (
        <>
            <AdminDashboardComponent>
                <div className='form-text-field' style={{ marginTop: "3rem" }} >
                    <TextField
                        label="Template Name"
                        value={documentName}
                        onChange={(e) => setDocumentName(e.target.value)}
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
                <br />
                <button className="btn btn-primary" onClick={UpdateOrCreate}>{condition}</button>
            </AdminDashboardComponent>
        </>
    )
}

export default AdminTemplateRegisterComponent;