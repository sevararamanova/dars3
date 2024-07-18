import React, { useEffect } from 'react';
import { Table, Button, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { addRecipeToMealPlan } from '../../redux/mealPlan/MealPlanSlice';


const RecipesTable = ({ recipes }) => {
  const dispatch = useDispatch();
  const mealPlan = useSelector((state) => state.mealPlan.items);

  const isRecipeInMealPlan = (recipe) => {
    return mealPlan.some((item) => item.id === recipe.id);
  };

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
        !isRecipeInMealPlan(record) && (
          <Button
            type="primary"
            onClick={() => dispatch(addRecipeToMealPlan(record))}
          >
            Add to Meal Plan
          </Button>
        )
      ),
    },
  ];

  return <Table dataSource={recipes} columns={columns} rowKey="id" />;
};

export default RecipesTable;
