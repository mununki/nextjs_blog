export interface IPost {
  title: string;
  createdAt: string;
  filename: string;
  category: string[];
  tag: string[];
  thumb?: string;
  slug?: string;
}
