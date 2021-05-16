import React from "react";

const CategoryForm = ({ name, handleSubmit, setName, loading }) => {
  return (
    <form className="form create-category-form" onSubmit={handleSubmit}>
      <div className="form__input-container">
        <input
          id="name"
          required
          type="name"
          name="name"
          className="form-input"
          value={name}
          autoFocus
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <span className="form-span"></span>
        <label htmlFor="name" className="form-label">
          Name
        </label>
      </div>
      <button className="form__btn" type="submit" disabled={loading}>
        Save
      </button>
    </form>
  );
};

export default CategoryForm;
