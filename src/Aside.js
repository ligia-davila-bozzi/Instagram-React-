import Sugestions from "./Sugestions";

export default function Aside() {
    return (
        <aside>
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <Sugestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </aside>
    );
}