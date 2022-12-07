const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);


const firebaseConfig = {
  apiKey: "AIzaSyAUwAvZbQFc96i9jN5cJvvsQYeofNe5CDI",
  authDomain: "jcornersbadbank-75a0b.firebaseapp.com",
  projectId: "jcornersbadbank-75a0b",
  storageBucket: "jcornersbadbank-75a0b.appspot.com",
  messagingSenderId: "777397107516",
  appId: "1:777397107516:web:45127086b01a3ef9827c39",
  measurementId: "G-0XTB37SEWV"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
