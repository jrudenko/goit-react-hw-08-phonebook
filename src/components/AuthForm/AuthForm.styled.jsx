import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: var(--primaryTextColor);

  
  &:not(:last-child){
   margin-right: 12px;
  }
  transition: all 0.5s ease;
  text-shadow: 2px 2px 4px blue;
  &.active {
    color: var(--secondaryTextColor);
  }
`;
