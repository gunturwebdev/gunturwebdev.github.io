/* __________ */
const prev_banners = document.querySelector("#prev-banner-row");
const next_banners = document.querySelector("#next-banner-row");
prev_banners.style.display = "flex";
next_banners.style.display = "none";
document.querySelector("#next-event-button").addEventListener("click", () => {
    prev_banners.style.display = "none";
    next_banners.style.display = "flex";
})
document.querySelector("#prev-event-button").addEventListener("click", () => {
    prev_banners.style.display = "flex";
    next_banners.style.display = "none";
})
/* __________ */
const prev_banners1 = document.querySelector("#prev-banner-row-1");
const next_banners1 = document.querySelector("#next-banner-row-1");
prev_banners1.style.display = "flex";
next_banners1.style.display = "none";
document.querySelector("#next-event-button-1").addEventListener("click", () => {
    prev_banners1.style.display = "none";
    next_banners1.style.display = "flex";
})
document.querySelector("#prev-event-button-1").addEventListener("click", () => {
    prev_banners1.style.display = "flex";
    next_banners1.style.display = "none";
})