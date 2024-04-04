import Header from "../components/Header";
import Footer from "../components/Footer";

const History = () => {
  return (
    <>
      <Header />
      <main className="container">
        <section id="history">
          <h2 className="display-3">History</h2>
          <p className="fs-5 fw-light">
            The Taj Mahal was built 1631 and 1648 and it the result of the
            profound love Emperor Shah Jahan had for his wife Mumtaz
            mahal.Mumtaz mahal died during child birth. It took over 20,000
            workers and artisents to complete this magnificent structure.{" "}
          </p>
          <p className="fs-5 fw-light">
            The Taj Mahal is a testament to the artistry of Mugal architecture
            and has a rich history, inculding surviving wars and natural
            disasters.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default History;
