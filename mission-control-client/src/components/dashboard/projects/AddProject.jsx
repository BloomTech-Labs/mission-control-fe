import React, { useState, useCallback } from "react";
import { useMutation } from "urql";
<<<<<<< HEAD
import { warning } from "../../../utils/warning";
=======
>>>>>>> c2ff676824229071de9025de5361d35d670b0345
import { addProject } from "../../../mutations";

const AddProject = props => {
  const [name, setName] = useState("");
  const { id } = props.currId;
  // JS adding useMutation HOOK which accepts the new mutation and returns the current state of the mutation and an executeMutation function as an array.
  const [state, executeMutation] = useMutation(addProject);

  const submit = useCallback(() => {
<<<<<<< HEAD
    if(!name){
      warning("Must include a PROJECT value before submitting.");
    }else {
      warning("")
      executeMutation({ name, id });
      setName("");
    }
=======
    setName("");
    executeMutation({ name, id });

>>>>>>> c2ff676824229071de9025de5361d35d670b0345
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
