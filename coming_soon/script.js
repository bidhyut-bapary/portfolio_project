/**
 * ==========================================================================
 * Project: Bengali "Coming Soon" Webpage
 * Logic: Interactivity, Accessibility, Smart History Back Navigation
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Elements
    const backBtn = document.getElementById('backBtn');
    const currentYearSpan = document.getElementById('currentYear');

    // 1. Dynamic Footer Year
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    /**
     * Smart Back Navigation Handler
     * Triggers smooth page transition, then navigates to target URL or previous history page
     */
    function handleBackNavigation(targetUrl) {
        // Trigger smooth page exit transition
        document.body.classList.add('page-exit');

        setTimeout(() => {
            if (targetUrl && targetUrl !== '#' && targetUrl !== 'javascript:void(0)') {
                window.location.href = targetUrl;
            } else {
                const hasHistory = window.history.length > 1 && document.referrer !== '';
                if (hasHistory) {
                    try {
                        window.history.back();
                    } catch (e) {
                        window.location.href = '/';
                    }
                } else {
                    window.location.href = '/';
                }
            }
        }, 300); // 300ms match CSS exit transition duration
    }

    // 2. Click Listener for Back Button Link
    if (backBtn) {
        backBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = backBtn.getAttribute('href') || '/';
            handleBackNavigation(targetUrl);
        });
    }

    // 3. Accessibility: Keyboard Shortcuts (Escape or Alt+Left Arrow)
    document.addEventListener('keydown', (event) => {
        // Trigger back action on Escape key or Alt + Left Arrow
        if (event.key === 'Escape' || (event.altKey && event.key === 'ArrowLeft')) {
            event.preventDefault();
            handleBackNavigation();
        }
    });

    // 4. Console Welcome Message
    console.log(
        '%c🚧 প্রজেক্ট নিয়ে কাজ চলছে | শীঘ্রই আসছে',
        'color: #38BDF8; font-size: 16px; font-weight: bold; background: #0F172A; padding: 6px 12px; border-radius: 6px;'
    );
});
