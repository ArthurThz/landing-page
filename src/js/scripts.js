
const userImg = document.querySelector('.img')
const userName = document.querySelector('.user-name')
const userComment = document.querySelector('.user-comment')

const users = {

    name: ["João Domingues", "Francisco da Silva", "Fernando Rocha"],
    comment: ["''Nossas trilhas foram incriveis, muitas paisgens lindas e a turma de guias nos motivada sempre continuar''",
        "''Nunca pensei que poderia me divertir tanto e uma trilha tão desafiadora, me sinto renovado!''",
        "''Sempre gostei de fazer novas aventuras, mas com a get-some-trip com certeza posso dizer que foi a melhor experiência que já tive.''"],
    img: ["src/img/avatar1.png", "src/img/avatar2.png", "src/img/avatar3.png"]


}

function changeComments() {
    
    
    let i = 0;
    
    setInterval(() => {   
        if( i > 2){i = 0}
    userImg.setAttribute('src',users.img[i])
    userComment.innerHTML = users.comment[i]
    userName.innerHTML = users.name[i]
    i++
    
       
         
    }, 3500);
        
    
    
}

changeComments()

