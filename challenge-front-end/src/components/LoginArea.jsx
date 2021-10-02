import React from 'react';
import { Link } from 'react-router-dom';
import vector from '../images/Vector.png';

export default class LoginArea extends React.Component {
	constructor() {
		super();

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.checkLogin = this.checkLogin.bind(this);

		this.state= {
			emailArea: '',
			passwordArea: '',
			getEmail: '',
			getPassword: '',
		};
    
	}
	componentDidMount() {
		this.checkLogin();
	}

	checkLogin() {
		this.setState({
			getEmail: localStorage.getItem('UserEmail'),
			getPassword: localStorage.getItem('UserPassword')
		});
		/* console.log(getInputEmail.value);
		if(getEmail !== '' && getPassword !== '') {
			getInputEmail.value = getEmail;
			getInputPassword.value = getPassword;
		}  */
	}

	handleEmailChange(event) {
		this.setState({
			emailArea: event.target.value,
		});
	}

	handlePasswordChange(event) {
		this.setState({
			passwordArea: event.target.value,
		});

	}

	handleButtonClick() {
		const email = this.state.emailArea;
		const password = this.state.passwordArea;
		if(email !== '' && password !== '') {
			localStorage.setItem(
				'UserEmail', email,
			);
			localStorage.setItem(
				'UserPassword', password,
			);
			localStorage.setItem(
				'Token', true,
			);
		}
		if(email === '' && password === '') {
			alert('Preencha os campos de Login e Password!');
		}
	}

	render() {
		const { getEmail, getPassword, emailArea, passwordArea } = this.state;
		const sum = ( emailArea.length + passwordArea.length );
    const number = 30;
		return(
			<section>
				<form>
					<h1 className="h1-login-area">Comece a coletar pokémons!</h1>
					<input
						className="input-login-email"
						type="text"
						required
						placeholder="Digite seu Email..."
						onChange={ this.handleEmailChange }
						value= { getEmail === '' ? this.handlePasswordChange : localStorage.getItem('UserEmail') }
					/>
					<input
						className="input-login-password"
						type="password"
						required
						placeholder="Digite sua Senha..."
						onChange={ this.handlePasswordChange }
						value={ getPassword === '' ? this.handlePasswordChange : localStorage.getItem('UserPassword') }
					/>
					{ (sum < number) ? (<button
						disabled
						className="button-login" 
						type="submit"
						required
						onClick={ this.handleButtonClick }
					>
						<p className="text-button">
                Entrar
						</p>
					</button>) :
						<Link to="/vertodos">
							<button
								className="button-login" 
								type="submit"
								required
								onClick={ this.handleButtonClick }
							>
								<p className="text-button">
                Entrar
								</p>
							</button>
						</Link>
					}
				</form>
				<button className="button-change-theme">
					<img
						className="vector-theme-moon"
						src={ vector }
						alt="mudar de tema" />
					<strong className="theme-text">
            Tema escuro
					</strong>
				</button>
			</section>
		);
	}
}
