import React, { useState } from 'react';
import './InteractiveStory.css';

const storyData = {
  start: {
    text: "Năm 1971, giữa lúc cuộc kháng chiến chống Mỹ cứu nước đang bước vào giai đoạn cam go nhất. Bạn là một chiến sĩ lái xe tải trên tuyến đường Trường Sơn (Đường Hồ Chí Minh) huyền thoại. Đêm nay, tiểu đội nhận lệnh vận chuyển chuyến hàng vũ khí đặc biệt quan trọng vào chiến trường miền Nam.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Ho_Chi_Minh_trail.jpg",
    choices: [
      { text: "Bật đèn pha, đi thật nhanh để kịp thời gian", next: "lights_on" },
      { text: "Tắt đèn, đi mò trong đêm tối để ngụy trang", next: "night_drive" }
    ]
  },
  lights_on: {
    text: "Ánh đèn pha sáng rực giữa rừng già lập tức thu hút sự chú ý của máy bay do thám trinh sát địch. Chưa đầy 5 phút sau, bom B-52 rải thảm xuống tọa độ của bạn. Tuyến đường bị cắt đứt.\n\n[BÀI HỌC]: Trên đường Trường Sơn, quy tắc sống còn là 'Đi không dấu, nấu không khói, nói không tiếng'.",
    isEnding: true,
    choices: [
      { text: "Quay lại điểm xuất phát", next: "start" }
    ]
  },
  night_drive: {
    text: "Bạn tắt hết đèn pha, chỉ dán một lớp băng dính nhỏ hình 'mắt ếch' dưới gầm xe để nhìn thấy vệt đường lờ mờ. Xung quanh là bóng tối đặc quánh. Chạy được 20km, đột nhiên phía trước có tiếng nổ lớn, một đoạn đường đèo vừa bị bom sạt lở hoàn toàn.",
    choices: [
      { text: "Chờ đợi đội Công binh đến sửa đường", next: "wait_engineers" },
      { text: "Đánh lái băng qua con suối hiểm trở cạnh đó", next: "cross_river" }
    ]
  },
  cross_river: {
    text: "Ngầm suối vào mùa mưa nước chảy xiết cuồn cuộn. Xe tải nặng trĩu vũ khí bị sa lầy ngay giữa dòng. Nước dâng lên làm hỏng động cơ. Chuyến hàng không thể đến nơi đúng hẹn.\n\n[BÀI HỌC]: Địa hình Trường Sơn vô cùng hiểm trở, quyết định liều lĩnh có thể trả giá bằng cả mạng sống và nhiệm vụ.",
    isEnding: true,
    choices: [
      { text: "Quay lại điểm xuất phát", next: "start" }
    ]
  },
  wait_engineers: {
    text: "Bạn dũng cảm dừng xe lại, cùng 10 cô gái Lực lượng Thanh niên xung phong đang bám trụ tại ngã ba lao ra san lấp hố bom. Dưới trời mưa tầm tã và pháo sáng của địch, mặt đường được thông lại lúc 4 giờ sáng.",
    choices: [
      { text: "Tiếp tục tăng ga, vượt qua trọng điểm", next: "victory" }
    ]
  },
  victory: {
    text: "Trời vừa hửng sáng, chiếc xe tải đầy ắp vũ khí của bạn đã an toàn tiến vào trạm trung chuyển bí mật ở Tây Nguyên. Từ đây, số vũ khí này sẽ được đưa đến tận tay các chiến sĩ giải phóng quân.\n\n[HOÀN THÀNH NHIỆM VỤ]: Bạn đã góp phần nhỏ bé nhưng vĩ đại vào công cuộc chi viện của Hậu phương miền Bắc cho Tiền tuyến miền Nam. Đó chính là tinh thần 'Xẻ dọc Trường Sơn đi cứu nước'!",
    isEnding: true,
    isVictory: true,
    choices: [
      { text: "Trải nghiệm lại", next: "start" }
    ]
  }
};

const InteractiveStory = () => {
  const [currentScene, setCurrentScene] = useState('start');
  const [fade, setFade] = useState(false);

  const handleChoice = (nextSceneId) => {
    setFade(true);
    setTimeout(() => {
      setCurrentScene(nextSceneId);
      setFade(false);
    }, 400); // Wait for fade out
  };

  const scene = storyData[currentScene];

  return (
    <div className="story-container">
      <div className="story-header">
        <h2 className="story-title">Tiểu thuyết Tương tác</h2>
        <p className="story-subtitle">Nhật ký Trường Sơn - Hành trình chi viện</p>
      </div>

      <div className="story-board">
        <div className={`story-content ${fade ? 'fade-out' : 'fade-in'}`}>
          
          <div className={`story-text ${scene.isEnding ? (scene.isVictory ? 'text-victory' : 'text-gameover') : ''}`}>
            {scene.text.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="story-choices">
            {scene.choices.map((choice, index) => (
              <button 
                key={index} 
                className={`choice-btn ${scene.isEnding ? 'restart-choice' : ''}`}
                onClick={() => handleChoice(choice.next)}
              >
                {choice.text}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default InteractiveStory;
