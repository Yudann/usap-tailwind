document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navWrapper = document.querySelector('nav');
    
    // Initial styles for animation
    navWrapper.style.opacity = '0';
    navWrapper.style.transform = 'translateY(-20px)';
    
    // Animate navbar in on page load
    setTimeout(() => {
        navWrapper.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        navWrapper.style.opacity = '1';
        navWrapper.style.transform = 'translateY(0)';
    }, 100);
    
    // Hamburger menu toggle
    menuToggle.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('scale-y-0');
        
        if (isOpen) {
            // Open menu
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('scale-y-0', 'opacity-0');
            mobileMenu.classList.add('scale-y-100', 'opacity-100');
            
            // Animate hamburger to X
            const bars = menuToggle.querySelectorAll('div');
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[0].style.width = '24px';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            bars[2].style.width = '24px';
        } else {
            // Close menu
            mobileMenu.classList.add('scale-y-0', 'opacity-0');
            mobileMenu.classList.remove('scale-y-100', 'opacity-100');
            
            // Reset hamburger animation
            const bars = menuToggle.querySelectorAll('div');
            bars[0].style.transform = '';
            bars[0].style.width = '';
            bars[1].style.opacity = '';
            bars[2].style.transform = '';
            bars[2].style.width = '';
            
            // Hide menu after transition
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 500);
        }
    });
    
    // Smooth scroll for menu links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('scale-y-0')) {
                    menuToggle.click();
                }
            }
        });
    });
});