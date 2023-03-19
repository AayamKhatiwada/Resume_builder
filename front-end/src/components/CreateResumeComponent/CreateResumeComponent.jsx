import './CreateResumeComponent.css'
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import { createRef, useEffect, useState } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import CreateResumeImage from '../assets/createresume_image.jpeg'
import { jsPDF } from "jspdf";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentRecommendationResume, selectCurrentResume } from '../../store/resume/resume-selector';
import { ErrorNoty, SuccessNoty } from '../../hooks/notifications';
import makeslug from '../../hooks/randomGenerator';
import { selectCurrentUser } from '../../store/user/user-selector';
import IsAuthed from '../../hooks/isAuthed';

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

    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser)
    const content = createRef();
    const [isrecommendation, setIsRecommendation] = useState(false)
    var { slugPara } = useParams();
    const [documentName, setDocumentName] = useState("Document");
    const allResumeData = useSelector(selectCurrentResume);
    const dummyRecommendationResume = useSelector(selectCurrentRecommendationResume);

    useEffect(() => {
        allResumeData.map((data) => {
            if (data.slug === slugPara) {
                setDocumentName(data.title)
                EditorUtils.setHtml(content.current.view, JSON.parse(data.ResumeData));
                setIsRecommendation(false)
            }
        })

        dummyRecommendationResume.map((data) => {
            if (data.slug === slugPara) {
                setDocumentName(data.title)
                EditorUtils.setHtml(content.current.view, JSON.parse(data.ResumeData));
                setIsRecommendation(true)
            }
        })
        // console.log(EditorUtils.getHtml(content.current.view.state))
    }, [])

    const saveToDatabase = async () => {
        let resume = { user_id: "1", slug: isrecommendation ? makeslug() : slugPara, title: documentName === '' || documentName[0] === ' ' ? "Random" : documentName, data: JSON.stringify(EditorUtils.getHtml(content.current.view.state)) };
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

    const checkLoginAndSave = () => {
        if (!IsAuthed(user)) {
            ErrorNoty("Cannot save your Resume please login")
        } else {
            saveToDatabase()
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
    // console.log(IsAuthed(user))

    return (
        <div className='createResume'>
            <div className="createResume-header">
                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle col-sm-1" style={{ width: "50px", height: "50px" }} onClick={() => navigate('/optionFor')}>
                    <i className="fa fa-arrow-left text-white" aria-hidden="true"></i>
                </div>
                <div className="createResume-firstPart col-sm-1">
                    <img src={CreateResumeImage} alt="" width="100%" />
                </div>
                <div className="createResume-secondPart col-sm-10">
                    <div className="createResume-title">
                        <input type="text" value={documentName} onChange={(e) => setDocumentName(e.target.value)} />
                    </div>

                    <div className='createResume-options'>
                        {
                            isrecommendation ? (
                                <div className="createResume-save" onClick={checkLoginAndSave}>
                                    Save a copy
                                </div>
                            ) : (
                                <>
                                    <div className="createResume-save" onClick={checkLoginAndSave}>
                                        Save
                                    </div>
                                    <div className="createResume-download" onClick={downloadresume}>
                                        Download
                                    </div>
                                </>
                            )
                        }

                        {
                            !IsAuthed(user) &&
                            <div className="createResume-download" onClick={() => navigate('/sign-in', { state: { path: window.location.pathname } })}>
                                Login
                            </div>
                        }
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