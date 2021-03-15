import styles from '../styles/components/UsersTable.module.css'

const users = [
  {
    position: 1,
    name: "Jefferson Aguiar",
    level: 59,
    avatar_url: "https://github.com/jeffersondossantosaguiar.png",
    challenges: 130,
    exp: 159000
  },
  {
    position: 2,
    name: "Joselito",
    level: 19,
    avatar_url: "https://i1.sndcdn.com/artworks-000123960697-yayeil-t500x500.jpg",
    challenges: 100,
    exp: 59000
  },
  {
    position: 3,
    name: "Ricardo Milos",
    level: 12,
    avatar_url: "https://pbs.twimg.com/profile_images/1181974658230435840/N0rcgveK.jpg",
    challenges: 13,
    exp: 9000
  }
]

const columns = [
  { title: "POSIÇÃO" },
  { title: "USUÁRIO" },
  { title: "DESAFIOS" },
  { title: "EXPERIÊNCIA" }
]

export function UsersTable() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tr_header}>
            {columns.map(column => (
              <th key={column.title} className={`${column.title === "USUÁRIO" ? styles.th_user : styles.th}`}>
                {column.title}
              </th>
            ))}
          </tr>
          {users.map(user => (
            <tr className={styles.tr_data} key={user.name}>
              <td className={styles.td_position}>
                {user.position}
              </td>
              <td className={styles.td_user}>
                <div>
                  <img className={styles.avatar} src={user.avatar_url} />
                </div>
                <div className={styles.name_level}>
                  <strong className={styles.strong}>{user.name}</strong>
                  <p className={styles.p}>
                    <img className={styles.avatar_img} src='icons/level.svg' />
                   Level {user.level}</p>
                </div>

              </td>
              <td className={styles.td_challenges}>
                <span className={styles.blue}>{user.challenges}</span> completados
            </td>
              <td className={styles.td_exp}>
                <span className={styles.blue}>{user.exp}</span> xp
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}