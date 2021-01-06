import { BankAccount } from "../../src/domain/entity/bank.account";
import { SavingAccount } from "../../src/domain/entity/saving.account";
import { Transaction } from "../../src/domain/entity/transaction";
import { CurrentAccount } from "../../src/domain/entity/CurrentAccount";

describe('test de cuenta bancaria',()=>{
  let CuentaBancaria: BankAccount;

  describe('Cuenta de Ahorro', ()=>{

    beforeAll(()=>{
      CuentaBancaria =  new SavingAccount();
      CuentaBancaria.number = "0000";
      CuentaBancaria.ownerId = "12345";
      CuentaBancaria.balance = 0;
      CuentaBancaria.city = "Valledupar";
    });

    test('Consignacion negativa o cero en cuenta bancaria', ()=>{
      const newTransaccion: Transaction = new Transaction();
      newTransaccion.city = "Valledupar";
      newTransaccion.value = -50000;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(0);
    });

    test('Consignacion cuenta de ahorro correcta', ()=>{
      const newTransaccion: Transaction = new Transaction();
      newTransaccion.city = "Valledupar";
      newTransaccion.value = 60000;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(60000);
    });

    test('Consignacion cuenta de ahorro incorrecta', ()=>{
      const newTransaccion: Transaction = new Transaction();
      newTransaccion.city = "Valledupar";
      newTransaccion.value = 5000;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(0);
    });

    test('Consignación posterior a la inicial correcta', () => {
      const newTransaccion: Transaction = new Transaction();

      newTransaccion.city = "Valledupar";
      newTransaccion.value = 50000;
      CuentaBancaria.consing(newTransaccion);

      newTransaccion.city = "Valledupar";
      newTransaccion.value = 20000;
      CuentaBancaria.remove(newTransaccion);

      newTransaccion.city = "Valledupar";
      newTransaccion.value = 49950;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(79950);
    });

    test('Consignación posterior a la inicial correcta Ciudad', () => {
      const newTransaccion: Transaction = new Transaction();

      newTransaccion.city = "Valledupar";
      newTransaccion.value = 50000;
      CuentaBancaria.consing(newTransaccion);

      newTransaccion.city = "Valledupar";
      newTransaccion.value = 20000;
      CuentaBancaria.remove(newTransaccion);

      newTransaccion.city = "Bogota";
      newTransaccion.value = 49950;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(69950);
    });

  });

  describe('Cuentas Corriente', ()=> {
    beforeEach(() => {
      CuentaBancaria = new CurrentAccount();
      CuentaBancaria.number = "0000";
      CuentaBancaria.ownerId = "12345";
      CuentaBancaria.balance = 0;
      CuentaBancaria.city = "Valledupar";
    });

    test('Consignacion negativa o cero en cuenta corriente', () => {
      const newTransaccion: Transaction = new Transaction();
      newTransaccion.city = "Valledupar";
      newTransaccion.value = -50000;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(0);
    });

    test('Consignación Inicial Correcta', () => {
      const newTransaccion: Transaction = new Transaction();
      newTransaccion.city = "Valledupar";
      newTransaccion.value = 100000;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(100000);
    });

    test('Consignación Inicial Incorrecta', () => {
      const newTransaccion: Transaction = new Transaction();
      newTransaccion.city = "Valledupar";
      newTransaccion.value = 20000;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(0);
    });

    test('Consignación posterior a la inicial correcta cuenta corriente', () => {

      const newTransaccion: Transaction = new Transaction();

      newTransaccion.city = "Valledupar";
      newTransaccion.value = 100000;
      CuentaBancaria.consing(newTransaccion);

      newTransaccion.city = "Valledupar";
      newTransaccion.value = 20000;
      CuentaBancaria.remove(newTransaccion);

      newTransaccion.city = "Valledupar";
      newTransaccion.value = 20000;
      CuentaBancaria.consing(newTransaccion);
      expect(CuentaBancaria.balance).toBe(100000);

    });

  })

})

