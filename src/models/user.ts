export class User {
  id: string;
  name: {
    first: string;
    last: string;
  }
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
