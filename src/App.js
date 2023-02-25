import './App.css';
import Comp from './Comp';

function App() {

    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    
    function isprime(num){
      if(num ===0 || num===1){
        return false
      }else{
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }
    }
    const List = ({arrs}) => {
      const lis = arrs.map((ele)=>{
        if(isprime(ele)){
          return <Comp num={ele} styles={{backgroundColor:"#fd5e53"}}/>
        }
        else{
          if(ele%2===0){
            return <Comp num={ele} styles={{backgroundColor:"#21bf73"}}/>
            
          }
          else{
            return <Comp num={ele} styles={{backgroundColor:"#fddb3a"}}/>
            

          }
        }
      })
      return lis
    }
    return (
      <div className="App">
        <div className='top'>
        <h1>30 Days of React</h1>
        <h3>Number Generator</h3>
        </div>
        <div className='cards'>
          <List arrs={arr}/>
        </div>
    </div>
  );
}

export default App;
