(function ($) {
	"use strict";

	jQuery(document).on("ready", function () {
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
		var coll = document.getElementsByClassName("dropdown_menu");
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

		// End.
	});

	/*-----------------------------
    Checkbox Select
  -----------------------------*/
	$(".checkbox-item .item-select").on("click", function () {
		$(this).parent().find(".item-select.active").removeClass("active");
		$(this).addClass("active");
	});
})(jQuery);
