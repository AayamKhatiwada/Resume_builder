import { useState } from "react";
import { ErrorNoty, SuccessNoty } from "../../../hooks/notifications";

const AdminRecommendationRegister = () => {

    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [htmlData, setHtmlData] = useState("")

    const submitResume = async(e) => {
        e.preventDefault();
        // console.log(name, image, htmlData)

        const data = new FormData();
        data.append('name', name)
        data.append('image', image)
        data.append('htmlData', htmlData)

        if (name !== '' && image !== '' && htmlData !== '') {
            let result = await fetch("http://127.0.0.1:8000/api/registerRecommendationResume", {
                method: "POST",
                body: data
            });
            result = await result.json();
            if (result['error']) {
                ErrorNoty(result['error'])
            } else if (result['resume']) {
                SuccessNoty("Resume registered successful")
            }
        } else {
            ErrorNoty('Please fill all the form');
        }
    }

    return (
        <>
            <div className="container">
                <form className="row" enctype="multipart/form-data" onSubmit={(e) => submitResume(e)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control my-3" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" className="form-control-file my-3" id="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                    <label htmlFor="info">Additional Information</label>
                    <textarea className="form-control my-3" id="info" rows="3" placeholder="Enter html resume" style={{ height: "500px" }} value={htmlData} onChange={(e) => setHtmlData(e.target.value)}></textarea>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AdminRecommendationRegister;