import React from "react";
import memesData from "./memesData";

function Main(){
    const [memeImage, setMemeImage] = React.useState("")


    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
            <img src={memeImage} className="meme-image" />
        </div>

      </section>
  );
}

export default Main;
