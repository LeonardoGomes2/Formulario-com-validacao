function validaTudo() {
    //validação do radio da marca 
    if (document.getElementById("marca1").checked == false &&
      document.getElementById("marca2").checked == false &&
      document.getElementById("marca3").checked == false &&
      document.getElementById("marca4").checked == false) {
      alert("Escolha uma Marca");
      return false;
    }
  
  
    // validação do radio do estado do veiculo.
    if (document.getElementById("estado1").checked == false &&
      document.getElementById("estado2").checked == false &&
      document.getElementById("estado3").checked == false) {
      alert("Selecione o estado de conservação do Veículo.")
      return false;
    }
  
    //validação do checkbox
    var check, qteCheck, i, qteSelecionado = 0, opc = "";
    check = document.getElementsByName("opcionais");
    qteCheck = check.length;
    for (i = 0; i < qteCheck; i++) {
      if (check[i].checked)
        qteSelecionado++;
    }
    if (qteSelecionado == 0) {
      alert("Escolha pelo menos um opcional.");
      return false;
    }
  
    //validacao de select		  
    var combo;
    combo = document.getElementById("classificacao");
    if (combo.selectedIndex == 0) {
      alert("Indique a classificação do veiculo.");
      return false;
    }
  
    //validação da caixa de texto.
    if (document.getElementById("valor").value == "" ||
      document.getElementById("nome-comprador").value == "") {
      alert("Campos de Cadastro para preenchimento de recibo obrigatório! ");
      return false;
    }
  
    //pegando os dados do radio marca.
    let marca;
    if (document.getElementById("marca1").checked) // checando se a marca 1 foi selecionada.
      marca = document.getElementById("marca1").value; //a let marca recebe a marca 1 case ela seja selecionada.
  
    // caso nao selecione a primeira a validação ira conferir as demias.
  
    else if (document.getElementById("marca2").checked)
      marca = document.getElementById("marca2").value;
  
    else if (document.getElementById("marca3").checked)
      marca = document.getElementById("marca3").value;
  
    else
      marca = documet.getElementById("marca4").value;
  
    // pegando os dados do radio estado de conservação do veiculo.
    let conservacao;
    if (document.getElementById("estado1").checked)
      conservacao = document.getElementById("estado1").value;
  
    else if (document.getElementById("estado2").checked)
      conservacao = document.getElementById("estado2").value;
  
    else
      conservacao = document.getElementById("estado3").value;
  
    // pegando os dados do checkbox
    var check, qteCheck, i, opc = "";
    check = document.getElementsByName("opcionais");
    qteCheck = check.length;
    for (i = 0; i < qteCheck; i++) {
      if (check[i].checked)
        opc = opc + " " + check[i].value;
    }
  
    //pegando os dados do select
    var estado, indiceEstadoSelecionado, estadoSelecionado;
    estadoSelecionado = document.getElementById("classificacao");
    indiceEstadoSelecionado = estadoSelecionado.selectedIndex;
    estado = estadoSelecionado.options[indiceEstadoSelecionado].value;
  
  //pegando os dados da caixa de texto
  var  v, n, resp;
  v=document.getElementById("valor").value;
  n= document.getElementById("nome-comprador").value;
  
  var resp;  
  resp= document.getElementById("caixaResposta");
    resp.innerHTML="Nome do comprador: "+n + 
                   "<br>Valor do veículo: "+ v +
           "<br>Marca: "+ marca +
           "<br>Estado de conservação do veículo: "+ conservacao +
           "<br>Opcionais: "+ opc +
           "<br>Classificação do veículo: "+ estado;
  }
  
  function limparCaixaResposta(){
      var resp;
      resp= document.getElementById("caixaResposta");
      resp.innerHTML="";
      
      
  }//fim do limparResposta
  