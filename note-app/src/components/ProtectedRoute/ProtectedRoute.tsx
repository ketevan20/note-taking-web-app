import {  useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../../firebase";
// import { signOut } from "firebase/auth";


type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // signOut(Auth); სანამ ეს არ დავამატე მანამდე ნოუთებზე მაინც გადავდიოდი რადგან იუსერი დალოგინებული იყო
    onAuthStateChanged(Auth, (user) => {
        console.log(user);
      if (user) {
        setUser(true);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>; // show spinner or nothing while checking

  if (!user) return <Navigate to="/" replace />; // redirect to SignIn

  return <>{children}</>;
};

export default ProtectedRoute;
