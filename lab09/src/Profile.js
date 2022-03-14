import React from 'react';

class Profile extends React.Component {

    render() {
        return (
            <header>
                <div className="rec-header">
                    <img className="pic" src={this.props.user.image_url} alt={`${this.props.user.username}'s profile pic`} />
                    <h2> {this.props.user.username}</h2>
                </div>
            </header>
        )
    }
}

export default Profile;