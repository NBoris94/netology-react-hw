import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {PostContext} from "../store/PostsState";

const initialStateForm = {
    content: ""
}

const AddPostPage = () => {
    const { addPost } = useContext(PostContext);

    const [form, setForm] = useState(initialStateForm);

    const navigate = useNavigate();

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

    const submitHandler = (e) => {
      e.preventDefault();

        if (form.content === "") {
            console.log("Пост не должен быть пустым");
            return null;
        }

        const newPost = { id: 0, ...form };

        addPost(newPost);
        navigate("/");
    }

    return (
        <div className="card post">
            <div className="post__header">
                <h3 className="post__title">Создать публикацию</h3>
                <Link to="/" className="post__close">
                    <span></span>
                </Link>
            </div>
            <div className="post__body">
                <div className="post__avatar">
                    <img src="https://i.pravatar.cc/50" alt="Аватар" />
                </div>
                <form className="form" id="post-form" onSubmit={submitHandler}>
                    <textarea className="form__textarea" name="content" id="" rows="2" onChange={changeTextareaHandler} placeholder="Текст поста..."></textarea>
                </form>
            </div>
            <div className="post__actions">
                <button type="submit" form="post-form" className="post__save">
                    Опубликовать
                </button>
            </div>
        </div>
    );
};

export default AddPostPage;
