import * as React from 'react';
import './index.css';
import { icons } from '../../config';
// Компонент для вывода блока шапки
const HeaderBox = (): React.FunctionComponentElement<void> => {
  return (
    <div className="header">
      <img className="header__icon" src={icons.Logo} />
      <div className="header__text">Проверка прав доступа пользователя</div>
    </div>
  );
}
export default HeaderBox;