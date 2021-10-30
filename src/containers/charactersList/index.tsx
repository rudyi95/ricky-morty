import React, { memo } from "react";
import classNames from "classnames";

import CustomImage from "../../components/customImage";

import useStyles from "./style";

interface IProps {
  characterId?: number;
  characters: ICharacter[];
  onClick: (id: number) => void;
  clearByIdHandler: (id: number) => void;
}
const CharactersList: React.FC<IProps> = ({
  characterId,
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
              [classes.selected]: char.id === characterId,
            })}
            key={char.id}
            onClick={() => onClick(char.id)}
          >
            {char.id === characterId && (
              <div
                className={classes.removeCircle}
                id={char.id.toString()}
                onClick={(e) => {
                  clearByIdHandler(char.id);
                  e.stopPropagation();
                }}
              >
                X
              </div>
            )}
            <CustomImage src={char.image} alt="Character" />
          </div>
        );
      })}
    </div>
  );
};

export default memo(CharactersList);
