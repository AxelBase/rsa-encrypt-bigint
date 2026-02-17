<script>
  import { generateKeys } from '$lib/rsa-bigint';
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';

  let bitLength = 1024;
  let keys = { n: '', e: '', d: '' };
  let error = '';
  let loading = false;

  async function handleGenerate() {
    loading = true;
    error = '';
    try {
      if (bitLength < 512 || bitLength > 2048) throw new Error('Bit length must be between 512 and 2048');
      keys = generateKeys(BigInt(bitLength));
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }
</script>

<div class="container py-5">
  <div class="text-center mb-5" in:fade={{ duration: 800 }}>
    <h1 class="display-4 fw-bold" style="color: var(--brand-orange)">RSA Key Generation</h1>
    <p class="text-muted">Generate secure cryptographic parameters using JavaScript BigInt.</p>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="glass-card p-4 mb-4 border-0" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        <form on:submit|preventDefault={handleGenerate}>
          <div class="mb-4 text-start">
            <label for="bitLength" class="form-label fw-bold small text-uppercase ms-2">Security Level (Bits)</label>
            <div class="input-group">
              <input 
                type="number" 
                class="form-control bubbly-input" 
                id="bitLength" 
                bind:value={bitLength} 
                min="512" 
                max="2048" 
                required
              >
              <button type="submit" class="btn btn-bubbly px-4" disabled={loading}>
                {#if loading}
                  <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                  Calculating...
                {:else}
                  Generate Keys
                {/if}
              </button>
            </div>
            <div id="bitLengthHelp" class="form-text mt-2 ms-2">Standard is 1024. 2048 is more secure but slower.</div>
          </div>
        </form>

        {#if error}
          <div class="alert alert-danger rounded-4 border-0" in:fly={{ x: 20 }}>
            <strong>Error:</strong> {error}
          </div>
        {/if}
      </div>

      {#if keys.n}
        <div class="glass-card p-4 p-md-5 mb-4 border-0" in:fly={{ y: 30, duration: 600 }}>
          <div class="d-flex align-items-center gap-2 mb-4">
            <i class="bi bi-shield-lock-fill fs-4" style="color: var(--brand-orange)"></i>
            <h4 class="fw-bold m-0">Generated Keypair</h4>
          </div>
          
          <div class="mb-4 text-start">
            <label for="n" class="form-label fw-bold small text-uppercase text-muted ms-2">Modulus (n)</label>
            <textarea class="form-control key-area" id="n" rows="3" readonly>{keys.n}</textarea>
          </div>

          <div class="row g-3">
            <div class="col-md-4 text-start">
              <label for="e" class="form-label fw-bold small text-uppercase text-muted ms-2">Public Exp (e)</label>
              <input type="text" class="form-control key-area" id="e" value={keys.e} readonly>
            </div>
            <div class="col-md-8 text-start">
              <label for="d" class="form-label fw-bold small text-uppercase text-muted ms-2">Private Exp (d)</label>
              <textarea class="form-control key-area private-key-glow" id="d" rows="1" readonly>{keys.d}</textarea>
            </div>
          </div>
          
          <div class="alert alert-warning border-0 mt-4 rounded-4" style="background: rgba(255, 193, 7, 0.1); color: #856404;">
            <small><i class="bi bi-exclamation-triangle-fill me-2"></i><strong>Security Note:</strong> Never share your Private Exponent (d) with anyone.</small>
          </div>
        </div>
      {/if}

      <div class="mt-5 d-flex gap-3 justify-content-center" in:fade={{ delay: 1000 }}>
        <a href="{base}/" class="btn btn-outline-secondary rounded-pill px-4 hover-float">Back to Home</a>
        <a href="{base}/encrypt" class="btn btn-outline-secondary rounded-pill px-4 hover-float">Go to Encryption</a>
      </div>
    </div>
  </div>
</div>

<style>
  .bubbly-input {
    border-radius: 50px 0 0 50px !important;
    border: 1px solid var(--glass-border) !important;
  }
  
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

  .private-key-glow {
    border-left: 4px solid var(--brand-orange) !important;
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