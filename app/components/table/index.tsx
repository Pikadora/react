import * as React from 'react';
import * as Types from '../rights/types';
import RowItem from '../table_row';

import './index.css';

const ItemTable = (props: {user: Types.RightsInfoInterface, key:string}): React.FunctionComponentElement<void> => {
  const {securityGroupsFromProject,securityGroupsFromSharepoint} = props.user;
  console.log('ItemTable');

  return (
    <div className="rights" >
      <div className="rights__table">
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
                  <tr key={group.id}>
                    <RowItem group = {group} />
                  </tr>              
                )
              })
            }
          </tbody>
        </table>
      </div>
    <div className="rights__table">
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
                <tr key={group.id}>
                  <RowItem group = {group} />
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ItemTable;