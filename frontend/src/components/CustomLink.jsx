import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}

export default CustomLink;
