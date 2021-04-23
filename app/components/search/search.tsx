import * as React from 'react';
import './index.css';
import { Input } from 'antd';
import { getMochUpUser, getData } from '../../store/actions';
import {withDataService} from '../services/dataService';
import { useDispatch } from 'react-redux';

// Компонент логики поиска
const Search = () => {

    const dispatch = useDispatch();
    //значение в строке поиска
    const [value, setValue] = React.useState<string>('');
    const usersList = getData().payload.data;

    function onInputChange(event:any) {
            setValue(event.target.value);
            checkingTheLogin(event.target.value);
    }

    function checkingTheLogin(login:string){
        console.log('checkingTheLogin');
        usersList.map((user:any) => {
            if(login == user.login){
                console.log(login);
                console.log(user.login);                
                dispatch(getMochUpUser(true,user));
                console.log(user.login + user.name);
            }
        });
    }

    return (
        <div className="search__inner">
            <Input
                className="search__input"
                type="search"
                value = {value}
                onChange={onInputChange}
                placeholder="Введите ФИО или логин пользователя..."
            />
        </div>
    );
}

export default withDataService()(Search);