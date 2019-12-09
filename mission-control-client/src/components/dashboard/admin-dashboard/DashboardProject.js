import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { setActiveProject } from "../../../actions/activeProductActions";
import { removeProject } from "../../../actions/productActions";
import { useHistory } from "react-router-dom";
import { warning } from "../../../utils/warning";
import { useMutation } from "urql";
import { deleteProject, updateProject } from "../../../mutations";

const DashboardProject = props => {
  // console.log("props",props)

  const history = useHistory();

  const handleClick = () => {
    props.setActiveProject(props.el.id);
    history.push(`/admin/dashboard/${props.el.id}`);
    console.log("props.el", props.el.id);
  };

  // const [updateState, executeUpdateMutation] = useMutation(updateProject);
  const [DeleteState, executeDeleteMutation] = useMutation(deleteProject);
  const [update, executeUpdateMutation] = useMutation(updateProject);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const delBtn = useCallback(
    e => {
      const delId = e.target.value;
      warning("");
      executeDeleteMutation({ id: delId }).then(res => {
        // console.log("ERR?", res);
        if (res.data.deleteProject) {
          // props.removeProject(res.data.deleteProject, "OK");
        } else {
          warning("Projects with assigned roles cannot be deleted");
          // props.removeProject(res.error.message, "ERR");
        }
      });
    },
    [executeDeleteMutation]
  );

  const editBtn = useCallback(() => {
    warning("");
    executeUpdateMutation({
      name: name,
      productId: props.activeProductStore.active.id,
      projectId: props.el.id
    }).then(res => {
      console.log(res);
    });
  }, [
    executeUpdateMutation,
    name,
    props.activeProductStore.active.id,
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
            <button onClick={delBtn} value={props.el.id}>
              Delete
            </button>
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

export default connect(mapStateToProps, { setActiveProject, removeProject })(
  DashboardProject
);
