import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WHITEPAPER_SECTIONS } from './constants';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(WHITEPAPER_SECTIONS[0]?.id || '');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleScrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setIsSidebarOpen(false); // Close sidebar on navigation
  };

  const handleObserver = useCallback<IntersectionObserverCallback>((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const visibleTop = Math.max(0, entry.boundingClientRect.top);
          const visibleBottom = Math.min(window.innerHeight, entry.boundingClientRect.bottom);
          const visibleHeight = visibleBottom - visibleTop;
          
          if(visibleHeight / entry.boundingClientRect.height > 0.4) { // Only set as active if >40% visible
             setActiveSection(entry.target.id);
          }
        }
      });
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-20% 0px -80% 0px', // Trigger when a section is in the middle 20% of the viewport
      threshold: 0,
    });

    const currentRefs = Object.values(sectionRefs.current);
    currentRefs.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [handleObserver]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  // Effect for "Back to Top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans flex">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
      <Sidebar 
        sections={WHITEPAPER_SECTIONS} 
        activeSection={activeSection}
        onNavigate={handleScrollToSection}
        isOpen={isSidebarOpen}
      />
      <div className="flex-1 lg:ml-72 xl:ml-80">
        <Header 
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="p-6 md:p-10 lg:p-16 max-w-4xl mx-auto">
          {WHITEPAPER_SECTIONS.map((section) => (
            <ContentSection
              key={section.id}
              id={section.id}
              ref={(el: HTMLElement | null) => {
                sectionRefs.current[section.id] = el;
              }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-6 border-b border-slate-700 pb-4">
                {section.title}
              </h2>
              <div className="text-lg leading-relaxed text-slate-300 prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-slate-100 prose-strong:text-slate-200">
                 {section.content}
              </div>
            </ContentSection>
          ))}
          <Footer />
        </main>
      </div>
       <BackToTopButton isVisible={showBackToTop} onClick={scrollToTop} />
    </div>
  );
};

export default App;