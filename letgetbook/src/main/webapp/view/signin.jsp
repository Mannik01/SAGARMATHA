<section2>
<div class="container" >


  <h1>Create a new user</h1>

  <form novalidate="novalidate" class="form-horizontal" style="margin: auto;">
    <div class="control-group">
      <label class="control-label" for="inputFirstName">First name:</label>

      <div class="controls">
        <input type="text" id="inputFirstName" ng-model="user.firstName" placeholder="First name"/>
      </div>
    </div>
    <div class="control-group">
      <label class="control-label" for="inputLastName">Last name:</label>

      <div class="controls">
        <input type="text" id="inputLastName" ng-model="user.lastName" placeholder="Last name"/>
      </div>
    </div>
    <div class="control-group">
      <div class="controls">
        <a ng-click="createNewUser()" class="btn btn-small btn-primary">create new user</a>
      </div>
    </div>
  </form>
</div>

</section2>