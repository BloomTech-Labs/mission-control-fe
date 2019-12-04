import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { useMutation } from "urql";
import { editProduct, removeProduct } from "../../../actions/productActions";
import { updateProduct, deleteProduct } from "../../../mutations";

const Product = props => {
  const programs = ["web", "ux/ui", "ds"];

  // adding useMutation HOOK which accepts the new mutation and returns the current state of the mutation and an executeMutation function as an array.
  const [updateState, executeUpdateMutation] = useMutation(updateProduct);
  const [DeleteState, executeDeleteMutation] = useMutation(deleteProduct);

  const delBtn = useCallback(
    e => {
      const delId = e.target.value;
      executeDeleteMutation({ id: delId })
        .then(res => {
          // console.log("ERR?", res);
          if (res.data.deleteProduct) {
            props.removeProduct(res.data.deleteProduct, "OK");
          } else {
            props.removeProduct(res.error.message, "ERR");
          }
        })
        .catch(err => {
          // console.log("DelERR", err);
        });
    },
    [executeDeleteMutation]
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
        <button onClick={() => alert("CLICK!")}>edit</button>
        <button onClick={delBtn} value={props.el.id}>
          delete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, { editProduct, removeProduct })(
  Product
);
