import "./Home1.css";
export default function AdminHome(){
     return (

      <div>
         {/* Navbar */}
            <nav className="navbar">
              <a href="/">Home</a>
              <a href="/Fetch">UserDetails</a>

            </nav>
           
    <div className="container">
      <h1 className="title">Welcome
        To Applications Page
      </h1>

      <div className="links">
        <a href="/SoftwareData">Software Applications</a>
        <a href="/MedicalData">Medical Applications</a>
        <a href="/BankingData">Banking Applications</a>
        <a href="/TeachingData">Teaching Applications</a>
      </div>
    </div>
    </div>
  );
}