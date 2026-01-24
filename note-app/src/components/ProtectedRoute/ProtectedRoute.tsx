import {  useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../../firebase";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
        console.log(user);
      if (user) {
        setUser(true);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/" replace />; 

  return <>{children}</>;
};

export default ProtectedRoute;
