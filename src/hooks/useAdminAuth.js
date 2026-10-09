import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

// Confirms an admin session exists before a protected admin page renders,
// redirecting to the login screen otherwise.
export default function useAdminAuth() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("checking");
  const [username, setUsername] = useState("");

  useEffect(() => {
    let cancelled = false;
    api
      .me()
      .then((data) => {
        if (cancelled) return;
        if (!data.authenticated) {
          navigate("/admin/login", { replace: true });
          return;
        }
        setUsername(data.username);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) navigate("/admin/login", { replace: true });
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { status, username };
}
