import './optionComponent.css';
import DocBlank from '../assets/doc-blank.png'
import { Link } from 'react-router-dom';

const OptionComponent = () => {

    return (
        <>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="https://via.placeholder.com/150x150" alt="Logo" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <form className="navbar-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button type="submit" className="btn btn-search"><i className="glyphicon glyphicon-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            <section id="recommendations" style={{ marginTop: "9rem", background: "#efefef" }}>
                <div className="container">
                    <div className='recommendation-title'>Create new or choose template</div>
                    <div className="row">
                        <div className="col-sm-3 mb-4">
                            <Link to={'/createResume'}>
                                <div className="card">
                                    <img src={DocBlank} alt="Random Image" className="card-img-top" width="180px" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "black" }}>New Resume</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3 mb-4">
                            <div className="card">
                                <img src={DocBlank} alt="Random Image" className="card-img-top" width="180px" />
                                <div className="card-body">
                                    <h5 className="card-title">Recommended Product 2</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OptionComponent;