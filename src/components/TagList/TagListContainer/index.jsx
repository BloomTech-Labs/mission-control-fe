//LAB23-T1

import React from 'react';
import { rtc, hiddenName } from './tagListContainer.module.scss';

const TagListContainer = ({ children, statusColumn }) => {
  const statusTitleArr = [];
  if (statusColumn && statusColumn.length > 0) {
    for (let i = 0; i < 4 && !(i >= statusColumn.length); i += 1) {
      statusTitleArr.push(statusColumn[i]);
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Tag Name</th>
            {/* We want to use this feature, but it's not quite where we want it to be just yet. Since we'd have to rip it out in multiple files, I decided to leave it in and comment it out for now. See ProjectListRow */}
            {/* <th className={rtd}>Last Updated</th> */}
            {statusColumn.length > 0 && statusTitleArr.length > 0
              ? statusTitleArr.map(tagData => (
                  <th
                    className={tagData === true ? rtc : hiddenName}
                    key={tagData.id}
                  >
                    {tagData.name}
                  </th>
                ))
              : ''}
          </tr>
        </thead>
        <tbody>{children} </tbody>
      </table>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tag Name</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default TagListContainer;
