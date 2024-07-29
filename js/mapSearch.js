//하단 디테일 박스 숨김 및 보임 기능

// const detailguide = document.querySelector('.detail');
// const guideIcon = document.querySelector('guide i');
// const detailBox = document.querySelector('.detail_box');
// const detailHeight = detailBox.offsetHeight;

// detailBox.style.bottom = -detailHeight + 'px';

// detailBox.style.bottom = 0;

// detailguide.addEventListener('click', function () {
//   this.classList.toggle('active');

//   if (this.classList.contains('active')) {
//     guideIcon.setAttribute('class', 'ri-arrow-drop-down-line');
//     detailBox.style.bottom = 0;
//   } else {
//     guideIcon.setAttribute('class', 'ri-arrow-drop-up-line');
//     detailBox.style.bottom = -detailHeight + 'px';
//   }
// });
console.log(data);
const currentData = data.records.filter((item) => {
  return (
    item.데이터기준일자.split('-')[0] >= '2023' &&
    item.데이터기준일자.split('-')[1] >= '10' &&
    item.데이터기준일자.split('-')[2] >= '3'
  );
});
console.log(currentData);

//네이버 지도 앱 불러오는 api
navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  //console.log(lat, lng);

  startLenderMap(lat, lng);
});

function startLenderMap(lat, lng) {
  var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(lat, lng),
    zoom: 10,
  });

  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(lat, lng),
    map: map,
  });

  currentData.forEach((item) => {
    let latlng = new naver.maps.LatLng(item.위도, item.경도);
    let bounds = map.getBounds(); //map.getBounds() 재확인

    var marker = new naver.maps.Marker({
      position: latlng,
      map: map,
    });

    let infoWindow = new naver.maps.InfoWindow({});
  });
}

//var map = new naver.maps.Map('map', mapOptions);

//***구조분해 할당***

const searchTxt = document.querySelector('#sT');

console.log(searchTxt.value);

const searchBtn = document.querySelector('.searchBtn');

const onInput = (event) => {
  word = event.target.value;
  console.log(searchTxt);
};

const onClick = () => {
  let word = searchTxt;
};

searchBtn.addEventListener('click', onClick);
