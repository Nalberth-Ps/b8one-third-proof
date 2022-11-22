// Dependencies
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";

// Context
import { useAuth } from '../../context/AuthenticationContext';

// Mutations
import { SIGN_IN } from '../../graphql/mutations';

//Typings
import { SignIn, UserToken } from '../typings/auth';

// Styles
import './styles.scss';

export const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData, isAuthenticated } = useAuth();
  const history = useHistory();

  const [signIn, { data, error }] = useMutation<{ signIn: UserToken }, { input: SignIn }>(SIGN_IN);

  if (isAuthenticated) history.push('/dashboard');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await signIn({ variables: { input: { email, password } } });

    if (!data?.signIn || error) return;

    setUserData(data?.signIn);

    history.push('/dashboard');
  };

  return (
    <>
      <header>
        <h1 className="header__logo">
          Academy <span className="header__logo-highlight">Store</span>
        </h1>
      </header>
      <div className="login__page">
        <main className="login__card">
          <form onSubmit={handleSubmit}>
            <h2 className="login__title">Olá, entre com e-mail e senha.</h2>

            <label className="input__email">
              E-mail
              <input type="email" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            <label className="input__password">
              Senha
              <div className='password__wrapper'>
                <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className="icon__wrapper" role="button">
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                    <path
                      d="M1 10C1 10 4.63636 2.5 11 2.5C17.3636 2.5 21 10 21 10C21 10 17.3636 17.5 11 17.5C4.63636 17.5 1 10 1 10Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 12.8123C12.5062 12.8123 13.7273 11.5531 13.7273 9.99976C13.7273 8.44646 12.5062 7.18726 11 7.18726C9.49375 7.18726 8.27271 8.44646 8.27271 9.99976C8.27271 11.5531 9.49375 12.8123 11 12.8123Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </label>

            <label className="input__checkbox">
              <input type="checkbox" name="" id="" />
              Manter conectado
            </label>

            <button className="submit__button" type="submit">
              Entrar
            </button>
          </form>

          <p className="create__account">Não possui conta? Cadastre-se!</p>
        </main>
      </div>
    </>
  );
};
