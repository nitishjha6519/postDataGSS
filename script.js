const scriptURL = 'https://script.google.com/macros/s/AKfycbyZV6JscCCOlwRgqdZi4f6m5uyQMo0BWAjkISIwGDtdQoB_0JxXDjdU4uAGbreXCsPy/exec'
            const form = document.getElementById("google-sheet");
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })