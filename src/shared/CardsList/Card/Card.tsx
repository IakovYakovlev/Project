import React from 'react';
import styles from './card.css';
import { PostText } from './PostText';
import { PostThumbnail } from './PostThumbnail';
import { PostKarma } from './PostKarma';
import { PostButto } from './PostButto';

export function Card() {
  return (
		<li className={styles.card}>
			<div className={styles.thumbnail}><PostThumbnail /></div>
			<div className={styles.text}><PostText /></div>
			<div className={styles.karma}><PostKarma /></div>
			<div className={styles.button}><PostButto /></div>
		</li>
  );
}

