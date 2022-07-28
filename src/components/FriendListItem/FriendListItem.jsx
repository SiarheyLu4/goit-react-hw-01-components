import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.onlain : css.offlain}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{name}</p>
</li>
  )
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};