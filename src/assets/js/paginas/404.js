var num = 4;
setInterval(function () {
  window.count.textContent = num--;
  if (num === 0) location.href = '/';
}, 1000);

// The time that comes from PHP will likely be UTC time with a format such as "Mon, 23 Apr 2018 21:19:08 +0000"
// Convert it to a local time (example "4/23/2018, 2:19:08 PM" for US PST)
document.addEventListener("DOMContentLoaded", function () {
  var errorTime = document.querySelector(".error-time");
  if (errorTime !== null) {
    var d = new Date(errorTime.textContent);
    if (!isNaN(d.getTime())) {
      var time =
        typeof d.toLocaleString === "function"
          ? d.toLocaleString()
          : d.toString();
      errorTime.textContent = time;
    }
  }
});
