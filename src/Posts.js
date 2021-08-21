const posts = [
    {
        username: "meowed",
        userImg: "assets/img/meowed.svg",
        postImg: "assets/img/gato-telefone.svg"
    },
    {
        username: "barked",
        userImg: "assets/img/barked.svg",
        postImg: "assets/img/dog.svg"
    }
];

export default function Posts() {
    return (
        <div class="posts">
            {posts.map((post) => 
                <Post username={post.username} userImg={post.userImg} postImg={post.postImg} />
            )}
        </div>
    );
}

function Post (props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImg} />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImg} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                </div>
            </div>
        </div>
    );
}