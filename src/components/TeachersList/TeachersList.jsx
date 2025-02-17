import TeachersItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";

export default function TeachersList({teachers}) {
 
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
