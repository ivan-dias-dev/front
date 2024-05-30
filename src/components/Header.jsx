function cabecalho() {
  return (
    <nav class="d-flex justify-content-center">
      <div class="navbar">
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/" class="Home">Home</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/enviaLogins">Logins</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/radar">Radar</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/templates">Templates</a>
        </button>
      </div>
    </nav>
  )
}


export default cabecalho
