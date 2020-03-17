import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { labelDesign } from './LabelDropdown.module.scss';

const LabelDropdown = ({ labels, project }) => {
  console.log(labels, project);
  const labelsN = labels.map(label => ({
    key: label.id,
    value: label.color,
    selectedLabel: label.selected.id,
    text: (
      <div className={labelDesign} style={{ background: `${label.color}` }}>
        {label.name}
      </div>
    ),
    content: (
      <div className={labelDesign} style={{ background: `${label.color}` }}>
        {label.name}
      </div>
    ),
  }));

  console.log(labelsN);

  return (
    <Dropdown
      placeholder={
        labelsN.selectedLabel
          ? labelsN.map(label =>
              label.selected.id === project.id ? (
                <div
                  className={labelDesign}
                  style={{ background: `${label.selected.color}` }}
                >
                  {label.selected.name}
                </div>
              ) : (
                ''
              )
            )
          : 'Select Label'
      }
      options={labelsN}
    />
  );
};

export default LabelDropdown;
