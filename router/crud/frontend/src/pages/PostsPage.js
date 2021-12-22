import React, {useContext} from 'react';
import {PostContext} from "../store/PostsState";
import {Link} from "react-router-dom";
import Post from "../components/Post";


const PostsPage = () => {
    const { posts, loading } = useContext(PostContext);

    return (
        <div className="posts">
            <div className="card card_flex">
                <Link to="/posts/new" className="posts__create">
                    Создать пост
                </Link>
            </div>
            {loading ? <p>LOADING</p> : posts.map((p) => <Post key={p.id} {...p} />)}
        </div>
    );
};

export default PostsPage;
