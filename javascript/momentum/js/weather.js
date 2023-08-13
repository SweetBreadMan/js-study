function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you.")
}

// getCurrentPostion은 두개의 인자가 필요하며 앞에는 성공했을때 실행할 함수, 뒤에는 에러가 발생했을 때의 함수이다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)