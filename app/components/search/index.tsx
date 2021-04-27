import * as React from 'react';
import './index.css';
import Search from './search';

// Компонент вывода блока с поиском
  const SearchBox = (): React.FunctionComponentElement<void> => {
    
    return (
        <div className="search">
            <Search />
        </div>
    );
}
export default SearchBox;