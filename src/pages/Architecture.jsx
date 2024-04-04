import Header from "../components/Header";
import Footer from "../components/Footer";

const Architecture = () => {
  return (
    <>
      <Header />
      <main className="container">
        <section id="architecture">
          <h2 className="display-3">Architecture</h2>
          <p className="fs-5 fw-light">
            The Taj Mahal is the remarkable blend of various architectural style
            inculing Mugal, Persian and Indian. It is made with white marble
            which was brought from diffrent oarts from India and central Asia{" "}
          </p>
          <p className="fs-5 fw-light">
            The mausoleam is known for its symmetrical design, intricate
            carvings and the iconic central dome. the surroundings garden and
            yamuna river add to its beauty, making it a masterpiece of Islamic
            architecture.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Architecture;
