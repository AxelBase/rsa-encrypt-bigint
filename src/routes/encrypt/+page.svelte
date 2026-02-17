<script>
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'What is RSA Encryption? The Basics',
      description: 'An introduction to RSA as an asymmetric algorithm, explaining why it uses separate public and private keys.'
    },
    {
      href: '/blog/posts/post2',
      title: 'RSA Key Generation & Large Primes',
      description: 'A step-by-step look at generating RSA keys: selecting large primes p and q and computing the modulus n.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Understanding Modular Exponentiation',
      description: 'Explore the core mathematical operation behind RSA encryption — raising a message to the power e modulo n.'
    },
    {
      href: '/blog/posts/post4',
      title: 'BigInt in JS: Handling Large Numbers',
      description: 'Discover how JavaScript’s native BigInt type enables browser-based RSA without external libraries.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Prime Testing: Miller-Rabin Basics',
      description: 'Learn about probabilistic primality testing used to find suitable large primes for secure RSA pairs.'
    },
    {
      href: '/blog/posts/post6',
      title: 'RSA: From Text to Ciphertext',
      description: 'See how plaintext is converted to a BigInt, encrypted, and output as hexadecimal ciphertext.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Textbook RSA vs Real World',
      description: 'Understand why this educational demo is for learning math, and not suitable for production security.'
    }
  ];
</script>

<svelte:head>
  <title>AxelBase Blog | RSA Educational Insights</title>
</svelte:head>

<div class="container py-5">
  <header class="text-center mb-5" in:fade={{ duration: 800 }}>
    <h1 class="display-4 fw-bold mb-3">
      <i class="bi bi-journal-richtext me-2" style="color: var(--brand-orange)"></i>
      RSA <span style="color: var(--brand-orange)">Insights</span>
    </h1>
    <p class="text-muted mx-auto" style="max-width: 750px;">
      Educational articles exploring the RSA algorithm, its mathematical foundations, and how it operates 
      in a modern browser using native BigInt.
    </p>
    <div class="mt-4">
      <a href="{base}/" class="btn btn-outline-secondary rounded-pill px-4">
        Back to Demo
      </a>
    </div>
  </header>

  <div class="posts-grid mt-5">
    {#each posts as post, i}
      <div in:fly={{ y: 30, duration: 600, delay: i * 100 }}>
        <a href="{base}{post.href}" class="glass-card post-card h-100 p-4 d-flex flex-column text-decoration-none">
          <div class="badge-category mb-3">Cryptology</div>
          <h2 class="post-title h5 fw-bold mb-3">{post.title}</h2>
          <p class="post-description small text-muted flex-grow-1">
            {post.description}
          </p>
          <div class="read-more mt-3 fw-bold">
            Read Article <i class="bi bi-arrow-right ms-1 transition-smooth"></i>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    transition: var(--transition-smooth);
    cursor: pointer;
  }

  .post-card:hover {
    border-color: var(--brand-orange) !important;
  }

  .post-title {
    color: var(--color-text-main);
    transition: color 0.3s ease;
  }

  .post-card:hover .post-title {
    color: var(--brand-orange);
  }

  .badge-category {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--brand-orange);
    background: var(--brand-orange-light);
    display: inline-block;
    padding: 4px 12px;
    border-radius: 50px;
  }

  .read-more {
    font-size: 0.9rem;
    color: var(--brand-orange);
  }

  .post-card:hover .bi-arrow-right {
    transform: translateX(5px);
  }

  .transition-smooth {
    transition: var(--transition-smooth);
    display: inline-block;
  }
</style>