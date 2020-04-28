export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects')
      .add({
        ...project,
        authorFirstName: 'Kai',
        authorLastName: 'Hayate',
        authorId: 123456,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      })
  }
};