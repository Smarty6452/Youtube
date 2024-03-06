var kboutput = document.getElementById("speedResults");
var mboutput = document.getElementById("mbs");
var imageLink = "https://source.unsplash.com/random?topics=nature";


function updateStatus() {
    var statusElement = document.getElementById("status");
    var iconElement = document.getElementById("icon");
    
    if (navigator.onLine) {
      statusElement.textContent = "Online";
      iconElement.innerHTML = '<i class="fas fa-wifi"></i>';
      iconElement.style.color = "green";
    } else {
      statusElement.textContent = "Offline";
      iconElement.innerHTML = '<i class="fas fa-signal"></i>';
      iconElement.style.color = "red";
    }
  }
  
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  
  
  updateStatus();

  var imageAddr = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"; 
var downloadSize = 300000;

function MeasureConnectionSpeed() {
    var startTime, endTime; 
    var download = new Image();

    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults(startTime, endTime);
    };

    download.onerror = function (err, msg) {
        document.getElementById("result").innerHTML = "Invalid image, or error downloading";
    };

    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
}

function showResults(startTime, endTime) { 
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(1);

    document.getElementById("result").innerHTML = "Download Speed: " + speedMbps + " Mbps";
}

document.getElementById("speedTestBtn").addEventListener("click", function() {
    MeasureConnectionSpeed();
});

  