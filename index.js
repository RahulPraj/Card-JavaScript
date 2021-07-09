const taskContainer = document.querySelector(".task__container"); //to excess the class name directly we use querySelector.

const generateNewCard = (taskData) =>`
<div class="col-md-6 col-lg-4" id=${taskData.id}>
                    <div class="card ">
                        <div class="card-header d-flex justify-content-end gap-2 ">
                            <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
                            <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
                        </div>
                        <img src=${taskData.imageUrl} class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${taskData.taskTitle}</h5>
                        <p class="card-text ">${taskData.taskDEscription} </p>
                        
                        </div>
                        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
                        <div class="card-footer  ">
                            <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
                        </div>
                    </div>

`;

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, // unique number for id ,it will return every sec a unique number. to include JS expressionin string we use `$` in it.
        imageUrl: document.getElementById("imageurl").value, //if we want the value which is inside the img url , taskt tittle ect.. so we use .value here for that.
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDEscription: document.getElementById("taskdescription").value,
    };
    
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));  //it apply to add card and we have four options use one option then copy the newcard and paste it.

};