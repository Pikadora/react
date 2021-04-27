import * as React from 'react';
import * as Types from '../rights/types';
import RowItem from '../table_row';

const ItemTable = (props: {user: Types.RightsInfoInterface}): React.FunctionComponentElement<void> => {
  const {securityGroupsFromProject,securityGroupsFromSharepoint} = props.user;
  console.log('ItemTable');
  console.log(props.user);
  console.log(securityGroupsFromProject);
  console.log(securityGroupsFromSharepoint);

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Группа безопастности Project</th>
          <th>Права</th>
        </tr>
      </thead>
    <tbody>
        {
          securityGroupsFromProject.map((group:any) => {
            return(
              console.log('securityGroupsFromProject'),
              console.log(group),
              <tr>
                <RowItem group = {group} />
              </tr>              
            )
          })
        }
    </tbody>
    </table>
    <table>
      <thead>
        <tr>
        <th>Группа безопастности Sharepoint</th>
        <th>Права</th>
        </tr>
      </thead>
      <tbody>
        {
          securityGroupsFromSharepoint.map((group:any) => {
            return(
              console.log('securityGroupsFromSharepoint'),
              console.log(group),
              <tr>
                <RowItem group = {group} />
              </tr>
             )
          })
        }
      </tbody>
    </table>
    </div>
  )
}

export default ItemTable;