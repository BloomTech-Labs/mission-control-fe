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
{/* KS */}
      <Link to={`/`} className={title}>
          <p>Edit</p>
        </Link>

      <Link to={`/`} className={title}>
          <p>Delete</p>
        </Link>
    </tr>
  );
};

export default TagRow;
