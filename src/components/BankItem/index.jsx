export const BankItem = ({ bank, balance }) => {
  return (
    <div>
      <span>{bank}</span>
      <div>
        <small>Saldo</small>
        <strong>R$ {balance}</strong>
      </div>
    </div>
  );
};
