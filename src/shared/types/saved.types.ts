export type Save = {
  id: number;
  created_at: string;
  updated_at: string;
  user: number;
  news: number;
};

export type SavedRes = {
  count: number;
  next?: string;
  previous?: string;
  results: Save[];
};
