import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import  Instructor  from "@/components/Instructor";
import NavBar from "@/components/NavBar";
import MusicSchoolTestimonials from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinar";
import { WhyChooseUs } from "@/components/WhyChoodeUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
       <HeroSection />
       <FeaturedCourses />
       <WhyChooseUs />
       <MusicSchoolTestimonials />
       <UpcomingWebinars />
       <Instructor />
       <Footer />
    </main>
  );
}
