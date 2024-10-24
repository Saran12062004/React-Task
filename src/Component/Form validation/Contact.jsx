import React, { Component } from 'react'

class Contact extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firstNameErr: '',
    lastNameErr: '',
    emailErr: '',
    phoneErr: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.validateForm()
  }

  validateForm = () => {
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let phoneError = '';

    if (this.state.firstName.length <= 4) {
      firstNameError = 'Frist Name should be 4 character'
    }

    if (this.state.lastName.length != 1) {
      lastNameError = 'Last Name should be atleast 1 character'
    }

    if (!this.state.email.includes('@')) {
      emailError = 'Enter Your Vaild Email'
    }

    if (this.state.phone.length != 10) {
      phoneError = 'Enter your correct Number'
    }

    if (firstNameError || lastNameError || emailError || phoneError) {
      this.setState({ firstNameErr: firstNameError, lastNameErr: lastNameError, emailErr: emailError, phoneErr: phoneError })
    } else {
      this.setState({ firstNameErr: firstNameError, lastNameErr: lastNameError, emailErr: emailError, phoneErr: phoneError })
    }

  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })

    console.log(this.state)
  }

  render() {
    return (
      <div class='border1'>
        <h2 style={{color:'blue'}}>From validation</h2><hr/>
        <div className='row'> 
          <div className='col-md-4'></div>
          <div className='col-md-2'>
            <form>
              <div className='mb-3'>
                <input
                  type='text'
                  placeholder='Enter your First Name'
                  name='firstName'
                  className='form-control'
                  value={this.state.firstName}
                  onChange={(event) => { this.handleChange(event) }}
                  style={{
                    borderColor: this.state.firstNameErr 
                      ? 'red' 
                      : this.state.firstName.length >= 4 
                      ? 'green' 
                      : ''
                  }}
                />
                <p className='text-danger'>{this.state.firstNameErr}</p>
              </div>
              <div className='mt-2'>
                <input
                  type='text'
                  placeholder='Enter your Last Name'
                  name='lastName'
                  className='form-control'
                  value={this.state.lastName}
                  onChange={(event) => { this.handleChange(event) }}
                  style={{
                    borderColor: this.state.lastNameErr 
                      ? 'red' 
                      : this.state.lastName.length >= 1
                      ? 'green' 
                      : ''
                  }}
                />
                <p className='text-danger'>{this.state.lastNameErr}</p>

              </div>
              <div className='mt-2'>
                <input
                  type='email'
                  placeholder='Enter your Email'
                  name='email'
                  className='form-control'
                  value={this.state.email}
                  onChange={(event) => { this.handleChange(event) }}
                  style={{
                    borderColor: this.state.emailErr 
                      ? 'red' 
                      : this.state.email.length >= 10
                      ? 'lightGreen' 
                      : ''
                  }}
                />
                <p className='text-danger'>{this.state.emailErr}</p>

              </div>
              <div className='mt-2'>
                <input
                  type='number'
                  placeholder='Enter your phone'
                  name='phone'
                  className='form-control'
                  value={this.state.phone}
                  onChange={(event) => { this.handleChange(event) }}
                  style={{
                    borderColor: this.state.phoneErr 
                      ? 'red' 
                      : this.state.phone.length >= 10 
                      ? 'lightGreen' 
                      : ''
                  }}
                />
                <p className='text-danger'>{this.state.phoneErr}</p>

              </div>

              <div className='mt-3'>
                <button className='btn btn-outline-primary'
                  onClick={(event) => { this.handleSubmit(event) }}
                >Submit</button>
              </div>
            </form>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>

    )
  }
}

export default Contact