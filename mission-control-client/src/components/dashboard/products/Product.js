import React, { useState, useCallback } from "react";
import { useMutation } from "urql";
import { updateProduct, deleteProduct } from "../../../mutations";
import { warning } from "../../../utils/warning";

const Product = props => {
  console.log("PROD", props);
  // adding useMutation HOOK which accepts the new mutation and returns the current state of the mutation and an executeMutation function as an array.
  const [updateState, executeUpdateMutation] = useMutation(updateProduct);
  const [DeleteState, executeDeleteMutation] = useMutation(deleteProduct);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const delBtn = useCallback(
    e => {
      const delId = e.target.value;
      warning("");
      executeDeleteMutation({ id: delId });
    },
    [executeDeleteMutation]
  );

  const editBtn = useCallback(
    e => {
      e.persist();
      const editId = e.target.value;
      warning("");
      executeUpdateMutation({ id: editId, name: name });
    },
    [executeUpdateMutation, name, props.active.id]
  );

  return (
    <div
      onClick={() => props.setActiveProduct(props.el)}
      id={
        props.active.id && props.active.id === props.i
          ? "product-active"
          : undefined
      }
      className="product-container"
    >
      <div className="product-description">
        <h3 className="product-title">{props.el.name}</h3>
      </div>
      <div>
        {isEditing ? (
          <div>
            <input type="text" onChange={e => setName(e.target.value)} />
            <button
              value={props.el.id}
              onClick={e => {
                setIsEditing(!isEditing);
                editBtn(e);
              }}
            >
              ✅
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            edit
          </button>
        )}
        {!props.el.projects.length ? (
          <button onClick={delBtn} value={props.el.id}>
            delete
          </button>
        ) : (
          <button
            onClick={() =>
              warning("Products with associated projects cannot be deleted")
            }
            value={props.el.id}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
