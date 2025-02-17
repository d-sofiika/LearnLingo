import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import TeachersList from "../../components/TeachersList/TeachersList";
 import css from "./TeachersPage.module.css"

const TeachersPage    = () => {
  return (
    <> <Header/>
    <div className={`container ${css.teachersPageContainer}`}>
      
      <Filters />
      <TeachersList/>
      </div>
      </>
  );
};

export default TeachersPage;
