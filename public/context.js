const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);


const firebaseConfig = {
   "type": "service_account",
   "project_id": "badbankcornersfirebase",
   "private_key_id": "6b03ed3422549654a8ff2d9da3e964393cb54a81",
   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDfsxJVIkoodiFf\nSOxJVbG0JrVar/zqwLAD6DDOB48CWnFtvt37Xz1EkvmOI9RnKV7oN/HVHCT8LLzg\nZ1ayUFFZtwRcza9kRjKI+rVlzt1asdPP/Ki19kO6A9Qav85qRxRmJV/aO2Xyigjz\ndikTGGyM+UwsVPO1EPbweZ5bBmHT3VufwEA9Cr6Jzlw0vnZO/z+lPieZA3xPDM8f\npjQYv8orAv+EtXfYrVACfNTC72IHiTTlb5GcgmOswHLu516ktWhaQBjQoUmO47gj\nEmBNbvbn7yn9m+z1Yf3rGCmJt5koUx6w74XrYeK97dnhusOiRuCQQe00ADdqpN1i\nLAA/wCt1AgMBAAECggEAUujp6IfW+HwgDlLW0K9kN6MJIF2N3ewg0LHkNNh0Vqjy\n1XwihiJccOgQenApLzsUI/loNlZCFvz13C4w4dIG9LtycHsDgKTL4h0Z0mwDerPi\nD3pThW2K2IzGtktU0+sYUmuTxSyyslwayTGIM72frfhQFTY/RWLOQ36wBIivBXia\nI4G33wwLeJ/fNxEao5wdYxWiLjYsBCDsOG0jM7UMq+FLU20RT6EYENBfT8P6fI6S\npEXx4IKKPiMrXPsvRaikumJlMRhiREek0R95+dEM6nST+hQsGm7tq3Fx+Uhqq17V\nrGFYyDx9OCDWUmEL6tU+rXuyGDbnHXo+fcHNWoSFWQKBgQD1o8pUxBdf6MlvHdO+\nLGZ1+f3pxm60h+vqkCSgOnzgIafix436pqLOyKbJPrV7iflgZn3Rr+ulrTrjzmwA\niKRUwBoO8u/3E60LcLWMRMeH/HKUiLemLhgJcS6g5K4VTttl6axe4HlKMmr+sjsN\nqw7xd3NCOkydA3SsEuIwxie7nwKBgQDpImNzcVIya4dR+6ipdPbUgwWr9cdd4Cj2\nVjM7dJzU5+zxTy7RD1zHJQxHa6ftnAJhOp9PQQvpDfzj93/QAnpnBUIkDQ+STOee\nP/HXtXzuWG0mUri/R1Spbq/I0knz8qlvbtkHyZKPAstnc3aJ2XF2dMpfTdZDcyAh\nivrb+KNAawKBgDwieOn/h2lnZ8jYGHo6DGtdZBfTCE8R52NpHk5Lgz6rfpo6GDwA\nh2LwJESoIW24/V/oN20aECpjGkOiyTXoPbKxxK9cMfreykI+uXM5c0+LMdHDFpKM\nPj4xgyTIVwXIZFWyuwwPECJl7WOk5mgWNHZQs9rGwvK9YdauWMlv+VIpAoGBAI6Z\n6UkY3NVYbopYK9+TWtO8XQDFMrCaR5P+QBIzDycvwgAMli9sfSyW3b7l++7cSZxd\ndkrNF9LzKmfq4PREP8i6L63Li2XKwrZKmMyAB63mysTxPm5J3GBTAxUMhA3CtZ8i\np4Aa7Rmq9O4Pc0d4iO2THKJVAyV4ywOZdj6NBJaHAoGBAJbFKK6gvQHLRemw5tgH\n2q/ok4nnls4aYCyNxVTas+IFGGb1JkDhJW9ElifY2F+bJUjqlR3UxxLyOo0q7gLz\nbKdxWiCt3FmKPUfr/R7ggYQ/Aoh894Fz2UkxOhaiDUlprMA/hRdv5Rp8p0nYjjkp\nVSSsK3sPN8Kuh6Ey6v5cRyhd\n-----END PRIVATE KEY-----\n",  "client_email": "firebase-adminsdk-z60ma@badbankcornersfirebase.iam.gserviceaccount.com",  "client_id": "113657915413390326347",  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
   "token_uri": "https://oauth2.googleapis.com/token",
   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z60ma%40badbankcornersfirebase.iam.gserviceaccount.com"};

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