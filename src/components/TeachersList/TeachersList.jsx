import TeachersItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";

export default function TeachersList({ teachers, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className={css.loadingBox}>
          <p>Loading teachers...</p>
        </div>
      ) : teachers.length === 0 ? (
        <div className={css.noFoundBox}>
          <h3>Ooops!</h3>
          <p>No teachers found. Change your filters.</p>
        </div>
      ) : (
        <ul className={css.list}>
          {teachers.map((teacher, index) => (
            <TeachersItem key={`${teacher.id}-${index}`} teacher={teacher} />
          ))}
        </ul>
      )}
    </>
  );
}
