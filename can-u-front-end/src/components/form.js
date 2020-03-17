import React from "react";
import { Field, reduxForm } from "redux-form";


const TodoForm = props => {
  

  return (
    <>
      <h3>Add Job</h3>
      <form onSubmit={props.handleSubmit}>
        <label>
          <span>Job</span>
          <Field
            name="text"
            component="input"
            placeholder="Add Job"
          />
        </label>
        <label>
          <span>Price</span>
          <Field
            type="number"
            component="input"
            placeholder="Price"
          />
        </label>
        <button>Add Job</button>
      </form>
    </>
  );
};

export default reduxForm({
  form: "job"
})(TodoForm);
