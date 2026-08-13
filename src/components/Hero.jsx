import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationModal from './ConsultationModal';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <br /> <br />
      <section className="hero">
        <div className="hero-text">
          <h1>Real Gear. Honest Advice.</h1>
          <p>We're a small team that picks gym equipment we trust — durable, practical, and ready for real training. If you're unsure what to buy, ask us and we'll recommend the right setup for your goals.</p>
          <div className="cta-btns">
            <Link to="/products" className="btn btn-primary">Shop Equipment</Link>
            <button className="btn" onClick={() => setIsModalOpen(true)}>Get Advice</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" alt="Hero gym image" />
      </section>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default Hero
