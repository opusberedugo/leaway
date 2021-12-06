var tabs = document.querySelectorAll("div.tabs ul li");
var content = document.querySelectorAll("section.service");
var ids = ['air-tickets','removal','property','cleaning','cargo-shipping','vehicle-recovery'];

function removeActiveTab() {
  tabs.forEach(function (v) {
      v.classList.remove("active");
    });
}

function urlFunction() {
  ids.forEach(function (v, i) {
    if (window.location.href.endsWith("#"+v)) {
      tabs[i].click();
    }
  });
}

function removeActiveService() {
  content.forEach(function (v) {
    $(v).fadeOut('fast');
  });
}


tabs.forEach(function (v, i) {
    v.addEventListener("click", function () {
      if (!v.classList.contains("active")) {
        removeActiveTab();
        v.classList.add("active");
        removeActiveService();
        $(content[i]).fadeIn('fast');
      }

    });
  });

document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    urlFunction();
  }
});