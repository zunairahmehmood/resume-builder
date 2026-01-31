import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const useResumes = (uid) => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    if (!uid) return;

    const fetchResumes = async () => {
      const q = query(
        collection(db, "resumes"),
        where("userId", "==", uid)
      );

      const snap = await getDocs(q);

      const data = snap.docs.map((doc) => ({
        id: doc.id,       // 🔥 REQUIRED
        ...doc.data(),
      }));

      setResumes(data);
    };

    fetchResumes();
  }, [uid]);

  return resumes;
};

export default useResumes;
