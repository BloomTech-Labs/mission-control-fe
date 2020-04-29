//Lab23-T1
import React, { useEffect, useState, Fragment } from 'react';
import { useQuery } from 'urql';
import Header from '../Tag/Header';
import { Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'

//Styling
import {
  parentTagContainer,
  tagPageContents

} from '../Tag/Tag.module.scss';

//Single tag view
import {
  TAG_VIEW_QUERY as tagViewQuery,

} from '../Tag/Queries';



const Tag = props => {
  const { id, name, handleOnClick, handleOnEdit, handleOnDelete, isUsed } = props.match.params;

  //LAB23-T1  executeQuery will be used to query other obj arrays
  const [state] = useQuery({
    query: tagViewQuery,
    variables: { id },
  });
  const { data, fetching, error } = state;


  if (fetching) {
    return <p>Please Wait... Loading...</p>;
  }

  if (!data || !data.tag) {
    return (
      <h2>
        <span role="img">Tag Not Found 🤷‍♂️</span>
      </h2>
    );
  }

  console.log('TAG_VIEW_QUERY DATA: %O', data);
  return (
    <div className={parentTagContainer}>
      <div className={tagPageContents}>
          <Header 
          tagId={id} 
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
           
    </Header>
      </div>
    </div>

  );
};

export default Tag


