document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("ventasForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let vendedor = document.getElementById("vendedor").value;  
    // let Aqua = parseInt(document.getElementById("Aqua").value) || 0;
    // let Emocion = parseInt(document.getElementById("Emocion").value) || 0;
    // let Alegria = parseInt(document.getElementById("Alegria").value) || 0;
    // let Frescura = parseInt(document.getElementById("Frescura").value) || 0;

    let vendedor1 = "Juana";
    let vendedor2 = "Pedro";

    if (vendedor === "" ) {
      alert("Completa la información solicitada");
    } else if (vendedor !== vendedor1 && vendedor !== vendedor2) {
      alert("Debes ser un empleado vinculado a la empresa");          
    } else {
      let productos = {"Aqua": 200, "Emocion": 180, "Alegria": 160, "Frescura": 150 };
      let vendedores = {"Juana": {"Aqua": 0, "Emocion": 0, "Alegria": 0, "Frescura": 0 }, "Pedro": { "Aqua": 0, "Emocion": 0, "Alegria": 0, "Frescura": 0 }};
      
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
      
      for (let producto in productos) {
        console.log(producto);
        let cantidad = parseInt(document.getElementById(producto).value) || 0;
        agregarVenta(vendedor, producto, cantidad);
      }
      let ventas = calcularVentas(vendedor);
      alert("El vendedor " + vendedor + " vendió un total de " + ventas + " USD."); 
    }
  });
});

  


