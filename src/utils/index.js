import firebase from 'firebase';



export const vote = params => {
    console.log('hi')
    const { path, delta } = params;
    const ref = firebase.database().ref(path);

    ref.transaction(val => {
        if (val) {
            val.votes += delta;
        } else val = { votes: 1 };
        return val;
    });
};