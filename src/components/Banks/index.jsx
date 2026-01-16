
import { BankItem } from "../BankItem";
import styles from "./banks.module.css";

export const Banks = () => {
  const items = [
    { bank: "Anybank", balance: 1200 },
    { bank: "Bytebank", balance: 800 },
    { bank: "Switch Bank", balance: 1800 },
  ];

  return (
    <>
      <ul className={styles.list}>
        {items.map((transactionItem, index) => {
          return (
            <li key={index}>
              <BankItem item={BankItem} />
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <Button>
          <IconCurrency /> Adicionar transação
        </Button>
      </div>
    </>
  );
};
