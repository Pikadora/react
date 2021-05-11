import * as React from 'react';
import './index.css';
import {icons} from '../../config';
import { useSelector } from 'react-redux';
// Компонент отображения блока с ошибкой сервера
const ErrorBox = (): React.FunctionComponentElement<void> => {
    // Получаем информацию об ошибке
    const errorData = useSelector((state: any) => state.rights.errorData);
    return (
        // Добавляем класс для визуализации в зависимости от того, где выводить ошибку - в модальном окне детальной карточке, или на общей странице
        <div className={`error${errorData.type === "modal" ? " error_modal" : ""}`}>
            <img className="error__icon" src={icons.Error} />
            <p className="error__title">Произошла ошибка</p>
            <p className="error__description">{errorData.message !== null ? errorData.message : "Неизвестная ошибка"}</p>
        </div>
    );
}
export default ErrorBox;