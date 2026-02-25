import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Timeline from "@/components/Timeline";
import Banner from "@/components/Banner";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useServices, useTeamMembers, useProjects } from "@/hooks/use-site-data";

const Index = () => {
  const { data: services, isLoading: servicesLoading } = useServices();
  const { data: teamMembers, isLoading: teamLoading } = useTeamMembers();
  const { data: projects, isLoading: projectsLoading } = useProjects();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Services services={services} loading={servicesLoading} />
      <AboutUs />
      <Timeline />
      <Banner />
      <Team members={teamMembers} loading={teamLoading} />
      <Projects projects={projects} loading={projectsLoading} />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
