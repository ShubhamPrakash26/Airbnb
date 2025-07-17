(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
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
  })()

// Image Upload Preview
document.querySelectorAll('input[type="file"]').forEach(input => {
  input.addEventListener('change', function(e) {
    const file = this.files[0];
    const preview = this.closest('.form-group').querySelector('.image-preview');
    
    if(file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.innerHTML = `<img src="${e.target.result}" 
                                class="img-thumbnail mt-2" 
                                style="max-height: 200px">`;
      }
      reader.readAsDataURL(file);
    }
  });
});

// Price Calculator
document.querySelectorAll('.price-input').forEach(input => {
  input.addEventListener('input', updatePriceDisplay);
});

function updatePriceDisplay() {
  const basePrice = parseFloat(document.getElementById('price').value);
  const tax = document.getElementById('taxToggle').checked ? 1.1 : 1;
  document.getElementById('priceDisplay').innerText = 
    `₹${(basePrice * tax).toLocaleString()}/night`;
}
