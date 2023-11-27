console.log("calendar");

import { initializeApp } from "https://gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://gstatic.com/firebasejs/10.6.0/firebase-database.js";

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

function write(email, name, date, time) {
    const db = getDatabase();
    const reference = ref(db, 'appointments/' + email);

    set(reference, {
        name: name,
        date: date,
        time: time
    });
}

write("alekseylopez2718@gmail.com", "Aleksey Lopez", "11/27", "8:00 pm");