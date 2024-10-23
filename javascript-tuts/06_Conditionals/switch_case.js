let light = prompt("Enter the traffic light color (red, yellow, green):");

switch (light) {
    case 'red':
        console.log("STOP! Wait for the light to turn green.");
        break;
    case 'yellow':
        console.log("CAUTION! Prepare to stop.");
        break;
    case 'green':
        console.log("GO! You can drive.");
        break;
    default:
        console.log("Invalid color! Please enter red, yellow, or green.");
}
