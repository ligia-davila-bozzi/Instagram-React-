const users = [
    {
        username: "9gag",
        img: "assets/img/9gag.svg"
    },
    {
        username: "meowed",
        img: "assets/img/meowed.svg"
    },
    {
        username: "barked",
        img: "assets/img/barked.svg"
    },
    {
        username: "nathanwpylestrangeplanet",
        img: "assets/img/nathanwpylestrangeplanet.svg"
    },
    {
        username: "wawawicomics",
        img: "assets/img/wawawicomics.svg"
    },
    {
        username: "respondeai",
        img: "assets/img/respondeai.svg"
    },
    {
        username: "filomoderna",
        img: "assets/img/filomoderna.svg"
    },
    {
        username: "memeriagourmet",
        img: "assets/img/memeriagourmet.svg"
    }
];

export default function StoriesBox(props) {
    return (
        <div class="stories">
            {users.map((user) =>
                <Story img={user.img} username={user.username} />
            )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.username}
            </div>
        </div>
    );
} 