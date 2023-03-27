export default function Layout({children}) {
    return(
        <div className="container">
            <header>
                <h1>Filmside</h1>
                <nav>
                    
                </nav>
            </header>
                <main>
                    {children}
                </main>
        </div>
    )
}