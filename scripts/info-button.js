const yesBtn = document.getElementById('yesBtn');
yesBtn.addEventListener('click', () => {
  const surveyBlock = document.getElementsByClassName('survey-form')[0];
  surveyBlock.style.display = 'none';
  const dateInfo = document.getElementsByClassName('date-info')[0];
  dateInfo.style.display = 'block';
});