import * as React from 'react';
import {useSelector} from 'react-redux'
import { updateUser, getModalVisible, updateActiveKeyAccordion } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';

//компонент кнопка Проверить
const Check = (props:{value:any}) =>{

    const dispatch = useDispatch();
    let isLoginTrue = false;
    const isActiveKey = useSelector((state:any) => { 
        return state.accordion.isActiveKey });
    //получаем юзеров
    const userList = useSelector((state:any) => { 
        return state.rights.users });
    const user = {
        login: '',
        name: '',
        securityGroupsFromProject: [],
        securityGroupsFromSharepoint: []
    };

    console.log('Check')

    const onInputChange = (value:any) => {
        const login = value;
        if(login == ''){
            isLoginTrue = false;
        } else{
            userList.map((selectedUser:any) => {
                if(login == selectedUser.login || login == selectedUser.name){   
                    isLoginTrue = true;
                    if(!isActiveKey){
                        dispatch(updateActiveKeyAccordion(isActiveKey));
                    }            
                    dispatch(updateUser(isLoginTrue,selectedUser));
                }
            });
        }

        if(!isLoginTrue){
            dispatch(updateUser(isLoginTrue, user));
            dispatch(getModalVisible());
        }

        
    };

    return(
        <button
                className="ant-btn search__btn"
                type="button"
                onClick={() =>onInputChange(props.value)}>
                    <span className="search__btn-name">Проверить</span>
        </button>
    )

}

export default Check;
