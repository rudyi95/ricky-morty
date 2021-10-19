import React from "react";
import classNames from "classnames";

import { CustomImage } from "../../components/customImage";

import useStyles from "./style";

interface IProps {
  character?: ICharacter;
  characters: ICharacter[];
  onClick: (id?: number) => void;
  clearByIdHandler: (id: number) => void;
}
export const CharactersList: React.FC<IProps> = ({
  character,
  characters,
  onClick,
  clearByIdHandler,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {characters.map((char: ICharacter) => {
        return (
          <div
            className={classNames(classes.listImg, {
              [classes.selected]: character && char.id === character.id,
            })}
            key={char.id}
            onClick={() => onClick(char.id)}
          >
            <CustomImage
              src={char.image}
              alt="Character"
              onDelete={
                character && char.id === character.id
                  ? () => clearByIdHandler(char.id)
                  : undefined
              }
            />
          </div>
        );
      })}
    </div>
  );
};
