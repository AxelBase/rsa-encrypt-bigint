<script>
  import { encrypt } from '$lib/rsa-bigint';
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';

  let n = '';
  let e = '';
  let plaintext = '';
  let ciphertext = '';
  let error = '';
  let loading = false;

  async function handleEncrypt() {
    loading = true;
    error = '';
    ciphertext = '';
    try {
      if (!n || !e || !plaintext) throw new Error('All fields required');
      // Simple validation for hex inputs
      BigInt('0x' + n); 
      BigInt('0x' + e); 
      ciphertext = encrypt(plaintext, n, e);
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }
</script>

<div class="container py-5">
  <div class="text-center mb-5" in:fade={{ duration: 800 }}>
    <h1 class="display-4 fw-bold" style="color: var(--brand-orange)">RSA Encryption</h1>
    <p class="text-muted">Secure your message using a public key. 
      <span class="d-block small text-warning-emphasis mt-1">
        <i class="bi bi-info-circle"></i> Demo only – no padding applied.
      </span>
    </p>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="glass-card p-4 mb-4 border-0" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        <form on:submit|preventDefault={handleEncrypt}>
          <div class="mb-4 text-start">
            <label for="n" class="form-label fw-bold small text-uppercase ms-2">Modulus (n, hex)</label>
            <textarea 
              class="form-control key-area" 
              id="n" 
              rows="3" 
              bind:value={n} 
              placeholder="Paste the modulus (n) here..."
              required
            ></textarea>
          </div>

          <div class="mb-4 text-start">
            <label for="e" class="form-label fw-bold small text-uppercase ms-2">Public Exponent (e, hex)</label>
            <input 
              type="text" 
              class="form-control" 
              id="e" 
              bind:value={e} 
              placeholder="e.g. 10001"
              required
            >
          </div>

          <div class="mb-4 text-start">
            <label for="plaintext" class="form-label fw-bold small text-uppercase ms-2">Plaintext Message</label>
            <textarea 
              class="form-control" 
              id="plaintext" 
              rows="3" 
              bind:value={plaintext} 
              placeholder="Enter the secret message..."
              required
            ></textarea>
            <div class="form-text mt-2 ms-2">The message will be converted to UTF-8 before encryption.</div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-bubbly px-5" disabled={loading}>
              {#if loading}
                <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                Encrypting...
              {:else}
                Encrypt Message
              {/if}
            </button>
          </div>
        </form>

        {#if error}
          <div class="alert alert-danger rounded-4 border-0 mt-4" in:fly={{ x: 20 }}>
            <strong>Error:</strong> {error}
          </div>
        {/if}
      </div>

      {#if ciphertext}
        <div class="glass-card p-4 p-md-5 mb-4 border-0" in:fly={{ y: 30, duration: 600 }}>
          <div class="d-flex align-items-center gap-2 mb-4">
            <i class="bi bi-lock-fill fs-4" style="color: var(--brand-orange)"></i>
            <h4 class="fw-bold m-0">Ciphertext (Hex)</h4>
          </div>
          
          <div class="mb-0 text-start">
            <textarea class="form-control key-area" rows="4" readonly>{ciphertext}</textarea>
            <div class="form-text mt-2 ms-2">This is your encrypted message ready for transmission.</div>
          </div>
        </div>
      {/if}

      <div class="mt-5 d-flex gap-3 justify-content-center" in:fade={{ delay: 1000 }}>
        <a href="{base}/" class="btn btn-outline-secondary rounded-pill px-4 hover-float">Back to Home</a>
        <a href="{base}/keys" class="btn btn-outline-secondary rounded-pill px-4 hover-float">Generate New Keys</a>
      </div>
    </div>
  </div>
</div>

<style>
  .key-area {
    background-color: var(--input-bg);
    border: 1px solid var(--glass-border);
    border-radius: 18px;
    font-family: var(--bs-font-monospace);
    font-size: 0.85rem;
    padding: 15px;
    resize: none;
    transition: var(--transition-smooth);
  }

  .hover-float {
    transition: var(--transition-smooth);
  }

  .hover-float:hover {
    transform: translateY(-3px);
    background-color: var(--brand-orange-light);
    border-color: var(--brand-orange);
    color: var(--brand-orange);
  }
</style>