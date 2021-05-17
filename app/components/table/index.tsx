import * as React from 'react';
import * as Types from '../rights/types';
import RowItems from '../table_row';

import './index.css';

const ItemTable = (props: {user: Types.RightsInfoInterface, key:string}): React.FunctionComponentElement<void> => {
  const {securityGroupsFromProject,securityGroupsFromSharepoint} = props.user;
  console.log('ItemTable');

  let rowList:any = [];

  const getRowList = (project:any, sharepoint:any) => {
    let n = 0;
    while (n <= project.length - 1 || n <= sharepoint.length - 1){
      let projectRow;
      let sharepointRow;

      if(project[n] == undefined){
        projectRow = <td id='empty'></td>
      }
      else{
        projectRow = <td id={project[n].id}>{project[n].title}</td>
        
      }

      if(sharepoint[n] == undefined){
        sharepointRow = <td id='empty'></td>
      }
      else{
        sharepointRow = <td id={sharepoint[n].id}>{sharepoint[n].title}</td>
      }

      rowList.push({projectRow:projectRow,sharepointRow:sharepointRow});
      console.log('rowList' + rowList);
      n++;
    }
  };

  getRowList(securityGroupsFromProject, securityGroupsFromSharepoint);

  console.log(rowList);

  return (
    <div className="rights" >
      <div className="rights__table">
        <table>
          <thead>
            <tr>
              <th>Группа безопастности Project</th>
              <th>Группа безопастности Sharepoint</th>
            </tr>
          </thead>
          <tbody>
            {
              rowList.map((el:any) => {
                return <RowItems groupProject={el.projectRow.props}
                                 groupSharepoint={el.sharepointRow.props} />
              })
            }
          </tbody>
        </table>
      </div>
  </div>
  )
}

export default ItemTable;