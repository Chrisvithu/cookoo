import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#"><img src="https://3.bp.blogspot.com/-8nsPQjKVXV4/WrPMGuDEuiI/AAAAAAAAXIo/h8ghR12Y7MIQ2eA-5TdPPFs-0cRYysd5gCLcBGAs/s1600/Untitled-1.png" width="150px" /></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li ><Link to="/" activeclassname="active">Home</Link></li>
                                <li ><Link to="/foods" activeclassname="active">Foods</Link></li>
                                <li><Link to="/about" activeclassname="active">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main
