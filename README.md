# Frontend Engineer Challenge
## James Selley Submission Notes

### Approach

I spent approximately four hours on the challenge, focusing on core functionality. I separated reusable UI components into `src/components/` and then grouped the party creation form and related logic in a modules folder `src/modules/CreatePartyForm`.

Given the time limit, I prioritised functionality over visual polish and animations. I added component tests and Storybook stories to support isolated development and testing. I also added tests for the form itself. To run the work you can use the `npm run dev` script listed below. The project uses React, TypeScript, MUI, Vitest & Storybook. You can also run storybook by running `npm run storybook`. To run the test suite, including Storybook related tests use `npm run test`.

### Further Improvements

With more time I would add Playwright end-to-end tests for successful and invalid submissions for both Natural Person & Legal Entity flows. I would also go into more detail and depth by adding more tests for the form module as well as individual components. I'd also improve upon the look & feel for example by adding in a visual loading and submission state in case the form took a while to submit. I'd also review performance and optimise my code where possible.

### AI Tools

I used GitHub Copilot a couple of times for single line coding, for example to help with the typing in `src/modules/CreatePartyForm/validation.ts` for FieldErrors, and a typing issue for `ToggleWithRadioInputProps` in `src/components/ToggleWithRadioInput/ToggleWithRadioInput.tsx`. I also used it to review the API work and provide a short summary when I started.

---
> **Please do not fork this repository.**

Start by reading [CHALLENGE.md](./CHALLENGE.md).

## Getting started

Requires Node 24.

```sh
npm install
npm run generate
npm run dev
```

## Key files

| Path             | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `openapi.yaml`   | API spec                                                                       |
| `src/generated/` | Typed client and `createParty()`, generated from the spec (`npm run generate`) |
| `src/mocks/`     | Mock Service Worker handlers — requests appear in the Network tab              |

## Scripts

| Command            | Description                                 |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Start dev server                            |
| `npm run generate` | Regenerate typed client from `openapi.yaml` |
| `npm test`         | Run tests                                   |
| `npm run build`    | Type-check and build                        |
