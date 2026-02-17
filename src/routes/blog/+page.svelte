<!-- src/routes/blog/+page.svelte -->
<script>
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'What is RSA Encryption? The Basics of Public-Key Cryptography',
      description: 'An introduction to RSA as an asymmetric algorithm, explaining why it uses separate public and private keys for secure message transmission without shared secrets.'
    },
    {
      href: '/blog/posts/post2',
      title: 'How RSA Key Generation Works with Large Primes',
      description: 'A step-by-step look at generating RSA keys: selecting large primes p and q, computing the modulus n, Euler’s totient φ(n), choosing the public exponent e, and deriving the private exponent d.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Understanding Modular Exponentiation in RSA Encryption',
      description: 'Explore the core mathematical operation behind RSA encryption — raising a message to the power e modulo n — and why efficient algorithms like square-and-multiply are essential for large numbers.'
    },
    {
      href: '/blog/posts/post4',
      title: 'BigInt in JavaScript: Handling Large Numbers for RSA',
      description: 'Discover how JavaScript’s native BigInt type enables browser-based RSA without external libraries, allowing precise arithmetic on 1024-bit (and larger) integers directly in the client.'
    },
    {
      href: '/blog/posts/post5',
      title: 'The Role of Prime Testing in RSA: Miller-Rabin Basics',
      description: 'Learn about probabilistic primality testing with the Miller-Rabin algorithm — a fast, reliable method used to find suitable large primes for secure RSA key pairs in educational demos.'
    },
    {
      href: '/blog/posts/post6',
      title: 'RSA Encryption in Practice: From Text to Ciphertext',
      description: 'See how plaintext is converted to a BigInt (via UTF-8 encoding), encrypted using the public key, and output as hexadecimal ciphertext in a pure client-side environment.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Limitations and Educational Value of Textbook RSA',
      description: 'Understand why this demo uses raw (textbook) RSA without padding or advanced schemes — perfect for learning the math, but not suitable for real-world security due to vulnerabilities like chosen-ciphertext attacks.'
    }
  ];
</script>

<svelte:head>
  <title>RSA BigInt Demo Blog | Educational Insights</title>
  <meta name="description" content="Articles explaining the mathematics, mechanics, and browser-based usage of RSA encryption using JavaScript BigInt in this client-side utility." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: RSA BigInt Insights</h1>
    <p class="subtitle">
      Educational articles exploring the RSA algorithm, its mathematical foundations, and how it operates in a modern browser using native BigInt.
      All content focuses on the cryptographic principles and client-side behavior demonstrated by this utility.
      Visit the <a href="{base}/" target="_blank" rel="noopener noreferrer">main demo</a> to experiment with key generation and encryption.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3.5rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 2.5rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: var(--color-text-main);
    line-height: 1.15;
  }

  .subtitle {
    font-size: 1.15rem;
    color: var(--color-text-muted);
    max-width: 720px;
    margin: 0 auto;
    line-height: 1.75;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.8rem;
  }

  .post-card {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: var(--glass-shadow);
    transition: var(--transition-smooth);
  }

  .post-card:hover {
    transform: translateY(-10px) scale(1.015);
    box-shadow: 0 20px 50px rgba(216, 75, 32, 0.18);
  }

  .post-card .card-body {
    padding: 1.8rem 1.6rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--brand-orange);
    margin-bottom: 0.9rem;
    line-height: 1.3;
  }

  .post-description {
    color: var(--color-text-muted);
    flex-grow: 1;
    margin-bottom: 1.2rem;
    font-size: 1.02rem;
    line-height: 1.6;
  }

  .read-more {
    color: var(--brand-orange);
    font-weight: 600;
    font-size: 0.98rem;
    align-self: flex-start;
    transition: var(--transition-smooth);
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
    color: var(--brand-orange-hover);
  }

  @media (max-width: 768px) {
    .blog-header h1 {
      font-size: 2.3rem;
    }

    .posts-grid {
      grid-template-columns: 1fr;
      gap: 1.6rem;
    }

    .post-title {
      font-size: 1.25rem;
    }
  }
</style>