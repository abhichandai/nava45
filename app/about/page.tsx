import ThemeToggle from '../components/ThemeToggle'

export default function About() {
  return (
    <>
      <nav>
        <a href="/" className="nav-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <ThemeToggle />
          <a href="/#contact" className="nav-cta">Apply to Work Together</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="case-hero">
        <div className="hero-bg" />
        <div className="case-hero-inner" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          <p className="case-engine-label">About</p>
          <h1 className="case-title">
            We exist to engineer growth for brands<br />
            <em style={{ color: 'var(--gold)' }}>with our &ldquo;audience first&rdquo; approach.</em>
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="case-body-section">
        <div className="case-body-inner" style={{ maxWidth: '760px' }}>
          <p className="case-section-label">Who We Are</p>
          <h2 className="case-section-title">We don&rsquo;t follow the playbook. We write it.</h2>
          <p className="case-body-text">
            Nava45 is a global growth and marketing agency. For over a decade, Nava45 has helped
            brands grow with smarter strategy, better content, and marketing systems that actually
            work. We work at the intersection of consumer research, strategic marketing, and
            artificial intelligence to help brands cut through the noise and build presence that
            drives real results.
          </p>
          <p className="case-body-text">
            At Nava45, every engagement starts with a question: &ldquo;What does this audience
            actually need?&rdquo; The answer shapes everything — the message, the channel, the
            content, the offer. We don&rsquo;t speculate. We listen, validate, and build around
            the audience.
          </p>
          <p className="case-body-text">
            Our clients range from world-class creators and founders to global medical institutions
            and luxury brands. What they share is a commitment to excellence and the recognition
            that being the best at what you do is not enough if the market doesn&rsquo;t know it yet.
          </p>
          <p className="case-body-text">
            We partner with a select group of clients at a time because we believe each client
            demands full attention. When you work with Nava45, you get the whole team. Every time.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="case-body-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">The Marketing Engineers</p>
          <h2 className="case-section-title" style={{ marginBottom: '16px' }}>The team behind the engines.</h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            A fun, energetic team of diverse individuals who are passionate about what we do
            and what our clients can achieve with the help of our experienced team.
          </p>

          {/* Team — horizontal strip, names and titles only */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                overflow: 'hidden',
                marginBottom: '20px',
              }}>
                <img
                  src="/team-abhi.png"
                  alt="Abhi Chand"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p className="work-engine-label" style={{ marginBottom: '6px' }}>CEO & Strategy Engineer</p>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.2
              }}>Abhi Chand</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                overflow: 'hidden',
                marginBottom: '20px',
              }}>
                <img
                  src="/team-aly.png"
                  alt="Alyssandra Raycci Codal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p className="work-engine-label" style={{ marginBottom: '6px' }}>Social Media Engineer</p>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.2
              }}>Alyssandra Raycci Codal</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                overflow: 'hidden',
                marginBottom: '20px',
              }}>
                <img
                  src="/team-viola.png"
                  alt="Viola Kazira"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p className="work-engine-label" style={{ marginBottom: '6px' }}>Execution Engineer</p>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.2
              }}>Viola Kazira</h3>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">What We Believe</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)', marginBottom: '16px' }}>
            Delivering Happiness.
          </h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '16px' }}>
            Our philosophy is rooted in a simple belief: &ldquo;The best businesses are built on
            genuine connection with their audience, and within their team.&rdquo;
          </p>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '16px' }}>
            Inspired by Tony Hsieh&rsquo;s{' '}
            <em>Delivering Happiness: A Path to Profits, Passion, and Purpose</em>, we believe
            that when you lead with care, serve people well, and build a culture of excellence
            from the inside out, the results follow.
          </p>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            At Nava45, we believe that a company built on genuine values, deep customer
            connection, and a team that loves what they do will always outperform one that
            chases numbers alone. That is the standard we hold ourselves to, and the standard
            we bring to every client we work with.
          </p>

          {/* Why Brands Choose Us */}
          <p className="case-section-label" style={{ marginBottom: '48px' }}>Why Brands Choose Us</p>
          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Your Best Interests. Always.</h3>
              <p className="case-approach-desc">
                Your success is the only measure of ours. If something won&rsquo;t move the
                needle for your business, we&rsquo;ll say so — even when it costs us. A
                partnership only works if it&rsquo;s genuinely good for both sides and we take
                that seriously every time.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">02</p>
              <h3 className="case-approach-title">Quality Is Non-Negotiable.</h3>
              <p className="case-approach-desc">
                Reputation is everything — yours and ours. We follow best practices at every
                stage, hold our work to the highest standard, and never ship something we
                wouldn&rsquo;t be proud to put our name on. Sub-par is not in our vocabulary.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">03</p>
              <h3 className="case-approach-title">Connection Is the Strategy.</h3>
              <p className="case-approach-desc">
                Marketing that doesn&rsquo;t connect with real people doesn&rsquo;t work —
                regardless of how much you spend on it. We build campaigns around what your
                audience is actually thinking, feeling, and struggling with. That connection
                is what makes the work perform.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">04</p>
              <h3 className="case-approach-title">We Show Up.</h3>
              <p className="case-approach-desc">
                Responsiveness is a form of respect. When you have a question, a concern, or
                an idea, you hear back from us — promptly and directly. We are accessible,
                accountable, and present throughout every engagement. Not just at the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section">
        <h2 className="contact-title">
          Let&rsquo;s talk about<br />
          <em style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
            what&rsquo;s possible.
          </em>
        </h2>
        <p className="contact-sub">
          If you&rsquo;re as obsessed with excellence as we are, we&rsquo;d love to hear from you.
        </p>
        <a href="/#contact" className="btn-primary">Apply here to work with us</a>
      </section>

      <footer className="site-footer">
        <span className="footer-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></span>
        <span className="footer-copy">&copy; 2025 Nava45. All rights reserved.</span>
      </footer>
    </>
  )
}
