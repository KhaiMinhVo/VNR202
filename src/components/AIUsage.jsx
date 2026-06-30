import React from 'react';
import './AIUsage.css';

const AIUsage = () => {
  return (
    <section id="ai-usage" className="ai-usage-section">
      <div className="ai-usage-container">
        
        <div className="ai-usage-header">
          <span className="ai-usage-kicker">PHỤ LỤC ĐẶC BIỆT</span>
          <h2 className="ai-usage-title">Báo Cáo Ứng Dụng AI</h2>
          <p className="ai-usage-subtitle">
            Minh bạch. Liêm chính học thuật. Trách nhiệm tuyệt đối. Báo cáo này định rõ ranh giới giữa sự hỗ trợ của Trí tuệ Nhân tạo và dấu ấn tri thức của con người trong toàn bộ vòng đời phát triển dự án.
          </p>
        </div>

        <div className="ai-usage-card">
          <h3 className="card-title">
            <span className="card-icon">⛨</span> 1. Cam Kết Liêm Chính & Trách Nhiệm
          </h3>
          <p className="card-meta">(Đáp ứng mục 4.2 & 4.4)</p>
          
          <div className="card-content-stack">
            <div className="content-block">
              <h4>CAM KẾT CỐT LÕI</h4>
              <p>Nhóm khẳng định AI chỉ đóng vai trò là trợ lý hỗ trợ xử lý dữ liệu thô. <strong>Không để AI làm thay hoàn toàn</strong>. Sinh viên là người trực tiếp xây dựng logic, thiết kế kiến trúc và quyết định nội dung của sản phẩm cuối cùng.</p>
            </div>
            
            <div className="content-block">
              <h4>KIỂM CHỨNG THÔNG TIN</h4>
              <p>Mọi nội dung do AI sinh ra (đặc biệt là tóm tắt lý luận chính trị) đều được đối chiếu trực tiếp với <strong>Giáo trình LLCT chính thống</strong> của trường. Nhóm chịu trách nhiệm 100% về độ chính xác của thông tin.</p>
            </div>
            
            <div className="content-block">
              <h4>PHÂN ĐỊNH RÕ RÀNG</h4>
              <p>AI tạo ra tài nguyên thô (model 3D, text, ảnh). Sinh viên chịu trách nhiệm chỉnh sửa (optimize mesh 3D, cắt gọt nội dung, fix bug code) để tích hợp vào website.</p>
            </div>
          </div>
        </div>

        <div className="ai-usage-card">
          <h3 className="card-title">
            <span className="card-icon">⚡</span> 2. Ứng Dụng Sáng Tạo
          </h3>
          <p className="card-meta">(Đáp ứng mục 4.3)</p>
          
          <div className="card-content-grid">
            <div className="content-block">
              <h4>TÓM TẮT & KỊCH BẢN</h4>
              <p>Dùng AI rút gọn giáo trình đồ sộ thành key-points. Nhóm dựa vào dàn ý đó để tự viết kịch bản tương tác và biên soạn bộ câu hỏi trắc nghiệm (quiz).</p>
            </div>
            
            <div className="content-block">
              <h4>TÀI NGUYÊN 3D GỐC</h4>
              <p>Tự sinh model 3D thô bằng AI (không copy trên mạng). Sau đó, sinh viên tự tay thêm texture, chỉnh sửa ánh sáng để đưa vào môi trường web (Three.js).</p>
            </div>
            
            <div className="content-block">
              <h4>PAIR-PROGRAMMING</h4>
              <p>AI gợi ý các đoạn code lặp lại (boilerplate). Nhóm nắm giữ phần thiết kế kiến trúc, xử lý luồng dữ liệu (state management) và sửa lỗi logic.</p>
            </div>
          </div>
        </div>

        <div className="ai-usage-tools-header">
          <h3>3. Bảng Phân Định Công Cụ AI</h3>
          <p className="card-meta">(Đáp ứng mục 4.1)</p>
        </div>

        <div className="tools-list">
          
          <div className="tool-row">
            <div className="tool-info">
              <span className="tool-icon">📖</span>
              <span className="tool-name">NotebookLM</span>
            </div>
            <div className="tool-details">
              <div className="tool-col ai-col">
                <h5>VAI TRÒ CỦA AI (INPUT THÔ)</h5>
                <p>Tóm tắt slide giáo trình của trường thành các từ khóa, ý chính.</p>
              </div>
              <div className="tool-col human-col">
                <h5>🧑‍🎓 SINH VIÊN XỬ LÝ (HOÀN THIỆN)</h5>
                <p>Đối chiếu với giáo trình gốc. Biên tập lại thành câu thoại ngắn gọn. Tự biên soạn lại câu hỏi quiz để đảm bảo độ khó.</p>
              </div>
            </div>
          </div>

          <div className="tool-row">
            <div className="tool-info">
              <span className="tool-icon">{'</>'}</span>
              <span className="tool-name">Antigravity</span>
            </div>
            <div className="tool-details">
              <div className="tool-col ai-col">
                <h5>VAI TRÒ CỦA AI (INPUT THÔ)</h5>
                <p>Gợi ý cú pháp, viết nhanh boilerplate code trong lúc lập trình.</p>
              </div>
              <div className="tool-col human-col">
                <h5>🧑‍🎓 SINH VIÊN XỬ LÝ (HOÀN THIỆN)</h5>
                <p>Review toàn bộ logic. Cấu hình các thông số Three.js, xử lý các lỗi tương tác (click, hover, state).</p>
              </div>
            </div>
          </div>

          <div className="tool-row">
            <div className="tool-info">
              <span className="tool-icon">🧊</span>
              <span className="tool-name">Tencent 3D</span>
            </div>
            <div className="tool-details">
              <div className="tool-col ai-col">
                <h5>VAI TRÒ CỦA AI (INPUT THÔ)</h5>
                <p>Tạo file 3D thô (base mesh) cho các vật thể trong môi trường.</p>
              </div>
              <div className="tool-col human-col">
                <h5>🧑‍🎓 SINH VIÊN XỬ LÝ (HOÀN THIỆN)</h5>
                <p>Giảm dung lượng lưới (optimize mesh), gắn texture và cấu hình hiệu ứng ánh sáng trên web.</p>
              </div>
            </div>
          </div>

          <div className="tool-row">
            <div className="tool-info">
              <span className="tool-icon">✨</span>
              <span className="tool-name">Gemini</span>
            </div>
            <div className="tool-details">
              <div className="tool-col ai-col">
                <h5>VAI TRÒ CỦA AI (INPUT THÔ)</h5>
                <p>Tạo hình ảnh 2D, texture bề mặt (VD: vân gỗ, kim loại).</p>
              </div>
              <div className="tool-col human-col">
                <h5>🧑‍🎓 SINH VIÊN XỬ LÝ (HOÀN THIỆN)</h5>
                <p>Dùng Photoshop cắt nền, chỉnh màu đồng bộ với thiết kế UI tổng thể của dự án.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AIUsage;
