import {useState} from "react";
export default function Usuario() {
  const [usuario,setUsuario]= useState("Catana");
  const [avatar,setAvatar]=useState("assets/img/catanacomics.svg")
  function MudaNome(){
    setUsuario(prompt("Digite o nome do usuário"));
      }
      function MudaAvatar(){
        setAvatar(prompt("Insira link de imagem"))
      }
    return (
        <div className="usuario">
        <img  onClick={()=>MudaAvatar()} src={avatar} />
        <div className="texto">
          <strong>catanacomics</strong>
          <span>
            {usuario}
            <ion-icon onClick={()=>MudaNome()} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )}