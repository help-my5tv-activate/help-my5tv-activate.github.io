document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Fetch the header HTML
      const headerResponse = await fetch('/header.html');
      if (!headerResponse.ok) {
        throw new Error(`Header fetch failed: ${headerResponse.status}`);
      }
      const headerHTML = await headerResponse.text();
  
      // Insert header HTML into placeholder
      document.getElementById('header-placeholder').innerHTML = headerHTML;
  
      // Fetch the sidebar HTML
      const sidebarResponse = await fetch('/sidebar.html');
      if (!sidebarResponse.ok) {
        throw new Error(`Sidebar fetch failed: ${sidebarResponse.status}`);
      }
      const sidebarHTML = await sidebarResponse.text();
  
      // Insert sidebar HTML into placeholder
      document.getElementById('sidebar-placeholder').innerHTML = sidebarHTML;
  
      // Fetch the footer HTML
      const footerResponse = await fetch('/footer.html');
      if (!footerResponse.ok) {
        throw new Error(`Footer fetch failed: ${footerResponse.status}`);
      }
      const footerHTML = await footerResponse.text();
  
      // Insert footer HTML into placeholder
      document.getElementById('footer-placeholder').innerHTML = footerHTML;
  
    } catch (error) {
      console.error('Error fetching header, sidebar, or footer:', error);
    }
  });
  