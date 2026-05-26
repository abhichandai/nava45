'use client'
import { useState } from 'react'

export default function About() {
  const [openBio, setOpenBio] = useState<string | null>(null)

  const team = [
    {
      id: 'abhi',
      name: 'Abhi Chand',
      title: 'Chief Engineer & Strategist',
      photo: '/team-abhi.png',
      tags: ['Team Leader', 'Strategist', 'AI Intelligence', 'Bookworm'],
      bio: 'Founder and the strategic force behind Nava45. Abhi built Nava45 on a single conviction: that research, not instinct, is the foundation of every successful campaign. Over a decade, he has developed the systems and solutions that power every client engagement.',
    },
    {
      id: 'aly',
      name: 'Alyssandra Raycci Codal',
      title: 'Content Engineer',
      photo: '/team-aly.png',
      tags: ['Content', 'Social Media', 'Creative'],
      bio: 'The strategist behind social media and content. Alyssandra turns audience research into content that earns attention. She owns the full content and social media operation, from strategy to execution, and has a track record of building audiences that convert.',
    },
    {
      id: 'viola',
      name: 'Viola Kazira',
      title: 'Marketing Engineer',
      photo: '/team-viola.png',
      tags: ['Strategy', 'Audience Intelligence', 'Execution', 'Music Lover'],
      bio: 'The engine that keeps everything moving. Viola bridges strategy and execution, ensuring every deliverable is built to the standard the client was promised. Detail-driven, and the reason nothing falls through the cracks.',
    },
  ]

  return (
    <>
      {/* Hero — full screen, centred */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content" style={{ textAlign: 'center', alignItems: 'center' }}>
          <h1 className="hero-title animate-fade-up">
            We don&rsquo;t follow the playbook.<br />
            <em>We write it.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.8, marginTop: '16px' }}>
            A global growth and marketing agency combining research, strategy, and AI to build presence that drives real results.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="case-body-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="case-body-inner" style={{ maxWidth: '760px' }}>
          <p className="case-section-label">Who We Are</p>
          <h2 className="case-section-title">Engineering growth with our audience-first approach.</h2>
          <p className="case-body-text">
            Nava45 is a global growth and marketing agency. For over a decade, we have helped
            brands grow with smarter strategy, better content, and marketing systems that actually
            work. We work at the intersection of consumer research, strategic marketing, and
            artificial intelligence to help brands cut through the noise and build presence that
            drives real results.
          </p>
          <p className="case-body-text">
            At Nava45, every engagement starts with a question: &ldquo;What does this audience
            actually need?&rdquo; The answer shapes everything the message, the channel, the
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
            deserves our full attention. When you work with Nava45, you get the whole team. Every time.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="case-body-section" style={{ background: 'var(--bg)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">The Marketing Engineers</p>
          <h2 className="case-section-title" style={{ marginBottom: '16px' }}>The team behind the engine.</h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            We&rsquo;re a fun, energetic team of diverse individuals who are passionate about what we do AND what we can help our clients achieve.
          </p>

          <style>{`
            .team-card-wrap { display: flex; flex-direction: column; }
            .team-photo { position: relative; overflow: hidden; aspect-ratio: 3/4; }
            .team-photo img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform 0.4s ease, filter 0.4s ease; }
            .team-card-wrap:hover .team-photo img { transform: scale(1.04); filter: brightness(0.4); }
            .team-hover-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px 20px 24px; opacity: 0; transform: translateY(10px); transition: opacity 0.35s ease, transform 0.35s ease; }
            .team-card-wrap:hover .team-hover-overlay { opacity: 1; transform: translateY(0); }
            .team-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
            .team-tag { font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); border: 1px solid var(--gold); padding: 3px 9px; }
            .team-info { padding: 16px 4px 0; }
            .bio-toggle { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); background: none; border: none; cursor: pointer; padding: 0; margin-top: 10px; display: flex; align-items: center; gap: 6px; }
            .bio-text { font-size: 0.85rem; color: var(--muted); line-height: 1.8; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border); }
          `}</style>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {team.map(member => (
              <div className="team-card-wrap" key={member.id}>
                <div className="team-photo">
                  <img src={member.photo} alt={member.name} />
                  <div className="team-hover-overlay">
                    <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>{member.title}</p>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, color: '#fff', lineHeight: 1.2 }}>{member.name}</p>
                    <div className="team-tags">
                      {member.tags.map(tag => <span key={tag} className="team-tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>{member.title}</p>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2 }}>{member.name}</p>
                  <button
                    className="bio-toggle"
                    onClick={() => setOpenBio(openBio === member.id ? null : member.id)}
                  >
                    {openBio === member.id ? '— Less' : '+ About'}
                  </button>
                  {openBio === member.id && (
                    <p className="bio-text">{member.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">What We Believe</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)', marginBottom: '48px' }}>
            Delivering Happiness.
          </h2>

          {/* Book + text layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '64px', alignItems: 'start', marginBottom: '72px' }}>
            <div>
              <p className="case-body-text" style={{ marginBottom: '16px' }}>
                Our philosophy is rooted in a simple belief: &ldquo;The best businesses are built on
                genuine connection with their audience, and within their team.&rdquo;
              </p>
              <p className="case-body-text" style={{ marginBottom: '16px' }}>
                Inspired by Tony Hsieh&rsquo;s{' '}
                <em>Delivering Happiness: A Path to Profits, Passion, and Purpose</em>, we believe
                that when you lead with care, serve people well, and build a culture of excellence
                from the inside out, the results follow.
              </p>
              <p className="case-body-text">
                At Nava45, we believe that a company built on genuine values, deep customer
                connection, and a team that loves what they do will always outperform one that
                chases numbers alone. That is the standard we hold ourselves to, and the standard
                we bring to every client we work with.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71xt4ndLXlL.jpg"
                alt="Delivering Happiness by Tony Hsieh"
                style={{ width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', borderRadius: '2px' }}
              />
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center' }}>Tony Hsieh</p>
            </div>
          </div>

          {/* Why Brands Choose Us */}
          <p className="case-section-label" style={{ marginBottom: '48px' }}>Why Brands Choose Us</p>
          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Your Best Interests. Always.</h3>
              <p className="case-approach-desc">
                Your success is the only measure of ours. If something won&rsquo;t move the
                needle for your business, we&rsquo;ll say so even when it costs us. A
                partnership only works if it&rsquo;s genuinely good for both sides and we take
                that seriously every time.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">02</p>
              <h3 className="case-approach-title">The Best or Nothing.</h3>
              <p className="case-approach-desc">
                Reputation is everything yours and ours. We follow best practices at every
                stage, hold our work to the highest standard, and never ship something we
                wouldn&rsquo;t be proud to put our name on. Sub-par is not in our vocabulary.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">03</p>
              <h3 className="case-approach-title">Connection Is the Strategy.</h3>
              <p className="case-approach-desc">
                Marketing that doesn&rsquo;t connect with real people doesn&rsquo;t work
                regardless of how much you spend on it. We build campaigns around what your
                audience is actually thinking, feeling, and struggling with. That connection
                is what makes the work perform.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">04</p>
              <h3 className="case-approach-title">Always in Your Corner.</h3>
              <p className="case-approach-desc">
                Responsiveness is a form of respect. When you have a question, a concern, or
                an idea, you hear back from us promptly and directly. We are accessible,
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
        <a href="/#contact" className="btn-primary">Apply to work together</a>
      </section>

      <footer className="site-footer">
        <span className="footer-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></span>
        <span className="footer-copy">&copy; 2025 Nava45. All rights reserved.</span>
      </footer>
    </>
  )
}
