# Amazing React Emoji Picker

An amazing react emoji picker with more than 500 emojis included in the package.

<img src="./emojipickercover.png" width="800"/>

## Install

`npm i amazing-react-emojipicker`

## Usage basic

```js

import { useRef, useState } from "react";
import AmazingEmojiPicker from "amazing-react-emojipicker";

const TestComponent = () => {
  const inputRef = useRef();
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* input field that emojis will be added to*/}
      <input type="text" ref={inputRef} /> 

      {/*Emoji picker component*/}
      <AmazingEmojiPicker
        darkMode={true}
        ref={inputRef}
        visibility={toggle}
        setVisibility={setToggle}
        top={10}
        left={20}
      />

      {/*emoji icon to open and close the picker*/}
      <img src="./emoji-icon.png" onClick={() => setToggle(!toggle)} /> 
    </div>
  );
}

export default TestComponent;

```


| Prop  | Required	  | Description |
| :------------ |:---------------:| :---------------------------------------------------------|
| `darkMode`     | ✓ | Set the default theme to dark mode |
| `ref`      | ✓ | Ref to the input which emojies will be added in |
| `visibility `     | ✓ | The visibility of the picker  |
| `setVisibility`  | ✓ | Toggle the picker |
| `top` |  | Set the top position of the picker  |
| `right`      |  | Set the right position of the picker  |
| `left`      |  |   Set the left position of the picker  |
| `bottom` |  | Set the bottom position of the picker  |

<!--
> This TSDX setup is meant for developing React component libraries (not apps!) that can be published to NPM. If you’re looking to build a React-based app, you should use `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands
-->
