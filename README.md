# Patrick's Project(Using Redux, Materialize css, Firebase)
1. Re-code by me:
2. Settings rules Firebase:
rules_version = '2';
<br>
service cloud.firestore {
<br>
  match /databases/{database}/documents {
<br>
    match /projects/{project} {
<br>
      allow read, write: if request.auth.uid != null && request.time < timestamp.date(2020, 5, 28);
<br>    
    }
<br>
    match /users/{userId}{
<br>
    	allow create
<br>
      allow read: if request.auth.uid != null
<br>
      allow write: if request.auth.uid == userId
<br>
    }
<br>
  }
<br>
}
<br>
3. Issue:
* “TypeError: Object(…) is not a function” react-redux-firebase
> npm i --save react-redux@5.1.1 react-redux-firebase@2.2.4
<br>
This is a react-redux-firebase v2.x.x coding pattern and you probably have v3.x.x installed.

* Failed to set waiting for Auth ready.
* When you login with other account the profile initials not appear. 
* The setting 'timestampsInSnapshots: true' is no longer required and should be removed.