import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { FeedbackForm } from '@/components/FeedbackForm';
import { Footer } from '@/components/Footer';

export function App() {
  return (
    <div className="bg-[#F0F2F5]">
      <Header />
      <main>
        <Hero />
        <div className="flex justify-center min-h-[68px] w-full mt-[72px] py-4 max-md:max-w-full max-md:mt-10">
          <img src="src/assets/MessageSvg.svg" class="h-6 w-auto" alt="Message icon" />
        </div>
        <About />
        <Features />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
};
