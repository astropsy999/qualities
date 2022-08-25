import React from 'react';
import Table from '../common/table';
const QualitiesTable = ({ data, onEdit, onDelete }) => {
  const columns = {
    name: {
      path: 'name',
      name: 'Назва',
    },
    color: {
      path: 'color',
      name: 'Колір',
    },
    edit: {
      component: (quality) => (
        <button onClick={() => onEdit(quality._id)} className="btn btn-success">
          Змінити
        </button>
      ),
    },
    delete: {
      component: (quality) => (
        <button
          onClick={() => onDelete(quality._id)}
          className="btn btn-danger"
        >
          Видалити
        </button>
      ),
    },
  };
  if (data?.length > 0) return <Table columns={columns} data={data} />;
  return null;
};

export default QualitiesTable;
