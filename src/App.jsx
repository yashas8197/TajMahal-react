import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-3">
        <h1 className="display-4">Overview</h1>
        <img
          className="img-fluid rounded"
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <section className="py-3  ">
          <p className="fs-5 fw-light">
            The Taj Mahal is a stunning marble mausoleum in Agra, India. It was
            built in the 17th century by the Mughal emperor Shah Jahan in memory
            of his wife Mumtaz Mahal.The Taj Mahal is considered to be one of
            the most beautiful buildings in the world and is a UNESCO World
            Heritage Site.
          </p>
          <p className="fs-5 fw-light">
            The Taj Mahal was built 1631 and 1648 and it the result of the
            profound love Emperor Shah Jahan had for his wife Mumtaz mahal.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
