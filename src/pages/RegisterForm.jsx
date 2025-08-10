const RegisterForm = ({ role }) => {
  return (
    <div className="Register-Container">
      <h1>Sign Up as A {role}</h1>

      {role === 'customer' ? (
        <form>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <br />
          <button type="submit">Register</button>
        </form>
      ) : (
        <form>
          <label>Restaurant Name</label>
          <input type="text" />
          <label>Restaurant Telephone</label>
          <input type="number" />
          <label>Restaurant Address</label>
          <input type="text" />
          <label>Restaurant Email</label>
          <input type="email" />
          <label>CR</label>
          <input type="number" />
          <br />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  )
}

export default RegisterForm
