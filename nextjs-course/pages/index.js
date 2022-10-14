import Link from "next/Link";

function HomePage() {
  return (
    <div>
      <h1>The Home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfoliio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
