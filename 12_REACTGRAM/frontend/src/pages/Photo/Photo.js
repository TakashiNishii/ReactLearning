import "./Photo.css";

import { uploads } from "../../utils/config";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";
import PhotoItem from "../../components/PhotoItem";
import LikeContainer from "../../components/LikeContainer";

// Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// Redux
import { comment, getPhoto, like } from "../../slices/photoSlice";

const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  const [commentText, setCommentText] = useState("");

  // Insert a like
  const handleLike = () => {
    dispatch(like(photo._id));
    resetMessage();
  };

  // Insert a comment
  const handleComment = (e) => {
    e.preventDefault();

    const commentData = {
      comment: commentText,
      id: photo._id,
    };

    dispatch(comment(commentData));

    setCommentText("");

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      <div className="message-container">
        {error && <Message type="error" message={error} />}
        {message && <Message type="success" message={message} />}
      </div>
      <div className="comments">
        {photo.comments && (
          <>
            <h3>Comentários: ({photo.comments.length})</h3>
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Insira o seu comentário..."
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText || ""}
              />
              <input type="submit" value="Enviar" />
            </form>
            {photo.comments.length === 0 && <p>Não há comentários...</p>}
            {photo.comments.map((comment) => (
              <div className="comment" key={comment.comment}>
                <div className="author">
                  {comment.userImage && (
                    <img
                      src={`${uploads}/users/${comment.userImage}`}
                      alt={comment.userName}
                    />
                  )}
                  <Link to={`/users/${comment.userId}`}>
                    {comment.userName}
                  </Link>
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Photo;
