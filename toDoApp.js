angular.module("ToDoApp", [])
    .controller("toDoTaskCtrl", toDoAppFunc);

function toDoAppFunc() {

    this.taskList = [
        'Learning Angular',
        'Try Sample Examples'
    ];
    this.editMode = false;

    this.addTask = function () {
        console.log('Adding task:' + this.toDoTask);
        this.taskList.push(this.toDoTask);
        this.toDoTask = "";
    }

    this.deleteTask = function (index) {
        console.log('Deleting task index:' + index);
        this.taskList.splice(index, 1);
    }

    this.editTask = function(){
        this.editMode = !this.editMode;
    }
}

