import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { HeroCanvas } from "@/components/home/HeroCanvas";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      {/* Site-wide animated background — same molecule canvas as the hero, at low opacity */}
      <HeroCanvas className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-25" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}
