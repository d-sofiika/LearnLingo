import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";

const useTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  
  useEffect(() => {
    const teachersRef = ref(db, "teachers/");
    const unsubscribe = onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const teachersArray = Object.entries(data).map(([id, teacher]) => ({
          id,
          ...teacher,
        }));
        setTeachers(teachersArray);
      } else {
        setTeachers([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return teachers;
};

export default useTeachers;
