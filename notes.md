## Presentational Component -> are the components that do not manage state

## snapshot testing -> use when you want make sure the html output does not change unexpectedly (chap2)

## you can see the result with debug method (chap2)

## The DOM Testing Libraries provides two libraries to simulate user actions, fire-event and user-event (chap3)

## A Test Double is generic term used to represent and object for testing purpose (chap3)

## Stubs are a term from Test double used to represent an object that replaces a real object for testing purpose

## Unlike the getBy* and findBy* queries, queryBy\* queries do not throw an error and fail the test when an element is not found. queryBy\* queries return null when an element is not found, allowing you to assert the expected absence of elements in the DOM without test failure.

## TDD steps

1. write a test
2. run the test, expecting it to fail
3. write the minimum amount of code to make the test pass
4. rerun the test to verify it passes
5. refactor the code as needed
6. repeat steps 2 through 5 as needed

eg:

build vote component:
build vote using TDD

---

1. we plan out how the component should look when rendered into the DOM and the actions a user should take.
2. we decide the component will be an image button.
3. the parent component should pass the image source and image alt text into the component as props
4. the component will also accept a Boolean value passed for the hasVoted prop to set the button's state to enabled or disabled.
5. if hasVoted is set to True, a user can click the button to invoke a method that will handle updating the vote count.
6. the first test will verify the component renders to the screen with the props passed in:

### TDD Form Register

1. expect user will click handle submit
2. before that make sure user can fill the form username and password
3. after that user click submit
4. make sure the handleSubmit is fired
