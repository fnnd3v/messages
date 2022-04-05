import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.border.radius};
  align-items: center;
  justify-content: space-between;
`;

export const MessagesWrapper = styled.ul`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow-y: scroll;
`;

export const EmptyP = styled.p`
  margin: 40px auto;
  color: ${({ theme }) => theme.colors.messagePanel};
`;
