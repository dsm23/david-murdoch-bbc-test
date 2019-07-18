import React, { FunctionComponent } from 'react';

interface Props {
  component: string;
  items: string[];
}

const List: FunctionComponent<Props> = ({ component: Component, items }) => (
  <Component>
    {items.map(listItem => (
      <li key={listItem}>{listItem}</li>
    ))}
  </Component>
);

export default List;
