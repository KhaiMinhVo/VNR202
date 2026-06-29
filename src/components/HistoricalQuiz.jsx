import React, { useState } from 'react';
import './HistoricalQuiz.css';

const questions = [
  {
    question: 'Chiến lược "Chiến tranh cục bộ" của Đế quốc Mỹ đã bị phá sản hoàn toàn bởi sự kiện lịch sử nào?',
    options: [
      'Chiến thắng Ấp Bắc (1963)',
      'Tổng tiến công và nổi dậy Xuân Mậu Thân (1968)',
      'Chiến thắng Điện Biên Phủ trên không (1972)',
      'Chiến dịch Tây Nguyên (1975)'
    ],
    correctAnswer: 1,
    explanation: 'Xuân Mậu Thân 1968 là đòn đánh bất ngờ làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ phải ngồi vào bàn đàm phán Paris.'
  },
  {
    question: 'Trận chiến 81 ngày đêm bảo vệ Thành cổ Quảng Trị diễn ra vào năm nào?',
    options: ['1968', '1971', '1972', '1975'],
    correctAnswer: 2,
    explanation: 'Diễn ra từ 28/6 đến 16/9/1972, đây là một trong những trận chiến khốc liệt và bi tráng nhất trong lịch sử.'
  },
  {
    question: 'Cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975 kết thúc thắng lợi bằng chiến dịch mang tên ai?',
    options: ['Chiến dịch Võ Nguyên Giáp', 'Chiến dịch Tây Nguyên', 'Chiến dịch Huế - Đà Nẵng', 'Chiến dịch Hồ Chí Minh'],
    correctAnswer: 3,
    explanation: 'Chiến dịch Hồ Chí Minh (26/4 - 30/4/1975) là chiến dịch quyết chiến chiến lược cuối cùng, giải phóng hoàn toàn miền Nam.'
  }
];

const HistoricalQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2 className="quiz-title">Thử Tài Lịch Sử</h2>
        <p className="quiz-subtitle">Kiểm tra kiến thức của bạn về giai đoạn 1965 - 1975</p>
      </div>

      {!showResult ? (
        <div className="quiz-card">
          <div className="question-count">
            <span>Câu hỏi {currentQuestion + 1}</span> / {questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => {
              let btnClass = 'option-btn';
              if (isAnswered) {
                if (index === questions[currentQuestion].correctAnswer) {
                  btnClass += ' correct';
                } else if (index === selectedAnswer) {
                  btnClass += ' wrong';
                }
              }

              return (
                <button
                  key={index}
                  className={btnClass}
                  onClick={() => handleAnswerClick(index)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="explanation-box">
              <p><strong>Giải thích:</strong> {questions[currentQuestion].explanation}</p>
              <button className="next-btn" onClick={handleNextQuestion}>
                {currentQuestion + 1 === questions.length ? 'Xem Kết Quả' : 'Câu Tiếp Theo'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="result-card">
          <h3 className="result-title">Hoàn Thành Nhiệm Vụ!</h3>
          <p className="result-score">
            Bạn trả lời đúng <span>{score}</span> trên tổng số <span>{questions.length}</span> câu hỏi.
          </p>
          <div className="result-message">
            {score === questions.length
              ? 'Tuyệt vời! Bạn có kiến thức lịch sử rất uyên thâm.'
              : score > 0
              ? 'Khá lắm! Bạn nắm được những sự kiện cốt lõi của dân tộc.'
              : 'Hãy xem lại bài thuyết trình ở trên để nắm vững kiến thức hơn nhé!'}
          </div>
          <button className="restart-btn" onClick={resetQuiz}>
            Chơi Lại
          </button>
        </div>
      )}
    </div>
  );
};

export default HistoricalQuiz;
