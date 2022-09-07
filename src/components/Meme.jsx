import React, { useState } from "react";
import styled from "styled-components";
import DataMeme from "../data/data.js";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const CenteredContent = styled.main`
  width: 100%;
  max-width: 855px;
`;

const Form = styled.div`
  padding: 50px 40px;

  button {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
    border-radius: 5px;
    border: 0px;
    font-size: 16px;
    color: #ffffff;
  }
`;

const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    height: 35px;
    width: 100%;
    border: 1px solid #d5d4d8;
    border-radius: 5px;
    padding: 0 15px;

    :first-child {
      margin-right: 20px;
    }
  }
`;

const WrapperImage = styled.div`
  width: 100%;
  position: relative;
  height: fit-content;

  img {
    margin-top: 30px;
    width: 100%;
    height: auto;
  }
`;

const MemeTextTop = styled.div`
  position: absolute;
  top: 30px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 0 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`;

const MemeTextBottom = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 0 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`;

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages] = useState(DataMeme);

  const getRandomImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memesArray[randomNumber].url,
      };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...meme,
        [name]: [value],
      };
    });
  };

  return (
    <Wrapper>
      <CenteredContent>
        <Form>
          <WrapperInput>
            <input
              type="text"
              placeholder="Top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              placeholder="Bottom text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            ></input>
          </WrapperInput>
          <button onClick={getRandomImage}>Create a new image</button>
          <WrapperImage>
            <img src={meme.randomImage} alt=""></img>
            <MemeTextTop>{meme.topText}</MemeTextTop>
            <MemeTextBottom>{meme.bottomText}</MemeTextBottom>
          </WrapperImage>
        </Form>
      </CenteredContent>
    </Wrapper>
  );
}

export default Meme;
