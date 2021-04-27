import * as React from 'react';
import './index.css';
import {useSelector} from 'react-redux'
import { Input } from 'antd';
import { updateUser } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';


// Компонент логики поиска
const Search = (): React.FunctionComponentElement<void> => {
    //значение в строке поиска
    const [value, setValue] = React.useState<string>('');
    
    const dispatch = useDispatch();
 
    //получаем юзеров
    const userList = useSelector((state:any) => { 
        return state.users });
    console.log( 'userList = ' + userList);

    const onInputChange = (event:any) => {
        const login = event.target.value;
        console.log('checkingTheLogin');
        userList.map((user:any) => {
            if(login == user.login){
                console.log(login);
                console.log(user.login);                
                dispatch(updateUser(true,user));
                console.log(()=>{
                    const data = useSelector((state:any) => state.data);
                    return (data.isLoginTrue,data.user.login)
                });
            }
        });
    };

    return (
        <div className="search__inner">
            <Input
                className="search__input"
                type="search"
                value = {value}
                onChange={(event:any) =>{ setValue(event.target.value); onInputChange(event)}}
                placeholder="Введите ФИО или логин пользователя..."
            />
        </div>
    );
}

export default Search;