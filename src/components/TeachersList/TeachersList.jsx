import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../redux/firebase";
import TeachersItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";

export default function TeachersList() {
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
        console.log("No data found!");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {teachers.length === 0 ? (
        <p>No teachers found.</p>
      ) : (
        <ul className={css.list}>
          {teachers.map((teacher) => (
            <TeachersItem key={teacher.id} teacher={teacher} />
          ))}
        </ul>
      )}
    </div>
  );
}
