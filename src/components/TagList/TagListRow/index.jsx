import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';

import { Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'

import {
  title,

} from './tagListRow.module.scss';

const TagRow = ({ tag, content, id, name, handleOnClick, handleOnEdit, handleOnDelete, isUsed, statusColumn }) => {
  const TagsArr = [];

  // Display status indicators if present
  if (statusColumn && statusColumn.length > 0) {
    for (let i = 0; i < 4 && !(i >= statusColumn.length); i += 1) {
      TagsArr.push(statusColumn[i]);
    }

    return (
      <tr>
        <td className={title}>
          <Link to={`/tag/${tag.id}`} className={title}>
            {tag.name}
            extra={
              <Fragment>
                <span className='pointer'
                onClick={() => 
                handleOnEdit({id, name, isUsed})}>
  
                <EditOutlined
                style={{
                  fontSize: `1.25rem`,
                  color: '#08c',
                  marginRight: '0.625rem'
                }}
                type='edit'/>
         </span>
  
         <Popconfirm
              title="Are you sure delete this tag?"
              onConfirm={() =>
                handleOnDelete({
                  id,
                  name
                })
              }
              okText="Yes"
              cancelText="No"
            >
              <span className='pointer'>
                <DeleteOutlined
                style={{
                  fontSize:'1.25rem',
                  color:'#08c',
                  marginRight:'0.625rem'
                }}
                type='delete'
                />
              </span>
              </Popconfirm>
              <span className="pointer">
              <EyeOutlined
                style={{
                  fontSize: '1.25rem',
                  color: '#08c'
                }}
                type="eye"
                onClick={() => handleOnClick(id)}
              />
            </span>
              </Fragment>
            } style={{
              marginBottom:'0.625rem'
            }}

          >
            {content}

          </Link>
        </td>
        {statusColumn.length > 0 && TagsArr.length > 0
          ? TagsArr.map(tag => {
              return (
                <td
                  key={tag.id}
                  tag={tag}
                >
        
                </td>
              );
            })
          : ''}
      </tr>
    );
  }

  //console.log("PROJECT: %O", project)

  return (
    <tr>
      <td className={title}>
        <Link to={`/tag/${tag.id}`} className={title}>
          {tag.name}
        </Link>

      </td>
    </tr>
  );
};

export default TagRow;
