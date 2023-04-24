Jeg startede med at undersøge forskellige løsninger, og fandt frem til Firebase ville være god.
Og jeg valgte React til at lave en frontend da jeg syntes det er nemt at sætte op med npx create-react-app

Så jeg oprettede react frontenden ved brug af npx create-react-app kea-auth-app.
Når det var oprettet fik jeg installeret mine moduler, som er firebase og firebase ui

npm install firebase@9.1.2 firebaseui@5.0.0

Efter noget trial and error fandt jeg frem til at de her 2 versioner var kompatible og valgte derfor at bruge dem.

Jeg oprettede en bruger inde på https://console.firebase.google.com, og oprettede derefter et projekt.
Når jeg havde oprettet projektet fik jeg en configuration som ligner det her:

const firebaseConfig = {
apiKey: "AIzaSyAfNlfzNqhi6-vmClmqLpx26FHQXsSUU30",
authDomain: "keaauth.firebaseapp.com",
projectId: "keaauth",
storageBucket: "keaauth.appspot.com",
messagingSenderId: "667955668099",
appId: "1:667955668099:web:ddcba4de20892f6f1027b6",
};

For at bruge konfigurationen oprettede jeg en fil der hedder firebase.js, hvor jeg benytter konfigurationen.
Så oprettede jeg 2 komponenter.

FirebaseAuth
Siden hvor man login/registrere sig.

Hemmelig
Siden du skal have adgang til hvis du har logget succesfuldt ind.

Jeg opsatte det inde i FirebaseAuth sådan så at man kan logge ind med Google, og forresten skulle jeg også ind på https://console.firebase.google.com og enable det før at det ville virke.
