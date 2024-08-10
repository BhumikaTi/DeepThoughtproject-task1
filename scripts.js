document.addEventListener("DOMContentLoaded", function() {
    // Asset data rendering
    const assetData = [ /* JSON data here */ ];
    const container = document.querySelector('.asset-container');

    if (container) {
        assetData.forEach(asset => {
            const assetElement = document.createElement('div');
            assetElement.classList.add('asset');
            
            assetElement.innerHTML = `
                <h3>${asset.title}</h3>
                <p>${asset.description}</p>
                <div class="video-container">
                    <iframe width="100%" height="315" src="${asset.videoUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;

            container.appendChild(assetElement);
        });
    }

    // Expandable section functionality
    document.querySelectorAll('.expand-collapse').forEach(button => {
        button.addEventListener('click', function() {
            const content = this.parentElement.nextElementSibling;
            if (content) {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                this.textContent = content.style.display === 'none' ? 'v' : '^';
            }
        });
    });
    
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function() {
            const descriptionContent = this.previousElementSibling;
            if (descriptionContent) {
                descriptionContent.style.display = descriptionContent.style.display === 'none' ? 'block' : 'none';
                this.textContent = descriptionContent.style.display === 'none' ? 'See more' : 'See less';
            }
        });
    });

    // Sidebar toggle functionality
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggleButton = document.querySelector('.sidebar-toggle');

    if (sidebar && sidebarToggleButton) {
        sidebarToggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('visible');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var quill = new Quill('#editor-container', {
        theme: 'snow',
        placeholder: 'Enter your content here...',
        modules: {
            toolbar: [
                [{ 'header': [1, 2, 3, false] }],
                ['bold', 'italic', 'underline'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                ['link', 'image'],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean']
            ]
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle-paragraph');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const paragraphContent = this.nextElementSibling;
            paragraphContent.style.display = paragraphContent.style.display === 'none' ? 'block' : 'none';
        });
    });
});


