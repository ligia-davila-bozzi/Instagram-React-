import Sugestions from "./Sugestions";

const loggedUser = {
    username: "catanacomics",
    userImg: "assets/img/catanacomics.svg",
    name: "Catana"
};

export default function Aside() {
    return (
        <aside>
            <UserInfo userImg={loggedUser.userImg} username={loggedUser.username} name={loggedUser.name} />

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

function UserInfo (props) {
    return (
        <div class="usuario">
            <img src={props.userImg} />
            <div class="texto">
                <strong>{props.username}</strong>
                {props.name}
            </div>
        </div>
    );
}