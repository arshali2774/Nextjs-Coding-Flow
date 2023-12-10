# Next.js Tutorial

- In this tutorial we will learn basics of Next.js.
- We will be using `bootstrap` instead of `tailwindCSS` as `bootstrap` requires some additional setup.

## Default Behaviors

- The default file of any next.js project behaves as a server component.
- We have to specify `use client` to make use of tools which we use on client side. For e.g. `useState`, `useEffect` etc.
- Also a client component cannot be `async`.
- If we have a client component then all the components used inside that component will also be client component. Same is valid for server component.
- The special file `error.tsx` should be a client component.
  > Jo Container humne layout main use kiya hai wo client component hai aur uske ander jo bhi hoga wo client component hoga. Lekin agar aisa hota to humara async server component nahi chal pata. Lekin wo chal raha hai because hum client component ke ander apna `children` nahi likha balki `children` ko as a `prop` pass kiya hai.

## App Router

- App Router is new in Next.js it allows us to make different directories as routes.
- There layout of `app` directory is like this:
  - There is a `page.tsx` file which is the main file or we can say the index file.
  - There is a `layout.tsx` file which is also important.
  - `global.css` file.
  - Many special files which includes:
    - `not-found.tsx`, the name is important in all these files and should be written as it is.
    - `error.tsx`
    - `loading.tsx`

## Hooks

- Next.js has divided navigation hooks into 3 different parts:
  - `useRouter` to programmatically change routes.
  - `usePathname` to get the current path.
  - `useSearchParams` to get the search params info.
