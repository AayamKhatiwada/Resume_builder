import { useEffect, useState } from "react"
import AdminDashboardComponent from "../AdminDashboardComponent/adminDashboardComponent"
import { SuccessNoty } from "../../../hooks/notifications"

const AdminUser = () => {

    const [userData, setUserData] = useState([])
    const [updateUseEffect, setUpdateUseEffect] = useState(false)

    useEffect(() => {
        const getUserData = async () => {
            fetch("http://127.0.0.1:8000/api/getAllUsers")
                .then(res => res.json())
                .then((response) => {
                    console.log(response.user)
                    setUserData(response.user)
                }).catch((error) => {
                    console.error(error);
                });
        }
        getUserData()
    }, [updateUseEffect])

    const deleteUser = (id) => {
        fetch(`http://127.0.0.1:8000/api/deleteUser/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    SuccessNoty(result.message);
                    setUpdateUseEffect("true")
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <>
            <AdminDashboardComponent>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>No. of Resumes</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.fname} {user.lname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.resume.length}</td>
                                            <td><div className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</div></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </AdminDashboardComponent>
        </>
    )
}

export default AdminUser