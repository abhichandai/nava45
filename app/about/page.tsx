'use client'
import { useState } from 'react'

const team = [
  {
    id: 'abhi',
    name: 'Abhi Chand',
    title: 'Chief Engineer & Strategist',
    photo: '/team-abhi.png',
    tags: ['Team Leader', 'Strategist', 'AI Intelligence', 'Bookworm'],
    bio: [
      'Abhi is the architect behind every engine at Nava45. He built this firm on one unshakeable conviction: that deep audience research, not instinct, is the only reliable foundation for a campaign that works.',
      'Over more than a decade, Abhi has developed the proprietary systems and frameworks that drive results across every client engagement — combining strategic clarity with cutting-edge AI to build growth that lasts. His approach is simple: understand the audience completely, build the right system around them, and execute with precision.',
      'Before Nava45, Abhi honed his expertise across industries ranging from luxury products to medical technology, giving him a uniquely cross-sector lens that most marketing strategists never develop. That breadth is what allows Nava45 to serve clients others can\'t.',
    ],
  },
  {
    id: 'aly',
    name: 'Alyssandra Raycci Codal',
    title: 'Content Engineer',
    photo: '/team-aly.png',
    tags: ['Content', 'Social Media', 'Creative'],
    bio: [
      'Alyssandra is the strategic mind behind every content decision at Nava45. She transforms audience research into content that earns attention at scale — owning the full operation from strategy to execution.',
      'Her process starts with data and ends with impact. Alyssandra reverse-engineers what audiences are already responding to, builds content systems designed to compound over time, and manages every stage of production without losing the creative edge that makes the work perform.',
      'She has a proven track record of building audiences that convert and brands that people genuinely care about — across TikTok, YouTube, LinkedIn, and beyond. When Alyssandra is behind a content strategy, the numbers move.',
    ],
  },
  {
    id: 'viola',
    name: 'Viola Kazira',
    title: 'Marketing Engineer',
    photo: '/team-viola.png',
    tags: ['Strategy', 'Audience Intelligence', 'Execution', 'Music Lover'],
    bio: [
      'With over 10 years of marketing experience, Viola works with brands to build growth strategies that are as sharp in thinking as they are in delivery.',
      'Viola sits at the intersection of marketing strategy, audience intelligence, and flawless execution, combining the analytical rigour to identify what will work with the operational discipline to make sure it does. She doesn't just develop strategies. She sees them through.',
      'Her experience spans global brands, giving her the rare versatility to work with brands in multiple industries. When the strategy is right and the execution is flawless, growth follows. That is the standard Viola holds herself to on every engagement.',
    ],
  },
]

export default function About() {
  const [openBio, setOpenBio] = useState<string | null>(null)
  const activeMember = team.find(m => m.id === openBio)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content" style={{ textAlign: 'center', alignItems: 'center' }}>
          <h1 className="hero-title animate-fade-up" style={{ maxWidth: '800px' }}>
            We don&rsquo;t follow the playbook.<br />
            <em>We write it.</em>
          </h1>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '48px', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            Discover Nava45
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ animation: 'bounce 2s infinite' }}>
              <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <style>{`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }`}</style>
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
            .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
            .team-member { display: flex; flex-direction: column; }
            .team-photo-wrap { width: 100%; aspect-ratio: 1/1; overflow: hidden; margin-bottom: 20px; background: var(--bg-alt); position: relative; }
            .team-photo-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: center top; filter: grayscale(15%); transition: transform 0.4s ease, filter 0.4s ease; }
            .team-member:hover .team-photo-wrap img { transform: scale(1.04); filter: brightness(0.35); }
            .team-hover-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; opacity: 0; transform: translateY(10px); transition: opacity 0.35s ease, transform 0.35s ease; }
            .team-member:hover .team-hover-overlay { opacity: 1; transform: translateY(0); }
            .team-hover-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
            .team-hover-tag { font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); border: 1px solid var(--gold); padding: 3px 9px; }
            .team-member-name { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 500; color: var(--text); margin-bottom: 4px; line-height: 1.2; }
            .team-member-title { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
            .team-bio-link { display: inline-flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 600; color: var(--text); text-decoration: none; cursor: pointer; background: none; border: none; padding: 0; letter-spacing: 0.02em; transition: color 0.2s; }
            .team-bio-link:hover { color: var(--gold); }
            .team-bio-link svg { transition: transform 0.2s; }
            .team-bio-link:hover svg { transform: translateX(4px); }

            /* Modal */
            .bio-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 24px; backdrop-filter: blur(4px); }
            .bio-modal { background: var(--bg); max-width: 860px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; display: grid; grid-template-columns: 280px 1fr; }
            .bio-modal-photo { width: 100%; aspect-ratio: 3/4; overflow: hidden; }
            .bio-modal-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
            .bio-modal-content { padding: 48px 48px 48px 40px; display: flex; flex-direction: column; }
            .bio-modal-close { position: absolute; top: 16px; right: 16px; width: 36px; height: 36px; border-radius: 50%; background: var(--bg-alt); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: var(--text); z-index: 1; transition: background 0.2s; }
            .bio-modal-close:hover { background: var(--border); }
            .bio-modal-label { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 32px; }
            .bio-modal-name { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 400; color: var(--text); margin-bottom: 6px; line-height: 1.1; }
            .bio-modal-title { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 32px; }
            .bio-modal-para { font-size: 0.92rem; color: var(--muted); line-height: 1.9; margin-bottom: 16px; }
            .bio-modal-para:last-child { margin-bottom: 0; }
            .bio-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 32px; }
            .bio-tag { font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); border: 1px solid var(--gold); padding: 4px 10px; }
          `}</style>

          <div className="team-grid">
            {team.map(member => (
              <div className="team-member" key={member.id}>
                <div className="team-photo-wrap">
                  <img src={member.photo} alt={member.name} />
                  <div className="team-hover-overlay">
                    <div className="team-hover-tags">
                      {member.tags.map(tag => <span key={tag} className="team-hover-tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
                <p className="team-member-name">{member.name}</p>
                <p className="team-member-title">{member.title}</p>
                <button className="team-bio-link" onClick={() => setOpenBio(member.id)}>
                  View full bio
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Bio Modal */}
          {activeMember && (
            <div className="bio-modal-overlay" onClick={() => setOpenBio(null)}>
              <div className="bio-modal" onClick={e => e.stopPropagation()}>
                <div className="bio-modal-photo">
                  <img src={activeMember.photo} alt={activeMember.name} />
                </div>
                <div className="bio-modal-content">
                  <button className="bio-modal-close" onClick={() => setOpenBio(null)}>✕</button>
                  <p className="bio-modal-label">About</p>
                  <p className="bio-modal-name">{activeMember.name}</p>
                  <p className="bio-modal-title">{activeMember.title}</p>
                  {activeMember.bio.map((para, i) => (
                    <p key={i} className="bio-modal-para">{para}</p>
                  ))}
                  <div className="bio-tags">
                    {activeMember.tags.map(tag => (
                      <span key={tag} className="bio-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What We Believe */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">What We Believe</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)', marginBottom: '48px' }}>
            Delivering Happiness.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '64px', alignItems: 'center', marginBottom: '72px' }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <img
                src="/delivering-happiness-book.png"
                alt="Delivering Happiness by Tony Hsieh"
                style={{ width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', borderRadius: '2px', display: 'block', margin: '0 auto' }}
              />
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center' }}>Tony Hsieh</p>
            </div>
          </div>

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
