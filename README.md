# Patrick's Project(Using Redux, Materialize css, Firebase)
1. Re-code by me:
* Deploying to Firebase Hosting:
> https://www.youtube.com/watch?v=ji6urVl6oP4&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=40 
* Link deployed on Firebase:
> https://redux-marioplan-c0e63.web.app/
* Link deployed on Netlify:
> https://serene-bell-0a6a55.netlify.app/
2. Settings rules Firebase:

        rules_version = '2';
        service cloud.firestore {
        match /databases/{database}/documents {
            match /projects/{project} {
            allow read, write: if request.auth.uid != null && request.time < timestamp.date(2020, 5, 28);  
            }
            match /users/{userId}{
                allow create;
            allow read: if request.auth.uid != null;
            allow write: if request.auth.uid == userId;
            }
            match /notifications/{notifications} {
            allow read: if request.auth.uid != null && request.time < timestamp.date(2020, 5, 28);
            }
        }
        }

3. Cloud Functions setup:
> https://www.youtube.com/watch?v=TDUmYMVX3Mc&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=33

4. Issue:
* “TypeError: Object(…) is not a function” react-redux-firebase:
> npm i --save react-redux@5.1.1 react-redux-firebase@2.2.4
    This is a react-redux-firebase v2.x.x coding pattern and you probably have v3.x.x installed.

* Failed to set waiting for Auth ready.
* When you login with other account the profile initials not appear. (not important)
* The setting 'timestampsInSnapshots: true' is no longer required and should be removed.
* Missing or insufficient permissions.