import * as React from 'react';
import ItemTable from '../table';
import { useDispatch, useSelector } from "react-redux";
import * as Types from './types';
import {updateActiveKeyAccordion } from '../../store/actions/actions';
import './index.css';

const AccordionBox = (props: { data: Types.AccordionInfoInterface }): React.FunctionComponentElement<void> => {

    console.log('Accordion');

    const dispatch = useDispatch();
    // Получаем список ключ аккордеона
    const isActiveKey = useSelector((state: any) => state.accordion.isActiveKey);
    const user = useSelector((state: any) => state.accordion.data.user);
    const accordion__inner = "accordion__inner_active";
    const accordion__content = "accordion__content_active";

    // Функция обновления ключа аккордеона по клику 
    const eventUpdateActiveKeyAccordion = React.useCallback((key:boolean) => {
        dispatch(updateActiveKeyAccordion(key));
    }, []);

    return(
        <div className="content">
            <div className="userName">
                <span>Пользователь: </span><span>{user.name}</span>
            </div>
            <div className="accordion">
                <div className={`accordion__inner ${isActiveKey? accordion__inner : ''}`} onClick = {() => eventUpdateActiveKeyAccordion(isActiveKey) }>
                    <span className="accordion__name">Таблица групп безопасности Sharepoint и Project</span>
                </div>
                <div  className={`accordion__content ${isActiveKey? accordion__content : ''}`}>
                    <ItemTable user ={user} 
                               key = {props.data.id}/>
                </div>
            </div>
        </div>
    )
}

export default AccordionBox;