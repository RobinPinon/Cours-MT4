const line1 = [0, 1, 1, 0];

const line2 = [0, 0, 1, 0];

const line3 = [0, 1, 0, 1];

const line4 = [0, 1, 1, 0];

const cellsGrill = [line1, line2, line3, line4];

function init() {
    let defaultLine = [0, 0, 0, 0];
    let nextCellGrill = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (let line = 0; line < cellsGrill.length; line++) {
        for (let cellIndex in cellsGrill[line]) {
            let siblingAliveCells = getSiblingCellsStatus(line, cellIndex);
            if (cellsGrill[line][cellIndex] == 1) {
                nextCellGrill = continuation(line, cellIndex, siblingAliveCells, nextCellGrill);
            }else {
                nextCellGrill = reviver(line, cellIndex, siblingAliveCells, nextCellGrill);
            }
            console.log(nextCellGrill)
        }
    }
}

function continuation(line, cellIndex, siblings, nextCellGrill) {
    if (siblings > 1 && siblings < 4) {
        nextCellGrill[line][cellIndex] = 1
    }
    return nextCellGrill;
}

function reviver(line, cellIndex, siblings, nextCellGrill) {
    if (siblings > 2 && siblings < 4) {
        nextCellGrill[line][cellIndex] = 1
    }
    return nextCellGrill;
}

function getSiblingCellsStatus(line, cellIndex) {
    let siblingAliveCells = 0;
    for (let j = line - 1; j <= line + 1; j++) {
        if (cellsGrill[j] != undefined) {
            for (let k = cellIndex - 1; k <= cellIndex + 1; k++) {
                if (cellsGrill[j][k] == 1 && (j != line || k != cellIndex)) {
                    siblingAliveCells += 1;
                }
            }
        }
    }
    return siblingAliveCells;
}

init();
