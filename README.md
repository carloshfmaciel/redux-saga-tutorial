
## Examples of when to use various Redux Saga keywords and techniques:



**"takeEvery"**
Use this when: You want to watch for EVERY time a specific redux action was dispatched.

Use case: Getting / fetching a list of data from an API.

Example:

```java
function* watchGetUsersRequest(){
    yield takeEvery(action.Types.GET_USERS_REQUEST, getUsers);
}
```

**"takeLatest"**

Use this when: There's the potential for a redux action to be dispatched multiple times in a short period and could potentially initiate the running of multiple instances of the same saga - use takeLatest to ONLY take the latest currently running saga for the associated dispatched redux action.

Use cases: Creating or updating a record, or;

If you have a complex app that queries the same API endpoint from multiple components at the same time - for example if you have a navbar that displays the currently logged in user's name, but the user is viewing a 'settings' page to view their personal details meaning both the navbar and the settings page will query the same API endpoint - you'll generally want to take the latest call for that data.

Example:
```java
function* watchGetLoggedInUserRequest(){
    yield takeLatest(action.Types.GET_LOGGED_IN_USER_REQUEST, getLoggedInUser);
}
```

**Blocking saga with "take"**

Use this when: You want to watch for a particular redux action to be dispatched, but you don't want to listen for that same dispatched action again until the currently running saga for that action has complete. You're "blocking" the ability to watch for when that particular redux action is dispatched until the currently running saga for that redux action has complete.

Use case: Deleting a user, or;

Accepting a payment. Generally you don't want to be able to accept multiple, simultaneous payments - you'd want to wait for the current transaction to complete before allowing the ability to accept another payment.

Example:
```java
function* watchDeleteUserRequest(){
    while(true){
        const {userId} = yield take(action.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {userId});
    }
}
```

**"call"**

Use this when: You want to call a function or a promise but want to wait for that function or promise to finish running before executing the next line of code.

Use case: In conjunction with "take" and blocking saga, or;

Calling a promise within a worker saga that queries an API endpoint.

Examples:
```java
function* deleteUser({userId}){
    try{
        const result = yield call(api.deleteUser, userId);
    }catch(e){
    
    }
}
 
function* watchDeleteUserRequest(){
    while(true){
        const {userId} = yield take(action.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {userId});
    }
}
```

"put"
Use this when: You want to dispatch a redux action from within a redux saga.

Use case: Any time you want to update your redux state - usually after a call to an API resolves and you want to update your redux state with the resulting data from the API.

Examples:
```java
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            users: result.data.users
        }));
    }catch(e){
    
    }
}


**Screen**

![alt text](https://github.com/carloshfmaciel/redux-saga-tutorial/blob/master/screenshot/screen.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# redux-saga-tutorial
