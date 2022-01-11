import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="ds-nav-container">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/devsuperior">
                        <div className="ds-contact-container">
                            <GithubIcon />
                            <p className="ds-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;