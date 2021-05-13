import * as React from 'react';
import './index.css';
import { Input } from 'antd';
import Check from './check';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../store/actions/actions';
// Компонент логики поиска
const Search = (): React.FunctionComponentElement<void> => {
    
    //значение в строке поиска
    const [value, setValue] = React.useState<string>('');

    const user = {
        login: '',
        name: '',
        securityGroupsFromProject: [],
        securityGroupsFromSharepoint: []
    };
    const dispatch = useDispatch();
    const onChange = (value:any) =>{
        setValue(value);
        if(value == ''){
            dispatch(updateUser(false, user))
        }
    }

    return (
        <div className="search__inner">
            <Input
                className="search__input"
                type="search"
                value = {value}
                onChange={(event:any) => onChange(event.target.value)}
                placeholder="Введите ФИО или логин пользователя..."
            />
            <Check value={value}/>
        </div>
    );
}

export default Search;