import * as React from 'react';
import { useSelector} from 'react-redux';
import SearchBox from '../components/search/index'
import Preloader from '../components/preloader';
import ModalBox from '../components/modal';
import AccordionBox from '../components/accordion';

// Компонент для вывода таблицы безопасности по sharepoint/project
const RightsBox = (): React.FunctionComponentElement<void> => {

  //Получаем статус загрузки
  const isloading = useSelector((state:any) => state.rights.isLoadingRights);
  // получаем аккордеон
  const accordion = useSelector((state: any) => state.accordion);
  //Получаем необходимость модалки
  const isModalVisible = useSelector((state:any) => state.rights.isModalVisible);
  //получаем результат проверки юзера
  const isLoginTrue = useSelector((state:any) => state.accordion.data.isLoginTrue);

  return ( 
    <>
    {<SearchBox />}
    {isModalVisible ? <ModalBox /> : ""}
    {isloading ? <Preloader position={"relative"} /> : ((isLoginTrue == true && accordion.data.user.name != '') ?
      <AccordionBox data={accordion}/> : (isModalVisible ? <ModalBox /> : null ))}
    </>
  );
}

export default RightsBox;