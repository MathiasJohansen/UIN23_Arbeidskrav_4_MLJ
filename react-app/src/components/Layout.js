export default function Layout({children}) {
    return(
        <div className="container">
            <header>
                <h1>Filmside</h1>
                <nav>
                    <form>
                        <input type="text" placeholder="Søk.." name="search"/>
                        <button type="submit">Søk</button>
                    </form>
                </nav>
            </header>
                <main>
                    {children}
                </main>
        </div>
    )
}