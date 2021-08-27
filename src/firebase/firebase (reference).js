// CRUD operations with firebase database (Create, Read, Update, Delete)
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgBbK4mBUq_0eMP9215wmsyOwnpkpG9V0",
  authDomain: "expensify-c1c6f.firebaseapp.com",
  databaseURL: "https://expensify-c1c6f-default-rtdb.firebaseio.com",
  projectId: "expensify-c1c6f",
  storageBucket: "expensify-c1c6f.appspot.com",
  messagingSenderId: "173330768530",
  appId: "1:173330768530:web:22eee1aaf440fd0ac4bc4b",
  measurementId: "G-1CPP69JSL4",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

/*
// Create Data
database
  .ref()
  .set({
    name: "Sandor Tudja",
    age: 45,
    stressLevel: 6,
    job: {
      title: "Software Developer",
      company: "Google",
    },
    location: {
      city: "Kemnay",
      country: "United Kingdom",
    },
  })
  .then(() => {
    console.log("Data is saved!");
  })
  .catch((e) => {
    console.log("This failed.", e);
  });

// Delete Data (Remove)
database
  .ref("isSingle")
  .remove()
  .then(() => {
    console.log("Data has been removed from database");
  })
  .catch((e) => {
    console.log("Something went wrong:", e);
  });


// Update Data
database
  .ref()
  .update({
    stressLevel: 9,
    "job/company": "Amazon",
    "location/city": "Seattle",
  })
  .then(() => {
    console.log("Data is updated!");
  })
  .catch((e) => {
    console.log("Data update failed.", e);
  });


// Read Data (Fetching & Subscribe)
// fetching once
database
  .ref("location")
  .once("value")
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log("Error fetching data:", e);
  });

// subscribe
const onValueChange = database.ref().on(
  "value",
  (snapshot) => {
    console.log(snapshot.val());
  },
  (e) => {
    console.log("Error with data fetching", e);
  }
);

setTimeout(() => {
  database.ref("age").set(24);
}, 3500);

setTimeout(() => {
  database.ref().off("value", onValueChange);
}, 7000);

setTimeout(() => {
  database.ref("age").set(324);
}, 10500);


// Challenge Time:
const onValueChange = (snapshot) => {
  const name = snapshot.val().name.split(" ")[0];
  const jobTitle = snapshot.val().job.title;
  const company = snapshot.val().job.company;
  const message = `${name} is a ${jobTitle} at ${company}.`;
  console.log(message);
};

database.ref().on("value", onValueChange);

setTimeout(() => {
  database.ref().update({
    name: "Elvira",
    "job/company": "Lovely Lashes Beauty House",
    "job/title": "Eyelash technician",
  });
}, 5000);

database.ref("notes").push({
  title: "Course Topics",
  body: "React Native, Angular, Python",
});

database.ref("notes/-MhwtoB4cuThzftV_IvJ").remove();
*/

// Challenge Time:
// Setup 'expenses' with three items (description, note, amount, createdAt)

const expenses = [
  {
    description: "d-1",
    note: "n-1",
    amount: 1230,
    createdAt: 0,
  },
  {
    description: "d-2",
    note: "n-2",
    amount: 304,
    createdAt: 10,
  },
  {
    description: "d-3",
    note: "n-3",
    amount: 123123044,
    createdAt: 20,
  },
];
/*
expenses.forEach((expense) => {
  database.ref("expenses").push(expense);
});
*/

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   })
//   .catch((e) => {
//     console.log("Error occurred at data fetching:", e);
//   });

/*
// Challenge Time:
const onValueChange = (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });

  console.log(expenses);
};

database.ref("expenses").on("value", onValueChange, (e) => {
  console.log("An error occurred:", e);
});
*/

// child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").push(expenses[0]);
