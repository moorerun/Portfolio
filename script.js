const popupContent = {
    cert6: {
        title: "Road to Computer Science and Technology Vol.1",
        image: "./assets/c6.jpg",
        description: "Learned the basics of computer science, such as using necessary tools such as IDE and Command Line, as well as basic concepts in algorithms and data structures. Learned the html css language and gained knowledge about Innovation Cycles, Generative AI. Tried doing AI from the Teachable Machine website."
    },
    cert1: {
        title: "Python Programming",
        image: "./assets/c1.png",
        description: "Problem analysis and computer program development Basics of Python programming Object-oriented programming Data analysis with Numpy and Pandas libraries, graph drawing, applications to science and mathematics problems."
    },
    cert2: {
        title: "COMPUTER NETWORK FOR EVERYONE",
        image: "./assets/c2.png",
        description: "Network basics for everyone who uses computer networks regularly. Basic security understanding Basic self-solving network problems and the concept of connecting all devices."
    },
    cert3: {
        title: "Basic​ Java​script​ for​ Frontend​ Developer​",
        image: "./assets/c3.png",
        description: "Study variable declarations and use them in various formats, such as using functions, using objects and arrays, and using array methods, as well as being able to use spread syntax and destructuring in both arrays and objects with understanding and efficiency."
    },
    cert4: {
        title: "ความรู้พื้นฐานสำหรับ QA และ Tester",
        image: "./assets/c4.png",
        description: "Understand the roles, duties, and opportunities for growth in the QA and Tester fields. Know the skills and knowledge necessary for QA and Tester. Have an understanding of the principles and concepts of Agile methodologies and Agile testing, including knowledge of work processes in the software development cycle. (SDLC) and principles of software testing."
    },
    cert5: {
        title: "Manual Testing และเครื่องมือต่าง ๆ ในการจัดการ Test",
        image: "./assets/c2.png",
        description: "Understand the basics of manual testing. Have knowledge and understanding of the Manual Test process, including various techniques. Get to know Test management tools and documents used in Manual Tests and practice doing Manual Tests by testing. Use and API."
    },
    activity1: {
        title: "WorldSkills ASEAN Bangkok 2018",
        image: "./assets/a1.JPG",
        description: "Learned skills from experts in many career fields such as cooking, programming. Graphic design, etc., as well as being inspired to develop professional skills. Met and networked with experts and understand international standards in training and skill assessment."
    },
    activity2: {
        title: "The Next Step On Your Robotics & Automation Journey 2019",
        image: "./assets/a2.png",
        description: "Get to know information on the use of 3D printing technology, robots, IoT, lasers, and advanced raw materials in production. and see the innovation display section."
    },
    activity3: {
        title: "Scratch Workshop The Witch",
        image: "./assets/a3.gif",
        description: "Learn to make games in scratch using if else. <a href='https://scratch.mit.edu/projects/1113191857' target='_blank'>View Project</a>"
    },
    activity4: {
        title: "Workshop Capybara Wiki Website",
        image: "./assets/a4.png",
        description: "Create Capybara Wiki by HTML CSS. <a href='https://moorerun.github.io/capybara-wiki/' target='_blank'>View Project</a>"
    },
    activity5: {
        title: "My Portfolio Website",
        image: "./assets/port.png",
        description: "My Portfolio Website is a personal portfolio website built using HTML, CSS, and JavaScript. It showcases projects, skills, and experiences in web development."
    },
    activity6: {
        title: "Web development internship",
        image: "./assets/a6.png",
        description: "As a Web Development Intern, I contributed to building and enhancing web applications using JavaScript, HTML, and CSS. My primary responsibility was implementing web pages based on provided design specifications, ensuring responsiveness and user-friendly interfaces."
    },
};

function openPopup(contentId) {
    const content = popupContent[contentId];
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <h2>${content.title}</h2>
        <img src="${content.image}" alt="${content.title}" class="cert-img">
        <p>${content.description}</p>
    `;
    document.getElementById('popupOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close popup when clicking outside the content
document.getElementById('popupOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

