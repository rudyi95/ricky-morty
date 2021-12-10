import React, {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

import CustomInput from "../components/inputAdornment";
import CharacterInfo from "../containers/characterInfo";
import CharactersList from "../containers/charactersList";
import CustomButton from "../components/button";

import {
  getCharacters,
  getCharacterById,
  clearCharacters,
  clearById,
} from "../services/characterService";
import storageService from "../services/storageService";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import useStyles from "./style";

const MainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { loading, character } = useAppSelector(
    (state) => state.characterReducer
  );
  const { data } = useAppSelector((state) => state.charactersReducer);
  const [number, setNumber] = useState<number>(0);
  const lsData = storageService.get<ICharacter[]>("characters")?.length;

  const getCharacterHandler = useCallback(() => {
    if (!!number || number === 0) {
      dispatch(getCharacterById(number));
    }
  }, [dispatch, number]);

  const getCharacterByIdHandler = useCallback(
    (id: number) => {
      if (id !== character?.id) {
        dispatch(getCharacterById(id));
      } else return;
    },
    [dispatch, character?.id]
  );

  const changeNumberHandler = (e: BaseSyntheticEvent) => {
    setNumber(+e.target.value);
  };

  const clearHandler = useCallback(() => {
    dispatch(clearCharacters());
  }, [dispatch]);

  const clearByIdHandler = useCallback(
    (id: number) => {
      dispatch(clearById(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch, lsData]);

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <CustomInput
          loading={loading}
          onChange={changeNumberHandler}
          placeholder="Enter any number"
          className={classes.inputGroup}
        >
          <CustomButton
            onClick={() => getCharacterHandler()}
            text="Search"
            disabled={!number}
          />
        </CustomInput>
        {!!data.length && (
          <CustomButton text="ClearAll" onClick={clearHandler} />
        )}
      </div>

      <div className={classes.infoContainer}>
        <CharacterInfo />
        {!!data.length && (
          <CharactersList
            characters={data}
            characterId={character?.id}
            onClick={getCharacterByIdHandler}
            clearByIdHandler={clearByIdHandler}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
