const loginBar=document.getElementById('login')


const addLogin =()=>{
    loginBar.innerHTML =`
    <h1 class="titulo">lOGIN</h1>
    <br>
    <br>
    <br>
    <form id="formUsser" class="row g-3 needs-validation" novalidate>
      <div class="col-md-6">
        <label for="nombre" class="form-label">Nombres</label>
        <input type="text" class="form-control" name="nombre" id="nombre" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-6">
        <label for="apellido" class="form-label">Apellidos</label>
        <input type="text" class="form-control" name="apellido" id="apellido" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-5">
        <label for="correo" class="form-label">Correo</label>
        <div class="input-group has-validation">
          <input type="text" class="form-control" name="correo" id="correo" aria-describedby="inputGroupPrepend" required>
          <div class="invalid-feedback">
            Digita tu correo
          </div>
          <select class="input-group-text form-select" id="inputGroupPrepend"  name="extension" id="extension" required>
            <option selected disabled value="">Elige...</option>
            <option>@gmail.com</option>
            <option>@hotmail.com</option>
            <option>@outlook.com</option>
          </select>
        </div>
      </div>
      <div class="col-md-3">
        <label for="tipo" class="form-label">Tipo de persona</label>
        <select class="form-select" name="tipo" id="tipo" required>
          <option selected disabled value="">Elige...</option>
          <option>Natural</option>
          <option>Juridica</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div class="col-md-4">
        <label for="ciudad" class="form-label">Ciudad</label>
        <input type="text" class="form-control" name="ciudad" id="ciudad" required>
        <div class="invalid-feedback">
          Please provide a valid zip.
        </div>
      </div>
      <div class="col-12">
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      
      <div class="col-12">
        <button id="guardar" class="btn login-btn" type="submit">Login</button>
      </div>

    </form>
    `

    const saveData=document.querySelector("#guardar")
    saveData.addEventListener('click',(e)=>{
        e.preventDefault();
        let user={
            nombre:'',
            apellido:'',
            correo:'',
            extension:'',
            tipo:'',
            ciudad:''
        }
        const dataUsser=document.querySelector("#formUsser")
        const  datos= Object.fromEntries(new FormData(dataUsser).entries())
        const  usser= JSON.parse(JSON.stringify(datos));
        const {nombre,apellido,correo,extension,tipo,ciudad}=usser
        user.nombre=nombre
        user.apellido=apellido
        user.correo=correo+extension
        user.tipo=tipo
        user.ciudad=ciudad
        console.log(user)
        
})
}

const endBar=document.getElementById('cont')

const addEndPage=(element,sumaTotal,opciones)=>{
  //function formatearPrecio(numero) {
  //   return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //  }
  //const valorFinal = formatearPrecio(sumaTotal);
element.innerHTML =/*html*/`
  <style rel="stylesheet">
      @import "./css/bootstrap/bootstrap.min.css";
      @import "./style.css";
  </style>
  <div id="contenedor-endPage">
      <div id="endPage">
          <div id="volver" ><p>← Volver a empezar</p></div>

          <div class="">
              <p class="endPage-title">¡Bien! ¡Hemos terminado!</p>
              <h2 class="sub-title fs-5">¡Compártenos si te ha gustado!</h2>
          </div>
          <div class="row justify-content-md-center" >
              <div class="red-face red col col-2">
                  <img src="img/facebook.png" alt="facebook">
                  <p class="">Share</p>
              </div>

              <div class="red-in red col col-2">
                  <img class="in" src="img/linkedin.png" alt="linkedin">
                  <p class="">Share</p>
              </div>

              <div class="red-goo red col col-4">
                  <img  src="img/google.png" alt="google">
                  <p class="">Google +</p>
              </div>

              <div class="red-twi red col col-3">
                  <img src="img/twitter.png" alt="twitter" />
                  <p class="">Tweet</p>
              </div>
          </div>
          <div class="">
              <p class="costo fs-2">El costo estimado de tu app es</p>
              <div class="precio d-flex justify-content-center">
                  <h1>${sumaTotal}</h1>
                  <h1>COP</h1>
              </div>
              <div >
                <p id="editar">Editar respuestas</p>
                <div id="editar-tabla">
                </div>
              </div>
              <p class="fs-6">En CampusLands seleccionamos los mejores <strong> desarrolladores de apps y webs </strong> para tu proyecto. Publica tu proyecto en Yeeply o <br>mira algunos de nuestros casos  de éxito.</p>
          </div>

          <div>
              <button class="btn-c btn">Crea tu proyecto</button>
          </div>
      </div>
  </div>
`
const botonVolver=document.getElementById('volver')
botonVolver.addEventListener('click',()=>{
  location.reload();
})
}
const suma=0
const data=[
 ['hola',2000,'img/facebook.png','adios']
]
addEndPage(endBar,suma,data)
const divEditar=document.getElementById('editar')
const divTablaEditar=document.getElementById('editar-tabla')


const cuadro=`
<div class="content d-flex">
    <img src="${data[0][2]}" alt="">
    <div class="content-text">
        <h3>${data[0][0]}</h3>
        <div class="content-text-link d-flex">
            <p>${data[0][3]}</p>
            <p id="cambiar" data-id="${cont}">cambiar</p>
        </div>
    </div>
</div>
`
divEditar.addEventListener('click',()=>{
  divTablaEditar.innerHTML=`<h1>hola</h1>`
})
const cont=0
// divEditar.addEventListener('click',()=>{
//   const itemEdit = document.createElement('div');
//   itemEdit.classList.add('content', 'd-flex')
//   data.forEach(item=>{
//     cont+=1
//     itemEdit.innerHTML=`
//         <img src="${item[2]}" alt="">
//         <div class="content-text">
//             <h3>${item[0]}</h3>
//             <div class="content-text-link d-flex">
//                 <p>${item[3]}</p>
//                 <p id="cambiar" data-id="${cont}">cambiar</p>
//             </div>
//         </div>
//     `
//     divTablaEditar.innerHTML=cuadro
//   })
  
// })

// const btnCambiar=document.querySelectorAll('.cambiar')

// btnCambiar.addEventListener('click',(e)=>{
//   let id=e.target.dataset.id

// })