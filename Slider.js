let next = document.querySelector(".carousel .arrows .next");
let prev = document.querySelector(".carousel .arrows .prev");
let carousel =  document.querySelector(".carousel");
let listItems = document.querySelector(".carousel .list");
let thumbnail = document.querySelector(".carousel .thumbnail");
let runTimeout;
next.onclick = ()=>{
	let items = document.querySelectorAll(".carousel .list .item");
	let thumbItem = document.querySelectorAll(".thumbnail .thumb-item");
	listItems.appendChild(items[0]);
	thumbnail.appendChild(thumbItem[0]);
	carousel.classList.add("next");
	
	clearTimeout(runTimeout);
	runTimeout = setTimeout(()=>{
		carousel.classList.remove("next")
		}, 3000);
	
}
prev.onclick = ()=>{
	let items = document.querySelectorAll(".carousel .list .item");
	let thumbItem = document.querySelectorAll(".thumbnail .thumb-item");
	let length = items.length - 1;
	listItems.prepend(items[length]);
	thumbnail.prepend(thumbItem[length]);
	carousel.classList.add("prev");
	clearTimeout(runTimeout);
	runTimeout = setTimeout(()=>{
		carousel.classList.remove("prev")
		}, 3000);
}