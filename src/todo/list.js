import React, { Component } from "react";
const List = ({ list = [] }) => {
  console.log(list);
  return (
    <table>
      {list.map((item, i) => (
        <tr>
          <td> {item.title}</td>
          <td>{item.description}</td>
          <td>{item.userId} </td>
        </tr>
      ))}
    </table>
  );
};

export default List;
