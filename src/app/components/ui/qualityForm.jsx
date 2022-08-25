import React from 'react';
import SelectField from '../common/form/selectField';
import TextField from '../common/form/textField';
import colors from '../../constants/colors.json';
import useForm from '../../hooks/useForm';

const QualityForm = ({ data, onSubmit }) => {
  const { form, handeleSubmit, handleChange } = useForm(data, onSubmit);

  return (
    <form onSubmit={handeleSubmit}>
      <TextField
        label="Назва"
        name="name"
        onChange={handleChange}
        value={form.name || ''}
      />
      <SelectField
        label="Колір"
        name="color"
        options={colors}
        onChange={handleChange}
        value={form.color || ''}
      />
      <button className="btn btn-primary">Підтвердити</button>
    </form>
  );
};

export default QualityForm;
