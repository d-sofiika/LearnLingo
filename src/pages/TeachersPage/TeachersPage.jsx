import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import useTeachers from "../../redux/useTeachers";
import { useEffect, useState } from "react";

const TeachersPage = () => {
  const teachers = useTeachers();
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);
  useEffect(() => {
    setFilteredTeachers(teachers);
  }, [teachers]);

  const handleFilter = (filters) => {
    const { selectedLanguage, selectedLevel, selectedPrice } = filters;
    const filtered = teachers.filter(
      (teacher) =>
        teacher.languages.includes(selectedLanguage) &&
        teacher.levels.includes(selectedLevel) &&
        teacher.price_per_hour <= parseInt(selectedPrice)
    );

    setFilteredTeachers(filtered);
    
  };

  return (
    <>
      <Header />
      <div className={`container ${css.teachersPageContainer}`}>
        <Filters onFilter={handleFilter} />
        <TeachersList teachers={filteredTeachers} />
      </div>
    </>
  );
};

export default TeachersPage;
