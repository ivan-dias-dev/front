function cabecalho() {
  return (
    <nav class="d-flex justify-content-center header">
      <div class="navbar">
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/" class="Home">HOME</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/Logins">LOGINS</a>
        </button>
        <button type="button" class="btn btn-dark button">
          <a href="http://localhost:3000/Templates">TEMPLATES</a>
        </button>
      </div>
    </nav>
  )
}
export default cabecalho
