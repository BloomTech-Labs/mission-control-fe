import React, { useState, useCallback, useContext } from "react";
import { connect } from "react-redux";
import { setActiveProject } from "../../../actions/activeProjectActions";
import { useHistory } from "react-router-dom";
import { warning } from "../../../utils/warning";
import { useMutation } from "urql";
import { deleteProject, updateProject } from "../../../mutations";
// Context
import {ProductContext} from '../../../context/ProductContext'

const DashboardProject = props => {
  // Context
  const { productState } = useContext(ProductContext)

  let allowDelete = true;
  if (props.projects) {
    props.projects.projectRoles.forEach(role => {
      if (role.project.id === props.el.id) {
        allowDelete = false;
      }
    });
  }

  const history = useHistory();

  // references setting active project on second div tag of return below
  const handleClick = () => {
    props.setActiveProject(props.el.id);
    history.push(`/admin/dashboard/${props.el.id}`);
  };

  const [DeleteState, executeDeleteMutation] = useMutation(deleteProject);
  const [update, executeUpdateMutation] = useMutation(updateProject);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const noDelBtn = () =>
    warning("Projects with assigned roles cannot be deleted");

  const delBtn = useCallback(
    e => {
      const delId = e.target.value;

      warning("");
      executeDeleteMutation({ id: delId }).then(res => {
        if (!res.data.deleteProject)
          warning("Projects with assigned roles cannot be deleted");
      });
    },
    [executeDeleteMutation]
  );

  const editBtn = useCallback(() => {
    warning("");
    executeUpdateMutation({
      name: name,
      productId: productState.active.id,
      projectId: props.el.id
    });
  }, [
    executeUpdateMutation,
    name,
    productState.active.id,
    props.el.id
  ]);
  return (
    <>
      <div className="admin-dashboard-project">
        <div onClick={handleClick} className="admin-dashboard-project-names">
          <p className="admin-dashboard-project-name">{props.product.name}</p>
          <p>{props.el.name.toUpperCase()}</p>
        </div>
        {new Date(props.el.end) > new Date() ? (
          <p className="admin-project-in-progress">In Progress</p>
        ) : (
          <p className="admin-project-completed">Completed</p>
        )}
        {isEditing ? (
          <>
            <input
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Input name change..."
            />
            <button
              onClick={() => {
                setIsEditing(!isEditing);
                editBtn();
              }}
              value={props.el.id}
            >
              ✅
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
              value={props.el.id}
            >
              Edit
            </button>
            {allowDelete ? (
              <button onClick={delBtn} value={props.el.id}>
                Delete
              </button>
            ) : (
              <button onClick={noDelBtn} value={props.el.id}>
                Delete
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  };
};

export default connect((mapStateToProps), {
  setActiveProject
})(DashboardProject);
