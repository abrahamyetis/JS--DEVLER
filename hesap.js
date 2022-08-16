function İşlem(Gelendeger) {
    if (Gelendeger == 'C') {
        EkranDegeri.value = 0;
    }

    if (Gelendeger == '+') {
        sayı1 = EkranDegeri.value;
        EkranDegeri.value += '+';
        Matİşlem = '+'
    }

    if (Gelendeger == '-') {
        sayı1 = EkranDegeri.value;
        EkranDegeri.value += '-';
        Matİşlem = '-'
    }

    if (Gelendeger == '*') {
        sayı1 = EkranDegeri.value;
        EkranDegeri.value += '*';
        Matİşlem = '*'
    }

    if (Gelendeger == '=') {
        sayı2 = EkranDegeri.value.split(Matİşlem) [1]
        switch (Matİşlem) {
            case '+' :
                EkranDegeri.value = parseInt(sayı1) + parseInt(sayı2);
                break;

            case '-' :
                EkranDegeri.value = parseInt(sayı1) - parseInt(sayı2);
                 break;

            case '*' :
                EkranDegeri.value = parseInt(sayı1) * parseInt(sayı2);
                break;
        }   
    }

}






