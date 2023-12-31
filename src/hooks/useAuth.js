import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = React.useState();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return () => {
      unsubscribeFromAuthStateChanged();
    };
  }, []);

  return {
    user,
  };
}

