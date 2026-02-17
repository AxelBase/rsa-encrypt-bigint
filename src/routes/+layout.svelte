<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly, fade } from 'svelte/transition';

  let isDropdownOpen = false;
  let isDarkMode = false;

  const currentYear = new Date().getFullYear();

  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="fixed-top p-3">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm" style="max-width: 1100px;">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 logo-group text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-logo" style="height: 32px;" />
        <span class="fw-bold fs-5 brand-text">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-3 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-md-inline fw-semibold small">Buy me a Coffee</span>
          <span class="d-md-none fw-semibold small">Support</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown glass mt-2" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Buy via Crypto (BTC)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-4">
      <ul class="nav d-none d-lg-flex align-items-center gap-2 m-0 list-unstyled">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#how-to-use">How to Use</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        <li><a class="btn-bubbly btn-sm ms-2" href="{base}/blog">Blog</a></li>
      </ul>

      <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle Theme">
        <i class="bi {isDarkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}"></i>
      </button>
    </div>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="container py-4 mt-5 text-center">
  <div class="glass-card p-3 d-flex flex-column flex-md-row justify-content-between align-items-center px-5">
    <span class="text-muted small">© {currentYear} AxelBase RSA Encrypt with BigInt</span>
    <div class="d-flex gap-4">
      <a href="{base}/privacy" class="nav-link-custom small">Privacy</a>
      <a href="{base}/terms" class="nav-link-custom small">Terms</a>
    </div>
  </div>
</footer>

<style>
  .brand-text { color: var(--color-text-main); }
  .navbar-logo { transition: var(--transition-smooth); }
  .logo-group:hover .navbar-logo { transform: rotate(15deg) scale(1.1); }

  .nav-link-custom {
    color: var(--color-text-muted);
    font-weight: 600;
    text-decoration: none;
    padding: 5px 10px;
    transition: var(--transition-smooth);
  }
  .nav-link-custom:hover { color: var(--brand-orange); }

  /* Buy me a coffee button styles */
  .bmac-button {
    background: var(--brand-orange);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .bmac-button:hover {
    background: var(--brand-orange-hover);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 5px 15px rgba(216, 75, 32, 0.3) !important;
  }

  /* Dropdown integration styles */
  .bmac-dropdown {
    position: absolute;
    top: 55px;
    left: 0;
    width: 240px;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1050;
    border: 1px solid var(--glass-border);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--brand-orange-light);
    color: var(--brand-orange);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--brand-orange);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--brand-orange);
    border-top: 1px solid var(--glass-border);
    justify-content: center !important;
    font-size: 0.85rem;
  }

  .theme-toggle {
    background: var(--glass-border);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: var(--brand-orange);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-smooth);
  }
  .theme-toggle:hover { transform: rotate(15deg) scale(1.1); background: var(--brand-orange-light); }
</style>