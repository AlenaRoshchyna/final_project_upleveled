'use client';

import { useState } from 'react';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import styles from './LikeButton.module.scss';

export default function LikeButton() {
  const [like, setLike] = useState(false);

  const toggleFollowButton = () => {
    setLike(!like);
  };

  return (
    <div>
      <button
        onClick={async () => await toggleFollowButton()}
        className={styles.likeButton}
      >
        {like ? (
          <p className={`${styles.heartButton} ${styles.heartButtonRed}`}>
            <VscHeartFilled />
          </p>
        ) : (
          <p className={styles.heartButton}>
            <VscHeart />
          </p>
        )}
      </button>
    </div>
  );
}
