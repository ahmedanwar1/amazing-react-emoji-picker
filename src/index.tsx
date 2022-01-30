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
      onSaveEmojiInHistory(emoji.target.innerText);
    };

    const [collection, setCollection] = useState<string[]>(faces);
    const [collectionTitle, setCollectionTitle] = useState<string>('Faces');

    const onChooseCollection = (collection: string[], title: string): any => {
      setCollection(collection);
      setCollectionTitle(title);
    };

    const onSaveEmojiInHistory = (emoji: string) => {
      if (typeof window !== undefined) {
        if (!localStorage.getItem('amazingEmojis')) {
          localStorage.setItem('amazingEmojis', JSON.stringify([emoji]));
          return;
        }

        const amazingEmojisArr = JSON.parse(
          localStorage.getItem('amazingEmojis') || ''
        );

        if (amazingEmojisArr.indexOf(emoji) !== -1) {
          amazingEmojisArr.splice(amazingEmojisArr.indexOf(emoji), 1);
        }

        amazingEmojisArr.unshift(emoji);

        if (amazingEmojisArr.length > 60) {
          amazingEmojisArr.pop();
        }

        localStorage.setItem('amazingEmojis', JSON.stringify(amazingEmojisArr));
      }
    };

    return (
      visibility && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setVisibility(false)}
          ></div>
          <div
            style={{
              top: top ? top + 'px' : 'unset',
              right: right ? right + 'px' : 'unset',
              bottom: bottom ? bottom + 'px' : 'unset',
              left: left ? left + 'px' : 'unset',
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
                  onClick={() =>
                    onChooseCollection(
                      JSON.parse(
                        localStorage.getItem('amazingEmojis') ||
                          JSON.stringify([])
                      ),
                      'History'
                    )
                  }
                  className={collectionTitle === 'History' ? styles.active : ''}
                >
                  🕥
                </li>
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
