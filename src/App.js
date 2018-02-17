import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

const ads = {
  "ads": [
    {
      "id": 1,
      "remote_id": "123",
      "name": "123",
      "status": "ACTIVE",
    },
    {
      "id": 2,
      "remote_id": "456",
      "name": "456",
      "status": "ACTIVE",
    },
    {
      "id": 3,
      "remote_id": "789",
      "name": "789",
      "status": "ACTIVE",
    },
    {
      "id": 4,
      "remote_id": "901",
      "name": "901",
      "status": "ACTIVE",
    },
  ]
}

const ads_metric = {
 "column_names": [
      "impressions",
      "reach",
      "frequency",
      "cpm",
      "spend",
      "ctr",
      "cost_per_inline_link_click",
      "actions:goal",
      "actions:link_click",
      "cost_per_action_type:cost_per_goal",
      "actions:offsite_conversion"
    ],
 "rows": [
       {
        "remote_id": "456",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 456
      },
      {
        "remote_id": "123",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 123
      },
      {
        "remote_id": "789",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 789
      },
      {
        "remote_id": "901",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 901
      }
    ]

}

ads_metric.rows.sort(function(a, b){
  return a.remote_id > b.remote_id;
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table
          rowHeight={50}
          rowsCount={ads.ads.length}
          width={1000}
          height={200}
          headerHeight={50}>
          <Column
            columnKey = "remote_id"
            header={<Cell>remote_id</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {ads.ads[rowIndex].remote_id}
              </Cell>
            )}
            width={500}
            fixed={true}
          />
          {ads_metric.column_names.map(function(columnName, index){
            return(
            <Column
            header={<Cell>{columnName}</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {ads_metric.rows[rowIndex][columnName]}
              </Cell>
            )}
            width={500}
          />)
          })}
        </Table>
      </div>
    );
  }
}

export default App;
