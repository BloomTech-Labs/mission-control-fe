import React, { useState, useCallback } from "react";
import { useMutation } from "urql";
import { warning } from "../../../utils/warning";
import { addProject } from "../../../mutations";

const AddProject = props => {
  const [name, setName] = useState("");
  const { id } = props.currId;
  // JS adding useMutation HOOK which accepts the new mutation and returns the current state of the mutation and an executeMutation function as an array.
  const [state, executeMutation] = useMutation(addProject);

  const submit = useCallback(() => {
    if(!name){
      warning("Must include a PROJECT value before submitting.");
    }else {
      warning("")
      executeMutation({ name, id });
      setName("");
    }
  }, [executeMutation, name, id]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="name of project"
        />
      </div>
      <button disabled={state.fetching} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default AddProject;
