
import { BankItem } from "../BankItem";
import { Button } from "../Button";
import { IconWallet } from "../Icons";
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
        {items.map((bank) => (
            <li key={bank.bank}>
                <BankItem {...bank} />
            </li>
))}

      </ul>

      <div className={styles.actions}>
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </>
  );
};
