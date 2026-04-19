import bistroImg from './images/bistro.png';
export function loadHome() {
    const content = document.getElementById('content');
    
    
    content.innerHTML = '';

    
    const headline = document.createElement('h1');
    headline.textContent = "The Yauncai's Bistro";
    content.appendChild(headline);

    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = bistroImg;
    image.alt = 'Inside of a cozy restaurant';
    image.width = 600;

    figure.appendChild(image);
    content.appendChild(figure);

    
    const welcomePara = document.createElement('p');
    welcomePara.textContent = "Welcome to The Yauncai's Bistro, where we serve the best imaginary food in the digital world!";
    content.appendChild(welcomePara);

    const storyPara = document.createElement('p');
    storyPara.innerHTML = "Our restaurant was founded on the belief that code and cuisine go hand-in-hand. <br>Whether you are looking for a quick byte or a full-course algorithm, we have something for every developer's appetite.";
    content.appendChild(storyPara);

    
    const hoursHeader = document.createElement('h3');
    hoursHeader.textContent = "Hours";
    content.appendChild(hoursHeader);

    const hoursList = document.createElement('ul');
    const hours = [
        "Sunday: 8am - 8pm", "Monday: 6am - 6pm", "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", "Saturday: 8am - 10pm"
    ];

    hours.forEach(dayText => {
        const li = document.createElement('li');
        li.textContent = dayText;
        hoursList.appendChild(li);
    });
    content.appendChild(hoursList);
}
