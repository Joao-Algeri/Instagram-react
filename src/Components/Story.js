export default function Story() {
  const story = [
    { imagem: "assets/img/9gag.svg", nome: "9gag" },
    { imagem: "assets/img/meowed.svg", nome: "meowed" },
    { imagem: "assets/img/barked.svg", nome: "barked" },
    { imagem: "assets/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet" },
    { imagem: "assets/img/wawawicomics.svg", nome: "wawawicomics" },
    { imagem: "assets/img/respondeai.svg", nome: "respondeai" },
    { imagem: "assets/img/filomoderna.svg", nome: "filomoderna" },
    { imagem: "assets/img/memeriagourmet.svg", nome: "memeriagourmet" }
  ]
  return (
    <>
      {story.map((usuario) => <div className="story">
        <div className="imagem">
          <img src={usuario.imagem} />
        </div>
        <div className="usuario">
          {usuario.nome}
        </div>
      </div>)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </>
  )
}