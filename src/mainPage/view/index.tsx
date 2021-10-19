import React, { BaseSyntheticEvent } from "react";

import { CustomButton } from "../../components/button";
import { CustomInput } from "../../components/inputAdornment";
import { CharacterInfo } from "../../containers/characterInfo";
import { CharactersList } from "../../containers/charactersList";

import useStyles from "./style";

interface IMainPage {
  character?: ICharacter;
  characters: ICharacter[];
  loading: boolean;
  error?: string;
  onClick: (id?: number) => void;
  clearHandler: () => void;
  clearByIdHandler: (id: number) => void;
  changeNumberHandler: (e: BaseSyntheticEvent) => void;
}

export const MainPageView: React.FC<IMainPage> = ({
  character,
  characters,
  loading,
  error,
  onClick,
  clearHandler,
  clearByIdHandler,
  changeNumberHandler,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <CustomInput
          loading={loading}
          onChange={changeNumberHandler}
          onClick={() => onClick()}
          adornmentText="Search"
          placeholder="Enter any number"
          className={classes.inputGroup}
        />
        {!!characters.length && (
          <CustomButton text="ClearAll" onClick={clearHandler} />
        )}
      </div>

      <div className={classes.infoContainer}>
        <CharacterInfo character={character} loading={loading} error={error} />
        {characters && (
          <CharactersList
            characters={characters}
            character={character}
            onClick={onClick}
            clearByIdHandler={clearByIdHandler}
          />
        )}
      </div>
    </div>
  );
};
