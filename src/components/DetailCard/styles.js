import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  height: 100%;
  background-color: ${(props) =>
    props.isGray ? props.theme.colors.lightShades : 'white'};
  padding: 20px;
  padding-left: ${(props) => (props.noLeftPadding ? '0px' : '')};
  border-radius: 4px;
  > div:not(:first-child) {
    margin-top: 20px;
  }
`;
Card.displayName = 'Card';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > :last-child,
  > :last-child input {
    text-align: right;
  }
`;
Row.displayName = 'Row';

export const Item = styled.div``;
Item.displayName = 'Item';
