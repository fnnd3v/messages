import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.border.radius};
  overflow: hidden;
  align-items: center;
`;

export const MessagesWrapper = styled.ul`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5px;
  overflow-y: scroll;
`;

export const EmptyP = styled.p`
  margin: 40px auto;
  color: ${({ theme }) => theme.colors.messagePanel};
`;
