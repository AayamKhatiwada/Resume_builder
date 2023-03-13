import './CreateResumeComponent.css'
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import { createRef, useEffect, useState } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import CreateResumeImage from '../assets/createresume_image.jpeg'
import { jsPDF } from "jspdf";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentResume } from '../../store/resume/resume-selector';
import { SuccessNoty } from '../../hooks/notifications';

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

const CreateResumeComponent = () => {
    const content = createRef();
    const { slugPara } = useParams();
    const [documentName, setDocumentName] = useState("Document");
    const allResumeData = useSelector(selectCurrentResume);
    console.log(allResumeData)

    useEffect(() => {
        allResumeData.map((data) => {
            if (data.slug === slugPara) {
                setDocumentName(data.title)
                EditorUtils.setHtml(content.current.view, JSON.parse(data.ResumeData));
                console.log(data.slug === slugPara)
                console.log(data.title)
            }
        })
    }, [allResumeData])

    const saveToDatabase = async () => {
        let resume = { user_id: "1", slug: slugPara, title: documentName === '' || documentName[0] === ' ' ? "Random" : documentName, data: JSON.stringify(EditorUtils.getHtml(content.current.view.state)) };
        let result = await fetch("http://127.0.0.1:8000/api/saveResume", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(resume)
        });
        result = await result.json();
        SuccessNoty("Data has been stored")
        if (result['error']) {
            alert(result['error'])
        } else if (result['resume']) {
            console.log(result['resume'])
        }
    }

    const downloadresume = () => {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = EditorUtils.getHtml(content.current.view.state);
        console.log(wrapper)
        const doc = new jsPDF();

        doc.html(wrapper, {
            callback: function (doc) {
                doc.save(`${documentName}.pdf`);
            },
            margin: [10, 10, 10, 10],
            autoPaging: "text",
            x: 0,
            y: 0,
            width: 190,
            windowWidth: 675
        });
    }

    return (
        <div className='createResume'>
            <div className="createResume-header">
                <div className="createResume-firstPart col-sm-1">
                    <img src={CreateResumeImage} alt="" width="130%" />
                </div>
                <div className="createResume-secondPart col-sm-11">
                    <div className="createResume-title">
                        <input type="text" value={documentName} onChange={(e) => setDocumentName(e.target.value)} />
                    </div>
                    <div className='createResume-options'>
                        <div className="createResume-save" onClick={saveToDatabase}>
                            Save
                        </div>
                        <div className="createResume-download" onClick={downloadresume}>
                            Download
                        </div>
                    </div>
                </div>
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
        </div>
    );
}

export default CreateResumeComponent;