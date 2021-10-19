declare interface ICharacterReducer {
  results: ICharacter[];
  character?: ICharacter;
  loading: boolean;
  error?: string
}

declare interface ICharacter {
  name: string;
  species: string;
  type: string;
  location: ILocation;
  origin: IOrigin;
  status: string;
  image: string;
  id: number;
}

declare interface ILocation {
  name: string;
  url: string;
}
declare interface IOrigin {
  name: string;
  url: string;
}
