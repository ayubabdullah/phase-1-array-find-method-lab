// code your solution here
const superbowlWin = (superbowls) => {
    const superbowlW = superbowls.find(superbowl => superbowl.result === 'W');
    
    if (!superbowlW) {
        return undefined
    }

    return superbowlW.year;
}