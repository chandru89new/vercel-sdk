export type PaginationParameters = { limit?: number } & (
  | { next?: number; previous?: never }
  | { next?: never; previous?: number }
);
