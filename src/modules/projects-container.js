const projectsNode = document.createElement("div");

projectsNode.innerHTML = `
<div class="row">
<div class= "col-md-8">
    <p class="text-monospace">Projects</p>
</div>
<div class= "col-md-3">
    <button id= 'addProject' data-toggle="modal" data-target="#exampleModal"
    class="btn btn-secondary btn-sm active" role="button" aria-pressed="true">Add</button>
</div>

</div>
  <ul class="list-group noselect" id="projects-list" >
  <!-- <li class="list-group-item project-item active" data-key="0">Sample Project</li> -->
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

        <div class="form-group">
    <label for="exampleInputEmail1">Project</label>
      <input type="text" class="form-control" id="project-name"  placeholder="Enter project">
      </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id="saveProject" type="button" class="btn btn-primary" data-dismiss="modal">Create Project</button>
        </div>
      </div>
    </div>
  </div> `;

const addProject = (name) => {

  const projectList = document.getElementById('projects-list');
  const countNodes = projectList.childElementCount;

  const newProjectItem = document.createElement('li');
  newProjectItem.classList.add('list-group-item','project-item');
  // we have only one project so set it to active
  if(countNodes == 0){
    newProjectItem.classList.add('active');
  }
  const button = document.createElement("paragraph");
  button.innerHTML = `<button type="button"  id="deleteProject" class="close"
   aria-label="Close">
  <span style="
  float: right;
  background: inherit;
  border: none;
" aria-hidden="true">&times;</span>
</button>`;
  newProjectItem.setAttribute('data-key', countNodes);
  newProjectItem.innerText = name;
  newProjectItem.appendChild(button);
  projectList.appendChild(newProjectItem);

  document.getElementById('deleteProject').addEventListener('click',(event) => {
    const id = event.target.parentNode.parentNode.parentNode.getAttribute('data-key');
    console.log(id);
    console.log('fuck')
    
  
  });
};

export { projectsNode, addProject };
