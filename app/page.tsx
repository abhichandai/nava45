import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav>
        <a href="/" className="nav-logo">Nava<span style={{color:'var(--gold)'}}>45</span></a>
        <ThemeToggle />
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-line" />
        <div className="hero-content">
          <h1 className="hero-title animate-fade-up">
            Growth for<br />
            <em>discerning</em><br />
            brands & leaders.
          </h1>
          <div className="animate-fade-up delay-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="#contact" className="btn-primary">Apply to Work Together</a>
          </div>
        </div>
      </section>

      {/* Hero Quote — Adam Leipzig */}
      <section className="hero-quote-section">
        <div className="hero-quote-inner">
          <span className="hero-quote-mark">&ldquo;</span>
          <blockquote className="hero-quote-text">
            <em>I&rsquo;ve worked with 10 other companies like yours. You are <span className="hero-quote-gold">the best I have ever seen.</span> Nobody even comes close.</em>
          </blockquote>
          <div className="hero-quote-attribution">
            <span className="hero-quote-dash">—</span>
            <div>
              <p className="hero-quote-name">Adam Leipzig</p>
              <p className="hero-quote-title">Hollywood Producer · Former President, National Geographic Films · Former Disney Executive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker — Trusted By */}
      <section className="ticker-section">
        <p className="section-label ticker-label">Trusted By</p>
        <div className="ticker-track-wrap">
          <div className="ticker-track">
            {/* Set 1 */}
            <div className="ticker-item">
              <img src="/logos/university-of-toronto.jpg" alt="University of Toronto" className="ticker-logo" />
            </div>
            <div className="ticker-item">
              <img src="/logos/adam-leipzig.png" alt="Adam Leipzig Productions" className="ticker-logo ticker-logo-blend" />
            </div>
            <div className="ticker-item ticker-item-text">
              <span className="ticker-text-logo">Balance<br />Catamarans</span>
            </div>
            <div className="ticker-item ticker-item-text">
              <span className="ticker-text-logo">Focus in<br />Action</span>
            </div>
            <div className="ticker-item ticker-item-text">
              <span className="ticker-text-logo">Quit by<br />Healing</span>
            </div>
            {/* Set 2 — duplicate for seamless loop */}
            <div className="ticker-item">
              <img src="/logos/university-of-toronto.jpg" alt="University of Toronto" className="ticker-logo" />
            </div>
            <div className="ticker-item">
              <img src="/logos/adam-leipzig.png" alt="Adam Leipzig Productions" className="ticker-logo ticker-logo-blend" />
            </div>
            <div className="ticker-item ticker-item-text">
              <span className="ticker-text-logo">Balance<br />Catamarans</span>
            </div>
            <div className="ticker-item ticker-item-text">
              <span className="ticker-text-logo">Focus in<br />Action</span>
            </div>
            <div className="ticker-item ticker-item-text">
              <span className="ticker-text-logo">Quit by<br />Healing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="work" className="work-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">Services</p>
          <div className="work-grid">
            <div className="work-card">
              <p className="work-number">01</p>
              <h3 className="work-title">Lead Generation</h3>
              <p className="work-desc">
                Paid acquisition on Google and Meta for high-value, long-cycle products.
                I specialize in luxury markets where a single conversion justifies
                significant ad spend — and where precision matters more than volume.
              </p>
            </div>
            <div className="work-card">
              <p className="work-number">02</p>
              <h3 className="work-title">Personal Brand Strategy</h3>
              <p className="work-desc">
                Positioning and content strategy for executives, thought leaders, and
                industry figures who need to show up credibly online. LinkedIn presence,
                content calendars, and narrative architecture.
              </p>
            </div>
            <div className="work-card">
              <p className="work-number">03</p>
              <h3 className="work-title">Campaign Management</h3>
              <p className="work-desc">
                Ongoing management of paid campaigns with rigorous reporting and
                continuous optimization. No vanity metrics — just the numbers that
                actually connect to revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="about-grid">
          <div>
            <p className="section-label">About</p>
            <h2 className="about-title">
              I treat every client's business like it's my own.
            </h2>
            <p className="about-body">
              I'm a data-driven marketer based in Canada. I work with a
              deliberately small roster of clients — which means you get my full
              attention, not a junior account manager.
            </p>
            <p className="about-body">
              My background is in performance marketing, offer design, and
              lead generation. Over time, I've moved upmarket toward clients
              where the stakes are high and the work is complex.
            </p>
          </div>
          <div>
            <p className="section-label" style={{ marginBottom: '40px' }}>Who I Work With</p>
            <div className="client-type">
              <div className="client-dot" />
              <div>
                <p className="client-label">Luxury Products</p>
                <p className="client-desc">
                  High-ticket, considered-purchase products with long sales cycles —
                  where qualified leads are scarce and ad spend needs to be surgical.
                </p>
              </div>
            </div>
            <div className="client-type">
              <div className="client-dot" />
              <div>
                <p className="client-label">Executives & Thought Leaders</p>
                <p className="client-desc">
                  Industry leaders — from Hollywood producers to Fortune 500
                  advisors — who need a professional digital presence that
                  reflects the weight of their work.
                </p>
              </div>
            </div>
            <div className="client-type">
              <div className="client-dot" />
              <div>
                <p className="client-label">The Right Fit</p>
                <p className="client-desc">
                  Clients who value depth over volume, and want a long-term
                  relationship rather than a vendor transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label">Results</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <span className="quote-mark">"</span>
              <p className="testimonial-text">
                Seriously, congrats on this launch — how the hell did you get almost $20K from a stale old list?
              </p>
              <p className="testimonial-author">Shane Melaugh</p>
              <p className="testimonial-role">ikario — Self-Development</p>
            </div>
            <div className="testimonial-card">
              <span className="quote-mark">"</span>
              <p className="testimonial-text">
                I recommend him whole-heartedly. He's done a great job for us and everyone I've referred him to.
              </p>
              <p className="testimonial-author">Dr. Dan Hagi</p>
              <p className="testimonial-role">DH Smile Center — Dentistry</p>
            </div>
            <div className="testimonial-card">
              <span className="quote-mark">"</span>
              <p className="testimonial-text">
                My business income two and three X'd within just three or four weeks.
              </p>
              <p className="testimonial-author">Sam Overton</p>
              <p className="testimonial-role">Fluid Social</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-label" style={{ justifyContent: 'center', marginBottom: '48px' }}>
          Contact
        </p>
        <h2 className="contact-title">
          Let's talk about<br />
          <em style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
            what's possible.
          </em>
        </h2>
        <p className="contact-sub">
          If you're working on something that matters and need a marketer
          who will treat it that way, I'd like to hear from you.
        </p>
        <a href="mailto:hello@nava45.com" className="btn-primary">
          hello@nava45.com
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p className="footer-text">© 2026 Nava45</p>
        <p className="footer-text" style={{ letterSpacing: '0.05em' }}>
          Based in Canada · Working Globally
        </p>
      </footer>
    </>
  )
}
