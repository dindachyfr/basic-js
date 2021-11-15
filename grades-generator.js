const gradesGenerator = ({mtk, bahasaIndonesia, bahasaInggris, ipa}) =>{
    finalGrade='';
    if (typeof mtk && typeof bahasaIndonesia && typeof bahasaInggris && typeof ipa =='number'){
    
        let gradesAvg = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
        if(gradesAvg >= 90){
         finalGrade+='A';
        }
        if(gradesAvg >= 80 && gradesAvg < 90){
            finalGrade+='B';
           }
    
        if(gradesAvg >= 70 && gradesAvg < 80){
            finalGrade+='C';
           }
    
        if(gradesAvg >= 60 && gradesAvg < 70){
        finalGrade+='D';
        }
    
        if(gradesAvg <=60){
            finalGrade+='E';
           }
    
    
    
        return `nilai rata-rata: ${gradesAvg} \nfinal grade: ${finalGrade}`}

    else{
        return 'Harap lengkapi nilai dengan angka'
    }
}
    

console.log(gradesGenerator({
    mtk: 65,
    bahasaIndonesia: 90,
    bahasaInggris: 5,
    ipa: 43
}))