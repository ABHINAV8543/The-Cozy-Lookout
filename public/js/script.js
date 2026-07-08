(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })

    // Image Upload Size Validation
    const imageInput = document.getElementById('image');
    if (imageInput) {
        const feedbackDiv = imageInput.parentElement.querySelector('.invalid-feedback');
        imageInput.addEventListener('change', function() {
            if (this.files[0] && this.files[0].size > 5 * 1024 * 1024) {
                this.setCustomValidity('File too large');
                if (feedbackDiv) feedbackDiv.textContent = 'File size must be less than 5 MB.';
            } else {
                this.setCustomValidity('');
                if (feedbackDiv) feedbackDiv.textContent = 'Please provide a valid image.';
            }
        });
    }
})()

async function confirmDelete(id) {
    if (confirm("Do you really want to delete this listing?")) {
        const form = document.createElement("form");
        form.method = "POST";
        form.action = `/listings/${id}?_method=DELETE`;
        document.body.appendChild(form);
        form.submit();
    } else {
        console.log("Deletion Canceled");
    }
}

// Global Form Submission Handler to Prevent Double Submissions
document.addEventListener('submit', function(e) {
    // If submission was already prevented (e.g. by validation), do nothing
    if (e.defaultPrevented) return;

    const form = e.target;
    
    const buttons = form.querySelectorAll('button:not([type="button"]):not([type="reset"]), input[type="submit"]');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        
        if (btn.tagName.toLowerCase() === 'button') {
            if (!btn.dataset.originalContent) {
                btn.dataset.originalContent = btn.innerHTML;
            }
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
            btn.style.opacity = '0.7';
            btn.style.cursor = 'not-allowed';
        }
    });
});

// Force reload when page is restored from BFCache (Back/Forward navigation)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }

    // Always reset forms and re-enable buttons (covers Chrome which doesn't set persisted)
    document.querySelectorAll('form').forEach(form => form.reset());
    document.querySelectorAll('button:disabled, input:disabled').forEach(btn => {
        btn.disabled = false;
        if (btn.dataset.originalContent) {
            btn.innerHTML = btn.dataset.originalContent;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
        }
    });
});