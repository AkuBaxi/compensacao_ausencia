// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Like Animation
function handleLike(button) {
    button.classList.toggle('liked');
    const icon = button.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
    
    // Add bounce animation
    button.style.transform = 'scale(1.2)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

// Global Variables for Infinite Scroll
const feed = document.querySelector('.feed');
let loading = false;

// Infinite Scroll Event Listener
window.addEventListener('scroll', () => {
    if (loading) return;
    
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loading = true;
        loadMorePosts();
    }
});

// Stories Functionality
const stories = document.querySelectorAll('.story');
const storyModal = document.getElementById('storyModal');
const modalClose = document.querySelector('.modal-close');

stories.forEach(story => {
    story.addEventListener('click', () => {
        storyModal.classList.add('active');
        startStoryTimer();
    });
});

modalClose.addEventListener('click', () => {
    storyModal.classList.remove('active');
});

function startStoryTimer() {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = '0%';
    
    const duration = 5000; // 5 seconds
    const start = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration * 100, 100);
        
        progressBar.style.width = `${progress}%`;
        
        if (progress < 100) {
            requestAnimationFrame(animate);
        } else {
            storyModal.classList.remove('active');
        }
    }
    
    requestAnimationFrame(animate);
}

// Mobile Menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Create skeleton loading animation
function createSkeletonPost() {
    return `
        <div class="post skeleton">
            <div class="post-header">
                <div class="skeleton-avatar" style="width: 40px; height: 40px; border-radius: 50%;"></div>
                <div class="skeleton-text" style="width: 150px; height: 20px;"></div>
            </div>
            <div class="skeleton-image" style="width: 100%; height: 400px;"></div>
        </div>
    `;
}

// Add event listeners to new posts
function addPostEventListeners(post) {
    const postContent = post.querySelector('.post-content');
    if (postContent) {
        postContent.addEventListener('touchstart', handleDoubleTap);
        const likeButton = post.querySelector('.action-button');
        if (likeButton) {
            likeButton.addEventListener('click', () => handleLike(likeButton));
        }
    }
}

// Load more posts
function loadMorePosts() {
    const feed = document.querySelector('.feed');
    feed.insertAdjacentHTML('beforeend', createSkeletonPost());
    
    setTimeout(() => {
        const skeleton = document.querySelector('.post.skeleton');
        if (skeleton) {
            const newPost = document.querySelector('.post:not(.skeleton)').cloneNode(true);
            addPostEventListeners(newPost);
            newPost.classList.add('fade-in');
            skeleton.parentNode.replaceChild(newPost, skeleton);
            observer.observe(newPost);
        }
        loading = false;
    }, 1500);
}

// Double Tap for Like
let lastTap = 0;

function handleDoubleTap(e) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 500 && tapLength > 0) {
        const likeButton = this.parentNode.querySelector('.action-button');
        handleLike(likeButton);
        showLikeAnimation(this);
    }
    lastTap = currentTime;
}

document.querySelectorAll('.post-content').forEach(post => {
    post.addEventListener('touchstart', handleDoubleTap);
});

function showLikeAnimation(element) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        font-size: 5rem;
        animation: likeAnimation 1s forwards;
        pointer-events: none;
    `;
    
    element.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
}

// Add keyframe animation to head
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes likeAnimation {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
    </style>
`);

// Intersection Observer for smooth loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

// Initialize observer on existing posts
document.querySelectorAll('.post').forEach(post => {
    observer.observe(post);
});

// Initialize with some posts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with 5 posts
    for (let i = 0; i < 5; i++) {
        loadMorePosts();
    }
});