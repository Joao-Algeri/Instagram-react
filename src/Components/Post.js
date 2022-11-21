import {useState} from "react";
export default function Post(){
  const [valor1,setValor1]=useState(101.523);
  const [valor2,setValor2]=useState(99.159);
  const  post=[
    {imagem:"./assets/img/meowed.svg",imagemPost:"./assets/img/gato-telefone.svg",nome:"meowed",icone:"assets/img/respondeai.svg",pessoa:"respondeai",numero:valor1},
    {imagem:"./assets/img/barked.svg",imagemPost:"assets/img/dog.svg",nome:"barked",icone:"assets/img/adorable_animals.svg",pessoa:"adorable_animals",numero:valor2}
  ]
 
    return(
        <>
        {post.map((item)=>
            <div className="post">
            <div className="topo">
              <div className="usuario">
                <img src={item.imagem} />
                {item.nome}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src={item.imagemPost} />
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={item.icone} />
                <div className="texto">
                  Curtido por <strong>{item.pessoa}</strong> e <strong>outras {item.numero} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        )}
          
        </>
    )}
    