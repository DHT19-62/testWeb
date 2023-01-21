var button = document.querySelector("button");
var message = document.querySelector("h2");
button.addEventListener("click", goodLuck);

var messageArr = [
 "大吉大利 <p>Lots of luck and profits</p>",
  "心想事成 <p>May all your wishes come true</p>",
  "吉祥如意 <p>Good fortune according to your wishes</p>",
  "年年有余 <p>Surplus year-after-year</p>",
  "吉祥如意 <p>Good fortune according to your wishes</p>",
  "吉星高照 <p>Fortune will smile on you</p>",
  "精灵活泼 <p>A bright and lively spirit</p>",
  "恭喜发财 <p>Happiness and prosperity</p>",
  "工作顺利 <p>May your work go smoothly</p>",
  "事业有成 <p>Success in your career</p>",
  "步步高升 <p>Promotions at every step</p>",
  "生意兴隆 <p>Prosperous business</p>",
  "一帆风顺 <p>May your life go smoothly</p>",
  "学习进步 <p>Progress in studies</p>",
  "阖家欢乐 <p>Felicity of the whole family</p>",
  "阖家幸福 <p>Happiness for the whole family</p>"
]

function goodLuck() {
  message.innerHTML = messageArr[Math.floor(Math.random() * 16)];
}