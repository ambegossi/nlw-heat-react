import { VscGithubInverted } from 'react-icons/vsc';

import styles from './styles.module.scss';

export function LoginBox() {
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}`;

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={24} />
        Entrar com GitHub
      </a>
    </div>
  );
}
