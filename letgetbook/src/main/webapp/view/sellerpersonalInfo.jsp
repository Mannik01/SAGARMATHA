<section id="section1">

	<div class="container" >
<div style="width: 50%; margin: auto;">

     <h2> Registration</h2>
    <form name="form" ng-submit="vm.sellerRegister()" role="form">

         <div class="form-group" ng-class="{ 'has-error': form.firstName.$dirty && form.firstName.$error.required }">
            <label for="username">First name</label>
            <input type="text" name="firstName" id="firstName" class="form-control" ng-model="vm.seller.firstName" required />
            <span ng-show="form.firstName.$dirty && form.firstName.$error.required" class="help-block">First name is required</span>
        </div>
         <div class="form-group" >
            <label for="middleName">Middle name</label>
            <input type="text" name="middleName" id="middleName" class="form-control" ng-model="vm.seller.middleName" />
        </div>
        <div class="form-group" ng-class="{ 'has-error': form.lastName.$dirty && form.lastName.$error.required }">
            <label for="username">Last name</label>
            <input type="text" name="lastName" id="Text1" class="form-control" ng-model="vm.seller.lastName" required />
            <span ng-show="form.lastName.$dirty && form.lastName.$error.required" class="help-block">Last name is required</span>
        </div>
        <div class="form-group" ng-class="{ 'has-error': form.dateOfBirth.$dirty && form.dateOfBirth.$error.required }">
            <label for="dateOfBirth">Date Of Birth</label>
            <input type="text" name="dateOfBirth" id="dateOfBirth" class="form-control" ng-model="vm.seller.dateOfBirth" required />
            <span ng-show="form.dateOfBirth.$dirty && form.dateOfBirth.$error.required" class="help-block">Date of Birth is required</span>
        </div>
        
        <div class="form-group" ng-class="{ 'has-error': form.email.$dirty && form.email.$error.required }">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" class="form-control" ng-model="vm.seller.email" required />
            <span ng-show="form.email.$dirty && form.email.$error.required" class="help-block">Email is required</span>
        </div>
        <div class="form-group" ng-class="{ 'has-error': form.phoneNumber.$dirty && form.phoneNumber.$error.required }">
            <label for="phoneNumber">Primary Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" class="form-control" ng-model="vm.seller.phoneNumber" required />
            <span ng-show="form.phoneNumber.$dirty && form.phoneNumber.$error.required" class="help-block">PhoneNumber is required</span>
        </div>        
        <div class="form-group" >
            <label for="office_phoneNo">Office Phone Number</label>
            <input type="text" name="office_phoneNo" id="office_phoneNo" class="form-control" ng-model="vm.seller.office_phoneNo"  />
        </div>
        <div class="form-group" >
            <label for="modile_phoneNo">Mobile Number</label>
            <input type="text" name="modile_phoneNo" id="modile_phoneNo" class="form-control" ng-model="vm.seller.modile_phoneNo" />
        </div>
        
           <div class="form-actions">
            <button type="submit"  class="btn btn-primary">Continue</button>
            <a href="#/" class="btn btn-link">Cancel</a>
        </div>
    </form>
</div>
</div>
</section>


