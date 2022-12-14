

class AuxilioController{

    async validaEmail(email){
      var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (email !== '' && email.match(emailFormat)) { return true; }
      
      return false;
    }



    async calculaClasse(renda){
        let classe = '';

        if(renda < 1000){
          classe = 'Baixa'
        }else if(renda >= 1000 && renda < 2000){
          classe = 'Media'
        }else if(renda >= 2000){
          classe = 'Alta'
        }
    
        return classe
      }


    async validaCpf(cpf){
        //([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})
    var Soma = 0
    var Resto
    var i = 0;

    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
      return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return false

    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return false

    Soma = 0

    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return false

    return true
      }
}


module.exports = new AuxilioController();
