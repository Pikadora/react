import * as React from 'react';
import './index.css';
import {icons} from '../../config';
// Компонент логики кнопки Развернуть/Свернуть
const Preloader = (props: {position: string}): React.FunctionComponentElement<void> => {
    return (
        <div className={`preloader preloader_${props.position}`}>
            <img className="preloader__icon" src={icons.LoadingIcon} />
            <p className="preloader__title">Идет загрузка данных</p>
        </div>
    );
}
export default Preloader;