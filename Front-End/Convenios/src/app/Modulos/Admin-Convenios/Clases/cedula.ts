export class Cedula {

  static validarCedula(cedula:string) {
      if (cedula.length !== 10) {
          return false;
      }

      const cedulaNumerica = cedula.substr(0, 9);

      let suma = 0;
      for (let i = 0; i < cedulaNumerica.length; i++) {
          let valor = parseInt(cedulaNumerica.charAt(i), 10);
          if (i % 2 === 0) {
              valor *= 2;
              if (valor > 9) {
                  valor -= 9;
              }
          }
          suma += valor;
      }

      const digitoCalculado = (10 - (suma % 10)) % 10;
      const digitoVerificador = parseInt(cedula.charAt(9), 10);

      return digitoVerificador === digitoCalculado;
  }
}
