var agora = new Date() //pegar a hora atual do sistema usar esse dois comandos 
var hora = agora.getHours()//
var hora = 12 // colocar uma hora especifica aq
console.log(`Agora sao exatamente ${hora} horas.`);
if (hora < 12) {
    console.log('Bom dia');
}else if (hora <= 18) {
    console.log ('Boa tarde');
} else
console.log('Boa noite')