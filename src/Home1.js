// Home1.js
import "./Home1.css";

function Home1() {
  return (
     <div>

            {/* Navbar */}
            <nav className="navbar">
                <a href="/">HOME</a>
            </nav>
    <div className="container">
      <h1 className="title">Welcome
        To Applications Page
      </h1>

      <div className="links">
        <a href="/Software">Software</a>
        <a href="/Medical">Medical</a>
        <a href="/Banking">Banking</a>
        <a href="/Teaching">Teaching</a>
      </div>
    </div>
    </div>
  );
}

export default Home1;