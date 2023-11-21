function enviarInformacion() {  
   
  let vendedor = document.getElementById("vendedor").value;  
  let Aqua = document.getElementById("Aqua").value;
  let Emocion= document.getElementById("Emocion").value;
  let Alegria = document.getElementById("Alegria").value;
  let Frescura = document.getElementById("Frescura").value;

  let vendedor1 = "Juana";
  let vendedor2 =  "Pedro";
 

  if(vendedor == "" || Aqua == ""|| Emocion ==""|| Alegria == ""|| Frescura ==""){
  alert("Completa la información solicitada");
  }else if (vendedor !== vendedor1 && vendedor !== vendedor2 && Aqua >= 0 && Emocion >= 0 && Alegria >= 0 && Frescura >= 0) {
    alert("Debes ser un empleado vinculado a la empresa");          
  }else{
    let productos = {"Aqua": 200, "Emoción": 180, "Alegría": 160, "Frescura": 150 };
    let vendedores = {"Juana": {"Aqua": 0, "Emoción": 0, "Alegría": 0, "Frescura": 0 }, "Pedro": { "Aqua": 0, "Emoción": 0, "Alegría": 0, "Frescura": 0 }};
    
    function agregarVenta(vendedor, producto, cantidad) {
      vendedores[vendedor][producto] += cantidad;
    }

    function calcularVentas(vendedor) {
      let total = 0;
      for (let producto in vendedores[vendedor]) {
        total += vendedores[vendedor][producto] * productos[producto];
      }
      return total;
    }

    function empleadoDelMes() {
      let maxVentas = 0;
      let empleado = "";
      for (let vendedor in vendedores) {
        let ventas = calcularVentas(vendedor);
        if (ventas > maxVentas) {
          maxVentas = ventas;
          empleado = vendedor;
        } else if (ventas === maxVentas) {
          empleado +=  vendedor;
        }
      }
      return empleado;
    }

    document.getElementById("ventasForm").addEventListener("submit", function(event){
      event.preventDefault();
      let vendedor = document.getElementById("vendedor").value;
      for (let producto in productos) {
        let cantidad = parseInt(document.getElementById(producto));
        agregarVenta(vendedor, producto, cantidad);
      }
      console.log(empleadoDelMes()); // Imprime el empleado del mes
    });
  }   
}    

  


