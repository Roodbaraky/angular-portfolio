interface IStat {
  link?: string;
  value?: number;
  text?: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
  stats?: IStat[];
}
