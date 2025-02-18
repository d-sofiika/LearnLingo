import TeachersItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";

export default function TeachersList({teachers}) {
 
  return (
    <div>
      {teachers.length === 0 ? (
        <div className={css.noFoundBox}>
          <h3>Ooops!</h3>
          <p>No teachers found. Change your filters.</p></div>
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
