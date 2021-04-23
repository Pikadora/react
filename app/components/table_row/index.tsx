import * as React from 'react';

const RowItem = ({group}:any) => {
    const { title, rights } = group;
    return (
        <React.Fragment>
            <td>{title}</td>
            <td>{rights}</td>
        </React.Fragment>
    );
};

export default RowItem;