import React from "react";
import {Link} from "react-router-dom";
import {DateTimePretty} from "./DateTime";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <div className="card post">
      <Link to={`/posts/${props.id}`} className="post__owner">
        <div className="post__avatar">
          <img src="https://i.pravatar.cc/50" alt="Аватар"/>
        </div>
        <div className="post__group">
          <h4 className="post__name">Иванов Иван</h4>
          <span className="post__role">Основатель группы</span>
          <DateTimePretty date={props.created}/>
        </div>
      </Link>
      <p className="post__text">{props.content}</p>
      <div className="post__actions">
        <button className="post__like">Нравится</button>
        <button className="post__comment">Комментировать</button>
      </div>
      <div className="post__actions">
        <form
          className="comment-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input type="text" className="comment-form__input" placeholder="Комментировать"/>
          <button type="submit" className="comment-from__submit"></button>
        </form>
      </div>
    </div>
  );
}

Post.defaultProps = {
  id: 0,
  content: "",
  created: 0
}

Post.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  created: PropTypes.number
}

export default Post;
