import React, {useContext, useEffect, useState} from 'react';
import {PostContext} from "../store/PostsState";
import {Link, useNavigate, useParams} from "react-router-dom";
import {DateTimePretty} from "../components/DateTime";

const PostViewPage = () => {
  const {posts, loading, deletePost} = useContext(PostContext);

  const [post, setPost] = useState({id: 0, content: "", created: 0});

  const navigate = useNavigate();

  let {postId} = useParams();
  postId = Number(postId);

  useEffect(() => {
    setPost(posts.find(p => p.id === postId));
  }, [postId, posts]);

  function deletePostHandler(id) {
    deletePost(id);
    navigate("/");
  }

  return loading ? (<p>Загрузка</p>) : (<div className="card post">
    <div className="post__owner">
      <div className="post__avatar">
        <img src="https://i.pravatar.cc/50" alt="Аватар"/>
      </div>
      <div className="post__group">
        <h4 className="post__name">Иванов Иван</h4>
        <span className="post__role">Основатель группы</span>
        <DateTimePretty date={post.created}/>
      </div>
    </div>
    <p className="post__text">{post.content}</p>
    <div className="post__actions">
      <button className="post__like">Нравится</button>
      <button className="post__comment">Комментировать</button>
    </div>
    <div className="post__actions">
      <Link to={`/posts/edit/${post.id}`} className="post__edit">
        Изменить
      </Link>
      <button className="post__remove" onClick={() => deletePostHandler(post.id)}>
        Удалить
      </button>
    </div>
  </div>);
};

export default PostViewPage;
