import { Link } from "react-router-dom";

export const BreadCrums = ({ pathnames }) => {
    // const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <ul className='d-flex list-unstyled gap-2 mt-3'>
            <li><Link className='text-decoration-none' to="/" style={{ color: "gray" }}>Dashboard</Link></li>
            &gt;
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                    <li key={routeTo}>
                        {isLast ? (
                            <span className="text-dark ">{name}</span>
                        ) : (
                            <Link to={routeTo}>{name}</Link>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}