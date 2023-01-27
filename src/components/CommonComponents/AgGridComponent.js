import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

function AgGridComponent(props) {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  let gridApi = null;
  let gridColumnApi = null;
  let rowClassRules = null;

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    // sortable: true
    suppressMenu: true,
    suppressMovable: true,
  }));

  const onGridReady = useCallback((params) => {
    gridApi = params.api;
    gridColumnApi = params.columnApi;
    gridApi.setDomLayout('autoHeight');
    gridApi.sizeColumnsToFit(); //끝까지 맞춤

    rowClassRules = {
      "ag-row-nobottom": function (params) {
        return (
          params.node.rowIndex == params.api.rowModel.rowsToDisplay.length - 1
        ); //마지막줄 row bottom 제거
      },
    };

  }, []);

  function onSelectionChanged() {
    const selectedRows = gridApi.getSelectedRows();
    console.log(selectedRows);
  }

  return (
    <AgGridReact
      className={props.className}
      ref={gridRef} // Ref for accessing Grid's API
      rowData={props.rowData} // Row Data for Rows
      columnDefs={props.columnDefs} // Column Defs for Columns
      defaultColDef={defaultColDef} // Default Column Properties
      onGridReady={onGridReady}
      rowClassRules={rowClassRules}
      onSelectionChanged={onSelectionChanged}

    />
  );
}
AgGridComponent.defaultProps = {
  className: "ag-grid",
  rowData: null,
  columnDefs: null,
}
export default AgGridComponent;