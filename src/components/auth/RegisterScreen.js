import React from "react";
import {Link} from "react-router-dom";

export const RegisterScreen = () => {
	return (
		<>
			<h3 className='auth__title'>Register</h3>
			<form>
				<input
					autoComplete='off'
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					autoComplete='off'
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
				/>
				<input
					autoComplete='off'
					className='auth__input'
					type='text'
					placeholder='Password'
					name='password'
				/>
				<input
					autoComplete='off'
					className='auth__input'
					type='text'
					placeholder='Confirm password'
					name='confirm'
				/>

				<button className='btn btn-primary btn-block mb-5' type='submit'>
					Register
				</button>

				<Link className='link' to='/auth/login'>
					Already registered?
				</Link>
			</form>
		</>
	);
};
