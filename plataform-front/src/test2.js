getMinMachines([2, 1, 5, 5, 8], [5, 3, 8, 6, 12])

function getMinMachines(start, end) {
    let machines = [];
    while(start.length > 0) {
        let minStart = Math.min(...start);
        let timeTask = getNextTimeTask(start, end, minStart);

        let machineIndex = checkNextMachine(minStart, timeTask, machines);
        console.log("index", machineIndex);
        setupMachine(minStart, timeTask, machines, machineIndex);
    }

    console.log(machines);
}

function checkNextMachine(task, time, machines) {
    let nextIndex = 0;
    console.log("Quero colocar:", task, time)
    if (machines.length == 0)
        return nextIndex;

    nextIndex = machines.length;

    for (let index = 0; index < machines.length; index++) {
        let machine = machines[index];
        console.log("O que temos:", machine.task, machine.time)
        if (machine.time > time) {
            console.log("TESTE", index);
            nextIndex = index;
            break;
        }
    }

    return nextIndex;
}

function setupMachine(task, time, machines, index) {
    machines[index] = {task, time}
}

function getNextTimeTask(start, end, task) {
    let indexTask = start.indexOf(task);
    start.splice(indexTask, 1);
    let taskTime = end.splice(indexTask, 1);

    return taskTime[0];
}