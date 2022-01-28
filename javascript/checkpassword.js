 function passwordcheck()
 {
    params = "";
    data = document.getElementsByClassName("inputs");
    identify = document.getElementsByClassName("inputs");
    for(i=0;i<data.length-1;i++)
    {
       params+=identify[i].getAttribute("name")+"="+data[i].value+"&";
    }
    params+=identify[data.length-1].getAttribute("name")+"="+data[data.length-1].value  ;
    alert(params);
    // creazione oggetto XMLHttepRequest per vari tipi di Browser
    if (window.XMLHttpRequest)
    {  // browser IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    }
    else
    {                        // browser IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
       // dopo una richiesta serve una funzione x ricevere i dati restituiti dal server
    // onreadystatechange contiene la funzione che processer� la risposta del server 
    xmlhttp.onreadystatechange = function()
    {
        // readyState contiene lo stato della response del server. Ogni volta che 
        // readyState cambia, la funzione onreadystatechange viene eseguita
        // 0 La richiesta non � inizializzata
        // 1 E' stabilita la connessione col server
        // 2 La richiesta � ricevuta
        // 3 La richiesta � processata
        // 4 La richiesta � completa
        // se status=200 OK   -  404 Not found
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            //i dati trasmessi dal server sono ricavati da responseText (tipo stringa)
            alert(xmlhttp.responseText);
            switch (xmlhttp.responseText)
            {

            case '1': alert("all fine");
            break;

            case '7': alert("no account could be found");
            break;
            
            case '8': alert("database not findable"); 
            break;

            case '9': alert("error with the databasa query");
            break;
            
            case '10': alert("wrong password");  
            break;
            
            default: break;
            }
        }
    }
       // il metodo open() ha 3 parametri:
      //  -il primo definisce quale metodo usare (GET/POST)
     //  -il secondo � l'url dove risiede lo script server-side
    //  -il terzo (booleano) specifica che la richiesta deve essere asincrona 
      xmlhttp.open("POST", "./phpscripts/checkuser.php", true);
    // send() trasmette effettivamente la richiesta al server. 
  // senza parametri si indica POST - per GET mettere i parametri tra parentesi
      xmlhttp.send(params);
}
