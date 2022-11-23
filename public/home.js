function Home(){
  return (
 
    <div class="row justify-content-center"><Card 
            bgcolor="warning"
            txtcolor="white"
            header="BadBank"
            title="Welcome to the bank with a heart."
            text="...where your money is safe with us."
            body={(<>
                <img 
                src={"bank.png"} 
                style={{ padding: '20px'}} 
                className="img-fluid" 
                alt="banking graphic" />
                <br/>
                <div class="row justify-content-center">
                <button
                type="submit" 
                className="btn btn-danger">
                    <a 
                    style={{ color: 'white'}} 
                    href="#/CreateAccount/">
                        Create account
                    </a>
                </button>
                </div>
                </>)}
           
        />
      </div> )
}