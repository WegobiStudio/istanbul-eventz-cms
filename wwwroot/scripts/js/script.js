document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.querySelector('.main-content');
    const sectionsContainer = document.querySelector('.sections-container');
    const heroVideo = document.querySelector('.video-content');
    const sidebar = document.querySelector('.sidebar-desktop');
    const sidebarTop = document.querySelector('.sidebar-top');
    const openButton = document.querySelector('.open');
    const closeButton = document.querySelector('.close');
    const sidebarMobile = document.querySelector('.sidebar-mobile');

    // Eğer heroVideo yoksa, hemen sayfa yüklendiğinde bazı değişiklikler yap
    if (!heroVideo) {
        mainContent.classList.add('css-mandatory');
        sidebar.classList.add('active-section');
        sidebarTop.style.display = 'flex';
    } else {
        // Eğer heroVideo varsa, kullanıcının scroll etmesini bekle
        mainContent.addEventListener('scroll', function () {
            const heroVideoBottom = heroVideo.offsetHeight - mainContent.scrollTop;

            if (heroVideoBottom <= 20) {
                mainContent.classList.add('css-mandatory');
                sidebar.classList.add('active-section');
                sidebarTop.style.display = 'flex';
            } else {
                mainContent.classList.remove('css-mandatory');
                sidebar.classList.remove('active-section');
                sidebarTop.style.display = 'none';
            }
        });
    }

    openButton.addEventListener('click', function() {
        sidebarMobile.style.display = 'flex'; 
    });
    
    closeButton.addEventListener('click', function() {
        sidebarMobile.style.display = 'none'; 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = 0;
            loadingScreen.style.display = "none";
        }, 1500); 
    }
   
});