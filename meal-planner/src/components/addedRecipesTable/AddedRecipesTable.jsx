import React from 'react';
import { Table, Button, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { removeRecipeFromMealPlan } from '../../redux/mealPlan/MealPlanSlice';

const AddedRecipesTable = () => {
  const dispatch = useDispatch();
  const mealPlan = useSelector((state) => state.mealPlan);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (text, record) => <Image width={50} src={record.thumbnail} alt={record.name} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          type="danger"
          onClick={() => dispatch(removeRecipeFromMealPlan(record))}
        >
          Remove from Meal Plan
        </Button>
      ),
    },
  ];

  return <Table dataSource={mealPlan} columns={columns} rowKey="id" />;
};

export default AddedRecipesTable;
