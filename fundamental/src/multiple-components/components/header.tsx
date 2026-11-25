/**
 * Renders the top site banner and primary navigation links.
 *
 * @returns Semantic `<header>` landmark element.
 */
const Header = () => {
    return (
        <header>
            <h1>Welcome to my Website</h1>
            <nav aria-label="Primary">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header
