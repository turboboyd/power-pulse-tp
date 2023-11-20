import Icon from "../ComponIcon/Icon";
import css from "./Avatar.module.css";

import { useSelector, useDispatch } from "react-redux";
import { uploadAvatar } from "../../redux/avatar/avatarOperations";
import { setAvatarURL } from "../../redux/auth/authSlice";

const Avatar = ({ name, avatarURL }) => {
  const storedAvatarURL = useSelector((state) => state.auth.avatarURL);
  const dispatch = useDispatch();
  const hasAvatar = storedAvatarURL;

  const userAvatar = (
    <img
      src={avatarURL}
      alt="Avatar"
      style={{ borderRadius: "100%", width: "100%", height: "100%" }}
    />
  );
  const avatarLogo = <Icon className={css.iconAvatar} iconId={"icon-avatar"} />;

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      dispatch(setAvatarURL(objectURL));
    }

    dispatch(uploadAvatar(file));
  };

  return (
    <>
      <div className={css.avatarWrapper}>
        <div className={css.avatar}>{hasAvatar ? userAvatar : avatarLogo}</div>
        <form className={css.form}>
          <input
            type="file"
            name="file"
            id="inputFile"
            style={{ display: "none" }}
            onChange={handleChangeAvatar}
          />
          <label htmlFor="inputFile" style={{ cursor: "pointer" }}>
            <Icon className={css.iconUpload} iconId={"icon-add-avatar"} />
          </label>
        </form>
        <p className={css.textUserName}>{name}</p>
        <p className={css.textUser}>User</p>
      </div>
    </>
  );
};
export default Avatar;
