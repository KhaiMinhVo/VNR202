import React from 'react';
import './TeamTask.css';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Thành viên 1',
    role: 'Nhóm trưởng / Lập trình viên',
    tasks: [
      'Lên ý tưởng kịch bản tổng thể',
      'Thiết kế giao diện UI/UX (Figma)',
      'Lập trình tương tác React & Three.js'
    ],
    contribution: 25,
    avatar: 'A'
  },
  {
    id: 2,
    name: 'Thành viên 2',
    role: 'Biên tập viên nội dung',
    tasks: [
      'Tổng hợp tài liệu từ giáo trình',
      'Soạn thảo lời thoại & câu hỏi trắc nghiệm',
      'Kiểm duyệt độ chính xác lịch sử'
    ],
    contribution: 25,
    avatar: 'B'
  },
  {
    id: 3,
    name: 'Thành viên 3',
    role: 'Thiết kế 3D / Đồ họa',
    tasks: [
      'Tìm kiếm và tối ưu mô hình 3D',
      'Thiết kế hình ảnh 2D, chỉnh màu Photoshop',
      'Dàn dựng bối cảnh (Lighting & Camera)'
    ],
    contribution: 25,
    avatar: 'C'
  },
  {
    id: 4,
    name: 'Thành viên 4',
    role: 'Kiểm thử & Báo cáo',
    tasks: [
      'Test lỗi giao diện trên nhiều thiết bị',
      'Thu thập feedback người dùng',
      'Viết báo cáo tổng kết & AI Usage'
    ],
    contribution: 25,
    avatar: 'D'
  }
];

const TeamTask = () => {
  return (
    <section id="team-task" className="team-section">
      <div className="team-container">
        
        <div className="team-header">
          <span className="team-kicker">CỘNG SỰ & ĐÓNG GÓP</span>
          <h2 className="team-title">Đội Ngũ Phát Triển</h2>
          <p className="team-subtitle">
            Sự phối hợp nhịp nhàng giữa các thành viên là chìa khóa để kiến tạo nên trải nghiệm lịch sử tương tác đa chiều. Dưới đây là bảng phân công nhiệm vụ và tỷ lệ đóng góp của từng cá nhân.
          </p>
        </div>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-header">
                <div className="member-avatar">{member.avatar}</div>
                <div className="member-title-area">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
              
              <div className="member-tasks">
                <h4>Hạng mục đảm nhiệm:</h4>
                <ul>
                  {member.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>

              <div className="member-contribution">
                <div className="contrib-header">
                  <span>Mức độ hoàn thành & đóng góp</span>
                  <span className="contrib-percent">{member.contribution}%</span>
                </div>
                <div className="contrib-bar-bg">
                  <div 
                    className="contrib-bar-fill" 
                    style={{ width: `${member.contribution}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamTask;
