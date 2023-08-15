import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>OTH.city: Be O+Hentic</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <Header title="Welcome to OTH.city: Be O+Hentic" />
      {/* Other Sections will come here */}
    </div>
  )
}
<main>
  <section className="intro">
    <h1>Be O+Hentic</h1>
    <p>Explore the authenticity in being yourself, uniting your worlds, and keeping your true self whether publicly or anonymously.</p>
    <img src="/images/intro-image.jpg" alt="Introduction Image" />
  </section>
  {/* More sections to come */}
</main>
<section className="authenticity">
  <div className="content">
    <h2>Authenticity: Embrace Your True Self</h2>
    <p>Being authentic is about embracing who you are and expressing yourself freely. It's a journey to understanding, acceptance, and love.</p>
    <a href="#learn-more">Learn more</a>
  </div>
  <img src="/images/authenticity-image.jpg" alt="Authenticity" />
</section>
<section className="unite-worlds">
  <h2>Unite Your Worlds: One Identity</h2>
  <p>In every sphere of life, whether personal, professional, or social, being the same person is liberating. Unite your worlds with OTH.city.</p>
  <div className="socials">
    <a href="https://www.facebook.com">Facebook</a>
    <a href="https://www.twitter.com">Twitter</a>
    <a href="https://www.twitch.tv">Twitch</a>
    {/* Add more as needed */}
  </div>
  <img src="/images/unite-worlds-image.jpg" alt="Unite Worlds" />
</section>
<section className="anonymity">
  <h2>Anonymity & Authorization: Be O+Hentic, Your Way</h2>
  <p>Whether you want to be open about your identity or prefer to remain anonymous, OTH.city supports your choice. Be yourself without fear or judgment.</p>
  <img src="/images/anonymity-image.jpg" alt="Anonymity" />
</section>
<section className="key-effect">
  <div className="key-container">
    <span className="key-o">O</span>
    <span className="key-plus">+</span>
    <span className="key-h">H</span>
  </div>
  <p>Unlock your true self with OTH.city. The key to authenticity is within your reach.</p>
</section>
<section className="community-teaser">
  <h2>Join the OTH.city Community</h2>
  <p>A place where you can be yourself. A platform to unite your worlds. A metaverse of authenticity. Coming soon.</p>
  <img src="/images/community-image.jpg" alt="Community" />
</section>
<section className="email-capture">
  <h2>Stay Updated on OTH.city</h2>
  <p>Join our newsletter to stay in the loop on all things OTH.city. Be the first to know about our community launch and more.</p>
  <form action="/subscribe" method="post">
    <input type="email" name="email" placeholder="Enter your email" required />
    <button type="submit">Subscribe</button>
  </form>
</section>
import Footer from '@components/Footer';

// Inside the main function
<Footer>
  <div className="footer-content">
    <p>&copy; 2023 OTH.city - Be O+Hentic</p>
    <a href="/terms">Terms & Conditions</a>
    <a href="/privacy">Privacy Policy</a>
  </div>
</Footer>
