import styled from 'styled-components';

export const Container = styled.div<{ dark?: boolean; isOpen?: boolean }>`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.isOpen ? '100%' : '50px')};
  transition: width 0.15s;
`;

export const Title = styled.div<{ dark?: boolean; isOpen?: boolean }>`
  /* display: ${(props) => (props.isOpen ? 'flex' : 'none')}; */
  text-align: center;
  transition: all 0.15s;
  display: flex;
  margin: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid #d1d5d8;
  background: ${(props) => (props.dark ? '#293742' : '#f4f8fb')};
`;

export const TitleContainer = styled.div<{ dark?: boolean; isOpen?: boolean }>`
  /* display: ${(props) => (props.isOpen ? 'flex' : 'none')}; */
  text-align: center;
  transition: all 0.15s;
  display: flex;
  padding: 0 15px;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
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
  height: calc(100% - 51px);
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
  /* padding: 10px; */
  width: ${(props) => (props.isOpen ? '100%' : '0')};
  height: 40px;
  background: ${(props) => (props.dark ? '#293742' : '#f4f8fb')};
  transition: all 0.1s;
`;
