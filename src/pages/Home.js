const Home = () => {
  return (
    <main>
      <h2 className="text-3xl">Bienvenido</h2>
      <p className="text-white">Estás trabajando o pretendes trabajar para una app de delivery?</p><br />
      <p className="text-white">Tienes curiosidad de saber cuáles son las ganancias reales?</p><br />
      <p className="text-white">Planeas comprar un vehículo para plataforma?</p><br />

      <h2>Estamos aquí para ayudarte a decidir que vehículo te conviene mas!</h2>
      <h3>Te ayudamos a calcular tu balance real anual:</h3>
      <ul>
          <li className="text-white">Costos anuales del vehículo</li>
          <li className="text-white">Ingreso bruto</li>
          <li className="text-white">Ingreso neto</li>
      </ul>
      <h3>O quizás necesitas saber cuánto pagarás en realidad por el auto que comprarás: </h3>
      <ul>
          <li className="text-white">Credito</li>
          <li className="text-white">Desgaste de llantas</li>
          <li className="text-white">Consumo de combustible</li>
          <li className="text-white">y más...</li>
      </ul>
    </main>
  );
};

export default Home;
