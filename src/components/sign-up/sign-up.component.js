import { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

export class Signup extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
  
    if (password !== confirmPassword) {
      alert('Password do not match');
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch(err) {
      console.error(err);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    
    return (
      <div className='sign-up'>
      <h2 className="title">I do not have an select_account</h2>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            label='Name'
            handleChange={this.handleChange}
            value={displayName}
            required 
            />
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={email}
            handleChange={this.handleChange}
            required 
            />
            <FormInput
            type='password'
            name='password'
            label='Confirm Password'
            value={password}
            handleChange={this.handleChange}
            required 
            />
            <FormInput
            type='password'
            name='confirmPassword'
            label='Confirm Password'
            value={confirmPassword}
            handleChange={this.handleChange}
            required 
            />
            <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}
export default Signup