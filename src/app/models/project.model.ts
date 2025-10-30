interface Stat {
  link?: string;
  value?: number;
  text?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  stats?: Stat[];
}
