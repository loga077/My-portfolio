import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import SoftSkills from "@/components/SoftSkills";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import Internship from "@/components/InternshipsSection";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-foreground">
      
      {/* 🌌 Global Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src="/videos/site-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🎥 Global Overlay (for readability) */}
      <div className="fixed inset-0 bg-black/60 -z-10" />

      {/* 🌐 Content */}
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SoftSkills />
        <ProjectsSection />
        <Internship />
        <LeadershipSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Index;
