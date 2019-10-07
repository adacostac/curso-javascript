# Curso Básico de JavaScript
---
### Tipos de datos en JavaScript

1. Tipos primitivos
    - String: Cadenas de texto
    - Number: Valores númericos
    - Boolean: Verdadero o falso
    - Null: Tipo especial, contiene null
    - Undefined: Tipo especial, contiene undefined

2. Tipos objeto
    2.1 Tipos predefinidos de JavaScript
    - Date: Fechas
    - RegExp: Expresiones regulares
    - Error: Datos de error

   2.2 Tipos definidos por el usuario
   - Funciones simples
   - Clases

    3.3 Arrays
    Se define como una colección de datos de tipo vector o matriz.

    3.4 Objetos especiales
    Objeto global, objetos prototipo u otros.

### Funciones de alto orden en JavaScript
 Tratar una función como ciudadano de primer orden, signifca que las funciones son objetos, los cuales dan posiblidad de que sean:
 * Almacenadas en variables
 * Pasadas como argumentos
 * Retornadas funciones

A continuación la definición de cada una de estas

1. ##### Ser almacenadas en variables
Tenemos la siguiente función
```
function porTres(numero) {
    return numero * 3
}
console.log(porTres(10)); // 30
```
