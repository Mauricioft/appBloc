import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import styles from './Comment.css';

function Comment(props) {
  return (
    <article id={`comment-${props.id}`} className={styles.comment}>
      <div className={styles.meta}>
        <FormattedHTMLMessage 
          id="comment.meta.author" 
          values={{
            email: props.email,
            name: props.name,
          }}
        />
      </div>

      <p className={styles.meta}>
        {props.body}
      </p>
    </article>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
