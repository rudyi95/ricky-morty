import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import { MainPageView } from "./view";

import {
  clearCharacters,
  getCharacterById,
  getCharacters,
  clearById,
} from "../redux/actions/index";
import { charactersList, character, loading, error } from "../redux/selectors";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(undefined);

  const characters = useSelector(charactersList);
  const characterData = useSelector(character);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  const getCharacterHandler = (id?: number) => {
    if (!!number) {
      dispatch(getCharacterById(id || number));
    }
  };

  const clearHandler = () => {
    dispatch(clearCharacters());
  };

  const clearByIdHandler = (id: number) => {
    dispatch(clearById(id));
  };

  useEffect(() => {
    dispatch(getCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <MainPageView
        character={characterData}
        characters={characters}
        loading={isLoading}
        error={isError}
        clearHandler={clearHandler}
        clearByIdHandler={clearByIdHandler}
        disableSearch={!number}
        onClick={getCharacterHandler}
        changeNumberHandler={(e: BaseSyntheticEvent) =>
          setNumber(e.target.value)
        }
      />
    </Container>
  );
};

export default MainPage;
