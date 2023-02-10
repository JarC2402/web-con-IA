
  const botones = document.querySelectorAll(".cripto");
  botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
      switch (boton.id) {
        case "btc":
          alert("Bitcoin es una criptomoneda descentralizada que fue creada en 2009. Es considerada la primera criptomoneda y tiene una capitalización de mercado de más de 1 billón de dólares.");
          break;
        case "eth":
          alert("Ethereum es una plataforma de criptomonedas y contratos inteligentes. Fue lanzado en 2015 y tiene una capitalización de mercado de más de 200 mil millones de dólares.");
          break;
        case "xrp":
          alert("Ripple es una criptomoneda y plataforma de pago en tiempo real. Fue fundada en 2012 y tiene una capitalización de mercado de más de 40 mil millones de dólares.");
          break;
        case "ltc":
          alert("Litecoin es una criptomoneda que fue creada en 2011 como una versión más rápida y eficiente de Bitcoin. Tiene una capitalización de mercado de más de 10 mil millones de dólares.");
          break;
        case "bch":
          alert("Bitcoin Cash es una bifurcación de Bitcoin que se creó en 2017. Se enfoca en mejorar la escalabilidad de la criptomoneda original y tiene una capitalización de mercado de más de 20 mil millones de dólares.");
          break;
      }
    })
  })

