import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import useTeachers from "../../api/useTeachers";
import { useEffect, useState } from "react";

const TeachersPage = () => {
  const teachers = useTeachers();
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [currentTeachers, setCurrentTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreTeachers, setHasMoreTeachers] = useState(true);
  
  const teachersPerPage = 4;

  useEffect(() => {
    if (teachers.length > 0) {
      setFilteredTeachers(teachers); 
      setCurrentTeachers([]); 
      setCurrentPage(1); 
      setHasMoreTeachers(true); 
    }
  }, [teachers]);

  useEffect(() => {
    if (filteredTeachers.length > 0) {
      const indexOfLastTeacher = currentPage * teachersPerPage;
      const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
      const newTeachers = filteredTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

      setCurrentTeachers((prevTeachers) => [
        ...prevTeachers,
        ...newTeachers,
      ]);

      if (indexOfLastTeacher >= filteredTeachers.length) {
        setHasMoreTeachers(false);
      }
    }
  }, [currentPage, filteredTeachers]);

  const handleFilter = (filters) => {
    const { selectedLanguage, selectedLevel, selectedPrice } = filters;
    const filtered = teachers.filter(
      (teacher) =>
        teacher.languages.includes(selectedLanguage) &&
        teacher.levels.includes(selectedLevel) &&
        teacher.price_per_hour <= parseInt(selectedPrice)
    );

    setFilteredTeachers(filtered);
    setCurrentPage(1); 
    setHasMoreTeachers(filtered.length > teachersPerPage);
    setCurrentTeachers([]); 
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Header />
      <div className={`container ${css.teachersPageContainer}`}>
        <Filters onFilter={handleFilter} />
        <TeachersList teachers={currentTeachers} />
        
        {hasMoreTeachers ? (
          <button className={css.btnMore} type="button" onClick={handleLoadMore}>
            Load more
          </button>
        ) : (
          <p className={css.noMore}>No more teachers.</p>
        )}
      </div>
    </>
  );
};

export default TeachersPage;
