
function AllData(){
  const [data, setData] = React.useState('');
 
  React.useEffect(() => {
   //fetch all acounts from API
   fetch('/account/alldata')
     .then(response => response.json())
     .then(data => {
       console.log('last user created: ', data[data.length - 1]); console.log('first user created: ', data[0])
       setData(JSON.stringify(data));
     })
  }, []);
 
   return (
    <div class="row justify-content-center">
      <h5>All Data at BadBank</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
        </thead>
     <tbody>{data} </tbody> 
     </table>
     
     </div>
   );
 }