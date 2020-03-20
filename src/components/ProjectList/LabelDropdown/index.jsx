import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { labelDesign, hiddenDropdown } from './LabelDropdown.module.scss';
import {
  UPDATE_SELECTED_LABEL,
  DISCONNECT_SELECTED_LABEL,
} from '../../Project/Queries/index';
import { useMutation } from 'urql';

const LabelDropdown = ({ labels, project, statusData }) => {
  const [, executeUpdate] = useMutation(UPDATE_SELECTED_LABEL);

  const [, executeDisconnect] = useMutation(DISCONNECT_SELECTED_LABEL);

  const labelsArr = labels.map(label => ({
    key: label.id,
    value: label,
    color: label.color,
    name: label.name,
    text: (
      <div className={labelDesign} style={{ background: `${label.color}` }}>
        {label.name}
      </div>
    ),
  }));

  const handleChange = (e, { value }) => {
    e.preventDefault();
    labels &&
      labels.map(label =>
        executeDisconnect({
          id: label.id,
          selected: project.id,
          columnId: label.status.id,
        })
      );
    executeUpdate({
      id: value.id,
      selected: project.id,
      columnId: value.status.id,
    });
  };

  const UpdatedPlaceholder = labels.map(label => {
    const labelIndex = labels.findIndex(l => l.id === label.id);
    const selectedIndex = label.selected.findIndex(sA => sA.id === project.id);
    return labels &&
      selectedIndex !== -1 &&
      labels[labelIndex].selected[selectedIndex].id === project.id ? (
      <div
        key={label.id}
        className={labelDesign}
        style={{ background: `${label.color}` }}
      >
        {label.name}
      </div>
    ) : (
      ''
    );
  });

  const pH = UpdatedPlaceholder.filter(phArr => phArr !== '');

  const newPh = pH[0] ? pH[0] : 'Select Label';
  if (statusData.display === true) {
    return (
      <Dropdown
        onChange={handleChange}
        placeholder={labels.length < 1 ? 'No Labels' : newPh}
        options={labelsArr}
      />
    );
  } else {
    return <div className={hiddenDropdown} />;
  }
};

export default LabelDropdown;
