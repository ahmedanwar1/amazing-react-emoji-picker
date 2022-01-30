import React, { useState } from 'react';
import styles from '../styles/AmazingEmojiPicker.module.css';
import EmojiPickerSection from './EmojiPickerSection';

import {
  faces,
  animals,
  food,
  objects,
  transportation,
  symbols,
} from './emojisCollections';

interface Props {
  darkMode: Boolean;
  visibility: Boolean;
  setVisibility: any;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const AmazingEmojiPicker = React.forwardRef(
  (
    { darkMode, visibility, setVisibility, top, right, bottom, left }: Props,
    ref: any
  ) => {
    const pickEmoji = (emoji: any) => {
      ref.current.value += emoji.target.innerText;
    };

    const [collection, setCollection] = useState<string[]>(faces);
    const [collectionTitle, setCollectionTitle] = useState<string>('Faces');

    const onChooseCollection = (collection: string[], title: string): any => {
      setCollection(collection);
      setCollectionTitle(title);
    };

    // const [ll, l] = useState<boolean>(true);

    return (
      visibility && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setVisibility(false)}
          ></div>
          <div
            style={{
              top: top + 'px',
              right: right + 'px',
              bottom: bottom + 'px',
              left: left + 'px',
            }}
            className={
              darkMode
                ? `${styles.AmazingEmojiPicker} ${styles.dark}`
                : styles.AmazingEmojiPicker
            }
          >
            <div className={styles.header}>
              <ul>
                <li
                  onClick={() => onChooseCollection(faces, 'Faces')}
                  className={collectionTitle === 'Faces' ? styles.active : ''}
                >
                  😁
                </li>
                <li
                  onClick={() => onChooseCollection(animals, 'Animals')}
                  className={collectionTitle === 'Animals' ? styles.active : ''}
                >
                  🐺
                </li>

                <li
                  onClick={() => onChooseCollection(food, 'Food')}
                  className={collectionTitle === 'Food' ? styles.active : ''}
                >
                  🍕
                </li>
                <li
                  onClick={() => onChooseCollection(objects, 'Objects')}
                  className={collectionTitle === 'Objects' ? styles.active : ''}
                >
                  🎁
                </li>
                <li
                  onClick={() =>
                    onChooseCollection(
                      transportation,
                      'Transportation & Places'
                    )
                  }
                  className={
                    collectionTitle === 'Transportation & Places'
                      ? styles.active
                      : ''
                  }
                >
                  🚚
                </li>
                <li
                  onClick={() => onChooseCollection(symbols, 'Symbols')}
                  className={collectionTitle === 'Symbols' ? styles.active : ''}
                >
                  ❤️
                </li>
              </ul>
            </div>
            <EmojiPickerSection
              collection={collection}
              title={collectionTitle}
              pickEmoji={pickEmoji}
            />
          </div>
        </>
      )
    );
  }
);

export default AmazingEmojiPicker;
