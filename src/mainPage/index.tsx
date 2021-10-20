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
  const [number, setNumber] = useState<number>(0);

  const characters = useSelector(charactersList);
  const characterData = useSelector(character);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  const disableSearch = !!number && number > 0;

  const getCharacterHandler = (id?: number) => {
    if (id || !!number || number === 0) {
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
  }, [dispatch]);

  return (
    <Container>
      <MainPageView
        character={characterData}
        characters={characters}
        loading={isLoading}
        error={isError}
        clearHandler={clearHandler}
        clearByIdHandler={clearByIdHandler}
        disableSearch={!disableSearch}
        onClick={getCharacterHandler}
        changeNumberHandler={(e: BaseSyntheticEvent) =>
          setNumber(e.target.value)
        }
      />
    </Container>
  );
};

export default MainPage;
