import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  // SAT Reviews (3)
  {
    id: 1,
    name: "Aiden Williams",
    role: "SAT Prep Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "Barium Academy helped me increase my SAT score by 210 points in just two months! The strategies they taught for the Reading section were a game-changer.",
  },
  {
    id: 2,
    name: "Chloe Chen",
    role: "SAT Math Student",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I was always intimidated by SAT Math, but my tutor broke down the concepts so clearly. I finally hit my target score of 780 and got into my dream college.",
  },
  {
    id: 3,
    name: "Ethan Patel",
    role: "SAT Bootcamp Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "The personalized attention during the SAT prep course was incredible. They identified my weak spots immediately and we drilled them until they became my strengths.",
  },

  // AP Reviews (3)
  {
    id: 4,
    name: "Sophia Rodriguez",
    role: "AP Biology Student",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "AP Biology felt impossible until I started tutoring with Barium Academy. I ended up scoring a 5 on the exam, and I actually enjoyed learning the material!",
  },
  {
    id: 5,
    name: "Jackson Smith",
    role: "AP Calculus BC Student",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "My tutor was phenomenal at explaining complex Calculus concepts. I felt completely prepared walking into the AP exam and earned a 5. Highly recommend!",
  },
  {
    id: 6,
    name: "Olivia Kim",
    role: "AP US History Student",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "The amount of reading for APUSH was overwhelming. My tutor helped me focus on the key themes and taught me how to write top-scoring DBQs.",
  },

  // GCSE Reviews (3)
  {
    id: 7,
    name: "Oliver Brown",
    role: "GCSE Maths Student",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I was predicted a Grade 5 in GCSE Maths, but with my Barium Academy tutor's help, I managed to get a Grade 8! The past paper practice we did was invaluable.",
  },
  {
    id: 8,
    name: "Mia Davies",
    role: "GCSE Triple Science Student",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "Physics and Chemistry used to make no sense to me. My tutor was so patient and explained everything visually. I achieved straight 8s across my Sciences.",
  },
  {
    id: 9,
    name: "Harry Taylor",
    role: "GCSE English Student",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I struggled with essay structures, but the feedback I received on my practice essays transformed my writing. I felt confident walking into both English exams.",
  },

  // A-Level Reviews (3)
  {
    id: 10,
    name: "Isabella Evans",
    role: "A-Level Chemistry Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "A-Level Chemistry is notoriously difficult, but my tutor made organic chemistry click for me. Thanks to them, I secured the A grade I needed for Medical School.",
  },
  {
    id: 11,
    name: "Noah Thomas",
    role: "A-Level Economics Student",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "The jump from GCSE to A-Level was huge. My tutor helped me grasp the difficult macroeconomic models and taught me exactly how to structure my 25-mark essays.",
  },
  {
    id: 12,
    name: "Grace Wilson",
    role: "A-Level Maths Student",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I was losing confidence in mechanics and statistics. My Barium Academy tutor restored my confidence and helped me consistently hit A*s in my mocks.",
  },

  // Foreign Language Reviews (4)
  {
    id: 13,
    name: "Lucas Garcia",
    role: "Spanish Language Student",
    avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I needed to reach B2-level Spanish for my gap year. My native-speaking tutor made the conversational practice fun and corrected my grammar without making me feel discouraged.",
  },
  {
    id: 14,
    name: "Emma Dubois",
    role: "French DELF Prep",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "Preparing for the DELF B1 exam was stressful until I started lessons here. We did so many listening and speaking drills that the actual exam felt easy!",
  },
  {
    id: 15,
    name: "Leo Rossi",
    role: "German Language Learner",
    avatar: "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "German grammar rules are tough, but the way my tutor explained cases and sentence structure was brilliant. I'm now confidently holding conversations.",
  },
  {
    id: 16,
    name: "Mei Lin",
    role: "Mandarin Chinese Student",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "Learning tones and characters seemed impossible at first. My tutor used amazing memory techniques that helped me pass HSK 3 much faster than I expected.",
  },

  // Programming Reviews (3)
  {
    id: 17,
    name: "David Chen",
    role: "Python Programming Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "I started taking Python classes from scratch here. The hands-on projects we built together gave me the confidence to start writing my own automation scripts!",
  },
  {
    id: 18,
    name: "Aisha Patel",
    role: "Web Development Student",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "My tutor taught me React and how to build responsive interfaces. Their code reviews were incredibly detailed and helped me land my first junior developer internship.",
  },
  {
    id: 19,
    name: "Samir Sharma",
    role: "AP Computer Science A Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format&q=90",
    quote: "Object-oriented programming in Java finally clicked for me after a few sessions. My tutor explained concepts like inheritance perfectly, and I ended up getting a 5 on the AP exam.",
  }
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

        <div className="testimonials-cta">
          <a
            href={`mailto:bariumacademy@gmail.com?subject=My Review for Barium Academy`}
            className="btn btn-outline"
          >
            ✍️ Add Your Review
          </a>
        </div>
      </div>
    </section>
  );
}
