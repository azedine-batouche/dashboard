import { Article } from './article';

export interface News {
  totalResults: number;
  articles: Article[];
}
