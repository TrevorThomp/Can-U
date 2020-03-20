import React from "react";
import { Field, reduxForm } from "redux-form";
import useForm from '../../hooks/';
import './form.scss';

/**
 * Component to render form to add a new job
 * @param {*} props 
 */
const TodoForm = props => {
  const { handleChange, handleSubmit } = useForm(props.handleSubmit);
  return (
    <>
    <div id="formDiv">
      <h3>Add a Job</h3>
      <form className="jobForm" onChange={handleChange} onSubmit={handleSubmit}>
        <label>
          <span>Job</span>
          <Field
            name="name"
            component="input"
            placeholder="Add Job"
          />
        </label>
        <label>
          <span>Price</span>
          <Field
            name="price"
            type="number"
            component="input"
            placeholder="Price"
          />
        </label>
        <label>
          <span>Description</span>
          <Field 
          name='description'
          type='textarea'
          component='input'
          />
        </label>
        <button id="addJobButton">Add Job</button>
      </form>
      </div>
    </>
  );
};

export default reduxForm({
  form: "jobs"
})(TodoForm);
