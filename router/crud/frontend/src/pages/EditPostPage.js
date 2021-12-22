import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {PostContext} from "../store/PostsState";

const EditPostPage = () => {
    const {posts, loading, editPost} = useContext(PostContext)

    const [form, setForm] = useState({content:""});

    const navigate = useNavigate();

    let { postId } = useParams();
    postId = Number(postId);

    useEffect(() => {
        setForm(posts.find(p => p.id === postId));
    }, [postId, posts]);

    const formFieldChangeHandler = ({ target }) => {
        setForm((prev) => ({
            ...prev,
            [target.name]: target.type === "checkbox" ? target.checked : target.value,
        }));
    };

    const changeTextareaHandler = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
        formFieldChangeHandler(e);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (form.content === "") {
            console.log("Пост не должен быть пустым");
            return null;
        }

        editPost(form);

        navigate(`/posts/${form.id}`);
    };

    return loading ? (<p>Загрузка</p>) : (
        <div className="card post">
            <div className="post__header">
                <h3 className="post__title">Редактировать публикацию</h3>
                <Link to={`/posts/${form.id}`} className="post__close">
                    <span></span>
                </Link>
            </div>
            <div className="post__body">
                <div className="post__avatar">
                    <img src="https://i.pravatar.cc/50" alt="Аватар" />
                </div>
                <form className="form" id="post-form" onSubmit={submitHandler}>
                    <textarea name="content" id="" rows="2" className="form__textarea" onChange={changeTextareaHandler} placeholder="Текст поста..." value={form.content}></textarea>
                </form>
            </div>
            <div className="post__actions">
                <button className="post__save" type="submit" form="post-form">
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default EditPostPage;
