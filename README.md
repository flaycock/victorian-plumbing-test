# victorian-plumbing-test
Technical Test for Victorian Plumbing

# how to run
Inside the base folder run `npm i` to install dependencies, then `npm run dev` to run the dev environment.

# my approach
I broke my approach to this task down into sections, to be handled sequentially:
- Figure out a list of components I would need and create them
- Take the smallest child components, add their functionality, and build up from there
- Once functionality was implemented (and some base styling) move up in the chain
- After the page works as expected, go back over each component and complete styling
- Then go over the code itself to clean, add comments and refactor

# things to improve
- Unit testing of course would help future development of this app
- When clicking "Load more" at bottom of product list, would be nice for user to maintain position as opposed to being pinged up to the top of the page (due to re-render of complete product list)
- Have the review stars exactly match average review instead of rounding