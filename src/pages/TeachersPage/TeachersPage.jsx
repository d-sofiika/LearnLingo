import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import useTeachers from "../../redux/useTeachers";

const TeachersPage = () => {
  const teachers = useTeachers();

  return (
    <>
      <Header />
      <div className={`container ${css.teachersPageContainer}`}>
        <Filters />
        <TeachersList teachers={teachers} />
      </div>
    </>
  );
};

export default TeachersPage;
