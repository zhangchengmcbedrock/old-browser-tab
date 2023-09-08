function search() {
    var searchText = document.getElementById("searchText").value;
    var searchEngine = document.getElementById("searchEngine").value;
    
    if (searchEngine === "bing") {
        window.location.href = "https://www.bing.com/search?q=" + searchText;
    } else if (searchEngine === "google") {
        window.location.href = "https://www.google.com/search?q=" + searchText;
    } else if (searchEngine === "baidu") {
        window.location.href = "https://www.baidu.com/s?wd=" + searchText;
    }
}
function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }