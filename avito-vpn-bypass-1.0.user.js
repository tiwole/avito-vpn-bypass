// ==UserScript==
// @name         avito-vpn-bypass
// @description  Script that removes annoying VPN banner and unblocks page scrolling.
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       tiwole
// @match        https://www.avito.ru/*
// @icon         https://jurmarketing.ru/wp-content/uploads/2024/11/avito-logo-1-e1732028563821.png
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function removeVpnBanner() {
        const retryBtn = document.querySelector('[data-marker="vpn-check-retry-button"]');
        if (retryBtn) {
            const dialog = retryBtn.closest('[role="dialog"]');
            if (dialog) dialog.remove();

            const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));

            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
            document.body.style.height = '';

            window.scrollTo(0, scrollY);
        }
    }

    const observer = new MutationObserver(removeVpnBanner);
    observer.observe(document.body, { childList: true, subtree: true });
    removeVpnBanner();
})();