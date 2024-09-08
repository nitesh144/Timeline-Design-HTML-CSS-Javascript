const timelineData = [
    { year: 'April 2018', content: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.", image: 'image 6.png' },
    { year: 'April 2019', content: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.", image: 'image 6.png' },
    { year: 'April 2020', content: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.", image: 'image 6.png' },
    { year: 'April 2021', content: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.", image: 'image 6.png' },
    { year: 'April 2022', content: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.", image: 'image 6.png' },
    { year: 'April 2023', content: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.", image: 'image 6.png' },
    { year: 'April 2024', content: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.", image: 'image 6.png' },
];

const timelinePoints = document.getElementById('timelinePoints');
const timelineYears = document.getElementById('timelineYears');
const timelineContent = document.getElementById('timelineContent');
const timelineImage = document.getElementById('timelineImage');
const timelineTitle = document.getElementById('timelineTitle');
const timelineDescription = document.getElementById('timelineDescription');

// Create timeline points and years dynamically
function createTimeline() {
    timelineData.forEach((data, index) => {
        // Create timeline point
        const point = document.createElement('div');
        point.classList.add('timeline-point');
        point.addEventListener('click', () => setActivePoint(index));
        timelinePoints.appendChild(point);

        // Create timeline year
        const year = document.createElement('div');
        year.classList.add('timeline-year');
        year.textContent = data.year;
        timelineYears.appendChild(year);
    });

    setActivePoint(0); // Set first point as active by default
}

// Set active point and update content
function setActivePoint(index) {
    const points = timelinePoints.getElementsByClassName('timeline-point');
    Array.from(points).forEach((point, i) => {
        point.classList.toggle('active', i === index);
    });

    timelineContent.classList.remove('active');
    setTimeout(() => {
        timelineImage.src = timelineData[index].image;
        timelineTitle.textContent = timelineData[index].year;
        timelineDescription.textContent = timelineData[index].content;
        timelineContent.classList.add('active');
    }, 300);
}

createTimeline();
