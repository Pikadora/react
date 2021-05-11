import * as React from 'react';

const RowItem = (props:{group:any}): React.FunctionComponentElement<void> => {
    const { title, rights } = props.group;
    const allrights:any = [];
    rights.map((right:any) => {
        allrights.push(<li key = {right.id} >{right.name}</li>);
    })
    return (
        <React.Fragment>
            <td>{title}</td>
            <td><ul>{allrights}</ul></td>
        </React.Fragment>
    );
};

export default RowItem;