import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Logo from "./components/Logo/Logo";
import Section from "./components/Section/Section";
import Card from "./components/card/Card";
import myCardList from "./components/card/cardData";
import SectionHeader from "./components/sectionheader/SectionHeader";
import ProjectsHeader from "./components/ProjectsHeader/ProjectsHeader";
import projectData from "./components/projects/ProjectData";
import Project from "./components/projects/Project";
import BannerContent from "./components/BannerContent/BannerContent";
import SectionQuote from "./components/Sectionquote/SectionQuote";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectButton from "./components/projects/ProjectButton";
import "bootstrap/dist/css/bootstrap.min.css";

function createCard(val) {
  return (
    <Card
      id={val.id}
      icon={val.icon}
      key={val.id}
      name={val.name}
      details={val.details}
      info={val.info}
    />
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner />
      <Logo />
      <Section />
      <SectionHeader />
      <div id="card" className="d-flex justify-content-center  container-fixed">
        {myCardList.map(createCard)}
      </div>
      <ProjectsHeader />
      <div style={{ backgroundColor: "#f1f1f1" }}>
        <div
          id="card"
          className="d-flex justify-content-center  container-fixed"
        >
          {projectData.map((list) => (
            <Project list={list} />
          ))}
        </div>
      </div>
      <ProjectButton />
      <BannerContent />
      <SectionQuote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
