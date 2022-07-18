export function Login() {
  return (
    <form action="">
      <label htmlFor="login"></label>
      <input id="login" type="text" placeholder="Login" />
      <label htmlFor="password"></label>
      <input id="password" type="text" placeholder="Senha" />
      <button className="defaultButton">Login</button>
      <button className="defaultButton">Cadastro</button>
    </form>
  );
}
