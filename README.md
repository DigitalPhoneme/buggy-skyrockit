# Debugging Exercise: Fix the Skyrockit Mayhem (90 mins)

## Overview
You've built Skyrockit, but now it's broken! Clone the buggy repo and fix the issues step by step. This simulates real-world debugging. Work in pairs. Use console logs, error messages, and tools like Postman or browser console.

## Setup (5 mins)
1. Clone the buggy repo: `git clone https://github.com/DigitalPhoneme/buggy-skyrockit.git buggy-skyrockit`
2. `cd buggy-skyrockit`
3. `npm i` (expect errors—fix them!)
4. Create `.env` with your MONGODB_URI and SESSION_SECRET.
5. Run `nodemon start` and test in browser (localhost:3000).

Goal: Get the app fully working—sign in, CRUD apps, no errors.

## Debugging Tasks (60 mins)
Start with server startup errors, then move to functionality. Note what breaks and why.

1. **Server/Setup Bugs (15 mins):** Fix so server starts without crashes. Hint: Check dependencies, .env, middleware order.
2. **Auth/Middleware Bugs (15 mins):** Ensure sign-in works and apps are protected. Test: Can guests access /applications?
3. **Schema/Model Bugs (10 mins):** Fix data structure issues. Hint: Compare schema to forms/controllers.
4. **Routes/Controller Bugs (10 mins):** Fix CRUD (create/show/update/delete). Test each route.
5. **Views/EJS Bugs (10 mins):** Fix rendering and forms. Hint: Check syntax and paths.

Log your fixes: What was broken? How did you find it? What fixed it?

## Tips
- Read error messages carefully (console, browser).
- Use `console.log` to trace variables.
- Compare to the working Skyrockit code if stuck.
- Test incrementally: Fix one, restart server, test.

## Debrief (After Activity)
Share one bug you fixed and how.