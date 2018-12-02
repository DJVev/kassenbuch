import styled from '@emotion/styled';

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  align-items: center;
  padding: 0 16px;
`;

export const Logo = styled.img`
  display: block;
  height: 40px;
  width: 40px;
  margin-right: 16px;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
