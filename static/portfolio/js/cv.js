function downloadCV() {
    const link = document.createElement('a');
    link.href = 'http://e.pc.cd/NBnotalK';
    link.download = 'CV-Mauro-Andres-Vicens.pdf';
    link.target = 'Blanck_';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
