const toggleMenu = () => {
	let menuToggle = document.querySelector('.toggle');
	let navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active')
	navigation.classList.toggle('active')
}

// Tabs
document.querySelectorAll(".controls button").forEach(
	button => {
		button.addEventListener("click", (ev) => {
			const parent = button.parentNode;
			const granParent = parent.parentNode;
			const container = granParent.querySelector(".tabs-container");
			const childrenList = Array.from(parent.children);
			const index = childrenList.indexOf(button);
			container.style.transform = `translatex(-${index * 100}%)`;

			parent.querySelectorAll("button.tabButtonActive").forEach (activeBtn => activeBtn.classList.remove("tabButtonActive"));
			button.classList.add("tabButtonActive");
		})
	}
)

feather.replace();



