import HeroScrollCue from './components/HeroScrollCue'
import TickerSection from './components/TickerSection'

export default function Home() {
  return (
    <>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-line" />
        <div className="hero-content">
          <h1 className="hero-title animate-fade-up">
            We make exceptional brands<br />
            impossible to <em>overlook</em>.
          </h1>
          <div className="animate-fade-up delay-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="/apply" className="btn-primary">Apply to Work Together</a>
          </div>
        </div>
        <HeroScrollCue target="#quote" />
      </section>

      {/* Hero Quote — Adam Leipzig */}
      <section id="quote" className="hero-quote-section">
        <div className="hero-quote-inner">
          <span className="hero-quote-mark">&ldquo;</span>
          <blockquote className="hero-quote-text">
            <em>I&rsquo;ve worked with 10 companies like yours and nobody does it better. You are<br /><span className="hero-quote-gold">the best I have ever seen.</span></em>
          </blockquote>
          <div className="hero-quote-attribution">
            <span className="hero-quote-dash">—</span>
            <div>
              <p className="hero-quote-name">Adam Leipzig</p>
              <p className="hero-quote-title">
                <span className="hero-quote-credential">Hollywood Producer</span>
                <span className="hero-quote-dot"> · </span>
                <span className="hero-quote-credential">Former President, National Geographic Films</span>
                <span className="hero-quote-dot"> · </span>
                <span className="hero-quote-credential">Former SVP, Walt Disney Studios</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker — Trusted By */}
      <TickerSection />

      {/* Who We Work With */}
      <section className="who-section" style={{ padding: '160px 60px' }}>
        <div className="who-inner">
          <p className="section-label">Who We Work With</p>
          <h2 className="who-headline">
            You&rsquo;re already the best at what you do.
          </h2>
          <p className="who-sub">The market just doesn&rsquo;t know it yet.</p>
          <p className="who-body">
            You&rsquo;ve learned the hard way that &ldquo;build it and they will come&rdquo; is a myth.
            Excellence is the entry fee, not the growth engine. The businesses that lead their
            industries aren&rsquo;t always the most talented. They&rsquo;re the ones the market knows <strong>best.</strong>
          </p>
          <p className="who-emphasis">Their visibility is their authority.</p>
          <p className="who-body">
            The most respected names in any industry got there on more than skill. They built
            the brand, the authority, and the growth engine that made their reputation impossible to ignore.
          </p>
          <p className="who-cta">
            We work with esteemed founders and category leaders who are ready to build theirs.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section id="work" className="work-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">What We Do</p>
          <div className="work-grid">
            <a href="/what-we-do/magnetic-content-engine" className="work-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 className="work-title">The Magnetic Content Engine</h3>
              <p className="work-subtitle">Your expertise, amplified.</p>
              <p className="work-desc">
                Our engineering approach to audience growth. We map your audience and design
                a content strategy that serves them, then build the systems that keep your
                brand growing while you focus on your business.
              </p>
            </a>
            <a href="/what-we-do/growth-engine" className="work-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 className="work-title">The Growth Engine</h3>
              <p className="work-subtitle">Your pipeline, on demand.</p>
              <p className="work-desc">
                We map your audience, identify what they&rsquo;re struggling with right now,
                and build the acquisition systems that put qualified prospects on your calendar.
                Every conversation starts with the right person, at the right time, already
                knowing they need what you offer.
              </p>
            </a>
            <a href="/what-we-do/intelligence-engine" className="work-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 className="work-title">The Intelligence Engine</h3>
              <p className="work-subtitle">Your workflows, automated.</p>
              <p className="work-desc">
                Most companies know they need to automate their workflows and processes with AI,
                but have no idea where to begin. We identify the highest impact AI automation
                opportunities in your business and build systems to automate that manual work entirely.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="results-section">
        <div className="results-inner">
          <p className="section-label">Results</p>
          <div className="results-grid">
            <div className="results-stat">
              <span className="results-number">$14.5M</span>
              <span className="results-label">Qualified pipeline. Luxury yachts.</span>
            </div>
            <div className="results-stat">
              <span className="results-number">226K</span>
              <span className="results-label">Audience built from scratch.</span>
            </div>
            <div className="results-stat">
              <span className="results-number">30%</span>
              <span className="results-label">Close rate. $1,000 product.</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Work */}
      <section className="thework-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '56px' }}>
            <p className="section-label" style={{ marginBottom: 0 }}>Our Work</p>
            <a href="/client-success" className="work-see-all">See all work →</a>
          </div>
          <div className="work-grid">
            <a href="/client-success/adam-leipzig" className="work-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="work-engine-label">The Magnetic Content Engine</p>
              <h3 className="work-case-headline">227% audience growth. Hollywood producer.</h3>
              <p className="work-desc">
                A world-class creator with stalled growth and no repeatable system. We rebuilt the strategy from audience
                intelligence up — and tripled his hook retention rate in the process.
              </p>
              <p className="work-client">Adam Leipzig</p>
            </a>
            <div className="work-card">
              <p className="work-engine-label">The Growth Engine</p>
              <h3 className="work-case-headline">$14.5M in qualified pipeline.</h3>
              <p className="work-desc">
                A high-end luxury catamaran brand with no predictable way to bring in new clients.
                We built the full digital acquisition system from scratch.
              </p>
              <p className="work-client">Balance Catamarans</p>
              <a href="/client-success/balance-catamarans" style={{ display: 'inline-block', marginTop: '20px', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>Read case study →</a>
            </div>
            <div className="work-card">
              <p className="work-engine-label">The Magnetic Content Engine</p>
              <h3 className="work-case-headline">185K on TikTok. 25K on YouTube. Built from scratch.</h3>
              <p className="work-desc">
                A men&rsquo;s self-development brand built entirely from content. We identified
                the audience, built the engine, and monetized it.
              </p>
              <p className="work-client">Quit by Healing</p>
              <a href="/client-success/quit-by-healing" style={{ display: 'inline-block', marginTop: '20px', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>Read case study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* What They Say */}
      <section className="testimonials-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">What They Say</p>
          <div className="testimonials-stack">
            <div className="testimonial-pull">
              <p className="testimonial-pull-text">
                &ldquo;Seriously, congrats on this launch — how the hell did you get almost $20K from a stale old list?&rdquo;
              </p>
              <p className="testimonial-pull-author">Shane Melaugh</p>
              <p className="testimonial-pull-role">ikario — Self-Development</p>
            </div>
            <div className="testimonial-pull">
              <p className="testimonial-pull-text">
                &ldquo;I recommend him whole-heartedly. He&rsquo;s done a great job for us and everyone I&rsquo;ve referred him to.&rdquo;
              </p>
              <p className="testimonial-pull-author">Dr. Dan Hagi</p>
              <p className="testimonial-pull-role">DH Smile Center — Dentistry</p>
            </div>
            <div className="testimonial-pull">
              <p className="testimonial-pull-text">
                &ldquo;My business income two and three X&rsquo;d within just three or four weeks.&rdquo;
              </p>
              <p className="testimonial-pull-author">Sam Overton</p>
              <p className="testimonial-pull-role">Fluid Social</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <h2 className="contact-title">
          Let&rsquo;s talk about<br />
          <em style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
            what&rsquo;s possible.
          </em>
        </h2>
        <p className="contact-sub">
          If you&rsquo;re as obsessed with excellence as we are, we&rsquo;d love to hear from you.
        </p>
        <a href="/apply" className="btn-primary">
          Apply to Work Together
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p className="footer-text">© 2026 Nava45</p>
        <p className="footer-text" style={{ letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
          Proudly Canadian <img src="/canada-flag.svg" alt="Canada" style={{ height: '14px', width: 'auto', display: 'inline-block' }} /> · Serving Clients Globally
        </p>
      </footer>
    </>
  )
}
