type Limit = { limit?: number; next?: never; previous?: never };
type Next = { next: number; previous?: never; limit?: never };
type Previous = { previous: number; next?: never; limit?: never };
type LimitNext = { limit: number; next: number; previous?: never };
type LimitPrevious = { limit: number; previous: number; next?: never };

export type PaginationParameters =
  | Limit
  | Next
  | Previous
  | LimitPrevious
  | LimitNext;
