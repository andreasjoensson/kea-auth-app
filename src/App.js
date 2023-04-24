import "./App.css";
import FirebaseAuth from "./FirebaseAuth";
import { useState } from "react";
import { getFirebaseAuth } from "./firebase";
import { useEffect } from "react";
import Hemmelig from "./Hemmelig";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ... other code ...

    const unregisterAuthObserver = getFirebaseAuth().onAuthStateChanged(
      (currentUser) => {
        setUser(currentUser);
      }
    );

    // ... other code ...

    return () => {
      // ... other code ...
      unregisterAuthObserver();
    };
  }, []);

  return <div className="App">{user ? <Hemmelig /> : <FirebaseAuth />}</div>;
}

export default App;
