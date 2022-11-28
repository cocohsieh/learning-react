import React, { useState, useEffect } from "react";
// import memeData from "./memeData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/26br.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    // 方法一：fetch 
    // fetch("https://api.imgflip.com/get_memes")
    //   .then((res) => res.json())
    //   .then((data) => setAllMemes(data.data.memes));

    // 方法二：async - await
    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, []);

  function getMemeImage() {
    // console.log(memeData.data.memes[0].url);
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    console.log(url);
    // setMemeImage(url);

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
      //對應到input裡的name & value
    }));
  }

  return (
    <>
      <main>
        <div className="form">
          <div className="form-input-box">
            <input
              type="text"
              placeholder="Top text..."
              style={{ marginBottom: 10 }}
              className="form-input"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Bottom text..."
              className="form-input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button onClick={getMemeImage} className="button bold">
              Get a new meme image! &#128526;{" "}
            </button>
          </div>
        </div>
        <div className="meme">
          <img
            src={meme.randomImage}
            alt="meme image"
            className="meme-img-size"
          />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
};

export default Meme;
