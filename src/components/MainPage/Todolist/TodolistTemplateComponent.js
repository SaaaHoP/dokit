import React from 'react';
import { TodoTemplate } from '../StyledComponent';

const TodolistTemplateComponent = ({ children }) => {
  return (
    <>
      <TodoTemplate>{children}</TodoTemplate>
    </>
  );
};

export default TodolistTemplateComponent;
