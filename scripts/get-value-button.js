const timeBtn = document.getElementById('btnDateTime');
timeBtn.addEventListener('click', () => {
  const dateTime = document.getElementById('dateTimeValue');
  dateTime.style.display = 'block';
  timeBtn.style.display = 'none';
});

const placeBtn = document.getElementById('btnDatePlace');
placeBtn.addEventListener('click', () => {
  const datePlace = document.getElementById('datePlaceValue');
  datePlace.style.display = 'block';
  placeBtn.style.display = 'none';
});

const dresscodeBtn = document.getElementById('btnDateDresscode');
dresscodeBtn.addEventListener('click', () => {
  const dateDresscode = document.getElementById('dateDresscodeValue');
  dateDresscode.style.display = 'block';
  dresscodeBtn.style.display = 'none';
});

const thingsBtn = document.getElementById('btnDateThings');
thingsBtn.addEventListener('click', () => {
  const dateThings = document.getElementById('dateThingsValue');
  dateThings.style.display = 'block';
  thingsBtn.style.display = 'none';
});