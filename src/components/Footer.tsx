import Logo from "./Logo";
export default function Footer() {
  return (
    <footer>
      <div>
        <div className="container foot-cont">
          <div>
            <Logo />
          </div>
          <div className="newsletter">
            <h5 className="text-white">Iscriviti alla newsletter</h5>
            <input
              type="text"
              name=""
              id=""
              placeholder="Inserisci la tua email"
            />
            <button className="d-flex btn btn-light p-1">Invia</button>
          </div>
        </div>
        {/* <div className="reserved">
          <p>
            © Techbool. Tutti i diritti riservati. È vietata la riproduzione,
            anche parziale, dei contenuti presenti in questo sito senza
            autorizzazione scritta.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
