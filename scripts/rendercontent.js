"use strict";

// Render text content
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('cont1').innerHTML = securitySystems;
  document.getElementById('cont2').innerHTML = netWorking;
  document.getElementById('cont3').innerHTML = it;
  document.getElementById('cont4').innerHTML = softwareDevelopment;
}); // Render modal text

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('securitySystemsModal').innerHTML = securitySystemsModal;
  document.getElementById('networkingModal').innerHTML = netWorkingModal;
  document.getElementById('itModal').innerHTML = itModal;
  document.getElementById('softwareDevelopmentModal').innerHTML = softwareDevelopmentModal;
});