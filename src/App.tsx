import {
  Contact,
  Experience,
  GlobalReach,
  Hero,
  Metrics,
  Overview,
  Principles,
  // SiteFooter,
  SiteNav,
  Skills,
} from './components/sections';
import { SkipLink } from './components/ui';

function App() {
  return (
    <>
      <SkipLink />
      <header className="sticky top-0 z-50">
        <SiteNav />
      </header>
      <main id="main">
        <Hero />
        <Overview />
        <Principles />
        <Metrics />
        <Experience />
        <Skills />
        <GlobalReach />
        <Contact />
      </main>
      {/* <SiteFooter /> */}
    </>
  );
}

export default App;
