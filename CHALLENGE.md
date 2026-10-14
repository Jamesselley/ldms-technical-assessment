# The Challenge

## Rules

> **Please do not fork this repository.**

The brief covers what to build and how it should behave, but not how it should look. The UI and design are yours to decide.

Treat it as a screen in a real application rather than a form on a blank page, and feel free to show some personality in how you present it.

**Constraints:**

- Use React and TypeScript
- Use the provided `openapi.yaml` as the API contract, mocked with Mock Service Worker
- Feel free to use any libraries and AI tools you like
- Build on this repo rather than bootstrapping your own, as the mocked API is already set up here

**Time:** we expect this to take around three to four hours. Please don't spend much more than that. We would rather see good judgement about what to leave out, and a short note on what you would do next, than a finished product.

**AI tools:** use them if that's how you work. In your README, note roughly where you used them and how you checked the output. We'll ask you to talk through your code at the interview, so make sure you understand everything you submit.

## Story

As a user, I want to add a new party so that they are registered in the system.

A party is either a **Natural Person** or a **Legal Entity**. The fields shown depend on which type is selected.

## Acceptance criteria

### Party type selection

- The user can select Natural Person or Legal Entity
- Only the fields relevant to that type are shown

### Fields

| Field                       | Natural Person | Legal Entity |
| --------------------------- | :------------: | :----------: |
| Email address               |       ✓        |      ✓       |
| Postcode                    |       ✓        |      ✓       |
| Full name                   |       ✓        |              |
| Date of birth               |       ✓        |              |
| Registered name             |                |      ✓       |
| Company registration number |                |      ✓       |

### Validation

- All applicable fields are required
- Email must be a valid email address
- Postcode must be a valid UK postcode
- The user can clearly see which fields need attention

### Save behaviour

- On success, the user receives clear confirmation that the party was created
- On failure, the user sees a clear error and can retry without losing their input

## The API

The API and the models you'll be working with are described in `openapi.yaml`.
The typed APIs and models generated from it live in `src/generated`.

The backend is already implemented as a Mock Service Worker handler (`src/mocks/`), so you don't need to build or run a real server. Requests will appear in the browser's Network tab as if they were real.

## Submission

When you're done, push your work to a **private** GitHub repository and give access to the GitHub account named in your invitation email. Please keep the repository private so the exercise stays fair for other candidates.

Include a short README covering how to run your work, the decisions and trade-offs you made, what you would do with more time, and where you used AI tools.

If you would rather not use GitHub, send a zip of the project instead (please leave out `node_modules`).
