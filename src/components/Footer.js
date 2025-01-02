import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-4 mt-4 border-top bg-dark text-light">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        >
          {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2024 Company, Inc
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <Link className="text-body-secondary" to="/">
            <FaTwitter className="fs-3 text-light" />
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-body-secondary" to="/">
            <FaInstagram className="fs-3 text-light" />
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-body-secondary" to="/">
            <FaFacebook className="fs-3 text-light" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
