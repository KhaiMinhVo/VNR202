import React, { useState } from 'react';
import './MindMap.css';

const EVENT_DETAILS = {
  'van-tuong': {
    title: 'Trận Vạn Tường (1965) mở đầu',
    content: 'Trận Vạn Tường diễn ra vào tháng 8/1965 tại Quảng Ngãi. Đây là đòn phủ đầu giáng vào quân viễn chinh Mỹ, chứng minh quân dân miền Nam hoàn toàn có khả năng đánh bại ưu thế tuyệt đối về hỏa lực và binh khí kỹ thuật của đế quốc Mỹ. Trận này được coi là "Ấp Bắc" đối với quân Mỹ.',
    images: ['/5.jpg', '/6.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=l00LQllNYfY'
  },
  'mua-kho': {
    title: 'Bẻ gãy 2 cuộc phản công mùa khô',
    content: 'Mỹ mở hai cuộc phản công chiến lược mùa khô (1965-1966 và 1966-1967) với hàng chục vạn quân Mỹ và chư hầu nhằm mục tiêu "tìm diệt" quân chủ lực của ta và "bình định" miền Nam. Tuy nhiên, mọi nỗ lực của chúng đều bị quân dân ta bẻ gãy, tổn thất nặng nề.',
    images: ['/7.jpg', '/8.jpg', '/9.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=59pzPC0JtY4'
  },
  'sinh-luc': {
    title: 'Tiêu diệt sinh lực địch ở miền Nam',
    content: 'Quân dân ta liên tục quấy rối, đánh tỉa, và tổ chức các trận đánh lớn nhỏ khắp các chiến trường, làm hao mòn nghiêm trọng sinh lực địch, khiến chúng không thể thực hiện được mục tiêu chiến lược đề ra.',
    images: ['/10.jpg', '/11.jpg']
  },
  'ba-san-sang': {
    title: 'Phong trào Ba sẵn sàng, Ba đảm đang',
    content: 'Phong trào "Ba sẵn sàng" của thanh niên và "Ba đảm đang" của phụ nữ miền Bắc đã dấy lên một cao trào thi đua yêu nước sôi nổi, chi viện sức người sức của khổng lồ cho tiền tuyến miền Nam.',
    images: ['/12.jpg', '/13.jpg', '/14.jpg', '/15.jpg', '/16.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=O_kGX7owmHk'
  },
  'chong-pha-hoai-1': {
    title: 'Chống chiến tranh phá hoại lần 1',
    content: 'Từ 1965 đến 1968, Mỹ tiến hành chiến tranh phá hoại miền Bắc bằng không quân và hải quân. Miền Bắc vừa sản xuất vừa chiến đấu, bắn rơi hàng ngàn máy bay địch, bảo vệ vững chắc hậu phương.',
    images: ['/17.jpg', '/18.jpg']
  },
  'chi-vien': {
    title: 'Đảm bảo chi viện tối đa cho miền Nam',
    content: 'Mặc dù bị đánh phá ác liệt, tuyến đường Hồ Chí Minh trên bộ và trên biển vẫn được giữ vững và mở rộng, đưa hàng chục vạn cán bộ, chiến sĩ và hàng triệu tấn vũ khí, đạn dược vào chiến trường miền Nam.',
    images: ['/19.jpg', '/20.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=GK7Ts6wS5x4'
  },
  'mau-than-1': {
    title: 'Tổng tiến công và nổi dậy toàn miền',
    content: 'Đêm 30, rạng sáng mùng 1 Tết Mậu Thân 1968, quân dân ta đồng loạt tiến công và nổi dậy ở 37 thị xã, hàng trăm thị trấn, đánh thẳng vào các cơ quan đầu não của địch ở Sài Gòn, Huế...',
    images: ['/34.jpg', '/35.jpg', '/36.jpg', '/42.jpg'],
    articleUrl: 'https://www.qdnd.vn/50nam-tong-tien-cong-va-noi-day-xuan-mau-than1968/danh-gia-phan-tich/cuoc-tong-tien-cong-va-noi-day-tet-mau-than-1968-trong-tien-trinh-lich-su-viet-nam-532112',
    videoUrl: 'https://www.youtube.com/watch?v=4Ns3quhYoKQ'
  },
  'sai-gon-gia-dinh': {
    title: 'Mặt trận Sài Gòn - Gia Định',
    content: 'Sài Gòn - Gia Định được Trung ương Đảng xác định là hướng tiến công chủ yếu, nơi tập trung bộ máy quân sự, chính trị và hành chính của Mỹ và chính quyền Sài Gòn. Mục tiêu của ta là đánh thẳng vào các cơ quan đầu não nhằm gây chấn động mạnh về quân sự, chính trị và tâm lý.',
    images: ['/37.jpg', '/38.jpg']
  },
  'mau-than-2': {
    title: 'Làm phá sản "Chiến tranh cục bộ"',
    content: 'Thắng lợi của chiến dịch Mậu Thân đã làm lung lay ý chí xâm lược của Mỹ, buộc Tổng thống Johnson phải tuyên bố ngừng ném bom miền Bắc và thừa nhận sự phá sản của chiến lược "Chiến tranh cục bộ".',
    images: ['/39.jpg']
  },
  'mau-than-3': {
    title: 'Mỹ buộc phải ngồi vào bàn đàm phán',
    content: 'Sau đòn đau Mậu Thân, Mỹ buộc phải chấp nhận ngồi vào bàn đàm phán bốn bên tại Paris để giải quyết vấn đề hòa bình ở Việt Nam.',
    images: ['/40.jpg', '/41.jpg']
  },
  'chong-pha-hoai-2': {
    title: 'Chống chiến tranh phá hoại lần 2',
    content: 'Năm 1972, Mỹ tiến hành cuộc chiến tranh phá hoại miền Bắc lần thứ hai hòng cứu vãn chiến lược "Việt Nam hóa chiến tranh" đang có nguy cơ phá sản. Quân dân miền Bắc một lần nữa kiên cường đánh trả.',
    images: ['/21.jpg', '/22.jpg'],
    articleUrl: 'https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/lich-su-quan-doi-nhan-dan-viet-nam/thang-loi-ban-le-trong-tien-trinh-khang-chien-chong-my-cuu-nuoc-806023'
  },
  'dien-bien-phu-tren-khong': {
    title: 'Điện Biên Phủ trên không đập tan B-52',
    content: 'Trong 12 ngày đêm cuối năm 1972, quân dân Hà Nội, Hải Phòng đã đánh bại cuộc tập kích chiến lược bằng pháo đài bay B-52 của Mỹ, bắn rơi 84 máy bay, làm nên chiến thắng "Điện Biên Phủ trên không".',
    images: ['/23.jpg', '/24.jpg'],
    articleUrl: 'https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/chien-thang-ha-noi-dien-bien-phu-tren-khong-gop-phan-thay-doi-cuc-dien-chien-tranh-826017',
    videoUrl: 'https://www.youtube.com/watch?v=gzCFLH7HH24'
  },
  'hiep-dinh-paris': {
    title: 'Ký Hiệp định Paris (1/1973)',
    content: 'Ngày 27/1/1973, Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết. Mỹ buộc phải rút toàn bộ quân viễn chinh về nước, tạo thế thuận lợi cho ta tiến lên giải phóng hoàn toàn miền Nam.',
    images: ['/25.jpg'],
    articleUrl: 'https://special.nhandan.vn/hiepdinhparis/index.html',
    videoUrl: 'https://youtu.be/XWOa3P3QbRQ?si=ybZhXv9sq08pczk9'
  },
  'tay-nguyen': {
    title: 'Chiến dịch Tây Nguyên (Giải phóng Ban Mê Thuột)',
    content: 'Tháng 3/1975, ta mở chiến dịch Tây Nguyên, đánh đòn điểm huyệt vào Buôn Ma Thuột, làm rung chuyển toàn bộ hệ thống phòng ngự của địch ở miền Nam.',
    images: ['/26.jpg', '/27.jpg', '/28.jpg'],
    articleUrl: 'https://special.nhandan.vn/boi-canh-lich-su-cua-chien-dich-tay-nguyen/index.html',
    videoUrl: 'https://www.youtube.com/watch?si=x-miMz-hyEE7Tv8E&v=BdBzwFmpdxU&feature=youtu.be'
  },
  'hue-da-nang': {
    title: 'Chiến dịch Huế - Đà Nẵng',
    content: 'Chỉ trong thời gian ngắn cuối tháng 3/1975, quân ta giải phóng hoàn toàn Huế và Đà Nẵng, đập tan hệ thống phòng ngự kiên cố của địch ở miền Trung.',
    images: ['/29.jpg', '/30.jpg', '/31.jpg'],
    articleUrl: 'https://special.nhandan.vn/chien-dich-Hue-Da-Nang/index.html',
    videoUrl: 'https://youtu.be/RR13VkRLgEM?si=yK2axg5eggj5QCkc'
  },
  'chien-dich-ho-chi-minh': {
    title: 'Chiến dịch Hồ Chí Minh',
    content: 'Chiến dịch quyết chiến chiến lược lịch sử, đánh thẳng vào sào huyệt cuối cùng của địch tại Sài Gòn. Ngày 30/4/1975, cờ giải phóng tung bay trên Dinh Độc Lập, kết thúc thắng lợi cuộc kháng chiến chống Mỹ.',
    images: ['/32.jpg', '/33.jpg'],
    articleUrl: 'https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/lich-su-quan-doi-nhan-dan-viet-nam/chien-dich-ho-chi-minh-lich-su-ket-thuc-thang-loi-cuoc-khang-chien-chong-my-cuu-nuoc-807001',
    videoUrl: 'https://www.youtube.com/watch?si=YzvAN2beVuLcWW5F&v=YigIBVzv0Vw&feature=youtu.be'
  }
};

const BRANCHES = [
  {
    id: 'g1',
    title: 'Chiến tranh Cục bộ',
    period: '(1965 - 1967)',
    leaves: [
      { key: 'van-tuong', text: 'Trận Vạn Tường (1965) mở đầu' },
      { key: 'mua-kho', text: 'Bẻ gãy 2 cuộc phản công mùa khô' },
      { key: 'sinh-luc', text: 'Tiêu diệt sinh lực địch ở miền Nam' }
    ]
  },
  {
    id: 'g2',
    title: 'Hậu phương Miền Bắc',
    period: '(1965 - 1968)',
    leaves: [
      { key: 'ba-san-sang', text: 'Phong trào Ba sẵn sàng, Ba đảm đang' },
      { key: 'chong-pha-hoai-1', text: 'Chống chiến tranh phá hoại lần 1' },
      { key: 'chi-vien', text: 'Đảm bảo chi viện tối đa cho miền Nam' }
    ]
  },
  {
    id: 'g3',
    title: 'Bước ngoặt Mậu Thân',
    period: '(Năm 1968)',
    leaves: [
      { key: 'mau-than-1', text: 'Tổng tiến công và nổi dậy toàn miền' },
      { key: 'sai-gon-gia-dinh', text: 'Mặt trận Sài Gòn - Gia Định' },
      { key: 'mau-than-2', text: 'Làm phá sản "Chiến tranh cục bộ"' },
      { key: 'mau-than-3', text: 'Mỹ buộc phải ngồi vào bàn đàm phán' }
    ]
  },
  {
    id: 'g4',
    title: 'Quyết chiến chiến lược',
    period: '(1972 - 1973)',
    leaves: [
      { key: 'chong-pha-hoai-2', text: 'Chống chiến tranh phá hoại lần 2' },
      { key: 'dien-bien-phu-tren-khong', text: 'Điện Biên Phủ trên không' },
      { key: 'hiep-dinh-paris', text: 'Ký Hiệp định Paris (1/1973)' }
    ]
  },
  {
    id: 'g5',
    title: 'Đại thắng Mùa Xuân',
    period: '(Năm 1975)',
    leaves: [
      { key: 'tay-nguyen', text: 'Chiến dịch Tây Nguyên' },
      { key: 'hue-da-nang', text: 'Chiến dịch Huế - Đà Nẵng' },
      { key: 'chien-dich-ho-chi-minh', text: 'Chiến dịch Hồ Chí Minh' }
    ]
  }
];

export default function MindMap() {
  const [activeBranch, setActiveBranch] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleBranch = (id) => {
    setActiveBranch(activeBranch === id ? null : id);
  };

  const openModal = (key) => {
    setCurrentImageIndex(0);
    if (EVENT_DETAILS[key]) {
      setModalData(EVENT_DETAILS[key]);
    } else {
      setModalData({ 
        title: 'Đang cập nhật', 
        content: 'Chưa có thông tin cho mục này.',
        images: []
      });
    }
  };

  const prevImage = () => {
    if (modalData && modalData.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? modalData.images.length - 1 : prev - 1
      );
    }
  };

  const nextImage = () => {
    if (modalData && modalData.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === modalData.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="mm-wrapper">
      <div className="mm-header">
        <h2 className="mm-title">Sơ đồ Tư duy Tổng kết</h2>
        <p className="mm-subtitle">Hệ thống hóa kiến thức giai đoạn 1965 - 1975</p>
      </div>

      <div className="mm-canvas">
        {/* ROOT NODE */}
        <div className="mm-root">
          <h3>Đảng Lãnh Đạo Kháng Chiến</h3>
          <p>(1965 - 1975)</p>
        </div>

        {/* CONNECTORS */}
        <div className="mm-line-vertical-main"></div>
        <div className="mm-line-horizontal"></div>

        {/* BRANCHES ROW */}
        <div className="mm-branches-row">
          {BRANCHES.map(branch => (
            <div key={branch.id} className="mm-branch-col">
              <div className="mm-line-vertical-branch"></div>
              
              <div 
                className={`mm-branch-box ${activeBranch === branch.id ? 'active' : ''}`}
                onClick={() => toggleBranch(branch.id)}
              >
                <h3>{branch.title}</h3>
                <p>{branch.period}</p>
                <span className="mm-hint">Bấm để xem chi tiết</span>
              </div>

              {/* LEAVES (Conditional Rendering) */}
              {activeBranch === branch.id && (
                <div className="mm-leaves-container">
                  <div className="mm-line-vertical-leaf"></div>
                  {branch.leaves.map(leaf => (
                    <div 
                      key={leaf.key} 
                      className="mm-leaf-box"
                      onClick={() => openModal(leaf.key)}
                    >
                      {leaf.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP - Split Layout */}
      {modalData && (
        <div className="mm-modal-overlay" onClick={() => setModalData(null)}>
          <div className="mm-modal-content mm-modal-split" onClick={(e) => e.stopPropagation()}>
            <button className="mm-modal-close" onClick={() => setModalData(null)}>&times;</button>
            
            {/* LEFT SIDE: Image Carousel */}
            <div className="mm-modal-left">
              {modalData.images && modalData.images.length > 0 ? (
                <div className="mm-carousel">
                  <img 
                    src={modalData.images[currentImageIndex]} 
                    alt={modalData.title} 
                    className="mm-carousel-img" 
                  />
                  {modalData.images.length > 1 && (
                    <>
                      <button className="mm-carousel-btn mm-carousel-prev" onClick={prevImage}>&#10094;</button>
                      <button className="mm-carousel-btn mm-carousel-next" onClick={nextImage}>&#10095;</button>
                      <div className="mm-carousel-dots">
                        {modalData.images.map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`mm-dot ${idx === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(idx)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="mm-no-image">Chưa có hình ảnh</div>
              )}
            </div>

            {/* RIGHT SIDE: Text Content */}
            <div className="mm-modal-right">
              <div className="mm-modal-header">
                <h3 className="mm-modal-title">{modalData.title}</h3>
                {modalData.articleUrl && (
                  <a href={modalData.articleUrl} target="_blank" rel="noopener noreferrer" className="mm-link-btn article-btn">
                    Đọc bài báo
                  </a>
                )}
              </div>
              <p className="mm-modal-text">{modalData.content}</p>
              
              {modalData.videoUrl && (
                <div className="mm-modal-footer">
                  <a href={modalData.videoUrl} target="_blank" rel="noopener noreferrer" className="mm-link-btn video-btn">
                    <span className="play-icon">▶</span> Xem Video YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
