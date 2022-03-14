import React from 'react';
import NavBar from './NavBar.js';
import Profile from './Profile.js';
import Suggestions from './Suggestions.js';
import Stories from './Stories.js';
import Posts from './Posts.js';
import { getHeaders } from './utils.js';

class App extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        fetch('/api/profile', {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                user: data
            })
        })
    }

    render () {
        return (
            <div>

            <NavBar title="Photo App" username={this.state.user.username} />

            <aside>
                <Profile user={this.state.user} />
                <Suggestions />
            </aside>

            <main className="content">
                <Stories />
                <Posts />
            </main>

            </div>
        );
    }
}

export default App;