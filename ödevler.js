// ÖDEV-1

//function İşlem(Gelendeger) {
    // if (Gelendeger == 'C') {
        // EkranDegeri.value = 0;
    // }
// 
    // if (Gelendeger == '+') {
        // sayı1 = EkranDegeri.value;
        // EkranDegeri.value += '+';
        // Matİşlem = '+'
    // }
// 
    // if (Gelendeger == '-') {
        // sayı1 = EkranDegeri.value;
        // EkranDegeri.value += '-';
        // Matİşlem = '-'
    // }
// 
    // if (Gelendeger == '*') {
        // sayı1 = EkranDegeri.value;
        // EkranDegeri.value += '*';
        // Matİşlem = '*'
    // }
// 
    // if (Gelendeger == '=') {
        // sayı2 = EkranDegeri.value.split(Matİşlem) [1]
        // switch (Matİşlem) {
            // case '+' :
                // EkranDegeri.value = parseInt(sayı1) + parseInt(sayı2);
                // break;
// 
            // case '-' :
                // EkranDegeri.value = parseInt(sayı1) - parseInt(sayı2);
                //  break;
// 
            // case '*' :
                // EkranDegeri.value = parseInt(sayı1) * parseInt(sayı2);
                // break;
        // }   
    // }
// 
// }

//? ÖDEV 2 ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

let day = prompt ("Bir gün giriniz");
switch (day) {
    case "pazartesi":
       console.log("Inclass");
       break;

    case "salı":
        console.log("Inclass");
        break;

    case "çarşamba":
        console.log("Inclass");
        break;

    case "perşembe":
        console.log("Inclass");
        break;

    case "cuma":
        console.log("Teamwork");
    
        break;

    case "cumartesi":
        console.log("Inclass + Workshop");
    
        break;

    case "pazar":
        console.log("Self-Study");
    
        break;

    default:
        console.log("yanlış değer girdiniz.")
        break;
}





