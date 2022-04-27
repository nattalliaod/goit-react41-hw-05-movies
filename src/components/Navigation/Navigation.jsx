import { NavPanel, NavList, NavItem, Link } from "./Navigation.styled";

export const Navigation = () => (
  <NavPanel>
    <NavList>
      <NavItem>
        <Link
          to="/"
        >
          Home
        </Link>
      </NavItem>

      <NavItem>
        <Link
          to="/movies"
        >
          Movies
        </Link>
      </NavItem>
    </NavList>
  </NavPanel>
);