import styled from 'styled-components';

export const Container = styled.div<{ dark?: boolean; isOpen?: boolean }>`
  position: absolute;
  width: ${(props) => (props.isOpen ? '200px' : '50px')};
  height: 100%;
  transition: all 0.15s;
  /* width: 200px; */
  /* background: #293742; */
  /* background: ${(props) => (props.dark ? '#293742' : '#f4f8fb')}; */
`;

export const Title = styled.div<{ dark?: boolean; isOpen?: boolean }>`
  /* display: ${(props) => (props.isOpen ? 'flex' : 'none')}; */
  text-align: end;
  transition: all 0.15s;
  display: flex;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  border-bottom: 1px solid #d1d5d8;
  background: ${(props) => (props.dark ? '#293742' : '#f4f8fb')};
`;

export const TitleText = styled.a<{ isOpen?: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  margin: 0;
  transition: all 0.1s;
`;

export const Body = styled.div<{ dark?: boolean; isOpen?: boolean }>`
  /* display: ${(props) => (props.isOpen ? 'flex' : 'none')}; */
  width: ${(props) => (props.isOpen ? '200px' : '0')};
  transition: all 0.15s;
  height: calc(100% - 50px);
  background: ${(props) => (props.dark ? '#293742' : '#f4f8fb')};
`;

export const Page = styled.button<any>`
	:hover {
		cursor: pointer;
    background: #1890ff;
	}
  align-items: center;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  margin: 0;
  border: none;
  padding: 10px;
  width: ${(props) => (props.isOpen ? '100%' : '0')};
  height: 40px;
  background: ${(props) => (props.dark ? '#293742' : '#f4f8fb')};
  transition: all 0.1s;
`;
