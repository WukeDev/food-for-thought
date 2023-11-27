console.log("calendar");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAg1aVHssem65Mcb8qumVNrmfcl7Mzg0E8",
    authDomain: "foodforthought-wu-lopez.firebaseapp.com",
    databaseURL: "https://foodforthought-wu-lopez-default-rtdb.firebaseio.com",
    projectId: "foodforthought-wu-lopez",
    storageBucket: "foodforthought-wu-lopez.appspot.com",
    messagingSenderId: "660419123633",
    appId: "1:660419123633:web:c3af848a05f7aa7b488590",
    measurementId: "G-CLG0H3SB30"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

// TODO: remove appointments that passed:
//    - find passed timestamp in 'dates'
//    - identify username
//    - remove appointment from 'appointments'
//    - remove timestamp from dates

// TODO: if timestamp is filled, do not write
//    - locate timestamp in 'dates'
//    - if there is a username there, do not return the function early

function write(username, name, timestamp) {
    const db = getDatabase();
    
    const reference1 = ref(db, "dates/" + timestamp);
    set(reference1, {
        username: username
    });

    const reference2 = ref(db, "appointments/" + username + "/" + timestamp);
    set(reference2, {
        name: name
    });
}

function read(username) {
    const db = getDatabase();

    const dbRef = ref(db);
    get(child(dbRef, "appointments/" + username)).then((snapshot) => {
        if(snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.log(error);
    });
}

write("alekseylopez", "Aleksey Lopez", "7:00 PM, Nov 11, 2022");
write("lukewu", "Luke Wu", "8:00 PM, Nov 11, 2022");

read("alekseylopez");
