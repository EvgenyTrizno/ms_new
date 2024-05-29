import styles from "./styles.module.scss";

export const Table = () => {
  return (
   <div className={styles.tableContainer}>
     <table className={styles.table}>
      <thead>
        <tr>
          <th>No</th>
          <th>Наименование</th>
          <th>Участников</th>
          <th>Дата и время</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div className={styles.circle}></div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div className={styles.circle}></div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div className={styles.circle}></div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div className={styles.circle}></div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div className={styles.circle}></div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div className={styles.circle}></div>
          </td>
        </tr>
      </tbody>
    </table>
   </div>
  );
};
