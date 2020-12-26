import styled from 'styled-components'
import { TableCell as TableCellComponent, TableSortLabel as TableSortLabelComponent } from "@material-ui/core";

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  padding-left: 5px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

export const TheConeMasterDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  text-align: center;
  justify-content: center;
  border-radius: 4px;
  h5 {
    width: 100%;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }
  div{
    padding: 20px 0px;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

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