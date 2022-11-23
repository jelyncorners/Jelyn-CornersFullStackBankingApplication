const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);


const firebaseConfig = {
  apiKey: "AIzaSyBjVvCoVfBJtQhVGtS3DIg5hyYhFS8VgVg",
  authDomain: "badbankcornersfirebase.firebaseapp.com",
  databaseURL: "https://badbankcornersfirebase-default-rtdb.firebaseio.com",
  projectId: "badbankcornersfirebase",
  storageBucket: "badbankcornersfirebase.appspot.com",
  messagingSenderId: "716284323929",
  appId: "1:716284323929:web:3a65d2c38adf38fec16948"
}

firebase.initializeApp(firebaseConfig);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}