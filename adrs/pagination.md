# Pagination parameters

Vercel has a pseudo-cursor-based pagination system.

In the API responses that are paginated, Vercel [returns a `pagination` object][vercel-pagination] which has `count, next, prev` keys.

Eg:

```js
{
  deployments: [...],
  pagination: {
    count: 20,
    next: 165263579,
    prev: null
  }
}
```

To request next/previous pages of the results, the user has to supply an `until` parameter (which takes the value of either the `next` or the `prev` key from the pagination object).

```js
await fetch("https:/api.vercel.com/v1/deployments?until=165263579");
```

We've decided to simplify what the user needs to remember and make it intuitive.

Instead of having to pass `until` as a parameter, the user can specify `next` or `previous` in the parameters they pass to the functions to get paginated results. The SDK takes care of converting these keys into `until` when it makes the actual API calls.

As an example:

Let's say the user gets this as a response for a list of deployments by calling `listDeployments()`:

```js
{
  deployments: [...],
  pagination: {
    count: 20,
    next: 165263579,
    prev: null
  }
}
```

To get the next page, the user can simply do this:

```js
listDeployments({ next: 165263579 });
```

### Ensuring only `next` or `previous` is passed, not both

If the SDK is used in a Typescript environment, the functions that use pagination parameters will ensure that the user can only pass one of `next` or `previous` and not both at the same time.

[vercel-pagination]: https://vercel.com/docs/rest-api#interfaces/pagination
