// ==========================================
// GOOGLE ANALYTICS INTEGRATION FOR ALL PAGES
// ==========================================
(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-6SZSFGX81K';
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', 'G-6SZSFGX81K');
})();
// ==========================================


document.write(`
    <nav class="w-full p-6 flex justify-between items-center max-w-[1600px] mx-auto relative z-50">
        <div class="flex items-center gap-4">
            <button id="hamburgerBtn" onclick="toggleSidebarMenu()" class="neu-btn w-12 h-12 rounded-xl flex flex-col items-center justify-center gap-1.5 text-xl relative z-50">
                <span class="w-6 h-0.5 bg-current transition-all duration-300" id="bar1"></span>
                <span class="w-6 h-0.5 bg-current transition-all duration-300" id="bar2"></span>
                <span class="w-6 h-0.5 bg-current transition-all duration-300" id="bar3"></span>
            </button>

            <div class="flex items-center gap-3">
                <div class="neu-box w-12 h-12 flex items-center justify-center overflow-hidden p-2">
                    <img src="logo.png" alt="ImgJetX Logo" class="w-full h-full object-contain">
                </div>
                <h1 class="text-lg lg:text-2xl font-extrabold tracking-wide block">ImgJetX</h1>
            </div>
        </div>
        
        <button id="themeToggle" onclick="toggleTheme()" class="neu-btn w-12 h-12 rounded-full flex items-center justify-center text-xl">
            <i class="fas fa-moon"></i>
        </button>

        <div id="sidebarOverlay" onclick="toggleSidebarMenu()" class="fixed inset-0 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 z-40"></div>

        <div id="leftSidebarMenu" class="fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-[var(--bg-color)] shadow-2xl border-r border-gray-400/10 p-6 flex flex-col gap-5 transform -translate-x-full transition-transform duration-300 ease-in-out z-50">
            
            <div class="flex items-center justify-between pb-4 border-b border-gray-500/20">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-bars-staggered text-blue-500 text-lg"></i>
                    <span class="font-black text-xl tracking-wide">ImgJetX Menu</span>
                </div>
                <button onclick="toggleSidebarMenu()" class="w-9 h-9 rounded-full neu-btn flex items-center justify-center hover:text-red-500 transition-colors">
                    <i class="fa-solid fa-xmark text-sm font-bold"></i>
                </button>
            </div>

            <div class="flex flex-col gap-3 mt-2 overflow-y-auto pr-1">
                <a href="index.html" class="font-extrabold text-base opacity-80 hover:text-blue-500 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-4 transition-all">
                    <i class="fa-solid fa-house text-blue-500 w-5 text-center"></i> Home
                </a>
                <a href="aboutus.html" class="font-extrabold text-base opacity-80 hover:text-blue-500 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-4 transition-all">
                    <i class="fa-solid fa-circle-info text-blue-500 w-5 text-center"></i> About Us
                </a>
                <a href="contactus.html" class="font-extrabold text-base opacity-80 hover:text-blue-500 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-4 transition-all">
                    <i class="fa-solid fa-envelope text-blue-500 w-5 text-center"></i> Contact Us
                </a>
                <div class="h-px w-full bg-gray-500/20 my-1"></div>
                <a href="privacypolicy.html" class="font-extrabold text-base opacity-80 hover:text-blue-500 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-4 transition-all">
                    <i class="fa-solid fa-shield-halved text-blue-500 w-5 text-center"></i> Privacy Policy
                </a>
                <a href="termsandconditions.html" class="font-extrabold text-base opacity-80 hover:text-blue-500 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-4 transition-all">
                    <i class="fa-solid fa-file-contract text-blue-500 w-5 text-center"></i> Terms & Conditions
                </a>
                <a href="disclaimer.html" class="font-extrabold text-base opacity-80 hover:text-blue-500 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-4 transition-all">
                    <i class="fa-solid fa-triangle-exclamation text-blue-500 w-5 text-center"></i> Disclaimer
                </a>
            </div>

            <div class="mt-auto pt-4 border-t border-gray-400/10 text-center">
                <p class="text-[11px] opacity-50 font-bold">&copy; 2026 ImgJetX Suite</p>
            </div>
        </div>
    </nav>
`);

// Dynamic Function to Open/Close Professional Left Sidebar Menu
function toggleSidebarMenu() {
    const sidebar = document.getElementById('leftSidebarMenu');
    const overlay = document.getElementById('sidebarOverlay');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    
    if (sidebar.classList.contains('-translate-x-full')) {
        // Open Sidebar Layout
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
        
        // Transform Hamburger to Cross Icon Style
        if (bar1 && bar2 && bar3) {
            bar1.style.transform = 'translateY(7px) rotate(45deg)';
            bar2.style.opacity = '0';
            bar3.style.transform = 'translateY(-7px) rotate(-45deg)';
        }
    } else {
        // Close Sidebar Layout
        sidebar.classList.add('-translate-x-full');
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        
        // Reset Cross Icon Back to Hamburger Lines
        if (bar1 && bar2 && bar3) {
            bar1.style.transform = 'none';
            bar2.style.opacity = '1';
            bar3.style.transform = 'none';
        }
    }
}