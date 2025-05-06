(function() {
  emailjs.init("Ms-un1HcwDE_IKVtZ"); // Tu Public Key
})();

document.getElementById("formReserva").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_lbb0a1q", "template_0l34mxe", this)
    .then(() => {
      document.getElementById("confirmacion").style.display = "block";
      this.reset();
    })
    .catch((error) => {
      alert("Error al enviar: " + JSON.stringify(error));
    });
});
