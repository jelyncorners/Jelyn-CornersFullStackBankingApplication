function NavBar(props){
  const ctx = React.useContext(UserContext); 
  let user = ctx.user;
  const [show, setShow] = React.useState(true);
  // const [status, setStatus] = React.useState('');
  // const [name, setName] = React.useState('');

 

  function handleLogout() {
    firebase.auth().signOut()
        .then(() => {
            console.log('User signed out of firebase');
            setShow(false);
            alert('User is logged out.');
            window.location.reload(false);
            user.email = null;
            user.password = null;
            user.balance = null;
            user.name = null;
          console.log(user);
        })
        .catch(function(error){
            console.log(error)
        })
   }


  return(
    < div className= "navbar nav justify-content-center">
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <a className="navbar-brand" href="#">BadBank</a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar nav navbar-light">
       
          <li className="nav-item">
              <a  href='/' className="nav-link" aria-current="page"> Home </a>
              
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            
          </li>
          
          
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link"   href="#/balance/">Balance</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
            
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
            
          </li>     
          <li className="nav-item">
            <a className="nav-link" href="#/login/" onClick={handleLogout}>Logout</a>
            
          </li>       
        </ul>
        </div>
        <span id="activeuser" className="navbar-text">
       
      </span>
     
    </nav>
    </div>
  );
}