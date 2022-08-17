import React from 'react';
import styles from './card.css';
import { PostText } from './PostText';
import { PostThumbnail } from './PostThumbnail';
import { PostKarma } from './PostKarma';
import { PostButto } from './PostButto';

export function Card() {
  return (
		<li className={styles.card}>
			<PostThumbnail />
			<PostText />
			<PostKarma />
			<PostButto />
		</li>
  );
}

