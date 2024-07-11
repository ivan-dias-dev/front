function cabecalho(select) {
  return (
    <nav class="d-flex justify-content-center header">
      <div class="navbar">
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/Robbu" class="Home">ROBBU</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/Otima" class="Home">OTIMA</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/Zap2go" class="Home">ZAP2GO</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/Logins">LOGINS</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3005/api/templatesZap">TEMPLATES</a>
        </button>
      </div>
    </nav>
  )
}
export default cabecalho
