import * as React from 'react';
import './index.css';
import { Input } from 'antd';
import Check from './check';

// Компонент логики поиска
const Search = (): React.FunctionComponentElement<void> => {
    
    //значение в строке поиска
    const [value, setValue] = React.useState<string>('');

    return (
        <div className="search__inner">
            <Input
                className="search__input"
                type="search"
                value = {value}
                onChange={(event:any) => setValue(event.target.value)}
                placeholder="Введите ФИО или логин пользователя..."
            />
            <Check value={value}/>
        </div>
    );
}

export default Search;