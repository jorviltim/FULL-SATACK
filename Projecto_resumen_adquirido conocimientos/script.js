/*window.onload = function() {
    // array with the words
    let first = "A ";
    let adj = ["two headed ", "nuclear ", "angry ", "lonely ", "crazy ", "glowing ", "smelly ", "slow ", "old "];
    let noun = ["jogger ", "racoon ", "dog ", "merchant ", "driver ", "comedian ", "pinecone "];
    let action = ["took my ", "threw my ", "yelled at my ", "kicked my ", "stole my ", "burned my ", "bit my ", "hit my "];
    let possetion = ["toe ", "car ", "watch ", "shoe ", "wallet ", "shirt ", "keys ", "computer ", "phone ", "sandwich "];
    let where = ["on the street", "in my house", "in my driveway", "in front of the office", "near the mall", "near the toilet", "at the bus station"];
  
    // declaring random variables
    let rdm1 = Math.floor(Math.random() * adj.length);
    let rdm2 = Math.floor(Math.random() * noun.length);
    let rdm3 = Math.floor(Math.random() * action.length);
    let rdm4 = Math.floor(Math.random() * possetion.length);
    let rdm5 = Math.floor(Math.random() * where.length);
  
    // creating a sentence (the excuse)
    document.querySelector("#excuse").innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];
    
  }*/

    window.onload = function() {
      // array con las palabras
      let first = "Un(a) ";
      let adj = ["malo(a) ", "nuclear ", "enojado(a) ", "solitario(a) ", "loco(a) ", "brillante ", "apestoso(a) ", "lento(a) ", "viejo(a) "];
      let noun = ["corredor(a) ", "mapache ", "perro(a) ", "comercial ", "conductor(a) ", "comediante ", "manzana "];
      let action = ["me quitó mi ", "me tiró mi ", "me gritó mi ", "me pateó mi ", "me robó mi ", "me quemó mi ", "me mordió mi ", "me golpeó mi "];
      let possetion = ["dedo del pie ", "coche ", "reloj ", "zapato ", "billetera ", "camisa ", "llaves ", "computadora ", "teléfono ", "sandwich "];
      let where = ["en la calle", "en mi casa", "en mi entrada", "frente a la oficina", "cerca del centro comercial", "cerca del baño", "en la estación de autobuses"];
    
      // declarando variables aleatorias
      let rdm1 = Math.floor(Math.random() * adj.length);
      let rdm2 = Math.floor(Math.random() * noun.length);
      let rdm3 = Math.floor(Math.random() * action.length);
      let rdm4 = Math.floor(Math.random() * possetion.length);
      let rdm5 = Math.floor(Math.random() * where.length);
    
      // creando una frase (la excusa)
      document.querySelector("#excuse").innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];
  }