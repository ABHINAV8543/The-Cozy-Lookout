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
