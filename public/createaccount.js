function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(''); 
 
  const ctx = React.useContext(UserContext);
 

  function validate(field, label){
    if (!field) {
      setStatus('Error: Enter ' + label);
      return false;
    }

    if (label="password" && field.length<8) {
      setStatus('Error: Password must be at least 8 characters');
      return false;
    }

    return true;

  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:0,deposit:[],withdrawal:[]});
    setShow(false);
     


      const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => {
          e.message ? setShow(true) : setShow(false)
          setStatus(e.message)
          console.log(e.message)});
     
    

      const url = `/account/create/${name}/${email}/${password}`;
      (async () => {
          var res = await fetch(url, {method: 'POST', mode: 'cors'});
          var data = await res.json();
          console.log(data);
          ctx.user.name = name;
          ctx.user.email = email;
          ctx.user.balance = 0;
          console.log('this is the ctx:', ctx);
          console.log('users name:',name);
          setShow(false);
          setStatus('');
      })();      
      // setShow(false);
      // setStatus('')
  }

  function clearForm() {
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
      
  }

  return (
  
       <div class="row justify-content-center"><Card
      bgcolor="warning"
      txtcolor="white"
      header="Create Account"
      title="Fill-up form below."
      status={status}
      body={show ? ( <>

          Name<br/>
          <input 
          type="input" 
          className="form-control" 
          id="name" 
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.currentTarget.value)} /> <br/>

          Email
          <input 
          type="input"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)} /> <br/>

          Password (8 Character Min.)
          <input 
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)} /> 
          <br/>
          <button 
          type="submit" 
          className="btn btn-light" 
          disabled={name === "" && email === "" && password === ""}
          onClick={handleCreate}>Create Account</button>
         
         </> 
         ) : ( 
         <>
         
          <h5>Success!</h5>
          <h6>{name}, your account has been created.
          Your login email is {email}</h6>
          <button 
          type="submit" 
          className="btn btn-light" 
          onClick={clearForm}
          disabled={name === "" && email === "" && password === ""}
          >Add Another Account</button> <br />
          <br />
          <button 
          type="submit" 
          className="btn btn-light" >
          <a href="#/login/">Login into Your Account</a>
          </button> 
          
          </> )
          }
      
      />
       </div> )
}