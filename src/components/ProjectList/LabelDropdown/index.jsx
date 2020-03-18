import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { labelDesign } from './LabelDropdown.module.scss';
import { UPDATE_SELECTED_LABEL as updateSelectedLabelMutation } from '../../Project/Queries/index';
import { useMutation } from 'urql';

const LabelDropdown = ({ labels, project }) => {
  const [, executeUpdate] = useMutation(updateSelectedLabelMutation);

  const labelsArr = labels.map(label => ({
    key: label.id,
    value: label.id,
    color: label.color,
    name: label.name,
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

  const handleChange = (e, { value }) => {
    e.preventDefault();
    executeUpdate({ id: value, selected: project.id });
    console.log('value', value);
  };

  console.log('labels', labels);

  return (
    <Dropdown
      onChange={handleChange}
      placeholder={
        labels.length > 0
          ? labels.map(label => {
              const labelIndex = labels.findIndex(l => l.id === label.id);
              const selectedIndex = label.selected.findIndex(
                sA => sA.id === project.id
              );
              // console.log(labelIndex, label);
              // console.log(project.id, project.name);
              // console.log(
              //   labels &&
              //     selectedIndex !== -1 &&
              //     labels[labelIndex].selected[selectedIndex].id
              // );
              console.log(
                'selected array',
                project.id,
                labels &&
                  selectedIndex !== -1 &&
                  labels[labelIndex].selected[selectedIndex].id
              );
              return labels &&
                selectedIndex !== -1 &&
                labels[labelIndex].selected[selectedIndex].id === project.id ? (
                <div
                  className={labelDesign}
                  style={{ background: `${label.color}` }}
                >
                  {label.name}
                </div>
              ) : (
                ''
              );
            })
          : 'Select Label'
      }
      options={labelsArr}
    />
  );
};

export default LabelDropdown;
