const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);


const firebaseConfig = {
  apiKey: "AIzaSyDztkELBWdGgGICqfrzcDhXWVxMp-xNIE8",
  authDomain: "jcornersbadbank.firebaseapp.com",
  projectId: "jcornersbadbank",
  storageBucket: "jcornersbadbank.appspot.com",
  messagingSenderId: "360820026498",
  appId: "1:360820026498:web:d3a97036575f79023a589b",
  measurementId: "G-WRDS10B367"
};

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
