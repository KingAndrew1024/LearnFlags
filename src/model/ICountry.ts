export interface ICountry {
  capital: {
    en: string;
    es: string;
  };
  cca2: string[2];
  name: {
    en: string;
    es: string;
  };
  selected: boolean;
  timesPresented: number;
  accumulatedScore: number;
  percentage: number;
}
/*
Al iniciar la app
1 ver si existe en LS arreglo de STATS de paises
2 si no existe
  2.1 inicializar arreglo STATS vacio
  2.2 elegir todos los continentes
  2.3 por cada continente
    2.3.1 filtrar paises seleccionados
    2.3.2 ordenar paises por score (percentage)
    2.3.3 insertar los paises a arreglo STATS
  2.4 guardar el arreglo STATS en localstorage [1,2,3,4,5|,6,7,8,9,0|,...]
  2.5 ir a paso 4
3 si si existe
4 cargar array en memoria
5 determinar algoritmo para presentar los paises a ser aprendidos...

Flashcards?

1- dividir los paises en al menos 2 grupos
2- repasar los paises del grupo 1 mientras no alcancen un 80% de score
2.1- como elegir los paises? de acuerdo al score? randomly? ambos?
3- repasar los pasises del resto de grupos
*/
