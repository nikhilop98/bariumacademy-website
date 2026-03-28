import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Aiden Williams",
    role: "SAT Prep Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "Barium Academy helped me increase my SAT score by 210 points in just two months! The strategies they taught for the Reading section were a game-changer.",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    role: "AP Biology Student",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "AP Biology felt impossible until I started tutoring with Barium Academy. I ended up scoring a 5 on the exam, and I actually enjoyed learning the material!",
  },
  {
    id: 3,
    name: "Oliver Brown",
    role: "GCSE Maths Student",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I was predicted a Grade 5 in GCSE Maths, but with my Barium Academy tutor's help, I managed to get a Grade 8! The past paper practice we did was invaluable.",
  },
  {
    id: 4,
    name: "Isabella Evans",
    role: "A-Level Chemistry Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "A-Level Chemistry is notoriously difficult, but my tutor made organic chemistry click for me. Thanks to them, I secured the A grade I needed for Medical School.",
  },
  {
    id: 5,
    name: "Lucas Garcia",
    role: "Spanish Language Student",
    avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I needed to reach B2-level Spanish for my gap year. My native-speaking tutor made the conversational practice fun and corrected my grammar without making me feel discouraged.",
  },
  {
    id: 6,
    name: "David Chen",
    role: "Python Programming Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I started taking Python classes from scratch here. The hands-on projects we built together gave me the confidence to start writing my own automation scripts!",
  },
  {
    id: 7,
    name: "Priya Menon",
    role: "CBSE Class 12 Student",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "My tutor helped me bridge the gap between CBSE board prep and JEE concepts. My Physics scores improved dramatically within just 6 weeks!",
  },
  {
    id: 8,
    name: "Cian O'Brien",
    role: "Irish Leaving Cert Student",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "The Leaving Cert marking scheme breakdowns were incredibly helpful. My tutor knew exactly what the examiners wanted and I hit my CAO points target!",
  },
];


export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-tag">Student Reviews</span>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Don't take our word for it — hear from the students who've transformed their learning.
          </p>
        </div>

        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((t) => (
            <div key={t.id}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>⭐</span>
                  ))}
                </div>

                <p className="testimonial-quote">{t.quote}</p>

                <div className="testimonial-author">
                  <img
                    className="testimonial-avatar"
                    src={t.avatar}
                    alt={t.name}
                  />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>


      </div>
    </section>
  );
}
