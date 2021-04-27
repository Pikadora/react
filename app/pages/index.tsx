import * as React from 'react';
import ItemTable from '../components/table';
import { useSelector} from 'react-redux';
import SearchBox from '../components/search/index'
// Компонент для вывода таблицы безопасности по sharepoint/project
const RightsBox = (): React.FunctionComponentElement<void> => {

  //получаем результат проверки юзера
  const isLoginTrue = useSelector((state:any) => state.isLoginTrue);
  //получаем юзера
  const user = useSelector((state:any) => state.user);
  console.log('RightBox' + isLoginTrue + ' ' + user);

  return ( 
    <>
    {<SearchBox />}
    {(isLoginTrue == true  && user.name != undefined) ?
          <table><ItemTable user={user}/></table> : <div></div>}
    </>
  );
}

export default RightsBox;