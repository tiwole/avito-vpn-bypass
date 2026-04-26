# avito-vpn-bypass

A Tampermonkey userscript that removes the "VPN detected" banner on avito.ru and restores page scroll.

## Problem

Avito.ru shows a blocking modal when it detects a VPN connection, preventing access to the site.

## Solution

This script:
- Removes the VPN warning dialog
- Restores body scroll position (Avito locks the page with `position: fixed`)

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser
2. Click **[Install Script](https://raw.githubusercontent.com/tiwole/avito-vpn-bypass/main/avito-vpn-bypass.user.js)**
3. Confirm installation in Tampermonkey

## Usage

Just browse avito.ru with your VPN on — the banner will be removed automatically.

## Notes

This script only hides the banner on the client side. Avito detects VPN server-side via IP reputation databases.
Some API features may still be restricted depending on your VPN provider's IP range.
