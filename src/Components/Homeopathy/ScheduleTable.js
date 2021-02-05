import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class ScheduleTable extends Component {
  render() {
    return (
      <div>
      <Table className="bordered table-style">
        <thead style={{backgroundColor: "rgb(87, 145, 95)"}}>
          <tr style={{fontWeight: "bolder", fontSize: "18px"}}>
            <th>Class Name</th>
            <th>Start Date</th>
            <th>Available Spots</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Homeopathy</td>
            <td>02/14/2021</td>
            <td>9/10</td>
            <td>$10</td>
          </tr>
          <tr>
            <td>Homeopathy</td>
            <td>02/25/2021</td>
            <td>4/10</td>
            <td>$10</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}
