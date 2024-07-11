import styles from "./page.module.css";
function button() {
  return <button>I'm Gay</button>;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={"todo"}>
        <p>todos</p>
        <button />
      </div>
    </main>
  );
}


// function MyButton() {
//   return <button>I'm a button</button>;
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }
