import i18n from "@/i18n";
import Header from "./common/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";


const HomePage = () => {
  return (
    <div dir={i18n.language === "fa" ? "rtl" : "ltr"}>
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>
      <main className="my-[60px] px-5 sm:px-10 flex flex-col gap-16">
        <section id="home">
          <Home />
        </section>
        <section id="about" className="text-text-first dark:text-text-second">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certificate">
          <Certificate />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
