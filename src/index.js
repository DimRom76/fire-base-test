import './styles.css';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyB2x8NGxGqI5s6cpy-ZZ7BKkq-KxMy9EcQ',
  authDomain: 'my-test-project-55199.firebaseapp.com',
  databaseURL: 'https://my-test-project-55199-default-rtdb.firebaseio.com',
  projectId: 'my-test-project-55199',
  storageBucket: 'my-test-project-55199.appspot.com',
  messagingSenderId: '69498591488',
  appId: '1:69498591488:web:5cb1a3a2d3b6ddd98bbbe5',
  measurementId: 'G-ES0MX21X9T',
};
// Initialize Firebase
var myProject = firebase.initializeApp(firebaseConfig);

console.log(firebase.app().name); // "[DEFAULT]"
// var defaultStorage = firebase.storage();

//var ref = firebase.database().ref('players');
// //запишем новые данные
// ref.set({
//   John: {
//     number: 1,
//     age: 30,
//   },

//   Amanda: {
//     number: 2,
//     age: 20,
//   },
// });
// //обновим данные
// var johnRef = firebase.database().ref('players/John');

// johnRef.update({
//   number: 10,
// });

// //создание другим методом с уникальным идентификатором

// var playersRef = ref.child('playersPush');
// playersRef.push({
//   name: 'John',
//   number: 1,
//   age: 30,
// });

// playersRef.push({
//   name: 'Amanda',
//   number: 2,
//   age: 20,
// });

// //чтение данных из бд
var ref = firebase.database().ref('players/playersPush');
ref.on(
  'value',
  function (snapshot) {
    console.log(snapshot.val());
  },
  function (error) {
    console.log('Error: ' + error.code);
  },
);

var playersRef = firebase.database().ref('players/playersPush');
playersRef.orderByChild('name').on('child_added', function (data) {
  console.log(data.val().name);
});

playersRef.orderByKey().on('child_added', function (data) {
  console.log(data.key);
});
