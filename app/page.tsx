import Header from "./common/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const HomePage = () => {
  return (
    <div>
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>
      <main className="mt-[60px]">
        <section id="home">
          <Home />
        </section>
        <section id="about" className="text-text-first dark:text-text-second">
          <About  />
        </section>
        <section id="skills">
          <Projects />
        </section>
        <section id="projects">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
