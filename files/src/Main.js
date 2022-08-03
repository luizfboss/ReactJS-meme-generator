import React from "react";
import memesData from "./memesData";

function Main(){
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url



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

      </section>
  );
}

export default Main;
