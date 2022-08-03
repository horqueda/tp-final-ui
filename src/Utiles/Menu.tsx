export default function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TIENDA STORE</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/remeras">
                                Remeras
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/camperas">
                                Camperas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/zapatillas">
                                Zapatillas
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}