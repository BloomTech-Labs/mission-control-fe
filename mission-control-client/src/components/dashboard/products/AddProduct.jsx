import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { useMutation } from "urql";

import { addProduct } from "../../../actions/productActions";
import { createProduct } from "../../../mutations";

const CreateProduct = props => {
  const [name, setName] = useState("");

  // adding useMutation HOOK which accepts the new mutation and returns the current state of the mutation and an executeMutation function as an array.
  const [state, executeMutation] = useMutation(createProduct);

  const submit = useCallback(() => {
    executeMutation({ name })
      .then(res => {
        // console.log(res.data.createProduct);
        props.addProduct(res.data.createProduct);
      })
      .catch(err => {
        console.log(err);
      });
  }, [executeMutation, name]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="name of product"
        />
      </div>
      <button disabled={state.fetching} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  };
};

export default connect(mapStateToProps, { addProduct })(CreateProduct);
