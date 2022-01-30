import React, { useEffect } from 'react';
import styles from '../styles/AmazingEmojiPicker.module.css';

import { keyId, incrementId } from './emojisCollections';

interface Props {
  collection: string[];
  pickEmoji: (e: any) => void;
  title: string;
}

const EmojiPickerSection: React.FC<Props> = ({
  collection,
  pickEmoji,
  title,
}) => {
  useEffect(() => {
    window.document
      .getElementsByClassName(styles.pickSection)[0]
      .scroll({ top: 0, behavior: 'smooth' });
  }, [title]);

  return (
    <div className={styles.pickSection}>
      <p className={styles.collectionName}>{title}</p>
      <ul>
        {collection.map(emoji => {
          incrementId();
          return (
            <li key={keyId} onClick={e => pickEmoji(e)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmojiPickerSection;
