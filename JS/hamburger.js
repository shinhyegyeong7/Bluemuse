//코드 자체는 특정 요소를 클릭하면, active라는 클래스를 붙였다가 땠다가 하는 코드


const menuOpen = document.querySelector(".hamburger");
// 클래스명이 menu_open인 요소를 찾음. 처음 클릭할 대상 선택자 넣기(햄버거버튼 모양)
const menuClose = document.querySelector(".close");
// 클래스명이 menu_close인 요소를 찾음. 종료시에 클릭할 대상 선택자 넣기(X모양 버튼)
const gnb = document.querySelector(".gnb");
//active라는 클래스가 붙을 대상을 찾음. 없어졌다가 나타나야 할 대상 선택자 넣기

menuOpen.addEventListener("click", function () {
    gnb.classList.add("active");
});
//menuOpen을 클릭하면 #gnb에 active 클래스를 붙임

menuClose.addEventListener("click", function () {
    gnb.classList.remove("active");
});//menu_close를 클릭하면 #gnb에 active 클래스를 땜

