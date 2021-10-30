import React, { memo } from "react";
import classNames from "classnames";

import CustomImage from "../../components/customImage";

import useStyles from "./style";

interface IProps {
  character?: ICharacter;
  error?: string;
}

const CharacterInfo: React.FC<IProps> = ({ character, error }) => {
  const classes = useStyles();
  console.log(character, error);
  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <CustomImage src={character && character.image} alt="Character" />
      </div>
      {error && <div className={classes.error}>{error}</div>}
      {character && (
        <div className={classes.characterInfo}>
          <div>{character.name}</div>
          <div className={classes.columnGroup}>
            <div className={classes.categoryColumn}>
              <span>Species:</span>
              <span>Type:</span>
              <span>Location:</span>
              <span>Origin:</span>
              <span>Status:</span>
            </div>
            <div className={classes.infoColumn}>
              <span
                className={classNames({
                  [classes.grey]:
                    !character.species || character.species === "unknown",
                })}
              >
                {character.species}
              </span>
              <span
                className={classNames({
                  [classes.grey]:
                    !character.type || character.type === "unknown",
                })}
              >
                {character.type || "unknown"}
              </span>
              <span
                className={classNames({
                  [classes.grey]:
                    !character.location.name ||
                    character.location.name === "unknown",
                })}
              >
                {character.location.name}
              </span>
              <span
                className={classNames({
                  [classes.grey]:
                    !character.origin.name ||
                    character.origin.name === "unknown",
                })}
              >
                {character.origin.name}
              </span>
              <span
                className={classNames({
                  [classes.green]: character.status === "Alive",
                  [classes.red]: character.status === "Dead",
                })}
              >
                {character.status}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(CharacterInfo);
