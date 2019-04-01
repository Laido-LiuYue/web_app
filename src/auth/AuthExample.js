import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect, withRouter } from 'react-router-dom';
import AuthButton from './AuthButton';
import Public from './Public';
import Login from '../containers/Login';
import Protected from './Protected';
function AuthExample() {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <Route path="/protected" component={Protected}/>
            </div>
        </Router>
    )
}
export default AuthExample;
