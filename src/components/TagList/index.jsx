//LAB23-T1
import React, { Fragment } from 'react';
import { useQuery } from 'urql';
import { TAG_LIST_VIEW as query } from './Queries/tagQueries';
import TagListContainer from './TagListContainer';
import TagListRow from './TagListRow';
import Settings from '../Settings/Settings'

import { Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'


// TagListView is the default view when a user signs into the application
// The TAG_LIST_VIEW query matches against the currently authenticated user
// and returns a list of tags that they are authorized to view.

const TagListView = ({ content, id, name, handleOnClick, handleOnEdit, handleOnDelete, isUsed }) => {

  const [state] = useQuery({ query });
  const { data, fetching, error } = state;
  if (error) {
    return (
      <p>
        Error "TAG_LIST_VIEW": {error.name} {error.message}
      </p>
    );
  }

  if (fetching) {
    return <p>Loading...</p>;
  }

console.log(`TAG_DATA:%0`, data)
  return (
    <div>
<Settings/>
      <TagListContainer>
        {/* statusColumn={columns}> */}
        {data.tags.map(tag => (  
          <TagListRow
            key={tag.id}
            tag={tag}

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
            </TagListRow>
          
        )) 
        }
      </TagListContainer>
    </div>
  );
};

export default TagListView;
