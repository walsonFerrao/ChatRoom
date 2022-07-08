
import './Register.scss'


export const Register=()=>{



return(


<>
<div className='myown'>

<div class="container">
  <div class="welcome">
    <div class="pinkbox">
      <div class="signup nodisplay">
        <h1>register</h1>
        <form autocomplete="off">
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <button class="button submit">create account </button>
        </form>
      </div>
      <div class="signin">
        <h1>Enter The room</h1>
        <form class="more-padding" autocomplete="off">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="gender" />
          <div class="checkbox">
            <input type="checkbox" id="remember" /><label for="remember" style={{color:"red"}}>I am above 21</label>
          </div>

          <button class="button submit">login</button>
        </form>
      </div>
    </div>
    {/* <div class="leftbox">
      <h2 class="title"><span>BLOOM</span>&<br />BOUQUET</h2>
      <p class="desc">pick your perfect <span>bouquet</span></p>
      <img class="flower smaller" src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg" alt="1357d638624297b" border="0" />
      <p class="account">have an account?</p>
      <button class="button" id="signin">login</button>
    </div> */}
    <div class="rightbox">
      <h2 class="title"><span>DARK</span>&<br />DIABOLICAL</h2>
      <p class="desc"> pick your perfect <span>Random room</span></p>
      <img class="flower" src="https://www.onlygfx.com/wp-content/uploads/2016/04/tree-1-768x412.png"/>
      <p class="account">Want to contribute</p>
      <button class="button" id="signup">Donate</button>
    </div>
  </div>
 </div>


 </div>


</>

)







}