import './index.css';
import { Footer, Header } from './components';
import { Community, Contact, Content, Home, SpecialEvent } from './sections';
import Social from './components/social/Social';

const App = () => {
  return (
    <main>
      <Header />
      <section>
        <Home />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Community />
      </section>
      <section>
        <SpecialEvent />
      </section>
      <section>
        <Content />
      </section>
      <section>
        <Footer />
      </section>
      <Social />
    </main>
  );
};

export default App;
