import { useState } from "react";
import data from "./data.js";
import CopyToClipboardButton from "./Copy to Clipboard.jsx";
import { nanoid } from "nanoid";
const App = () => {
  const [count, SetCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h4>Lorem ipsum dolor sit amet.</h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amout">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={(e) => SetCount(e.target.value)}
        />
        <button className="btn" type="submit">
          genrate
        </button>
      </form>
      <CopyToClipboardButton text={ text}/>
      <article className="lorem-text">
        {
          text.map((item )=>(
            <p key={nanoid()}> {item}</p>

          ))
        }
      </article>
    </section>
  );
};
export default App;
