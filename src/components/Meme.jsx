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

  img {
    margin-top: 30px;
    width: 100%;
    height: 500px;
    object-fit: contain;
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

function Meme() {
  const [image, setImage] = useState("");

  const getRandomImage = () => {
    const memesArray = DataMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    const urlImage = memesArray[randomNumber].url;

    setImage(urlImage);
  };

  return (
    <Wrapper>
      <CenteredContent>
        <Form>
          <WrapperInput>
            <input type="text" placeholder="Top text"></input>
            <input type="text" placeholder="Bottom text"></input>
          </WrapperInput>
          <button onClick={getRandomImage}>Create a new image</button>
          <img src={image} alt=""></img>
        </Form>
      </CenteredContent>
    </Wrapper>
  );
}

export default Meme;
