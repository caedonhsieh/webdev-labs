import React from 'react';
import { getHeaders } from './utils.js'

class LikeButton extends React.Component {  

    constructor(props) {
        super(props);

        this.likeUnlike = this.likeUnlike.bind(this)
        this.like = this.like.bind(this)
        this.unlike = this.unlike.bind(this)
    }

    likeUnlike (ev) {
        if (this.props.likeId) {
            this.unlike();
        } else {
            this.like();
        }
    }

    like() {
        const postId = this.props.postId;
        fetch(`/api/posts/${postId}/likes`, {
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

    unlike() {
        const postId = this.props.postId;
        fetch(`/api/posts/${postId}/likes/${this.props.likeId}`, {
            headers: getHeaders(),
            body: JSON.stringify({
                post_id: postId
            }),
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            this.props.requeryPost();
        })
    }

    render() {
        const likeId = this.props.likeId;
        return (
            <button onClick={this.likeUnlike }>
                <i className={likeId ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
        );
    }
}

export default LikeButton;