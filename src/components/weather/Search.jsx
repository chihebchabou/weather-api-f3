import { useState } from "react";

const Search = ({searchWeather}) => {
  const [text, setText] = useState("")
  const onFormSubmitted = e => {
    e.preventDefault();
    if (!text) {
      alert("Please enter the city name");
    } else {
      searchWeather(text);
      setText("");
    }
  }
  return (
    <form onSubmit={onFormSubmitted}>
      <input
        type="text"
        placeholder="city"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </form>
  );
};

export default Search;
