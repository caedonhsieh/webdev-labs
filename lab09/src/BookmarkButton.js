import React from 'react';
import { getHeaders } from './utils.js'

class BookmarkButton extends React.Component {  

    constructor(props) {
        super(props);

        this.saveUnsave = this.saveUnsave.bind(this)
        this.save = this.save.bind(this)
        this.unsave = this.unsave.bind(this)
    }

    saveUnsave (ev) {
        if (this.props.bookmarkId) {
            this.unsave();
        } else {
            this.save();
        }
    }

    save() {
        const postId = this.props.postId;
        fetch(`/api/bookmarks`, {
            headers: getHeaders(),
            body: JSON.stringify({
                post_id: postId
            }),
            method: "POST"
        })
        .then(response => response.json())
        .then(data => {
            this.props.requeryPost();
        })
    }

    unsave() {
        fetch(`/api/bookmarks/${this.props.bookmarkId}`, {
            headers: getHeaders(),
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            this.props.requeryPost();
        })
    }

    render() {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button onClick={this.saveUnsave }>
                <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
            </button>
        );
    }
}

export default BookmarkButton;