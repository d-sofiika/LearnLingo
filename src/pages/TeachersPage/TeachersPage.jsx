import Filters from "../../components/Filters/Filters";
 import css from "./TeachersPage.module.css"

const TeachersPage    = () => {
  return (
    <div className={`container ${css.teachersPageContainer}`}>
        <Filters/>
    </div>
  );
};

export default TeachersPage;
