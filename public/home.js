function Home(){
  return (
 
      <Card 
            bgcolor="info"
            txtcolor="white"
            header="BadBank"
            title="WELCOME TO A VERY BAD BANK"
            text="We are here for all your unsecure banking needs."
            body={(<>
                <img 
                src={"bank.png"} 
                style={{ padding: '20px'}} 
                className="img-fluid" 
                alt="banking graphic" />
                <br/>
                <button
                type="submit" 
                className="btn btn-info">
                    <a 
                    style={{ color: 'rgb(192, 235, 193)'}} 
                    href="#/CreateAccount/">
                        Open an Account Today
                    </a>
                </button>
                </>)}
           
        />
     );
}