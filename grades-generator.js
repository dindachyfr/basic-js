const gradesGenerator = ({mtk, bahasaIndonesia, bahasaInggris, ipa}) =>{
    finalGrade=''
    let gradesAvg = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
        if(gradesAvg > 90){
         finalGrade+='A';
        }
        if(gradesAvg > 80 && gradesAvg < 90){
            finalGrade+='B';
           }
    
        if(gradesAvg > 70 && gradesAvg < 80){
            finalGrade+='C';
           }
    
        if(gradesAvg > 60 && gradesAvg < 70){
        finalGrade+='D';
        }
    
        if(gradesAvg <60){
            finalGrade+='D';
           }
    
    
    
        return `nilai rata-rata: ${gradesAvg} \nfinal grade: ${finalGrade}`}
    

console.log(gradesGenerator({
    mtk: 85,
    bahasaIndonesia: 90,
    bahasaInggris: 80,
    ipa: 87
}))