import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container mt-2 container-md container-sm shadow-lg p-3 mb-5 bg-body rounded">
       <div className="row align-items-start banner_div">
       <img src="https://hospitalcatering.com.au/image/feedback.jpeg" className="img-fluid" alt="..." />
       </div>


    <div className="row align-items-start mt-3">
    <h3 className="position-absolute top-10 start-50 col-sm-3"> Survey Form </h3>
    <div className="mt-5 mb-3">
      
  <div className="form-group">
			    						<select name="branch_id" className="form-select" required="">
			    						      <option>Select location</option> 
			    						    <option value="48">Bendigo</option> 
			    						    <option value="60">Canterbury</option>  
			    						    <option value="49">Footscray</option>
			    						     <option value="54">Fairfield</option>
			    						     <option value="57">Ipswich</option>
			    						     <option value="58">Northshore</option>
			    						    <option value="55">RPA</option>
			    						   <option value="56">Redcliffe</option>
			    						   <option value="59">Westmead</option>
			    						   <option value="52">Williamstown</option>
			    						</select>
			    				
			    				</div>
</div>
<div className="mb-3 questions ">
					<h6 ><b>1) How often do you eat at cafe? </b></h6>
	          		<div className="form-row">
	          		<div className="col-sm-6">
					<label className="radio-inline">
					 <input type="radio" value="very_often" name="rank" /> More than 3 times a week
					 </label>
                      </div>
                      	<div className="col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="often" name="rank" /> Up to 3 times a week
                      </label>
                      </div>
                      	</div>
                      <div className="form-row">
                      	<div className=" col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="rare" name="rank" /> Once a week
                      </label>
                      </div>
                      	<div className=" col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="never" name="rank" /> Never
                      </label>
                      </div>
						</div>
						</div>

            <div className="questions">
					<h6 ><b>2) Which cafe products do you normally buy? </b></h6>
	          		<div className="form-row">
	          		<div className="col-sm-2">
					<label className="radio-inline">
					 <input type="radio" value="very_often" name="cafe_products" /> Breakfast
					 </label>
                      </div>
                      <div className="col-sm-2">
					<label className="radio-inline">
					 <input type="radio" value="very_often" name="cafe_products" /> Lunch
					 </label>
                      </div>
                      	<div className="col-sm-2">
                      <label className="radio-inline">
                      <input type="radio" value="often" name="cafe_products" /> Dinner
                      </label>
                      </div>
                      	</div>
                      <div className="form-row">
                      	<div className=" col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="rare" name="cafe_products" /> Coffee / Hot Beverages
                      </label>
                      </div>
                      	<div className=" col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="never" name="cafe_products" /> Juices
                      </label>
                      </div>
						</div>
						</div>
					<div className="questions">
					<h6 ><b>3) When you are in the café / restaurant, what types of food do you normally choose? </b>(Tick where appropriate)</h6>
	          		<div className="form-row">
	          		<div className="col-sm-2">
					<label className="radio-inline">
					 <input type="checkbox" value="Soup" name="choose_food" /> Soup (colder season)
					 </label>
                      </div>
                      	<div className="col-sm-4">
                      <label className="radio-inline">
                      <input type="checkbox" value="Mains" name="choose_food" /> Hot Mains (Mediterranean, Asian &/or Indian)
                      </label>
                      </div>
                      	<div className="col-sm-2">
                      <label className="radio-inline">
                      <input type="checkbox" value="Dishes" name="choose_food" /> Vegetarian Dishes
                      </label>
                      </div>
                      	<div className="col-sm-2">
                      <label className="radio-inline">
                      <input type="checkbox" value="Breakfast" name="choose_food" /> Breakfast
                      </label>
                      </div>
                      	<div className="col-sm-2">
                      <label className="radio-inline">
                      <input type="checkbox" value="Sandwiches" name="choose_food" /> Lunch Sandwiches
                      </label>
                      </div>
                      	</div>
                      <div className="form-row">
                      	<div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="checkbox" value="Dinner" name="choose_food" /> Dinner
                      </label>
                      </div>
                      	<div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="checkbox" value="Pizza" name="choose_food" /> Pizza
                      </label>
                      </div>
                      <div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="checkbox" value="Salads" name="choose_food" /> Salads
                      </label>
                      </div>
                      	<div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="checkbox" value="Sushi" name="choose_food" /> Sushi Bar
                      </label>
                      </div>
						</div>
						<div className="form-row">
						    	<div className=" col-sm-6">
                      <label className="radio-inline">
                      <input type="checkbox" value="fried" name="choose_food" /> Fried Foods including Burgers, Chips, Sausage Roll
                      </label>
                      </div>
                      </div>
                      	<div className="form-row">
                      	<div className=" col-sm-8">
                      <label className="col-sm-4"> Please specify </label>
                      <input type="text"  className="form-control" name="choose_food_feedback"  placeholder="" />
                      </div>
                      </div>
						</div> 
					<div className="questions">
					<h6 ><b>4) Thinking about value for money, how would you best describe the food / coffee in general? </b></h6>
	          		<div className="form-row">
	          		<div className="col-sm-6">
					<label className="radio-inline">
					 <input type="radio" value="good" name="value_for_money" /> Good value for money
					 </label>
                      </div>
                      	<div className="col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="reasonable" name="value_for_money" /> Reasonable
                      </label>
                      </div>
                      	</div>
                     <div className="form-row">
                      	<div className=" col-sm-8">
                      <label className="col-sm-4"> Bad. Pls you’re your feedback  </label>
                      <input type="text"  className="form-control" name="value_for_money_feedback" />
                      </div>
                      </div>
						</div>
                    <div className="questions">
					<h6 ><b>5) How would you best describe the variety of food currently on offer? </b></h6>
	          		<div className="form-row">
	          		<div className="col-sm-6">
					<label className="radio-inline">
					 <input type="radio" value="Excellent" name="variety" /> Excellent
					 </label>
                      </div>
                      	<div className="col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="Good" name="variety" /> Good
                      </label>
                      </div>
                      	</div>
                      <div className="form-row">
                      	<div className=" col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="Fair" name="variety" /> Fair
                      </label>
                      </div>
                      
						</div>
						 <div className="form-row">
                      	<div className=" col-sm-8">
                      <label className="col-sm-4"> Poor. Please give your feedback   </label>
                      <input type="text"  className="form-control" name="variety_feedback" />
                      </div>
                      </div>
						</div>  
					<div className="questions">
					<h6 ><b>6) How would you best describe the variety of coffee currently on offer?</b></h6>
	          		<div className="form-row">
	          		<div className="col-sm-6">
					<label className="radio-inline">
					 <input type="radio" value="Excellent" name="variety_coffee" /> Excellent
					 </label>
                      </div>
                      	<div className="col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="Good" name="variety_coffee" /> Good
                      </label>
                      </div>
                      	</div>
                      <div className="form-row">
                      	<div className=" col-sm-6">
                      <label className="radio-inline">
                      <input type="radio" value="Fair" name="variety_coffee" /> Fair
                      </label>
                      </div>
                      
						</div>
						 <div className="form-row">
                      	<div className=" col-sm-8">
                      <label className="col-sm-4"> Poor. Please give your feedback   </label>
                      <input type="text"  className="form-control" name="variety_coffee_feedback" />
                      </div>
                      </div>
						</div>  
					<div className="questions">
					<h6 ><b>7) What improvement (if any) you wish to see in the variety of foods currently on offer? </b></h6>
	          		<div className="form-row">
                      	<div className=" col-sm-8">
                     <textarea rows="6"  className="form-control" name="variety_coffee_feedback"  ></textarea>
                      </div>
                      </div>
				</div>
				    <div className="questions">
				    <h6 ><b>8) If the following were introduced in the café, how likely would you to try them?</b></h6>
				    <div className="form-row">
					 	<div className="form-group col-sm-12">
					<table className="table">
            
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>New milk varieties  (Maca, Light, etc).</td>
      <td>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Unlikely</th>
      <th scope="col">Keen</th>
      <th scope="col">Likely</th>
      <th scope="col">Quite</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_fi" /></td>
      <td><input type="radio" value="3" name="sm_fi" /></td>
      <td><input type="radio" value="2" name="sm_fi" /></td>
      <td><input type="radio" value="1" name="sm_fi" /></td>
    </tr>
  </tbody>
</table>
</td>
     
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>More bread options: (e.g., Bagels, Naans, Baguettes, etc)</td>
      <td><table className="table">
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_edu" /></td>
      <td><input type="radio" value="3" name="sm_edu" /></td>
      <td><input type="radio" value="2" name="sm_edu" /></td>
      <td><input type="radio" value="1" name="sm_edu" /></td>
    </tr>
  </tbody>
</table> </td>
   
      
    </tr>
     <tr>
    <th scope="row">3</th>
      <td>Cold Brew Coffee : </td>
      <td><table className="table">
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_exp" /></td>
      <td><input type="radio" value="3" name="sm_exp" /></td>
      <td><input type="radio" value="2" name="sm_exp" /></td>
      <td><input type="radio" value="1" name="sm_exp" /></td>
    </tr>
  </tbody>
</table> </td>
     
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Open Tandoor Oven : </td>
    <td><table className="table">
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_ta" /></td>
      <td><input type="radio" value="3" name="sm_ta" /></td>
      <td><input type="radio" value="2" name="sm_ta" /></td>
      <td><input type="radio" value="1" name="sm_ta" /></td>
    </tr>
  </tbody>
</table> </td>
    </tr>
    
     <tr>
    <th scope="row">5</th>
      <td>Any suggestions? :</td>
      <td><table className="table">
  <tbody>
    <tr>
     <td><textarea rows="3" name="suggestion" className="form-control"></textarea></td>
    </tr>
  </tbody>
</table> </td>
    </tr>
  </tbody>
</table>
</div>
</div>
				</div>
				    <div className="questions">
				    <h6 ><b>9) Please tick where appropriate</b></h6>
				    <div className="form-row">
					 	<div className="form-group col-sm-12">
					<table className="table">
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>I must queue for a long time :</td>
      <td>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Never</th>
      <th scope="col">Often</th>
      <th scope="col">Sometimes</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_fi" /></td>
      <td><input type="radio" value="3" name="sm_fi" /></td>
      <td><input type="radio" value="2" name="sm_fi" /></td>
    </tr>
  </tbody>
</table>
</td>
    </tr>
   
     <tr>
    <th scope="row">3</th>
      <td>Restaurant (including cutleries) is clean : </td>
      <td><table className="table">
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_exp" /></td>
      <td><input type="radio" value="3" name="sm_exp" /></td>
      <td><input type="radio" value="2" name="sm_exp" /></td>
     
    </tr>
  </tbody>
</table> </td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Portion sizes are about right : </td>
    <td><table className="table">
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_ta" /></td>
      <td><input type="radio" value="3" name="sm_ta" /></td>
      <td><input type="radio" value="2" name="sm_ta" /></td>
    </tr>
  </tbody>
</table> </td>
    </tr>
    
      <tr>
    <th scope="row">5</th>
      <td>Our staff are helpful and well-presented	 : </td>
    <td><table className="table">
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_ta" /></td>
      <td><input type="radio" value="3" name="sm_ta" /></td>
      <td><input type="radio" value="2" name="sm_ta" /></td>
    </tr>
  </tbody>
</table> </td>
    </tr>
    <tr>
    <th scope="row">6</th>
      <td>The general service is good		 :  </td>
    <td><table className="table">
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_ta" /></td>
      <td><input type="radio" value="3" name="sm_ta" /></td>
      <td><input type="radio" value="2" name="sm_ta" /></td>
    </tr>
  </tbody>
</table> </td>
    </tr>
     <tr>
    <th scope="row">7</th>
      <td>I can’t find a seat : </td>
    <td><table className="table">
  <tbody>
    <tr>
     <td><input type="radio" value="4" name="sm_ta" /></td>
      <td><input type="radio" value="3" name="sm_ta" /></td>
      <td><input type="radio" value="2" name="sm_ta" /></td>
    </tr>
  </tbody>
</table> </td>
    </tr>
  </tbody>
</table>
</div>
</div>
				</div>
        <div className="questions">
					<h6 ><b>9) Are there any other feedbacks you would like to share?  </b></h6>
	          		<div className="form-row">
                <div class="input-group">
  <span class="input-group-text">About our breakfast service?</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div><br></br>
<div class="input-group">
  <span class="input-group-text">About our lunch service?</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div><br></br>

<div class="input-group">
  <span class="input-group-text">About our dinner service? </span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div><br></br>
<div class="input-group">
  <span class="input-group-text">About our Coffee? </span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div><br></br>
<div class="input-group">
  <span class="input-group-text">Overall ambiance?</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
                      </div>
				</div>

        <div className="questions">
					<h6 ><b>11) Please provide the following details about yourself: </b></h6>
	          
						<div className="form-row age-group">
              <b>Age:</b>
						    	<div className=" col-sm-2 ms-5">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> Under 16
                      </label>
                      </div>
                      <div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> 16-34 y.o
                      </label>
                      </div>

                      <div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> 35-54 y.o.
                      </label>
                      </div>

                      <div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> Over 55
                      </label>
                      </div>
                      </div>

                      <div className="form-row age-group">
              <b>Sex:</b>
						    	<div className=" col-sm-2 ms-5">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> Male
                      </label>
                      </div>
                      <div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> Female
                      </label>
                      </div>

                      <div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> No Preference

                      </label>
                      </div>

                      </div>
                      <div className="form-row age-group">
              <b>Are you:</b>
						    	<div className=" col-sm-2 ms-5">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> A Patient 
                      </label>
                      </div>
                      <div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> A Visitor / Carer
                      </label>
                      </div>

                      <div className=" col-sm-2">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> Hospital Staff / Student

                      </label>
                      </div>

                      <div className=" col-sm-3">
                      <label className="radio-inline">
                      <input type="radio" value="fried" name="choose_food" /> Staff working from nearby buildings
                      </label>
                      </div>
                      </div>

                     
						</div> 
            <div class="d-grid gap-2 col-6 mx-auto mt-5">
  <button class="btn btn-primary" type="button">Submit</button>
  
</div>
    </div>
 
</div>

  );
}

export default App;
