import { useEffect, useState } from "react";
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from "../../redux/FavoritesTeacher";
import css from "./Favorite.module.css";
import { onValue, ref } from "firebase/database";
import { useAuth } from "../AuthContext";
import { db } from "../../redux/firebase";

export default function Favorite({ teacher }) {
  const { currentUser } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    const favRef = ref(db, `users/${currentUser.uid}/favorites/${teacher.id}`);
    onValue(favRef, (snapshot) => setIsFavorite(snapshot.exists()));
  }, [teacher.id, currentUser]);

  const toggleFavorite = () => {
    if (!currentUser) return;
    if (isFavorite) {
      removeFavoriteTeacher(teacher.id, currentUser.uid);
    } else {
      addFavoriteTeacher(teacher.id, currentUser.uid);
    }
  };
  return (
    <button onClick={toggleFavorite} type="button">
      <svg
        width="26"
        height="26"
        className={
          !isFavorite ? css.heartIcon : `${css.heartIcon} ${css.heartRed}`
        }
      >
        <use href="/sprite.svg#icon-heart"></use>
      </svg>
    </button>
  );
}
