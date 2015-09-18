1. Lancer index.html dans votre navigateur préféré
2. Apprécier la classe avec les outils de debug (F12)
3. Pour instancier la classe, il s'agit de procéder comme suit:
var calc = new Calculator(10);
4. La valeur passée au constructeur est optionnelle.

Note: Je n'ai pas implémenté la fonction gamma qui calcule une factoriel d'un nombre réel. Donc, la fonction
ne fonctionne que s'il s'agit d'un nombre entier. Dans le cas où un nombre réel est passé à la fonction, alors
elle lève une exception de type "notImplementedException".

Note2: main.js contient quelques tests unitaires. C'est loin d'être complet, mais c'est un début.