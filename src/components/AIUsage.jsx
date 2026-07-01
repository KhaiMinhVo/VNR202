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
          
          <div className="card-content-stack">
            <div className="content-block">
              <h4>CAM KẾT CỐT LÕI</h4>
              <p>Nhóm khẳng định AI chỉ đóng vai trò là trợ lý hỗ trợ xử lý dữ liệu thô. <strong>Không để AI làm thay hoàn toàn</strong>. Sinh viên là người trực tiếp xây dựng logic, thiết kế kiến trúc và quyết định nội dung của sản phẩm cuối cùng.</p>
            </div>
            
            <div className="content-block">
              <h4>KIỂM CHỨNG THÔNG TIN</h4>
              <p>Mọi nội dung do AI sinh ra (đặc biệt là tóm tắt lý luận chính trị) đều được đối chiếu trực tiếp với <strong>Giáo trình LLCT chính thống</strong> của trường. Nhóm chịu trách nhiệm 100% về độ chính xác của thông tin lịch sử.</p>
            </div>
            
            <div className="content-block">
              <h4>PHÂN ĐỊNH RÕ RÀNG</h4>
              <p>AI hỗ trợ sinh ý tưởng thiết kế, dàn ý nội dung và code mẫu. Sinh viên chịu trách nhiệm biên tập lại nội dung, tối ưu mã nguồn, fix bug giao diện và hoàn thiện trải nghiệm UX/UI.</p>
            </div>
          </div>
        </div>

        <div className="ai-usage-card">
          <h3 className="card-title">
            <span className="card-icon">⚡</span> 2. Ứng Dụng Sáng Tạo
          </h3>
          
          <div className="card-content-grid">
            <div className="content-block">
              <h4>TÓM TẮT & BIÊN TẬP NỘI DUNG</h4>
              <p>Dùng AI rút gọn giáo trình đồ sộ thành key-points. Nhóm dựa vào dàn ý đó để biên soạn lại nội dung tóm tắt sự kiện cho Sơ đồ tư duy sao cho ngắn gọn, dễ hiểu.</p>
            </div>
            
            <div className="content-block">
              <h4>THIẾT KẾ GIAO DIỆN CỔ ĐIỂN</h4>
              <p>Nhờ AI gợi ý dải màu (palette) và phông chữ phù hợp bối cảnh lịch sử. Sinh viên áp dụng bằng CSS thuần, tinh chỉnh độ tương phản, đổ bóng (shadow) để chữ nổi bật trên nền đen.</p>
            </div>
            
            <div className="content-block">
              <h4>PAIR-PROGRAMMING</h4>
              <p>AI gợi ý các đoạn code lặp lại (boilerplate code) cho React components. Nhóm nắm giữ phần thiết kế kiến trúc, xử lý state luồng dữ liệu (carousel, modal) và sửa lỗi logic.</p>
            </div>
          </div>
        </div>

        <div className="ai-usage-tools-header">
          <h3>3. Bảng Phân Định Công Cụ AI</h3>
        </div>

        <div className="tools-list">
          
          <div className="tool-row">
            <div className="tool-info">
              <span className="tool-icon">📖</span>
              <span className="tool-name">NotebookLM & ChatGPT</span>
            </div>
            <div className="tool-details">
              <div className="tool-col ai-col">
                <h5>VAI TRÒ CỦA AI (INPUT THÔ)</h5>
                <p>Tóm tắt khối lượng lớn dữ liệu lịch sử từ slide giáo trình thành các mốc thời gian, từ khóa cốt lõi.</p>
              </div>
              <div className="tool-col human-col">
                <h5>🧑‍🎓 SINH VIÊN XỬ LÝ (HOÀN THIỆN)</h5>
                <p>Đối chiếu tính xác thực với tài liệu gốc. Biên tập lại ngôn từ đảm bảo tính trang trọng, chính xác và phân chia cấu trúc cho Sơ đồ tư duy.</p>
              </div>
            </div>
          </div>

          <div className="tool-row">
            <div className="tool-info">
              <span className="tool-icon">{'</>'}</span>
              <span className="tool-name">Antigravity / AI Coding Assistants</span>
            </div>
            <div className="tool-details">
              <div className="tool-col ai-col">
                <h5>VAI TRÒ CỦA AI (INPUT THÔ)</h5>
                <p>Gợi ý cú pháp React, CSS cơ bản, hỗ trợ viết boilerplate code và phát hiện lỗi cú pháp (syntax errors).</p>
              </div>
              <div className="tool-col human-col">
                <h5>🧑‍🎓 SINH VIÊN XỬ LÝ (HOÀN THIỆN)</h5>
                <p>Review toàn bộ logic code. Trực tiếp căn chỉnh CSS responsive, thiết kế UI/UX popup, xử lý hiệu ứng chuyển cảnh và vòng đời component.</p>
              </div>
            </div>
          </div>

          <div className="tool-row">
            <div className="tool-info">
              <span className="tool-icon">✨</span>
              <span className="tool-name">Gemini / Midjourney</span>
            </div>
            <div className="tool-details">
              <div className="tool-col ai-col">
                <h5>VAI TRÒ CỦA AI (INPUT THÔ)</h5>
                <p>Khôi phục, làm nét hoặc sinh ra một số hình ảnh nền minh họa bối cảnh lịch sử (khi nguồn tư liệu quá mờ).</p>
              </div>
              <div className="tool-col human-col">
                <h5>🧑‍🎓 SINH VIÊN XỬ LÝ (HOÀN THIỆN)</h5>
                <p>Tinh chỉnh màu sắc, độ sáng tối (dark overlay) bằng CSS để đảm bảo khả năng đọc chữ tốt trên web, cắt ghép cho khớp tỷ lệ khung hình.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AIUsage;
