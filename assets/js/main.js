/*
    js of main
    --------------------------
    ** Fixed Navigation
	--------------------------
    ** Effect on Menu for Mobile
	--------------------------
    ** Collapse - icon in Collapse
	--------------------------
    **  Dropdown Select for Language
	--------------------------
    ** Mousehover for dropdown
	--------------------------
    ** Dropdown menu for mobile
	--------------------------
    ** menu toggle
	--------------------------
    ** Swiper sliders
*/

$(function () {
	("use strict");
	/*-----------------------------
      Fixed Navigation
    -----------------------------*/
	if ($("header").offset().top > 50) {
		$("body").addClass("fixed-header");
	} else {
		$("body").removeClass("fixed-header");
	}
	/* Scroll Function */
	$(window).on("scroll", function () {
		/* Fixed Navigation */
		if ($("header").offset().top > 50) {
			$("body").addClass("fixed-header");
		} else {
			$("body").removeClass("fixed-header");
		}
	});

	/*-----------------------------
      Effect on Menu for Mobile
    -----------------------------*/
	document.querySelectorAll(".menu").forEach((btn) => {
		btn.addEventListener("click", (e) => {
			btn.classList.toggle("active");
		});
	});

	/*-----------------------------
      Collapse - icon in Collapse
    -----------------------------*/
	$(".collapse").on("show.bs.collapse", function () {
		$(this).siblings(".card-header").addClass("active");
	});

	$(".collapse").on("hide.bs.collapse", function () {
		$(this).siblings(".card-header").removeClass("active");
	});

	/*-----------------------------
      Dropdown Select for Language
    -----------------------------*/
	$("select[data-menu]").each(function () {
		let select = $(this),
			options = select.find("option"),
			menu = $("<div />").addClass("select-menu"),
			button = $("<div />").addClass("button"),
			list = $("<ul />"),
			arrow = $("<em />").prependTo(button);

		options.each(function (i) {
			let option = $(this);
			list.append($("<li />").text(option.text()));
		});

		menu.css("--t", select.find(":selected").index() * -41 + "px");

		select.wrap(menu);

		button.append(list).insertAfter(select);

		list.clone().insertAfter(button);
	});

	$(document).on("click", ".select-menu", function (e) {
		let menu = $(this);

		if (!menu.hasClass("open")) {
			menu.addClass("open");
		}
	});

	$(document).on("click", ".select-menu > ul > li", function (e) {
		let li = $(this),
			menu = li.parent().parent(),
			select = menu.children("select"),
			selected = select.find("option:selected"),
			index = li.index();

		menu.css("--t", index * -41 + "px");
		selected.attr("selected", false);
		select.find("option").eq(index).attr("selected", true);

		menu.addClass(index > selected.index() ? "tilt-down" : "tilt-up");

		setTimeout(() => {
			menu.removeClass("open tilt-up tilt-down");
		}, 500);
	});

	$(document).on("click", (e) => {
		e.stopPropagation();
		if ($(".select-menu").has(e.target).length === 0) {
			$(".select-menu").removeClass("open");
		}
	});

	/*-----------------------------
      Mousehover for dropdown
    -----------------------------*/
	$(".dropdown.dropdown-hover").hover(
		function () {
			$(this).addClass("show");
		},
		function () {
			$(this).removeClass("show");
		}
	);

	$(".dropdown-submenu.dropdown-hover").hover(
		function () {
			$(this).addClass("show");
		},
		function () {
			$(this).removeClass("show");
		}
	);

	/*-----------------------------
    Dropdown menu for mobile
  -----------------------------*/
	var coll = document.querySelector(".dropdown_menu");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.height) {
				content.style.height = null;
			} else {
				content.style.height = content.scrollHeight + "px";
			}
		});
	}

	/*-----------------------------
    menu toggle
  -----------------------------*/
	$(".menu-toggle-icon").on("click", function () {
		$(".mb-overlay").addClass("mb-visible");
	});
	$(".mb-overlay-bg , .close-mb-menu").on("click", function () {
		$(".mb-overlay").removeClass("mb-visible");
	});
	$(".add_to_cart_toggle").on("click", function () {
		$(".add_to_cart_menu").toggleClass("block");
	});
	$(".has-dropdown-m").on("click", function (e) {
		e.preventDefault();
		let $this = $(this);

		if ($this.next().hasClass("show")) {
			$this.next().removeClass("show");
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find("li .dropdown-mobile").removeClass("show");
			$this.parent().parent().find("li .dropdown-mobile").slideUp(350);
			$this.next().toggleClass("show");
			$this.next().slideToggle(350);
		}
	});

	$(".menu_icon").on("click", function () {
		$(".menu_elements").toggleClass("is_active");
		$(this).toggleClass("menu_icon_active");
	});
	/*-----------------------------
    Swiper sliders
  -----------------------------*/

	var mySwiper = new Swiper(".swiper_feautures", {
		// Optional parameters
		loop: true,
		cssMode: false,
		mousewheel: false,
		simulateTouch: false,
		centeredSlides: true,
		spaceBetween: 10,
		slidesPerView: 3,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 3,
			},
		},

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var mySwiper = new Swiper(".swiper_showcase", {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 25,
		centeredSlides: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 3,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var mySwiper = new Swiper(".swiper_hero", {
		// Optional parameters
		loop: true,
		slidesPerView: 1,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var mySwiper = new Swiper(".swiper_testimonial1", {
		// Optional parameters
		loop: true,
		spaceBetween: 10,
		slidesPerView: 3,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 3,
			},
		},

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var mySwiper = new Swiper(".swiper_testimonial2", {
		// Optional parameters
		loop: false,
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 1,
			},
			1000: {
				slidesPerView: 1,
			},
		},

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var mySwiper = new Swiper(".swiper_testimonial3", {
		// Optional parameters
		loop: false,
		slidesPerView: 1,
		spaceBetween: 10,
		centeredSlides: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var mySwiper = new Swiper(".sidebar_posts", {
		// Optional parameters
		loop: false,
		slidesPerView: 1,
		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	/*-----------------------------
    make Timer
  -----------------------------*/
	function makeTimer() {
		var endTime = new Date("29 April 2021 9:56:00 GMT+01:00");
		endTime = Date.parse(endTime) / 1000;

		var now = new Date();
		now = Date.parse(now) / 1000;

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - days * 86400) / 3600);
		var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		var seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);

		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}

		$("#days").html(days + "<span></span>");
		$("#hours").html(hours + "<span></span>");
		$("#minutes").html(minutes + "<span></span>");
		$("#seconds").html(seconds + "<span></span>");
	}

	setInterval(function () {
		makeTimer();
	}, 1000);
});
