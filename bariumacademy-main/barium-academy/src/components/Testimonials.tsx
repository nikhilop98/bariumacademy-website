import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Aiden Williams",
    role: "SAT Prep Student",
    country: "USA",
    quote: "Barium Academy helped me increase my SAT score by 210 points in just two months! The strategies they taught for the Reading section were a game-changer.",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    role: "AP Biology Student",
    country: "UAE",
    quote: "AP Biology felt impossible until I started tutoring with Barium Academy. I ended up scoring a 5 on the exam, and I actually enjoyed learning the material!",
  },
  {
    id: 3,
    name: "Oliver Brown",
    role: "GCSE Maths Student",
    country: "United Kingdom",
    quote: "I was predicted a Grade 5 in GCSE Maths, but with my Barium Academy tutor's help, I managed to get a Grade 8! The past paper practice we did was invaluable.",
  },
  {
    id: 4,
    name: "Isabella Evans",
    role: "A-Level Chemistry Student",
    country: "Hong Kong",
    quote: "A-Level Chemistry is notoriously difficult, but my tutor made organic chemistry click for me. Thanks to them, I secured the A grade I needed for Medical School.",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "AP Physics Student",
    country: "USA",
    quote: "The personalized attention at Barium Academy is unmatched. My physics tutor broke down complex mechanics into simple, relatable concepts. Highly recommended!",
  },
  {
    id: 6,
    name: "Emma Thompson",
    role: "IGCSE Science Student",
    country: "United Kingdom",
    quote: "I was struggling with the volume of content in IGCSE, but my tutor helped me organize my revision and focus on the most important topics. My grades shot up!",
  },
  {
    id: 8,
    name: "Cian O'Brien",
    role: "Irish Leaving Cert Student",
    country: "Ireland",
    quote: "The Leaving Cert marking scheme breakdowns were incredibly helpful. My tutor knew exactly what the examiners wanted and I hit my CAO points target!",
  },
  {
    id: 9,
    name: "Liam O'Connor",
    role: "SAT Prep Student",
    country: "Australia",
    quote: "Excellent tutoring! The flexible scheduling worked perfectly for my timezone, and the SAT prep materials provided were top-notch. I felt so prepared on exam day.",
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
                  <div className="testimonial-author-info">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role} — <span className="testimonial-country">{t.country}</span></div>
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
