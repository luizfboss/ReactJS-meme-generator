import React from "react";
import memesData from "./memesData";

function Main(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
      <section className="meme-container">
        <div className="meme-element-container">
            <div className="meme-input-container">
                <input 
                    type="text"
                    placeholder="Top text here" 
                />

                <input 
                    type="text"
                    placeholder="Bottom text here" 
                />
            </div>

            <div className="meme-button-container">
                <button onClick={getMemeImage}>Get a New Meme Image</button>
            </div>
        </div>

        <div className="image-container">
            <img src={meme.randomImage} className="meme-image" />
        </div>

      </section>
  );
}

export default Main;
