import './CreateResumeComponent.css'
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import { createRef, useState } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import CreateResumeImage from '../assets/createresume_image.jpeg'
import { savePDF } from "@progress/kendo-react-pdf";

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

    const saveToDatabase = async () => {
        // console.log(JSON.stringify(content))
        let resume = { user_id: "1", data: JSON.stringify(EditorUtils.getHtml(content.current.view.state)) };
        let result = await fetch("http://127.0.0.1:8000/api/saveResume", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(resume)
        });
        result = await result.json();
        console.log(result)
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

        savePDF(wrapper, {
            paperSize: "auto",
            margin: 40,
            fileName: `Report for ${new Date().getFullYear()}`
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
                        Random C.V.
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