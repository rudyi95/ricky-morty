import React, {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "../components/inputAdornment";
import CharacterInfo from "../containers/characterInfo";
import CharactersList from "../containers/charactersList";
import CustomButton from "../components/button";

import {
  clearCharacters,
  getCharacterById,
  getCharacters,
  clearById,
} from "../redux/actions/index";
import { charactersList, character, loading, error } from "../redux/selectors";

import useStyles from "./style";

const MainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [number, setNumber] = useState<number>(0);

  const characters = useSelector(charactersList);
  const characterData = useSelector(character);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  const disableSearch = !!number && number > 0;

  const getCharacterHandler = useCallback(() => {
    if (!!number || number === 0) {
      dispatch(getCharacterById(number));
    }
  }, [dispatch, number]);

  const getCharacterByIdHandler = useCallback(
    (id: number) => {
      if (id !== characterData?.id) {
        dispatch(getCharacterById(id));
      } else return;
    },
    [dispatch, characterData?.id]
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
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <CustomInput
          loading={isLoading}
          onChange={changeNumberHandler}
          placeholder="Enter any number"
          className={classes.inputGroup}
        >
          <CustomButton
            onClick={() => getCharacterHandler()}
            text="Search"
            disabled={!disableSearch}
          />
        </CustomInput>
        {!!characters.length && (
          <CustomButton text="ClearAll" onClick={clearHandler} />
        )}
      </div>

      <div className={classes.infoContainer}>
        <CharacterInfo character={characterData} error={isError} />
        {!!characters.length && (
          <CharactersList
            characters={characters}
            characterId={characterData?.id}
            onClick={getCharacterByIdHandler}
            clearByIdHandler={clearByIdHandler}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
