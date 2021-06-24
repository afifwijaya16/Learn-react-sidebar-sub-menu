import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { Link } from "react-router-dom";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  &:hover {
    color: #c0392b;
  }
`;

const Sidebar = () => {
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Sidebar;
