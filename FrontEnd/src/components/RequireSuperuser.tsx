import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { fetchUserProfile } from "@/services/api";

export default function RequireSuperuser({ children }: { children: JSX.Element }) {
  const [isSuperuser, setIsSuperuser] = useState<boolean | null>(null);

  useEffect(() => {
    const checkProfile = async () => {
      const res = await fetchUserProfile();
      if (res.ok) {
        const data = await res.json();
        setIsSuperuser(data.is_superuser);
      } else {
        setIsSuperuser(false);
      }
    };
    checkProfile();
  }, []);

  if (isSuperuser === null) return <div>Loading...</div>;
  if (!isSuperuser) return <Navigate to="/admin" replace />;

  return children;
}
