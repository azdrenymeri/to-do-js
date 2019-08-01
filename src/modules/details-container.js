
const noteDetails = document.createElement('div');

noteDetails.innerHTML = `
<div class="card">
  <div class="card-header">
    Title
  </div>
  <div class="card-body">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
  qui officia deserunt mollit anim id est laborum.
  <hr/>
    <div class="row">
      <div class="col-sm-6">
<a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
      <div class="col-sm-6">
<a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-sm-6">
<a href="#" class="btn btn-danger">Delte</a>
       </div>
      <div class="col-sm-6">
<a href="#" class="btn btn-warning">Update</a>
      </div>
    </div>

  </div>

</div>
`;

export { noteDetails };
