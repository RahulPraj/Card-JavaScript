const taskContainer = document.querySelector(".task__container"); //to excess the class name directly we use querySelector.

let globalStore = [];

const generateNewCard = (taskData) =>`
<div class="col-md-6 col-lg-4" >
                    <div class="card ">
                        <div class="card-header d-flex justify-content-end gap-2 ">
                            <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
                            <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this, arguments)">
                            <i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this, arguments)"></i></button>
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

const loadInitialCardData = () =>{
    //localstorage to get tasky card data.

    const getCardData = localStorage.getItem("tasky");

    //convert from string to normal  object(to js)
    const { cards }= JSON.parse(getCardData);


 //loop over those array of task object to create html card , inject it to DOM
cards.map((cardObject) =>{
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));  //it apply to add card and we have four options use one option then copy the newcard and paste it.

    //updating the globalstore
    globalStore.push(cardObject);

   })
}

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, // unique number for id ,it will return every sec a unique number. to include JS expressionin string we use `$` in it.
        imageUrl: document.getElementById("imageurl").value, //if we want the value which is inside the img url , taskt tittle ect.. so we use .value here for that.
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDEscription: document.getElementById("taskdescription").value,
    };
    
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));  //it apply to add card and we have four options use one option then copy the newcard and paste it.

    //update
    globalStore.push(taskData);

    localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));

};

const deleteCard = (event) => {
     event = window.event;
     
     //id
    const targetID =event.target.id;
    const tagname = event.target.tagName;
    //match the id of the element with the inside the globalstore

    //if match found remove

    globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
    localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));

   //contact parent

   if(tagname === "BUTTON")
   {
       return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);

   }

   else
   {
       return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);

   }
  
};