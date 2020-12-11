import React, { useState } from "react";
import "./styles.css";

const title = "Emojipretor";

const smileyDictionary = {
  "😀": "Smiling Face",
  "😉": "Winking Face",
  "😁": "Beaming Face with Smiling Eyes",
  "🙂": "Slightly Smiling Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😝": "Squinting Face with Tongue"
};
const animalDictionary = {
  "🦍": "Gorilla",
  "🐒": "Monkey",
  "🦊": "Fox",
  "🐺": "Wolf",
  "🐱": "Cat",
  "🦁": "Lion",
  "🦄": "Unicorn",
  "🐃": "Water Buffalo",
  "🐏": "Ram"
};

const category = ["smileys", "animals"];

var emojiList = Object.keys(smileyDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Emoji meaning will appear here..."
  );
  const [inputCategory, setInputCategory] = useState("smileys");

  function changeCategory(event) {
    setCategory(event);
    resetAll();
    setEmojiList(event);
  }

  function setEmojiList(event) {
    if (event.target.value === "smileys") {
      emojiList = Object.keys(smileyDictionary);
    } else if (event.target.value === "animals") {
      emojiList = Object.keys(animalDictionary);
    }
  }

  function setCategory(event) {
    setInputCategory(event.target.value);
  }

  function resetAll() {
    let resetInput = document.querySelector("#input-txt");
    let resetOutput = document.querySelector("#output-txt");

    resetInput.value = "";
    setEmojiMeaning("Emoji meaning will appear here...");
    resetOutput.innerText = emojiMeaning;
  }

  function emojiHandler(event) {
    let input = event.target.value;
    let output = "";
    if (inputCategory === "smileys") {
      output = smileyDictionary[input];
    } else if (inputCategory === "animals") {
      output = animalDictionary[input];
    }

    if (output !== undefined) {
      setEmojiMeaning(output);
    } else {
      setEmojiMeaning(
        "This Emoji is not in our " + inputCategory + " database"
      );
    }
  }

  function emojiClickHandler(inputEmoji) {
    if (inputCategory === "smileys") {
      setEmojiMeaning(smileyDictionary[inputEmoji]);
    } else if (inputCategory === "animals") {
      setEmojiMeaning(animalDictionary[inputEmoji]);
    }
  }

  return (
    <div className="App">
      <body>
        <header class="hero">
          <h1 className="hero-header">{title}</h1>
        </header>

        <div className="container-center">
          <label>Select a category</label>
          <select onChange={changeCategory}>
            {category.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>

        <input
          className="input"
          placeholder="Enter emoji here"
          id="input-txt"
          onChange={emojiHandler}
        ></input>
        <div className="output" id="output-txt" style={{ padding: "1rem" }}>
          {emojiMeaning}
        </div>
        
        <ul className="list-non-bullet">
          {emojiList.map((emoji) => (
            <li
              className="list-item-inline"
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </li>
          ))}
        </ul>

        <footer className="footer">
          <div className="footer-header">About</div>
          <p>
            Do you often get confused between emojis? Don't wory, get meanings
            of tons of emojis from different categories from our database
          </p>
        </footer>
      </body>
    </div>
  );
}
