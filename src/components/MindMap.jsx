import React, { useState } from 'react';
import './MindMap.css';

const EVENT_DETAILS = {
  'van-tuong': {
    title: 'Trận Vạn Tường (1965) mở đầu',
    content: 'Trận Vạn Tường diễn ra vào tháng 8/1965 tại Quảng Ngãi. Đây là đòn phủ đầu giáng vào quân viễn chinh Mỹ, chứng minh quân dân miền Nam hoàn toàn có khả năng đánh bại ưu thế tuyệt đối về hỏa lực và binh khí kỹ thuật của đế quốc Mỹ. Trận này được coi là "Ấp Bắc" đối với quân Mỹ.',
    image: '/scene_1965.jpg'
  },
  'mua-kho': {
    title: 'Bẻ gãy 2 cuộc phản công mùa khô',
    content: 'Mỹ mở hai cuộc phản công chiến lược mùa khô (1965-1966 và 1966-1967) với hàng chục vạn quân Mỹ và chư hầu nhằm mục tiêu "tìm diệt" quân chủ lực của ta và "bình định" miền Nam. Tuy nhiên, mọi nỗ lực của chúng đều bị quân dân ta bẻ gãy, tổn thất nặng nề.',
    image: '/scene_1968.jpg'
  },
  'sinh-luc': {
    title: 'Tiêu diệt sinh lực địch ở miền Nam',
    content: 'Quân dân ta liên tục quấy rối, đánh tỉa, và tổ chức các trận đánh lớn nhỏ khắp các chiến trường, làm hao mòn nghiêm trọng sinh lực địch, khiến chúng không thể thực hiện được mục tiêu chiến lược đề ra.',
    image: '/scene_1975.jpg'
  },
  'ba-san-sang': {
    title: 'Phong trào Ba sẵn sàng, Ba đảm đang',
    content: 'Phong trào "Ba sẵn sàng" của thanh niên và "Ba đảm đang" của phụ nữ miền Bắc đã dấy lên một cao trào thi đua yêu nước sôi nổi, chi viện sức người sức của khổng lồ cho tiền tuyến miền Nam.',
    image: '/scene_north.jpg'
  },
  'chong-pha-hoai-1': {
    title: 'Chống chiến tranh phá hoại lần 1',
    content: 'Từ 1965 đến 1968, Mỹ tiến hành chiến tranh phá hoại miền Bắc bằng không quân và hải quân. Miền Bắc vừa sản xuất vừa chiến đấu, bắn rơi hàng ngàn máy bay địch, bảo vệ vững chắc hậu phương.',
    image: '/scene_north.jpg'
  },
  'chi-vien': {
    title: 'Đảm bảo chi viện tối đa cho miền Nam',
    content: 'Mặc dù bị đánh phá ác liệt, tuyến đường Hồ Chí Minh trên bộ và trên biển vẫn được giữ vững và mở rộng, đưa hàng chục vạn cán bộ, chiến sĩ và hàng triệu tấn vũ khí, đạn dược vào chiến trường miền Nam.',
    image: '/scene_north.jpg'
  },
  'mau-than-1': {
    title: 'Tổng tiến công và nổi dậy toàn miền',
    content: 'Đêm 30, rạng sáng mùng 1 Tết Mậu Thân 1968, quân dân ta đồng loạt tiến công và nổi dậy ở 37 thị xã, hàng trăm thị trấn, đánh thẳng vào các cơ quan đầu não của địch ở Sài Gòn, Huế...',
    image: '/scene_1968.jpg'
  },
  'mau-than-2': {
    title: 'Làm phá sản "Chiến tranh cục bộ"',
    content: 'Thắng lợi của chiến dịch Mậu Thân đã làm lung lay ý chí xâm lược của Mỹ, buộc Tổng thống Johnson phải tuyên bố ngừng ném bom miền Bắc và thừa nhận sự phá sản của chiến lược "Chiến tranh cục bộ".',
    image: '/scene_1968.jpg'
  },
  'mau-than-3': {
    title: 'Mỹ buộc phải ngồi vào bàn đàm phán',
    content: 'Sau đòn đau Mậu Thân, Mỹ buộc phải chấp nhận ngồi vào bàn đàm phán bốn bên tại Paris để giải quyết vấn đề hòa bình ở Việt Nam.',
    image: '/scene_1968.jpg'
  },
  'chong-pha-hoai-2': {
    title: 'Chống chiến tranh phá hoại lần 2',
    content: 'Năm 1972, Mỹ tiến hành cuộc chiến tranh phá hoại miền Bắc lần thứ hai hòng cứu vãn chiến lược "Việt Nam hóa chiến tranh" đang có nguy cơ phá sản. Quân dân miền Bắc một lần nữa kiên cường đánh trả.',
    image: '/scene_1972.jpg'
  },
  'dien-bien-phu-tren-khong': {
    title: 'Điện Biên Phủ trên không đập tan B-52',
    content: 'Trong 12 ngày đêm cuối năm 1972, quân dân Hà Nội, Hải Phòng đã đánh bại cuộc tập kích chiến lược bằng pháo đài bay B-52 của Mỹ, bắn rơi 84 máy bay, làm nên chiến thắng "Điện Biên Phủ trên không".',
    image: '/scene_1972.jpg'
  },
  'hiep-dinh-paris': {
    title: 'Ký Hiệp định Paris (1/1973)',
    content: 'Ngày 27/1/1973, Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết. Mỹ buộc phải rút toàn bộ quân viễn chinh về nước, tạo thế thuận lợi cho ta tiến lên giải phóng hoàn toàn miền Nam.',
    image: '/scene_1972.jpg'
  },
  'tay-nguyen': {
    title: 'Chiến dịch Tây Nguyên (Giải phóng Ban Mê Thuột)',
    content: 'Tháng 3/1975, ta mở chiến dịch Tây Nguyên, đánh đòn điểm huyệt vào Buôn Ma Thuột, làm rung chuyển toàn bộ hệ thống phòng ngự của địch ở miền Nam.',
    image: '/scene_1975.jpg'
  },
  'hue-da-nang': {
    title: 'Chiến dịch Huế - Đà Nẵng',
    content: 'Chỉ trong thời gian ngắn cuối tháng 3/1975, quân ta giải phóng hoàn toàn Huế và Đà Nẵng, đập tan hệ thống phòng ngự kiên cố của địch ở miền Trung.',
    image: '/scene_1975.jpg'
  },
  'chien-dich-ho-chi-minh': {
    title: 'Chiến dịch Hồ Chí Minh',
    content: 'Chiến dịch quyết chiến chiến lược lịch sử, đánh thẳng vào sào huyệt cuối cùng của địch tại Sài Gòn. Ngày 30/4/1975, cờ giải phóng tung bay trên Dinh Độc Lập, kết thúc thắng lợi cuộc kháng chiến chống Mỹ.',
    image: '/scene_1975.jpg'
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

// Force HMR reload 1
export default function MindMap() {
  const [activeBranch, setActiveBranch] = useState(null);
  const [modalData, setModalData] = useState(null);

  const toggleBranch = (id) => {
    setActiveBranch(activeBranch === id ? null : id);
  };

  const openModal = (key) => {
    if (EVENT_DETAILS[key]) {
      setModalData(EVENT_DETAILS[key]);
    } else {
      setModalData({ 
        title: 'Đang cập nhật', 
        content: 'Chưa có thông tin cho mục này.',
        image: null
      });
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

      {/* MODAL POPUP */}
      {modalData && (
        <div className="mm-modal-overlay" onClick={() => setModalData(null)}>
          <div className="mm-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="mm-modal-close" onClick={() => setModalData(null)}>&times;</button>
            <h3 className="mm-modal-title">{modalData.title}</h3>
            {modalData.image && (
              <div className="mm-modal-image-wrapper">
                <img src={modalData.image} alt={modalData.title} className="mm-modal-img" />
              </div>
            )}
            <p className="mm-modal-text">{modalData.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
