import React, {useState} from 'react'


function Form(){
  let [email, setEamil] = useState('')
  let [password, setPassword] = useState('')

  let handleEmailChange = (saveEmailChange)=>{
    setEamil(saveEmailChange.target.value)
  }

  let handlePasswordChange = (savePasswordChange)=>{
    setPassword(savePasswordChange.target.value)
  }

  let handleSubmit = (saveSubmitChanges)=>{ 
    saveSubmitChanges.preventdefault()
    console.log(saveSubmitChanges)
    // if (email === ''){
    // console.log('enter the email')
    // return
    // }
    // if (password === ''){
    // console.log('enter the password')
    // return
    // }
    // console.log(email, password)
  }

    return(
        <div className="form-wrapper">
          <div className="row">
            <div className="col-md-5">
            <p>Sign-In Here!</p> <hr />
            <form class="row g-3 w-50" onSubmit={handleSubmit}>
                <div class="col-md-12">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" onChange={handleEmailChange} />
                  </div>
                  <div class="col-md-12">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" onChange={handlePasswordChange} />
                  </div>
                  <div class="col-12">
                  <button type="submit" class="btn btn-primary">Sign-In</button>
                </div>
            </form>
            </div>

            <div className="col-md-7">
              <p>Register Here! (New User)</p> <hr />
              <form class="row g-3">
              <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-12">
              <label for="inputAddress2" class="form-label">Address</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="mailing address" />
              </div>
              <div class="col-md-6">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
              <label for="inputState" class="form-label">State</label>
              <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
              </select>
              </div>
              <div class="col-md-2">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
              <button type="submit" class="btn btn-primary">Sign-Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        
    )
}

export default Form