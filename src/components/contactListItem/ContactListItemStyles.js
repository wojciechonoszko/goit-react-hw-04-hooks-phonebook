import styled from 'styled-components';

export const ContactListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;
  list-style: none;
  .contactListItemText {
    display: inline-block;
    margin-right: 10px;
    font-size: 18px;
  }
`;

export const ContactListCnt = styled.ul`
  padding: 0px;
`;