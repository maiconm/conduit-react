import './style.css'

function Auth() {
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="auth-container">
        <form>
          <input
            autoFocus
            id="email"
            placeholder="E-mail"
            type="text"
          />
          <input
            id="password"
            type="password"
            name="password"
          />
          <button
            type="submit"
          >Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Auth
