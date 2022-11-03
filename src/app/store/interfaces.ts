export interface IAuth {
  first_name: string;
  last_name: string;
  role: string;
  token: string;
}

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  groups: [];
}

export interface IGraph {
  data: {
    [key: string]: number;
  };
  type: string
}

export interface IBoard {
  image_url: string;
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
}

export interface IPreparedGraph {
  labels: string[];
  datasets: { data: Array<number> }[];
}
