import React, { useState } from 'react';
import './MindMap.css';

const MindMap = () => {
  const [activeNode, setActiveNode] = useState(null);

  const toggleNode = (id) => {
    if (activeNode === id) {
      setActiveNode(null);
    } else {
      setActiveNode(id);
    }
  };

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
                  className={`node branch-node ${activeNode === 'g1' ? 'active' : ''}`}
                  onClick={() => toggleNode('g1')}
                >
                  <h3>Chiến tranh Cục bộ</h3>
                  <p>(1965 - 1967)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group ${activeNode === 'g1' ? 'show' : ''}`}>
                  <li><div className="node leaf-node">Trận Vạn Tường (1965) mở đầu</div></li>
                  <li><div className="node leaf-node">Bẻ gãy 2 cuộc phản công mùa khô</div></li>
                  <li><div className="node leaf-node">Tiêu diệt sinh lực địch ở miền Nam</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node ${activeNode === 'g2' ? 'active' : ''}`}
                  onClick={() => toggleNode('g2')}
                >
                  <h3>Hậu phương Miền Bắc</h3>
                  <p>(1965 - 1968)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group ${activeNode === 'g2' ? 'show' : ''}`}>
                  <li><div className="node leaf-node">Phong trào Ba sẵn sàng, Ba đảm đang</div></li>
                  <li><div className="node leaf-node">Chống chiến tranh phá hoại lần 1</div></li>
                  <li><div className="node leaf-node">Đảm bảo chi viện tối đa cho miền Nam</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node ${activeNode === 'g3' ? 'active' : ''}`}
                  onClick={() => toggleNode('g3')}
                >
                  <h3>Bước ngoặt Mậu Thân</h3>
                  <p>(Năm 1968)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group ${activeNode === 'g3' ? 'show' : ''}`}>
                  <li><div className="node leaf-node">Tổng tiến công và nổi dậy toàn miền</div></li>
                  <li><div className="node leaf-node">Làm phá sản "Chiến tranh cục bộ"</div></li>
                  <li><div className="node leaf-node">Buộc Mỹ phải ngồi vào bàn đàm phán Paris</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node ${activeNode === 'g4' ? 'active' : ''}`}
                  onClick={() => toggleNode('g4')}
                >
                  <h3>Việt Nam hóa chiến tranh</h3>
                  <p>(1969 - 1971)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group ${activeNode === 'g4' ? 'show' : ''}`}>
                  <li><div className="node leaf-node">Thực hiện Di chúc thiêng liêng của Bác Hồ</div></li>
                  <li><div className="node leaf-node">Đánh bại cuộc phản công Đường 9 - Nam Lào</div></li>
                  <li><div className="node leaf-node">Phá vỡ âm mưu "dùng người Việt đánh người Việt"</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node ${activeNode === 'g5' ? 'active' : ''}`}
                  onClick={() => toggleNode('g5')}
                >
                  <h3>Quyết chiến chiến lược</h3>
                  <p>(1972 - 1973)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group ${activeNode === 'g5' ? 'show' : ''}`}>
                  <li><div className="node leaf-node">Bảo vệ Thành cổ Quảng Trị (81 ngày đêm)</div></li>
                  <li><div className="node leaf-node">Điện Biên Phủ trên không đập tan B-52</div></li>
                  <li><div className="node leaf-node">Ký Hiệp định Paris (1/1973), Mỹ phải rút quân</div></li>
                </ul>
              </li>

              <li>
                <div 
                  className={`node branch-node ${activeNode === 'g6' ? 'active' : ''}`}
                  onClick={() => toggleNode('g6')}
                >
                  <h3>Đại thắng Mùa Xuân</h3>
                  <p>(Năm 1975)</p>
                  <span className="click-hint">Bấm để xem chi tiết</span>
                </div>
                <ul className={`leaf-group ${activeNode === 'g6' ? 'show' : ''}`}>
                  <li><div className="node leaf-node">Chiến dịch Tây Nguyên (Mở màn)</div></li>
                  <li><div className="node leaf-node">Chiến dịch Huế - Đà Nẵng (Đòn chia cắt)</div></li>
                  <li><div className="node leaf-node">Chiến dịch Hồ Chí Minh (Đòn quyết định toàn thắng)</div></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MindMap;
