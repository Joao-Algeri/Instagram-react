export default function Sugestao() {
  const sugestoes = [
    { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
    { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
    { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
    { imagem: "assets/img//adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
    { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
  ]
  return (
    <>
      {sugestoes.map((usuario) => <div className="sugestao">
        <div className="usuario">
          <img src={usuario.imagem} />
          <div className="texto">
            <div className="nome">{usuario.nome}</div>
            <div className="razao">{usuario.razao}</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
      )}
    </>
  )
}