

const projectsNode = document.createElement("div");


projectsNode.innerHTML = `
<div class="row">
<div class= "col-md-8">
    <p>Projects Container</p> 
</div>
<div class= "col-md-3"> 
    <button id= 'addProject' data-toggle="modal" data-target="#exampleModal" 
    class="btn btn-secondary btn-sm active" role="button" aria-pressed="true">Add</button>
</div>

</div>
  <ul class="list-group" id="projects-list" >
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item active">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
  
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Project title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        Name: <input type="projectName"><br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id="saveProject" type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
`
  
  ;

const createProject = (name) => {

  //const projectsList = document.createElement("li");
  projectsNode.innerHTML= projectsNode.innerHTML+'<li class="list-group-item">'+name+'</li>' ;

}








export { projectsNode, createProject };
