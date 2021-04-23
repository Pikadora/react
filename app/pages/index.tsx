import * as React from 'react';
import ItemTable from '../components/table';
import { withDataService } from '../components/services/dataService';
import { getMochUpUsers } from '../store/actions'
import compose from '../compose';
import {connect} from 'react-redux';
import { useSelector} from 'react-redux';
// Компонент для вывода таблицы безопасности по sharepoint/project
const RightsBox = () => {

  const dataService = useSelector((state:any) => state);

  React.useEffect(() => {
    console.log('useEffect');
    const { user, isLoginTrue } = dataService;
    getItemTable(user, isLoginTrue);
  })

  function getItemTable(user:any, isLoginTrue:any){
    if(isLoginTrue){
      return ( 
        <table>
          <ItemTable user={user}/>
        </table>
      );
    } else
    {
      return (
        <div></div>
      );
    }
  }  

  return (
    <div></div>
  );
}

const mapStateToProps = ({ user }:any) => {
  return { user };
};

const mapDispatchToProps = {
  getMochUpUsers
};

export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(RightsBox);;