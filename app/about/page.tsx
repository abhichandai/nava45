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
            Ten years of building<br />
            <em style={{ color: 'var(--gold)' }}>what the market remembers.</em>
          </h1>
          <p className="case-subtitle">
            We combine marketing strategy, AI, and deep audience research to build growth
            systems for discerning brands and leaders. Not louder. Better.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="case-body-section">
        <div className="case-body-inner" style={{ maxWidth: '760px' }}>
          <p className="case-section-label">Who We Are</p>
          <h2 className="case-section-title">Built different. By design.</h2>
          <p className="case-body-text">
            Nava45 is a growth and marketing engineering firm with over a decade of experience
            disrupting the traditional media and marketing ecosystem. We work at the intersection
            of consumer research, strategic marketing, and artificial intelligence — combining
            what most agencies treat as separate disciplines into one integrated system.
          </p>
          <p className="case-body-text">
            We are researchers, strategists, and builders. Every engagement starts with a
            question most agencies skip: what does this audience actually need? The answer
            shapes everything — the message, the channel, the content, the offer. We don't
            guess. We listen, validate, and build around what we find.
          </p>
          <p className="case-body-text">
            Our clients range from world-class creators and founders to global medical institutions
            and luxury brands. What they share is a commitment to excellence — and the recognition
            that being the best at what you do is not enough if the market doesn't know it yet.
          </p>
          <p className="case-body-text">
            We partner with a select group of clients at a time. Not to be exclusive for its own
            sake — but because doing this work properly demands full attention. When you work
            with Nava45, you get the whole team. Every time.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="case-body-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">The Marketing Engineers</p>
          <h2 className="case-section-title" style={{ marginBottom: '16px' }}>The team behind the engines.</h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            A small team with an outsized impact. Every person here owns their engine completely.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }}>
            {/* Abhi */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                marginBottom: '24px',
                filter: 'grayscale(20%)',
              }}>
                <img
                  src="/team-abhi.png"
                  alt="Abhi Chand"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p className="work-engine-label" style={{ marginBottom: '6px' }}>Chief Architect</p>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: 'var(--text)',
                marginBottom: '12px',
                lineHeight: 1.2
              }}>Abhi Chand</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                Founder and the strategic force behind every engine. Abhi built Nava45 on a
                single conviction: that research, not instinct, is the foundation of every
                successful campaign. Over a decade, he has developed the systems and frameworks
                that power every client engagement.
              </p>
            </div>

            {/* Aly */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                marginBottom: '24px',
                filter: 'grayscale(20%)',
              }}>
                <img
                  src="/team-aly.png"
                  alt="Alyssandra Raycci Codal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p className="work-engine-label" style={{ marginBottom: '6px' }}>Magnetic Content Engineer</p>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: 'var(--text)',
                marginBottom: '12px',
                lineHeight: 1.2
              }}>Alyssandra Raycci Codal</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                The strategist behind the content. Alyssandra turns audience research into content
                that earns attention — consistently, at scale. She owns the full content and social
                media operation, from strategy to execution, and has a track record of building
                audiences that convert.
              </p>
            </div>

            {/* Viola */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                marginBottom: '24px',
                filter: 'grayscale(20%)',
              }}>
                <img
                  src="/team-viola.png"
                  alt="Viola Kazira"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <p className="work-engine-label" style={{ marginBottom: '6px' }}>Intelligence Engineer</p>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: 'var(--text)',
                marginBottom: '12px',
                lineHeight: 1.2
              }}>Viola Kazira</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                The engine that keeps everything moving. Viola bridges strategy and execution —
                ensuring every deliverable is built to the standard the client was promised.
                Detail-driven, systems-minded, and the reason nothing falls through the cracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">What We Believe</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)', marginBottom: '16px' }}>
            Business is personal.<br />Growth is a responsibility.
          </h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '16px' }}>
            Our philosophy is shaped by the conviction that the best businesses are built on
            genuine connection — with their audience, and within their team. Inspired by Tony
            Hsieh&rsquo;s{' '}
            <em>Delivering Happiness: A Path to Profits, Passion, and Purpose</em>, we believe
            that culture, care, and commitment to the people you serve are not soft values —
            they are the strategy.
          </p>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            Everything we build is designed to create real connection: between your brand and
            your audience, between your message and the people who need to hear it. That is
            what makes growth sustainable.
          </p>

          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Your Best Interests. Always.</h3>
              <p className="case-approach-desc">
                We will never sell you a service you don&rsquo;t need. If the honest answer is
                that something won&rsquo;t move the needle for your business, we will say so.
                A partnership only works if it&rsquo;s genuinely good for both sides — and we
                take that seriously every time.
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
      <section className="cs-cta-section">
        <div className="hero-bg" />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Work With Us</p>
          <h2 className="cs-cta-headline">
            Ready to build<br />
            <em style={{ color: 'var(--gold)' }}>something that lasts?</em>
          </h2>
          <p className="cs-cta-sub">
            We work with a select group of clients. If you&rsquo;re serious about growth, we&rsquo;d like to hear from you.
          </p>
          <a href="/#contact" className="btn-primary">Apply to Work Together</a>
        </div>
      </section>

      <footer className="site-footer">
        <span className="footer-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></span>
        <span className="footer-copy">&copy; 2025 Nava45. All rights reserved.</span>
      </footer>
    </>
  )
}
