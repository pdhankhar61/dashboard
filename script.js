let list = document.querySelectorAll('.navigation li');
let navigation = document.querySelector('.navigation');
let main= document.querySelector('.main');
let toggle=document.querySelector('.toggle');

toggle.addEventListener('click',function(){
navigation.classList.toggle('active');
main.classList.toggle('active');
})


function activeLink() {
	list.forEach((item) => item.classList.remove('hovered'));
	this.classList.add("hovered");
}

list.forEach((item) => (item.addEventListener('mouseover', activeLink)));