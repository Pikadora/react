import * as React from 'react';
import {connect} from 'react-redux';
import RowItem from '../table_row';
import {withDataService}  from '../services/dataService';

const ItemTable = ({user}:any) =>{
  const {securityGroupsFromProject,securityGroupsFromSharepoint} = user;
  console.log('ItemTable');
  console.log(user);
  console.log(securityGroupsFromProject);
  console.log(securityGroupsFromSharepoint);

  return (
    <table>
      <thead>
        <tr>
          <th>Группа безопастности Project</th>
          <th></th>
          <th>Группа безопастности Sharepoint</th>
          <th></th>
        </tr>
      </thead>
    <tbody>
      <tr>
        {
          securityGroupsFromProject.map((group:any) => {
            return(
              console.log('securityGroupsFromProject'),
              console.log(group),
              <RowItem group = {group} />
            )
          })
        },
        {
          securityGroupsFromSharepoint.map((group:any) => {
            return(
              console.log('securityGroupsFromSharepoint'),
              console.log(group),
              <RowItem group = {group} />
             )
          })
        }
      </tr>
    </tbody>
    </table>
  )
}

export default withDataService()(connect()(ItemTable));