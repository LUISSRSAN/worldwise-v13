import styles from "./Login.module.css";
import {useState} from "react";
import PageNav from "../components/PageNav"

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
const {login,isAuthenticated} = useAuth();
const navigate = useNavigate()
function handleSubmit(e){
  e.preventDefault();
  if(email && password) login(email,password);
}


useEffect(function(){

  if(isAuthenticated) navigate("/app",{replace:true});
},[isAuthenticated,navigate]);

  return (
    <main className={styles.login}>
      <PageNav/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}
