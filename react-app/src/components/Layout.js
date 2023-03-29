export default function Layout({children}) {
    return(
        <>
            <header>
                <h1>Filmside</h1>
                
            </header>
        <div className="container">
                <main>
                    {children}
                </main>
        </div>
        </>
    )
}