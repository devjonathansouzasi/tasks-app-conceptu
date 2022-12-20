import { useEffect, useState } from "react";

import { onAuthStateChanged, User } from "firebase/auth";

import { firAuth } from "../config/firebase";

export function useAuthentication() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(firAuth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });

    return unsubscriber;
  }, []);

  return {
    loading,
    user,
  };
}
