// Task 1: Change the color of the second cube when the first is clicked
document.getElementById('cube1').addEventListener('click', () => {
    const cube2 = document.getElementById('cube2');
    cube2.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});

// Task 2: Show an alert when attempting to copy the text block
document.getElementById('text-block').addEventListener('copy', (event) => {
    event.preventDefault();
    alert('Текст неможливо скопіювати!!');
});

// Task 3: Change cube color based on mouse coordinates
document.getElementById('coordinate-cube').addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;
    const r = offsetX;
    const g = offsetY;
    const b = (offsetX + offsetY) / 2;
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Task 4: Log information about nested cubes on click
const nestedCubes = document.querySelectorAll('#nested1, #nested2, #nested3');
nestedCubes.forEach(cube => {
    cube.addEventListener('click', (event) => {
        console.log(`Clicked on: ${cube.id}`);
        event.stopPropagation();
    });
});

// Task 5: Stop event propagation at the middle cube
document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer cube clicked');
}, true);

document.getElementById('middle').addEventListener('click', (event) => {
    console.log('Middle cube clicked');
    event.stopPropagation();
}, true);

document.getElementById('inner').addEventListener('click', () => {
    console.log('Inner cube clicked');
}, true);

// Task 6: Handle form submission and prevent default behavior
document.getElementById('example-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log('Form data as object:', formObject);
});
