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
  'chien-dich-ho-chi-minh': {
    title: 'Chiến dịch Hồ Chí Minh',
    content: 'Chiến dịch quyết chiến chiến lược lịch sử, đánh thẳng vào sào huyệt cuối cùng của địch tại Sài Gòn. Ngày 30/4/1975, cờ giải phóng tung bay trên Dinh Độc Lập, kết thúc thắng lợi cuộc kháng chiến chống Mỹ.',
    image: '/scene_1975.jpg'
  }
};

const MindMap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [modalData, setModalData] = useState(null);

  const toggleNode = (id) => {
    if (activeNode === id) {
      setActiveNode(null);
    } else {
      setActiveNode(id);
    }
  };

  const openModal = (key, title) => {
    if (EVENT_DETAILS[key]) {
      setModalData(EVENT_DETAILS[key]);
    } else {
      setModalData({ 
        title: title, 
        content: 'Đang cập nhật thông tin chi tiết và hình ảnh tư liệu cho sự kiện lịch sử này...',
        image: null
      });
    }
  };

  const closeModal = () => setModalData(null);

  return (
    <div className="mindmap-container">
      <div className="mindmap-header">
        <h2 className="mindmap-title">Sơ đồ Tư duy Tổng kết</h2>
        <p className="mindmap-subtitle">Hệ thống hóa kiến thức giai đoạn 1965 - 1975</p>
      </div>

      <div className="tree-diagram">
        <ul>
          <li>
            <div className="node root-node">
              <h3>Đảng Lãnh Đạo Kháng Chiến</h3>
              <p>(1965 - 1975)</p>
            </div>
            <ul>
              <li>
                <div 
                  className={`node branch-node \${activeNode === 'g1' ? 'active' : ''}`}
                  onClick={() => toggleNode('g1')}
                >
                  <h3>Chiến tranh Cục bộ</h3>
                  <p>(1965 - 1967)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group \${activeNode === 'g1' ? 'show' : ''}`}>
                  <li onClick={() => openModal('van-tuong', 'Trận Vạn Tường (1965) mở đầu')}><div className="node leaf-node interactive">Trận Vạn Tường (1965) mở đầu</div></li>
                  <li onClick={() => openModal('mua-kho', 'Bẻ gãy 2 cuộc phản công mùa khô')}><div className="node leaf-node interactive">Bẻ gãy 2 cuộc phản công mùa khô</div></li>
                  <li onClick={() => openModal('sinh-luc', 'Tiêu diệt sinh lực địch ở miền Nam')}><div className="node leaf-node interactive">Tiêu diệt sinh lực địch ở miền Nam</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node \${activeNode === 'g2' ? 'active' : ''}`}
                  onClick={() => toggleNode('g2')}
                >
                  <h3>Hậu phương Miền Bắc</h3>
                  <p>(1965 - 1968)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group \${activeNode === 'g2' ? 'show' : ''}`}>
                  <li onClick={() => openModal('ba-san-sang', 'Phong trào Ba sẵn sàng, Ba đảm đang')}><div className="node leaf-node interactive">Phong trào Ba sẵn sàng, Ba đảm đang</div></li>
                  <li onClick={() => openModal('chong-pha-hoai-1', 'Chống chiến tranh phá hoại lần 1')}><div className="node leaf-node interactive">Chống chiến tranh phá hoại lần 1</div></li>
                  <li onClick={() => openModal('chi-vien', 'Đảm bảo chi viện tối đa cho miền Nam')}><div className="node leaf-node interactive">Đảm bảo chi viện tối đa cho miền Nam</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node \${activeNode === 'g3' ? 'active' : ''}`}
                  onClick={() => toggleNode('g3')}
                >
                  <h3>Bước ngoặt Mậu Thân</h3>
                  <p>(Năm 1968)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group \${activeNode === 'g3' ? 'show' : ''}`}>
                  <li onClick={() => openModal('mau-than-1', 'Tổng tiến công và nổi dậy toàn miền')}><div className="node leaf-node interactive">Tổng tiến công và nổi dậy toàn miền</div></li>
                  <li onClick={() => openModal('mau-than-2', 'Làm phá sản "Chiến tranh cục bộ"')}><div className="node leaf-node interactive">Làm phá sản "Chiến tranh cục bộ"</div></li>
                  <li onClick={() => openModal('dam-phan', 'Buộc Mỹ phải ngồi vào bàn đàm phán Paris')}><div className="node leaf-node interactive">Buộc Mỹ phải ngồi vào bàn đàm phán Paris</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node \${activeNode === 'g4' ? 'active' : ''}`}
                  onClick={() => toggleNode('g4')}
                >
                  <h3>Việt Nam hóa chiến tranh</h3>
                  <p>(1969 - 1971)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group \${activeNode === 'g4' ? 'show' : ''}`}>
                  <li onClick={() => openModal('di-chuc', 'Thực hiện Di chúc thiêng liêng của Bác Hồ')}><div className="node leaf-node interactive">Thực hiện Di chúc thiêng liêng của Bác Hồ</div></li>
                  <li onClick={() => openModal('duong-9', 'Đánh bại cuộc phản công Đường 9 - Nam Lào')}><div className="node leaf-node interactive">Đánh bại cuộc phản công Đường 9 - Nam Lào</div></li>
                  <li onClick={() => openModal('pha-vo-am-muu', 'Phá vỡ âm mưu "dùng người Việt đánh người Việt"')}><div className="node leaf-node interactive">Phá vỡ âm mưu "dùng người Việt đánh người Việt"</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node \${activeNode === 'g5' ? 'active' : ''}`}
                  onClick={() => toggleNode('g5')}
                >
                  <h3>Quyết chiến chiến lược</h3>
                  <p>(1972 - 1973)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group \${activeNode === 'g5' ? 'show' : ''}`}>
                  <li onClick={() => openModal('thanh-co', 'Bảo vệ Thành cổ Quảng Trị (81 ngày đêm)')}><div className="node leaf-node interactive">Bảo vệ Thành cổ Quảng Trị (81 ngày đêm)</div></li>
                  <li onClick={() => openModal('dien-bien-phu-tren-khong', 'Điện Biên Phủ trên không đập tan B-52')}><div className="node leaf-node interactive">Điện Biên Phủ trên không đập tan B-52</div></li>
                  <li onClick={() => openModal('hiep-dinh-paris', 'Ký Hiệp định Paris (1/1973), Mỹ phải rút quân')}><div className="node leaf-node interactive">Ký Hiệp định Paris (1/1973), Mỹ phải rút quân</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node \${activeNode === 'g6' ? 'active' : ''}`}
                  onClick={() => toggleNode('g6')}
                >
                  <h3>Đại thắng Mùa Xuân</h3>
                  <p>(Năm 1975)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group \${activeNode === 'g6' ? 'show' : ''}`}>
                  <li onClick={() => openModal('tay-nguyen', 'Chiến dịch Tây Nguyên (Mở màn)')}><div className="node leaf-node interactive">Chiến dịch Tây Nguyên (Mở màn)</div></li>
                  <li onClick={() => openModal('hue-da-nang', 'Chiến dịch Huế - Đà Nẵng (Đòn chia cắt)')}><div className="node leaf-node interactive">Chiến dịch Huế - Đà Nẵng (Đòn chia cắt)</div></li>
                  <li onClick={() => openModal('chien-dich-ho-chi-minh', 'Chiến dịch Hồ Chí Minh (Đòn quyết định toàn thắng)')}><div className="node leaf-node interactive">Chiến dịch Hồ Chí Minh (Đòn quyết định toàn thắng)</div></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* MODAL POPUP */}
      {modalData && (
        <div className="mindmap-modal-overlay" onClick={closeModal}>
          <div className="mindmap-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="mindmap-modal-close" onClick={closeModal}>&times;</button>
            <h3 className="mindmap-modal-title">{modalData.title}</h3>
            {modalData.image && (
              <div className="mindmap-modal-image-wrapper">
                <img src={modalData.image} alt={modalData.title} className="mindmap-modal-image" />
              </div>
            )}
            <p className="mindmap-modal-text">{modalData.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MindMap;
