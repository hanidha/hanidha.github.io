document.querySelectorAll('.page-num').forEach(el => {
    el.addEventListener('click', (e) => {
        // Prevent the default anchor behavior
        e.preventDefault();

        // Ensure we are clicking the <a> tag
        const pageLink = e.currentTarget;

        // Get the id_pg_num from the clicked element (it should be on the <a> tag)
        const pageNum = pageLink.getAttribute('id_pg_num');

        // Check if pageNum exists and construct the target URL
        if (pageNum) {
            const targetUrl = `q${pageNum}.html`;  // e.g., "q1", "q2", etc.
            window.location.href = targetUrl;  // Redirect to the constructed URL
        } else {
            console.error("id_pg_num attribute is missing!");
        }
    });
});
