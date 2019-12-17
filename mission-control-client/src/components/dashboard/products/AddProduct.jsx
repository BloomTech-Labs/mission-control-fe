import React, { useState, useCallback } from "react";
import { useMutation } from "urql";
import { warning } from "../../../utils/warning";
import { createProduct } from "../../../mutations";

// Component - CreateProduct
const CreateProduct = () => {
  const [name, setName] = useState("");

  // adding useMutation HOOK which accepts the new mutation and returns the current state of the mutation and an executeMutation function as an array.
  const [state, executeMutation] = useMutation(createProduct);

  const submit = useCallback(() => {
    if(!name){
      warning("Must include a product value before submitting.");
    } else {
      warning("")
      executeMutation({ name });
      setName("");
    }  
  }, [executeMutation, name]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
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

export default CreateProduct
