// test for the constructQueryString function to ensure 'next' and 'prev' keys are changed to `until`

import { expect, test } from "@jest/globals";
import { PaginationParameters } from "../src/types/pagination";
import { constructQueryString } from "../src/utils/url";

test("next -> until", () => {
  const query: PaginationParameters = { next: 10, limit: 30 };
  const string = constructQueryString("example.com", query);
  expect(string).toBe("example.com?until=10&limit=30");
});

test("previous -> until", () => {
  const query: PaginationParameters = { previous: 10, limit: 30 };
  const string = constructQueryString("example.com", query);
  expect(string).toBe("example.com?until=10&limit=30");
});

test("next -> until, no limit param", () => {
  const query: PaginationParameters = { next: 1001 };
  const string = constructQueryString("example.com", query);
  expect(string).toBe("example.com?until=1001");
});

test("previous -> until, no limit param", () => {
  const query: PaginationParameters = { previous: 1001 };
  const string = constructQueryString("example.com", query);
  expect(string).toBe("example.com?until=1001");
});
