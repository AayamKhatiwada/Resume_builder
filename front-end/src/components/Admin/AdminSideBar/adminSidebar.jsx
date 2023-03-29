import './adminSidebar.css'

const AdminSideBar = ({ selectOptions }) => {
    return (
        <nav className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="nav-link link" id='dashboard'>Dashboard</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link link" id='community'>All Community resumes</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminSideBar;