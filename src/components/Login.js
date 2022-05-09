export default function Login() {
    return (
        <div>
            <h1>MyWallet</h1>
            <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
            <p>Primeira vez? Cadastre-se!</p>
        </div>
    )
}