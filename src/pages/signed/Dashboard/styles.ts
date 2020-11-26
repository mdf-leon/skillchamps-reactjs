import styled from 'styled-components'
import { TableCell as TableCellComponent, TableSortLabel as TableSortLabelComponent } from "@material-ui/core";


export const TableCell = styled(TableCellComponent)`
  overflow: hidden;
  padding: 16px 20px;
`;

export const TableSortLabel = styled(TableSortLabelComponent)`
  vertical-align: unset;
  th  {
    overflow: hidden !important;
  }
  svg {
    position: absolute;
    right: -23px;
  }
`;