var idade =  25
console.log(`Voce tem ${idade} anos.`);
if (idade < 16 ){
    console.log('não vota');
}else if (idade < 18 || idade > 65 ){
    console.log('voto opcinal');
}else
console.log('voto obrigatorio');