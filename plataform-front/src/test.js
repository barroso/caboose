getMinMachines([2, 1, 5, 5, 8], [5, 3, 8, 6, 12])

function getMinMachines(start, end) {
    while(start.length > 0) {
        let minStart = Math.min(...start);
        console.log("Run", start.length);
        console.log("Enfileirando", minStart);
        let timeTask = getNextTimeTask(start, end, minStart);
        console.log("Time", timeTask);
        console.log(start, end);
    }
}

function getNextTimeTask(start, end, task) {
    let indexTask = start.indexOf(task);
    start.splice(indexTask, 1);
    let taskTime = end.splice(indexTask, 1);
    return taskTime;
}