const sugestions = [
    {
        username: "bad.vibes.memes",
        userImg: "assets/img/bad.vibes.memes.svg",
        reason: "Segue você"
    },
    {
        username: "chibirdart",
        userImg: "assets/img/chibirdart.svg",
        reason: "Segue você"
    },
    {
        username: "razoesparaacreditar",
        userImg: "assets/img/razoesparaacreditar.svg",
        reason: "Novo no Instagram"
    },
    {
        username: "adorable_animals",
        userImg: "assets/img/adorable_animals.svg",
        reason: "Segue você"
    },
    {
        username: "smallcutecats",
        userImg: "assets/img/smallcutecats.svg",
        reason: "Segue você"
    },
];

export default function Sugestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestions.map((sugestion) =>
                <Sugestion userImg={sugestion.userImg} username={sugestion.username} reason={sugestion.reason} />
            )}
        </div>
    );
}

function Sugestion (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userImg} />
                <div class="texto">
                    <div class="nome">{props.username}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}