import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaStar } from 'react-icons/fa';
import Chatbot from './components/Chatbot';
import MindMap from './components/MindMap';
import './App.css';

/* ============================================
   DATA: Cinematic Scenes
   ============================================ */
const scenes = [
  {
    id: 'opening',
    type: 'hero',
    bg: '/scene_1965.png',
    overlay: 'heavy',
  },
  {
    id: 'boi-canh',
    type: 'narrative',
    bg: '/scene_1965.png',
    overlay: 'dark',
    year: 'THÁNG 3, 1965',
    title: <>Khi chiến lược <span className="highlight-red">"Chiến tranh đặc biệt"</span> có nguy cơ phá sản hoàn toàn...</>,
    desc: 'Ngày 8/3/1965, quân Mỹ chính thức đổ bộ vào Đà Nẵng, trực tiếp tham chiến và mở rộng chiến tranh phá hoại ra miền Bắc bằng không quân, hải quân sau "Sự kiện Vịnh Bắc Bộ" (5/8/1964).',
    card: {
      title: 'Đường lối của Đảng',
      content: (
        <>
          <p>Hội nghị Trung ương 11 (3/1965) và 12 (12/1965) xác định mục tiêu:</p>
          <ul>
            <li><strong>"Bảo vệ miền Bắc, giải phóng miền Nam, thống nhất đất nước"</strong></li>
            <li>Phương châm: Đánh lâu dài, dựa vào sức mình là chính</li>
            <li>Tập trung mở những cuộc tiến công lớn — càng đánh càng mạnh</li>
          </ul>
        </>
      ),
    },
    quote: {
      text: '"Không có gì quý hơn độc lập, tự do"',
      author: 'Chủ tịch Hồ Chí Minh — 17/7/1966',
    },
  },
  {
    id: 'mien-bac',
    type: 'narrative',
    bg: '/scene_north.png',
    overlay: 'dark',
    year: 'HẬU PHƯƠNG LỚN • 1965 – 1968',
    title: <>Miền Bắc: <span className="highlight">Vừa sản xuất, vừa chiến đấu</span></>,
    desc: 'Chuyển từ kinh tế thời bình sang kinh tế thời chiến. Tổ chức mô hình Hợp tác xã trang bị cơ khí nhỏ; sơ tán và chia nhỏ các nhà máy công nghiệp lớn thành công nghiệp địa phương.',
    card: {
      title: 'Phong trào quần chúng',
      content: (
        <ul>
          <li>Thanh niên: Phong trào <strong>"Ba sẵn sàng"</strong></li>
          <li>Phụ nữ: Phong trào <strong>"Ba đảm đang"</strong> — Đảm nhiệm sản xuất, đảm nhiệm gia đình, sẵn sàng chiến đấu</li>
          <li>Công nhân: <strong>"Tay búa tay súng"</strong></li>
          <li>Nông dân: <strong>"Tay cày tay súng"</strong></li>
          <li>Thanh niên miền Nam: <strong>"Năm xung phong"</strong></li>
        </ul>
      ),
    },
    quote: {
      text: '"Thóc không thiếu một cân, quân không thiếu một người"',
      author: 'Khẩu hiệu chi viện tiền tuyến',
    },
    stats: [
      { number: '3.200+', label: 'Máy bay Mỹ bị bắn rơi' },
      { number: '100+', label: 'Tàu chiến bị đánh chìm' },
      { number: '1/11/1968', label: 'Mỹ ngừng ném bom miền Bắc' },
    ],
  },
  {
    id: 'mien-nam',
    type: 'narrative',
    bg: '/scene_1968.png',
    overlay: 'dark',
    year: 'TIỀN TUYẾN LỚN • 1965 – 1968',
    title: <>Miền Nam: <span className="highlight-red">Bẻ gãy Chiến tranh Cục bộ</span></>,
    desc: 'Trận Vạn Tường (8/1965) tại Quảng Ngãi — đòn phủ đầu chứng minh quân dân ta có khả năng đánh bại ưu thế tuyệt đối về binh khí của địch.',
    card: {
      title: 'Thế trận lòng dân',
      content: (
        <ul>
          <li><strong>"Ba mũi giáp công":</strong> Quân sự — Chính trị — Binh vận</li>
          <li><strong>"Ba vùng chiến lược":</strong> Rừng núi — Nông thôn đồng bằng — Đô thị</li>
          <li><strong>"Bốn bám":</strong> Đảng bám dân, dân bám đất, du kích bám địch, cấp trên bám cấp dưới</li>
        </ul>
      ),
    },
    stats: [
      { number: '700.000', label: 'Quân Mỹ-Ngụy (Mùa khô 65-66)' },
      { number: '4.000', label: 'Máy bay Mỹ sử dụng' },
      { number: '80%', label: 'Đất đai do MTGP kiểm soát' },
    ],
  },
  {
    id: 'mau-than',
    type: 'narrative',
    bg: '/scene_1968.png',
    overlay: 'heavy',
    year: 'BƯỚC NGOẶT • XUÂN MẬU THÂN 1968',
    title: <>Tổng tiến công và nổi dậy <span className="highlight">Xuân Mậu Thân</span></>,
    desc: 'Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân 1968 làm phá sản hoàn toàn chiến lược "Chiến tranh cục bộ", buộc Mỹ phải ngồi vào bàn đàm phán tại Paris.',
    card: {
      title: 'Đàm phán Paris',
      content: (
        <p>Từ ngày <strong>13/5/1968</strong>, với sự tham gia của các nhà ngoại giao tiêu biểu: <strong>Xuân Thủy</strong>, <strong>Nguyễn Thị Bình</strong> và <strong>Lê Đức Thọ</strong> — cuộc đàm phán Paris chính thức bắt đầu, mở ra mặt trận ngoại giao mới.</p>
      ),
    },
  },
  {
    id: 'bac-ho',
    type: 'mourning',
    bg: '/scene_bacho.png',
    overlay: 'mourning',
    year: '2 THÁNG 9, 1969',
    title: <>Chủ tịch Hồ Chí Minh <span className="highlight">vĩnh biệt chúng ta</span></>,
    desc: 'Sự ra đi của Người để lại niềm thương tiếc vô hạn cho cả dân tộc, nhưng cũng chính là ngọn lửa thôi thúc toàn Đảng, toàn quân, toàn dân quyết tâm thực hiện Di chúc của Bác.',
    card: {
      title: 'Tiếp nối sự nghiệp',
      content: (
        <p>Ngày <strong>23/9/1969</strong>, Quốc hội bầu cụ <strong>Tôn Đức Thắng</strong> làm Chủ tịch nước, tiếp nối sự nghiệp cách mạng vĩ đại. Toàn Đảng biến đau thương thành hành động, quyết tâm thực hiện Di chúc thiêng liêng của Bác Hồ.</p>
      ),
    },
  },
  {
    id: 'viet-nam-hoa',
    type: 'narrative',
    bg: '/scene_1972.png',
    overlay: 'dark',
    year: 'THÁCH THỨC MỚI • 1969 – 1973',
    title: <>Đánh bại <span className="highlight-red">"Việt Nam hóa chiến tranh"</span></>,
    desc: 'Tổng thống Nixon thực hiện "Việt Nam hóa chiến tranh" theo Học thuyết Nixon — dùng người Việt đánh người Việt, đồng thời ngoại giao thỏa hiệp với Trung Quốc (2/1972) và Liên Xô (5/1972) để cô lập ta.',
    card: {
      title: 'Các chiến dịch quyết định',
      content: (
        <ul>
          <li>Chiến dịch phản công <strong>Đường 9 – Nam Lào</strong> (1971)</li>
          <li>Cuộc tiến công chiến lược năm <strong>1972</strong></li>
          <li>Bảo vệ <strong>Thành cổ Quảng Trị</strong> (28/6 – 16/9/1972) — 81 ngày đêm huyền thoại</li>
        </ul>
      ),
    },
  },
  {
    id: 'dien-bien-phu-trk',
    type: 'narrative',
    bg: '/scene_1972.png',
    overlay: 'heavy',
    year: 'HÀ NỘI • 12 NGÀY ĐÊM CUỐI 1972',
    title: <><span className="highlight">Điện Biên Phủ</span> trên không</>,
    desc: 'Đập tan cuộc tập kích chiến lược bằng B-52 của đế quốc Mỹ (Chiến dịch Linebacker II), buộc Mỹ ký Hiệp định Paris.',
    stats: [
      { number: '81', label: 'Máy bay Mỹ bị bắn rơi' },
      { number: '34', label: 'Chiếc B-52 "Pháo đài bay"' },
      { number: '27/1/1973', label: 'Ký Hiệp định Paris' },
    ],
    quote: {
      text: '"Mỹ phải rút quân về nước, công nhận quyền tự quyết của nhân dân Việt Nam"',
      author: 'Hiệp định Paris — 27/1/1973',
    },
  },
  {
    id: 'dai-thang',
    type: 'victory',
    bg: '/scene_1975.png',
    overlay: 'victory',
    year: 'MÙA XUÂN 1975',
    title: <>Đại thắng <span className="highlight">Mùa Xuân 1975</span></>,
    desc: 'Hội nghị Trung ương 21 (khóa III) khẳng định con đường bạo lực cách mạng, chuẩn bị tiến lên giải phóng hoàn toàn miền Nam.',
    card: {
      title: 'Ba đòn tiến công chiến lược',
      content: (
        <ul>
          <li>Chiến dịch <strong>Tây Nguyên</strong> (4/3 – 24/3/1975) — mở đầu bằng trận Buôn Ma Thuột</li>
          <li>Chiến dịch <strong>Huế – Đà Nẵng</strong> (21/3 – 29/3/1975)</li>
          <li>Chiến dịch <strong>Hồ Chí Minh</strong> (26/4 – 30/4/1975)</li>
        </ul>
      ),
    },
  },
  {
    id: 'thong-nhat',
    type: 'victory',
    bg: '/scene_1975.png',
    overlay: 'heavy',
    year: '30 THÁNG 4, 1975',
    title: <>Ngày <span className="highlight">Thống Nhất</span></>,
    desc: 'Chiến dịch Hồ Chí Minh toàn thắng. Xe tăng tiến vào Dinh Độc Lập. Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện.',
    quote: {
      text: '"Hoàn thành sự nghiệp giải phóng dân tộc và thống nhất đất nước"',
      author: 'Mùa Xuân đại thắng — 30/4/1975',
    },
  },
];

/* ============================================
   COMPONENT: App
   ============================================ */
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sceneRefs = useRef([]);

  // Scroll progress
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Intersection Observer for scene reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const content = entry.target.querySelector('.scene-content');
          if (content) {
            if (entry.isIntersecting) {
              content.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sceneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleParallax = () => {
      sceneRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const bg = ref.querySelector('.scene-bg');
        if (bg) {
          const speed = 0.3;
          const yPos = rect.top * speed;
          bg.style.transform = `translateY(${yPos}px) scale(1.1)`;
        }
      });
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);



  const renderScene = (scene, index) => {
    if (scene.type === 'hero') {
      return (
        <section
          key={scene.id}
          id={scene.id}
          ref={(el) => (sceneRefs.current[index] = el)}
          className="scene cinematic-scene hero-scene"
          style={{ backgroundImage: `url(${scene.bg})` }}
        >
          <div className={`scene-overlay ${scene.overlay}`} />
          <div className="scene-content visible">
            <p className="hero-chapter">Chương II — Phần 2</p>
            <h1 className="hero-main-title">
              Lãnh Đạo Cách Mạng Cả Nước
            </h1>
            <p className="hero-subtitle">
              Kháng chiến chống đế quốc Mỹ xâm lược, giải phóng miền Nam, thống nhất đất nước
            </p>
            <p className="hero-period">1965 — 1975</p>
            <div className="scroll-cue">
              <span>Cuộn để khám phá</span>
              <div className="chevron" />
            </div>
          </div>
        </section>
      );
    }

    const isMourning = scene.type === 'mourning';
    const isVictory = scene.type === 'victory';

    return (
      <section
        key={scene.id}
        id={scene.id}
        ref={(el) => (sceneRefs.current[index] = el)}
        className={`scene cinematic-scene ${isMourning ? 'mourning-scene' : ''} ${isVictory ? 'victory-scene' : ''}`}
        style={{ backgroundImage: `url(${scene.bg})` }}
      >
        <div className={`scene-overlay ${scene.overlay}`} />
        {isMourning && <div className="mourning-date">2/9/1969</div>}

        <div className="scene-content split-layout">
          <div className="scene-main-text">
            <p className="scene-year">{scene.year}</p>
            <h2 className="scene-title">{scene.title}</h2>
            <div className="scene-divider" />
            <p className="scene-desc">{scene.desc}</p>
          </div>

          {(scene.quote || scene.card || scene.stats) && (
            <div className="scene-widgets">
              {scene.quote && (
                <div className="quote-block">
                  {scene.quote.text}
                  <span className="author">{scene.quote.author}</span>
                </div>
              )}

              {scene.card && (
                <div className="glass-card">
                  <h3>{scene.card.title}</h3>
                  {scene.card.content}
                </div>
              )}

              {scene.stats && (
                <div className="stat-grid">
                  {scene.stats.map((stat, i) => (
                    <div className="stat-item" key={i}>
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="app-container">
      {/* Top Menu */}
      <nav className="top-menu">
        <div className="menu-brand"><a href="#opening" style={{ color: 'inherit', textDecoration: 'none' }}>VNR202</a></div>
        <ul className="menu-links">
          <li><a href="#boi-canh">Chiến tranh cục bộ</a></li>
          <li><a href="#mau-than">Mậu Thân 1968</a></li>
          <li><a href="#dien-bien-phu-trk">ĐBP Trên không</a></li>
          <li><a href="#thong-nhat">Đại thắng 1975</a></li>
          <li><a href="#mindmap-section">Sơ đồ tổng kết</a></li>
        </ul>
      </nav>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Cinematic Scenes */}
      {scenes.map((scene, index) => renderScene(scene, index))}

      {/* Conclusion */}
      <section className="scene conclusion-scene" ref={(el) => (sceneRefs.current[scenes.length] = el)}>
        <div className="scene-content">
          <p className="scene-year">KẾT LUẬN</p>
          <h2 className="scene-title">
            Đảng lãnh đạo kháng chiến chống Mỹ, cứu nước{' '}
            <span className="highlight">(1965 – 1975)</span>
          </h2>
          <div className="scene-divider" />

          <div className="conclusion-grid">
            <div className="conclusion-card">
              <div className="card-number">01</div>
              <h3>Thắng lợi vĩ đại</h3>
              <p>
                Kháng chiến kết thúc thắng lợi trọn vẹn ngày 30/4/1975.
                Hoàn thành sự nghiệp giải phóng dân tộc, chấm dứt ách thống trị
                của chủ nghĩa thực dân, đế quốc và thống nhất đất nước.
              </p>
            </div>
            <div className="conclusion-card">
              <div className="card-number">02</div>
              <h3>Vai trò lãnh đạo của Đảng</h3>
              <p>
                Đường lối đúng đắn, sáng tạo qua các Hội nghị TW then chốt: TW 11 & 12 (1965),
                TW 18 (1970), TW 21 và quyết định của Bộ Chính trị cuối 1974 – đầu 1975.
              </p>
            </div>
            <div className="conclusion-card">
              <div className="card-number">03</div>
              <h3>Sức mạnh hai miền</h3>
              <p>
                "Hậu phương lớn" miền Bắc vừa sản xuất vừa chiến đấu, chi viện tối đa.
                "Tiền tuyến lớn" miền Nam kiên cường bám trụ với "Ba mũi giáp công" và "Bốn bám".
              </p>
            </div>
            <div className="conclusion-card">
              <div className="card-number">04</div>
              <h3>Ý nghĩa & bài học</h3>
              <p>
                Để lại kinh nghiệm quý báu về xây dựng CNXH trong chiến tranh
                và nghệ thuật lãnh đạo cách mạng trong bối cảnh quốc tế phức tạp —
                tiền đề vững chắc cho giai đoạn tiếp theo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz/Story Section */}
      <div id="mindmap-section" className="quiz-section" style={{ padding: '80px 20px', background: 'linear-gradient(to bottom, #1a0a0a, var(--color-warm-black))' }}>
        <MindMap />
      </div>

      {/* Footer */}
      <footer className="cinematic-footer">
        <div className="star"><FaStar /></div>
        <p>Tự hào lịch sử vẻ vang của Đảng Cộng sản Việt Nam</p>
        <p>Thiết kế dành riêng cho môn VNR202 — Lịch sử Đảng</p>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;
