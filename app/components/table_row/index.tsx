import * as React from 'react';

const RowItems = (props:{groupProject:any,groupSharepoint:any}): React.FunctionComponentElement<void> => {
    const { groupProject, groupSharepoint } = props;
    console.log('groupProject' + groupProject.id + '' + groupProject.children);
    console.log('groupSharepoint' + groupSharepoint.id + '' + groupSharepoint.children);

    return (
        <React.Fragment>
            <tr>
                <td id={groupProject.id}>{groupProject.children}</td> 
                <td id={groupSharepoint.id}>{groupSharepoint.children}</td> 
            </tr>
        </React.Fragment>
    );
};

export default RowItems;