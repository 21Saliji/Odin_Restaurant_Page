import founderImg_src from './Founder.png';

export function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "About the Founder";
    content.appendChild(headline);

    const founderImg = document.createElement('div');
    founderImg.id = 'founder-img';
    content.appendChild(founderImg);

    founderImg.style.backgroundImage = `url("${founderImg_src}")`;
    founderImg.style.backgroundSize = 'cover';
    founderImg.style.backgroundPosition = 'center';
    content.appendChild(founderImg);

    
    const story = document.createElement('p');
    story.textContent = "Yauncai's Bistro was founded by Yauncai,";
    story.textContent += " a software engineer turned culinary architect.";
    story.textContent += " After years of debugging code,";
    story.textContent += " Yauncai realized that a perfectly balanced plate is just like a well-written function:";
    story.textContent += " clean, efficient, and satisfying.";
    content.appendChild(story);

    const missionHeader = document.createElement('h3');
    missionHeader.textContent = "Our Mission";
    content.appendChild(missionHeader);

    const mission = document.createElement('p');
    mission.textContent = "We aim to provide a sanctuary for developers where the coffee is strong, the Wi-Fi is fast, and the food never throws a 404 error.";
    content.appendChild(mission);
}
