# Notes for display jokes

## Quiz

1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?
    1. We often don't have the data ahead of time when we're building
       the app, so we simply can't manually type them out.
    2. It makes our code more "self-sustaining" - not requiring additional
       changes to the code whenever the data changes.