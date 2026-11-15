
// ==========================================
// NEXGEN ENGINEERING SOLUTIONS
// NEWS ARTICLES AND ARTICLE PAGE
// ==========================================

const articles = {
    modeling: {
        category: "Technology",
        date: "DATE NOT PROVIDED",
        title: "NexGen Introduces Advanced 3D Modeling and Prototyping Services",
        image: "news-image-one",
        paragraphs: [
            "NexGen Engineering Solutions proudly announces the expansion of its engineering capabilities through the introduction of advanced 3D modeling and prototyping services.",
            "The new service will allow clients to transform their product concepts into detailed three-dimensional models and physical prototypes. Using modern CAD software and additive manufacturing technology, the company aims to improve product development, reduce design errors, and provide cost-effective engineering solutions.",
            "This development demonstrates NexGen's commitment to embracing modern engineering technologies and supporting innovation across different industries."
        ]
    },

    precisionfab: {
        category: "Partnership",
        date: "AUGUST 20, 2026",
        title: "NexGen Engineering Solutions Establishes Proposed Strategic Partnership with PrecisionFab Manufacturing Corporation",
        image: "news-image-two",
        paragraphs: [
            "NexGen Engineering Solutions proudly announces a proposed strategic partnership with PrecisionFab Manufacturing Corporation, a manufacturing company specializing in precision machining, metal fabrication, and customized industrial components.",
            "This partnership aims to combine NexGen's engineering design and technical consultation capabilities with PrecisionFab's manufacturing expertise to provide more comprehensive solutions to industrial clients.",
            "Under this collaboration, NexGen will be responsible for mechanical design, CAD modeling, technical drawings, engineering assessments, and product development. Meanwhile, PrecisionFab will handle the manufacturing of mechanical components using CNC machining, metal fabrication, and other production processes.",
            "One of the primary applications of this partnership is the development of customized industrial equipment, including conveyor systems, machine components, equipment frames, and mechanical assemblies.",
            "By combining engineering design and manufacturing capabilities, both companies aim to improve product development, reduce unnecessary production costs, and deliver reliable solutions that meet client specifications.",
            "This proposed partnership represents an important step toward expanding NexGen Engineering Solutions' capabilities and strengthening its commitment to innovation, quality, and industrial development."
        ]
    },

    workshop: {
        category: "Community",
        date: "DATE NOT PROVIDED",
        title: "NexGen Conducts Engineering Awareness and Technical Skills Workshop for Students",
        image: "news-image-three",
        paragraphs: [
            "NexGen Engineering Solutions organized an engineering awareness workshop designed to introduce students to modern engineering technologies and practical technical applications.",
            "The activity featured discussions about mechanical systems, computer-aided design, renewable energy, and the importance of engineering in solving real-world problems.",
            "The initiative reflects the company's commitment to supporting education, encouraging innovation, and inspiring the next generation of engineers."
        ]
    },

    safety: {
        category: "Safety",
        date: "DATE NOT PROVIDED",
        title: "NexGen Strengthens Workplace Safety and Quality Assurance Standards",
        image: "news-image-four",
        paragraphs: [
            "NexGen Engineering Solutions reinforces its commitment to workplace safety and quality assurance through the implementation of an improved engineering safety inspection program.",
            "The program focuses on identifying potential workplace hazards, evaluating equipment conditions, and promoting proper safety procedures during engineering operations.",
            "The company recognizes that successful engineering projects should not only meet technical requirements but also prioritize the safety of workers, clients, and surrounding communities."
        ]
    },

    renewable: {
        category: "Sustainability",
        date: "DATE NOT PROVIDED",
        title: "NexGen Launches Renewable Energy Consultation Services",
        image: "news-image-five",
        paragraphs: [
            "In support of sustainable development, NexGen Engineering Solutions announces the launch of its renewable energy consultation services.",
            "The initiative will focus on providing solar energy feasibility assessments, energy consumption evaluations, and technical recommendations for businesses interested in adopting renewable energy systems.",
            "Through this initiative, NexGen aims to help organizations explore alternative energy solutions while promoting environmental responsibility and long-term energy efficiency."
        ]
    },

    advancedtech: {
        category: "Partnership",
        date: "SEPTEMBER 5, 2026",
        title: "NexGen Engineering Solutions Establishes Proposed Strategic Partnership with AdvancedTech Automation Systems",
        image: "news-image-six",
        paragraphs: [
            "NexGen Engineering Solutions proudly announces a proposed strategic partnership with AdvancedTech Automation Systems, a technology company specializing in industrial automation, control systems, and smart manufacturing solutions.",
            "This partnership aims to combine NexGen's engineering design and technical consultation capabilities with AdvancedTech's expertise in automation technology to deliver efficient and innovative solutions for industrial clients.",
            "Under this collaboration, NexGen will be responsible for mechanical design, CAD modeling, technical drawings, equipment development, and engineering assessments. Meanwhile, AdvancedTech will handle automation system integration, programmable logic controller (PLC) programming, sensor installation, and industrial control systems.",
            "One of the primary applications of this partnership is the development of automated industrial equipment, including robotic systems, automated conveyor systems, smart production lines, and machine control systems.",
            "By combining mechanical engineering and automation technologies, both companies aim to improve production efficiency, minimize human error, reduce operational costs, and provide reliable solutions for modern industries.",
            "This proposed partnership represents another step toward expanding NexGen Engineering Solutions' technical capabilities and strengthening its commitment to innovation, automation, and industrial advancement."
        ]
    },

    ecobuild: {
        category: "Partnership",
        date: "SEPTEMBER 18, 2026",
        title: "NexGen Engineering Solutions Partners with EcoBuild Sustainable Materials Corporation for Sustainable Engineering Solutions",
        image: "news-image-one",
        paragraphs: [
            "NexGen Engineering Solutions proudly announces a proposed strategic partnership with EcoBuild Sustainable Materials Corporation, a company specializing in environmentally friendly construction materials, sustainable building technologies, and recycled material applications.",
            "This partnership aims to combine NexGen's engineering design and technical consultation services with EcoBuild's expertise in sustainable materials to develop cost-effective and environmentally responsible construction solutions.",
            "Under this collaboration, NexGen will be responsible for structural design, mechanical assessments, CAD modeling, technical documentation, and product development. Meanwhile, EcoBuild will provide sustainable construction materials, recycled material processing, material testing, and environmentally friendly manufacturing solutions.",
            "One of the primary applications of this partnership is the development of sustainable construction products, including recycled concrete components, eco-friendly insulation materials, lightweight building panels, and alternative construction materials.",
            "By combining engineering expertise and sustainable material technologies, both companies aim to reduce construction waste, improve material efficiency, minimize environmental impact, and promote more sustainable infrastructure development.",
            "This proposed partnership represents an important milestone in NexGen Engineering Solutions' commitment to sustainable engineering practices, environmental responsibility, and innovative construction technologies."
        ]
    },

    powergrid: {
        category: "Partnership",
        date: "OCTOBER 2, 2026",
        title: "NexGen Engineering Solutions Announces Proposed Strategic Partnership with PowerGrid Energy Solutions Corporation",
        image: "news-image-two",
        paragraphs: [
            "NexGen Engineering Solutions proudly announces a proposed strategic partnership with PowerGrid Energy Solutions Corporation, an energy technology company specializing in renewable energy systems, electrical power distribution, and energy management solutions.",
            "This partnership aims to combine NexGen's engineering design and technical consultation capabilities with PowerGrid's expertise in electrical engineering and energy technologies to provide innovative and efficient power solutions.",
            "Under this collaboration, NexGen will be responsible for mechanical system design, equipment development, CAD modeling, technical assessments, and mechanical installation planning. Meanwhile, PowerGrid will handle electrical system design, power distribution, renewable energy integration, electrical installations, and energy management systems.",
            "One of the primary applications of this partnership is the development of renewable energy and power generation projects, including solar-powered charging stations, wind energy systems, hybrid power installations, and energy-efficient industrial equipment.",
            "By combining mechanical and electrical engineering expertise, both companies aim to improve energy efficiency, support renewable energy development, reduce operational expenses, and provide reliable energy solutions for residential, commercial, and industrial applications.",
            "This proposed partnership marks another significant step toward expanding NexGen Engineering Solutions' services and supporting the transition toward more efficient, sustainable, and innovative energy technologies."
        ]
    }
};


// ==========================================
// NEWS PAGE: DISPLAY, SEARCH AND FILTER
// ==========================================

const newsGrid = document.getElementById("newsGrid");

if (newsGrid) {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("newsSearch");
    const noResults = document.getElementById("noResults");

    let activeFilter = "all";

    function displayNews() {

        const searchTerm = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        newsGrid.innerHTML = "";

        let visibleCount = 0;

        Object.entries(articles).forEach(([id, article]) => {

            const matchesCategory =
                activeFilter === "all" ||
                article.category.toLowerCase() === activeFilter;

            const matchesSearch =
                article.title.toLowerCase().includes(searchTerm) ||
                article.category.toLowerCase().includes(searchTerm) ||
                article.paragraphs.join(" ").toLowerCase().includes(searchTerm);

            if (matchesCategory && matchesSearch) {

                visibleCount++;

                const card = document.createElement("article");
                card.className = "news-card";

                card.innerHTML = `
                    <div class="news-image ${article.image}"></div>

                    <div class="news-content">
                        <span class="news-category">
                            ${article.category}
                        </span>

                        <p class="news-date">${article.date}</p>

                        <h3>${article.title}</h3>

                        <a href="article.html?id=${id}" class="read-more">
                            READ FULL ARTICLE →
                        </a>
                    </div>
                `;

                newsGrid.appendChild(card);
            }
        });

        if (noResults) {
            noResults.style.display =
                visibleCount === 0 ? "block" : "none";
        }
    }

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            activeFilter = button.dataset.filter;

            displayNews();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", displayNews);
    }

    displayNews();
}


// ==========================================
// ARTICLE PAGE: DISPLAY FULL ARTICLE
// ==========================================

const articleContent = document.getElementById("articleContent");

if (articleContent) {

    const parameters = new URLSearchParams(window.location.search);
    const articleID = parameters.get("id");

    const article = articles[articleID];

    if (article) {

        document.title = article.title + " | NexGen Engineering";

        const paragraphsHTML = article.paragraphs
            .map(paragraph => `<p>${paragraph}</p>`)
            .join("");

        articleContent.innerHTML = `
            <div class="article-cover ${article.image}"></div>

            <div class="article-details">
                <span class="news-category">${article.category}</span>

                <p class="news-date">${article.date}</p>

                <h1>${article.title}</h1>

                <div class="article-body">
                    ${paragraphsHTML}
                </div>

                <a href="news.html" class="back-link">
                    ← BACK TO NEWSROOM
                </a>
            </div>
        `;

    } else {

        articleContent.innerHTML = `
            <div class="article-details">
                <h1>Article Not Found</h1>
                <p>Sorry, the requested news article could not be found.</p>
                <a href="news.html" class="back-link">
                    ← BACK TO NEWSROOM
                </a>
            </div>
        `;
    }
}
