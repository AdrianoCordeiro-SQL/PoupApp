import { IconBank } from '../Icons';
import styles from './bankitem.module.css'
const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const BankItem = ({ bank, balance }) => {
  return (
    <div className={styles.item}>

      <div className={styles.bank}>
        <IconBank />
        <span className={styles.bankName}>{bank}</span>
      </div>

      <div className={styles.balance}>
        <span className={styles.value}>Saldo </span>
        <span className={styles.balance}>{formater.format(balance)}</span>
      </div>
    </div>
  );
};
