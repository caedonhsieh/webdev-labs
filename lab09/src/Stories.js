import React from 'react';
import { getHeaders } from './utils.js';

class Stories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        this.getStories();
    }

    getStories() {
        fetch('/api/stories', {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                stories: data
            })
        })
    }

    render() {
        return (
            <header className="stories">
                {this.state.stories.map(story => {
                    return <div className="story">
                        <img src={story.user.image_url} alt={`${story.user.username}'s profile pic`} />
                        <p>{story.user.username}</p>
                    </div>
                })}
            </header>
        )
    }
}

export default Stories;