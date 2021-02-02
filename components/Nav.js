import Link from 'next/link'

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/example'>Example</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>
    </nav>
)

export default Nav